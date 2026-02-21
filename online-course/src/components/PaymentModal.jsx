import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaQrcode, FaChevronRight, FaCheckCircle, FaLock } from "react-icons/fa";

const PaymentModal = ({ isOpen, onClose, courseTitle, price }) => {
    const [step, setStep] = useState(1); // 1: List, 2: QR, 3: Success
    const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes
    const [selectedMethod, setSelectedMethod] = useState(null);

    useEffect(() => {
        if (!isOpen) {
            setStep(1);
            setTimeLeft(15 * 60);
            return;
        }

        if (step === 2) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [isOpen, step]);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? "0" : ""}${s}`;
    };

    const handleMethodSelect = (method) => {
        setSelectedMethod(method);
        if (method === "QR") {
            setStep(2);
        } else {
            // Mock other payments
            setTimeout(() => setStep(3), 1500);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-gray-950/60 backdrop-blur-md"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-lg bg-white rounded-[3rem] overflow-hidden shadow-2xl"
                >
                    {/* Header */}
                    <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-white sticky top-0 z-10">
                        <div>
                            <h3 className="text-xl font-black text-gray-950 tracking-tighter">Secure Checkout</h3>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Order #EF-{Math.floor(Math.random() * 100000)}</p>
                        </div>
                        <button onClick={onClose} className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-all">
                            <FaTimes size={18} />
                        </button>
                    </div>

                    <div className="p-10 max-h-[70vh] overflow-y-auto">
                        {step === 1 && (
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                                <div className="mb-10">
                                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Course Details</div>
                                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
                                        <div className="font-bold text-gray-950">{courseTitle}</div>
                                        <div className="text-xl font-black text-indigo-600">${price}</div>
                                    </div>
                                </div>

                                <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Select Payment Method</div>
                                <div className="space-y-4">
                                    {[
                                        { id: "GPAY", name: "Google Pay", icon: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg", color: "hover:border-blue-500" },
                                        { id: "PAYTM", name: "Paytm", icon: "https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg", color: "hover:border-sky-500" },
                                        { id: "QR", name: "UPI QR Code", icon: <FaQrcode size={24} />, color: "hover:border-indigo-500", isQR: true }
                                    ].map((method) => (
                                        <button
                                            key={method.id}
                                            onClick={() => handleMethodSelect(method.id)}
                                            className={`w-full p-6 flex items-center justify-between rounded-3xl border-2 border-gray-50 bg-white shadow-sm transition-all group ${method.color}`}
                                        >
                                            <div className="flex items-center gap-6">
                                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center p-3 text-gray-400 group-hover:bg-white group-hover:scale-110 transition-all">
                                                    {method.isQR ? method.icon : <img src={method.icon} className="w-full h-full object-contain" alt={method.name} />}
                                                </div>
                                                <span className="text-lg font-black text-gray-950 tracking-tight">{method.name}</span>
                                            </div>
                                            <FaChevronRight className="text-gray-200 group-hover:text-gray-400 group-hover:translate-x-1 transition-all" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                                <div className="mb-10">
                                    <h4 className="text-2xl font-black text-gray-950 tracking-tighter mb-2">Scan & Pay Now</h4>
                                    <p className="text-sm font-bold text-gray-400">Please use your mobile app to scan this QR</p>
                                </div>

                                <div className="relative mx-auto w-72 h-80 bg-[#f9e7b9] p-6 rounded-[2.5rem] shadow-2xl border border-gray-100 mb-10 group overflow-hidden flex flex-col items-center">
                                    <img
                                        src="file:///C:/Users/acer/Downloads/qr%20code.jpeg"
                                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                                        alt="My UPI QR"
                                    />
                                    <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                </div>

                                <div className="inline-flex items-center gap-4 px-8 py-4 bg-rose-50 rounded-2xl mb-12 border border-rose-100">
                                    <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                                    <span className="text-sm font-black text-rose-600 uppercase tracking-widest">Expires in {formatTime(timeLeft)}</span>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <button
                                        onClick={() => setStep(3)}
                                        className="w-full py-6 bg-gray-950 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] shadow-2xl shadow-gray-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        I Have Paid
                                    </button>
                                    <button onClick={() => setStep(1)} className="text-[10px] font-black text-gray-400 uppercase tracking-widest py-4 hover:text-gray-950">Cancel & Go Back</button>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-10">
                                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl shadow-green-100">
                                    <FaCheckCircle size={48} />
                                </div>
                                <h3 className="text-4xl font-black text-gray-950 tracking-tighter mb-4">Payment Success!</h3>
                                <p className="text-lg text-gray-500 font-medium mb-12">Welcome to the elite class. Your dashboard is now ready.</p>
                                <button
                                    onClick={onClose}
                                    className="w-full py-6 bg-indigo-600 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] shadow-2xl shadow-indigo-100"
                                >
                                    Go to Dashboard
                                </button>
                            </motion.div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="p-8 bg-gray-50 border-t border-gray-100 flex items-center justify-center gap-3 text-gray-400">
                        <FaLock size={12} />
                        <span className="text-[10px] font-black uppercase tracking-widest">PCI-DSS Compliant 256-bit Encryption</span>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default PaymentModal;
