const LiveClass = require("../models/LiveClass");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("New user connected:", socket.id);

    socket.on("join_room", async (roomId) => {
      socket.join(roomId);
      console.log(`User ${socket.id} joined room: ${roomId}`);
      
      // Optionally notify room that a user joined
      // socket.to(roomId).emit("receive_message", { user: "System", message: "A student joined.", time: "...", isSystem: true });
    });

    socket.on("send_message", async (data) => {
      try {
        const { roomId, user, message, time, isInstructor } = data;

        // Broadcast to everyone in the room
        io.to(roomId).emit("receive_message", data);

        // PERSISTENCE: Save message to Database
        await LiveClass.findOneAndUpdate(
          { roomId },
          { 
            $push: { 
              messages: { user, message, time, isInstructor } 
            } 
          },
          { upsert: true, new: true } // Create room if it doesn't exist
        );

        console.log(`Saved message in ${roomId} from ${user}`);
      } catch (error) {
        console.error("Error saving message:", error.message);
      }
    });

    socket.on("typing", (data) => {
      // Broadcast typing status to everyone else in the room
      socket.to(data.roomId).emit("user_typing", data);
    });

    socket.on("stop_typing", (data) => {
      // Stop typing status broadcast
      socket.to(data.roomId).emit("user_stop_typing", data);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};
