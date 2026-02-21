import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState(() => {
        const savedWishlist = localStorage.getItem("wishlist");
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    const addToWishlist = (course) => {
        setWishlistItems((prev) => {
            if (prev.find((item) => item.id === course.id)) return prev;
            return [...prev, course];
        });
    };

    const removeFromWishlist = (id) => {
        setWishlistItems((prev) => prev.filter((item) => item.id !== id));
    };

    const isInWishlist = (id) => {
        return wishlistItems.some((item) => item.id === id);
    };

    const clearWishlist = () => setWishlistItems([]);

    return (
        <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, isInWishlist, clearWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};
