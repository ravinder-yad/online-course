import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaTrash, FaShoppingCart, FaArrowRight } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const CartDrawer = ({ isOpen, onClose, onCheckout }) => {
    const { cartItems, removeFromCart, totalPrice } = useCart();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-gray-950/40 backdrop-blur-sm z-[100]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-white">
                            <div>
                                <h3 className="text-2xl font-black text-gray-950 tracking-tighter">Your Bag</h3>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">
                                    {cartItems.length} Items Selected
                                </p>
                            </div>
                            <button onClick={onClose} className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-all">
                                <FaTimes size={18} />
                            </button>
                        </div>

                        {/* Items List */}
                        <div className="flex-1 overflow-y-auto p-8 space-y-6">
                            {cartItems.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center">
                                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-200 mb-6">
                                        <FaShoppingCart size={32} />
                                    </div>
                                    <h4 className="text-xl font-black text-gray-950 tracking-tight mb-2">Cart is empty</h4>
                                    <p className="text-sm font-bold text-gray-400 max-w-[200px]">Looks like you haven't added any courses yet.</p>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-6 group">
                                        <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-gray-100">
                                            <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-center">
                                            <h4 className="text-sm font-black text-gray-950 leading-tight mb-2 group-hover:text-indigo-600 transition-colors">
                                                {item.title}
                                            </h4>
                                            <div className="flex items-center justify-between mt-auto">
                                                <span className="text-lg font-black text-indigo-600">${item.price}</span>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="p-2 text-gray-300 hover:text-rose-500 transition-colors"
                                                >
                                                    <FaTrash size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div className="p-8 bg-gray-50/50 border-t border-gray-100">
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-sm font-black text-gray-400 uppercase tracking-widest">Total Amount</span>
                                    <span className="text-3xl font-black text-gray-950 tracking-tighter">${totalPrice}</span>
                                </div>
                                <button
                                    onClick={() => {
                                        onClose();
                                        onCheckout();
                                    }}
                                    className="w-full py-6 bg-gray-950 text-white rounded-[2rem] font-black text-[11px] uppercase tracking-[0.4em] shadow-2xl shadow-gray-200 flex items-center justify-center gap-4 group"
                                >
                                    Secure Checkout
                                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </button>
                                <p className="text-[9px] font-black text-gray-300 text-center uppercase tracking-widest mt-6">
                                    Taxes and discounts calculated at checkout
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
