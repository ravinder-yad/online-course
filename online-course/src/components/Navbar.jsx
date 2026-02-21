import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
    FaSearch, FaBars, FaTimes, FaChevronDown, FaCode, FaDatabase, FaPaintBrush, FaBullhorn, FaShoppingCart,
    FaHeart, FaMoon, FaSun
} from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useToast } from "../context/ToastContext";
import { useTheme } from "../context/ThemeContext";
import CartDrawer from "./CartDrawer";
import PaymentModal from "./PaymentModal";

const Navbar = ({ initialScrolled = false }) => {
    const [isScrolled, setIsScrolled] = useState(initialScrolled);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isBrowseOpen, setIsBrowseOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const { cartItems, totalPrice } = useCart();
    const browseRef = useRef(null);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            window.location.href = `/courses?search=${encodeURIComponent(searchQuery)}`;
        }
    };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20 || initialScrolled);
        window.addEventListener("scroll", handleScroll);
        const handleClickOutside = (e) => (browseRef.current && !browseRef.current.contains(e.target)) && setIsBrowseOpen(false);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [initialScrolled]);

    const navLinks = [
        { n: "Home", h: "/" },
        { n: "Courses", h: "/courses" },
        { n: "Mentors", h: "/mentors" },
        { n: "Membership", h: "/membership" }
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-2" : "bg-white/95 backdrop-blur-md border-b border-gray-100 py-4"}`}>
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center gap-10">

                {/* LEFT: LOGO */}
                <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-xl shadow-indigo-100 group-hover:scale-110 transition-transform">
                        <HiOutlineAcademicCap size={26} />
                    </div>
                    <span className="text-2xl font-black text-gray-950 tracking-tighter italic">
                        Edu<span className="text-indigo-600">Flow</span>
                    </span>
                </Link>

                {/* BROWSE BUTTON */}
                <div className="hidden xl:block relative" ref={browseRef}>
                    <button
                        onClick={() => setIsBrowseOpen(!isBrowseOpen)}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-100 hover:bg-gray-50 transition-all text-sm font-bold text-gray-700"
                    >
                        Browse <FaChevronDown size={10} className={`mt-0.5 transition-transform ${isBrowseOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                        {isBrowseOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }}
                                className="absolute top-full left-0 w-80 bg-white shadow-2xl rounded-[2rem] p-6 mt-4 border border-gray-50 overflow-hidden"
                            >
                                <h5 className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-4">Top Domains</h5>
                                <div className="grid gap-2">
                                    {[
                                        { t: "Web Development", i: <FaCode />, c: "text-blue-500 bg-blue-50", id: "web-development" },
                                        { t: "Data Intelligence", i: <FaDatabase />, c: "text-green-500 bg-green-50", id: "data-intelligence" },
                                        { t: "Human Design", i: <FaPaintBrush />, c: "text-rose-500 bg-rose-50", id: "human-design" },
                                        { t: "Growth Marketing", i: <FaBullhorn />, c: "text-purple-500 bg-purple-50", id: "growth-marketing" }
                                    ].map((cat, idx) => (
                                        <Link key={idx} to={`/category/${cat.id}`} onClick={() => setIsBrowseOpen(false)} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all group/item">
                                            <div className={`w-10 h-10 ${cat.c} rounded-xl flex items-center justify-center text-lg`}>{cat.i}</div>
                                            <span className="text-sm font-bold text-gray-700 group-hover/item:text-indigo-600 transition-colors">{cat.t}</span>
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* SEARCH BAR */}
                <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl relative group">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="What do you want to master today?"
                        className="w-full bg-gray-50/80 border border-gray-100/50 rounded-2xl py-3 pl-12 pr-4 outline-none text-sm font-semibold text-gray-800 placeholder:text-gray-400 focus:bg-white focus:border-indigo-600/30 focus:shadow-xl focus:shadow-indigo-100/20 transition-all"
                    />
                    <button type="submit" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-600 transition-colors">
                        <FaSearch />
                    </button>
                </form>

                {/* RIGHT: LINKS & AUTH */}
                <div className="flex items-center gap-3 lg:gap-8 ml-auto">
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((l) => (
                            <Link key={l.n} to={l.h} className="text-sm font-bold text-gray-600 hover:text-indigo-600 transition-colors uppercase tracking-widest">{l.n}</Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 lg:gap-6 border-l border-gray-100 pl-4 lg:pl-8">
                        <Link to="/login" className="text-sm font-bold text-gray-700 hover:text-indigo-600 transition-colors">Login</Link>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/signup"
                                className="bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 text-white px-8 py-3 rounded-xl text-sm font-black uppercase tracking-widest shadow-xl shadow-rose-100/50 italic"
                            >
                                Join Free
                            </Link>
                        </motion.div>

                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-all border border-gray-100"
                        >
                            <FaShoppingCart size={18} />
                            {cartItems.length > 0 && (
                                <span className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-600 text-white text-[10px] font-black rounded-xl flex items-center justify-center shadow-lg border-2 border-white animate-bounce">
                                    {cartItems.length}
                                </span>
                            )}
                        </button>
                    </div>

                    <button className="xl:hidden p-2.5 text-gray-600 bg-gray-50 rounded-xl" onClick={() => setIsMobileMenuOpen(true)}>
                        <FaBars size={22} />
                    </button>
                </div>
            </div>

            {/* MOBILE NAVIGATION */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        className="fixed inset-0 bg-white z-[60] flex flex-col p-10 font-bold"
                    >
                        <div className="flex justify-between items-center mb-16">
                            <span className="text-3xl font-black text-indigo-600 italic tracking-tighter">EDUFLOW</span>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="w-14 h-14 bg-gray-100 rounded-[1.5rem] flex items-center justify-center text-gray-400"><FaTimes size={28} /></button>
                        </div>
                        <div className="flex flex-col gap-10">
                            {navLinks.map((l, i) => (
                                <Link key={i} to={l.h} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-black text-gray-900 hover:text-indigo-600 transition-colors tracking-tighter">{l.n}</Link>
                            ))}
                            <div className="mt-12 flex flex-col gap-5">
                                <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)} className="bg-gradient-to-r from-orange-500 to-rose-500 text-white text-center py-7 rounded-[2rem] text-xl font-black shadow-2xl">Create Free Account</Link>
                                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-center py-5 text-xl text-gray-400">Login to Dashboard</Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <CartDrawer
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                onCheckout={() => setIsPaymentOpen(true)}
            />

            <PaymentModal
                isOpen={isPaymentOpen}
                onClose={() => setIsPaymentOpen(false)}
                courseTitle={cartItems.length === 1 ? cartItems[0].title : `${cartItems.length} Courses Bundle`}
                price={totalPrice}
            />
        </nav>
    );
};

export default Navbar;
