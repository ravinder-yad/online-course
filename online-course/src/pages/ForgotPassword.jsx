import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMail, HiOutlineCheckCircle, HiArrowNarrowLeft } from 'react-icons/hi';
import AuthLayout from '../components/AuthLayout';

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setStep(2);
  };

  return (
    <AuthLayout 
      title={step === 1 ? "Forgot Password?" : "Check Your Email"} 
      subtitle={step === 1 ? "No worries, we'll send you reset instructions." : `We've sent a password reset link to ${email}`}
      illustration="https://ouch-cdn2.icons8.com/6G_W_W6G_W6G_W6G_W6G_W6G_W6G_W6G_W6G_W6G_W6G_W6G_W6G_W6G_W6G.png"
    >
      {step === 1 ? (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
            <div className="relative group">
              <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com" 
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all font-medium text-gray-800"
              />
            </div>
          </div>

          <button type="submit" className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95 transition-all">
             Send Reset Link
          </button>

          <div className="text-center pt-2">
             <Link to="/login" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-primary transition-colors">
                <HiArrowNarrowLeft /> Back to Login
             </Link>
          </div>
        </form>
      ) : (
        <div className="text-center space-y-8 py-4">
           <div className="flex justify-center">
              <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-500 text-6xl shadow-inner">
                 <HiOutlineCheckCircle />
              </div>
           </div>
           
           <div className="space-y-4">
              <p className="text-gray-500 font-medium leading-relaxed">
                 Didn't receive the email? Check your spam folder or try another email address.
              </p>
              <button onClick={() => setStep(1)} className="text-primary font-black hover:underline cursor-pointer">
                 Click to resend
              </button>
           </div>

           <Link to="/login" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-primary transition-colors">
             <HiArrowNarrowLeft /> Back to Login
           </Link>
        </div>
      )}
    </AuthLayout>
  );
};

export default ForgotPassword;
