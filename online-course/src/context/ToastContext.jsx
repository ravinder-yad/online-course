import { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck, FaTimes, FaInfo, FaExclamation } from "react-icons/fa";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback((message, type = "info", duration = 3000) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, duration);
    }, []);

    const success = useCallback((message) => addToast(message, "success"), [addToast]);
    const error = useCallback((message) => addToast(message, "error"), [addToast]);
    const info = useCallback((message) => addToast(message, "info"), [addToast]);
    const warning = useCallback((message) => addToast(message, "warning"), [addToast]);

    const removeToast = (id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    const getIcon = (type) => {
        switch (type) {
            case "success": return <FaCheck />;
            case "error": return <FaTimes />;
            case "warning": return <FaExclamation />;
            default: return <FaInfo />;
        }
    };

    const getStyles = (type) => {
        switch (type) {
            case "success": return "bg-green-500";
            case "error": return "bg-red-500";
            case "warning": return "bg-orange-500";
            default: return "bg-indigo-500";
        }
    };

    return (
        <ToastContext.Provider value={{ addToast, success, error, info, warning }}>
            {children}
            <div className="fixed top-24 right-6 z-[100] flex flex-col gap-3">
                <AnimatePresence>
                    {toasts.map((toast) => (
                        <motion.div
                            key={toast.id}
                            initial={{ opacity: 0, x: 100, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 100, scale: 0.9 }}
                            className={`flex items-center gap-3 px-6 py-4 rounded-2xl text-white shadow-2xl ${getStyles(toast.type)} min-w-[300px] max-w-[400px]`}
                        >
                            <span className="text-lg">{getIcon(toast.type)}</span>
                            <span className="flex-1 font-semibold text-sm">{toast.message}</span>
                            <button
                                onClick={() => removeToast(toast.id)}
                                className="opacity-70 hover:opacity-100 transition-opacity"
                            >
                                <FaTimes size={12} />
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
};
