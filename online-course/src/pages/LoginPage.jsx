import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import AuthLayout from '../components/AuthLayout';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout 
      title="Welcome Back!" 
      subtitle="Log in to continue your learning adventure"
      illustration="https://ouch-cdn2.icons8.com/N6wU_1eKzS9mXJ5_9W3Y-y0E0yY0G0z1wzZ9Xz1-FpY/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzgv/MDZkZTY3ZjUtYzlj/Mi00YmNmLWIyMDQt/OGIyYmQyYmU0MGYz/LnN2Zw.png"
    >
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
          <div className="relative group">
            <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all font-medium text-gray-800"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center px-1">
             <label className="text-sm font-bold text-gray-700">Password</label>
             <Link to="/forgot-password" weights="semibold" className="text-primary hover:text-primary-dark text-xs font-bold transition-colors">Forgot Password?</Link>
          </div>
          <div className="relative group">
            <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 group-focus-within:text-primary transition-colors" />
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="••••••••" 
              className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all font-medium text-gray-800"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 px-1">
           <input type="checkbox" className="w-5 h-5 rounded-md border-gray-300 text-primary focus:ring-primary cursor-pointer" />
           <span className="text-sm text-gray-500 font-medium">Remember me for 30 days</span>
        </div>

        <button className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95 transition-all">
           Log In
        </button>

        <div className="relative flex items-center justify-center py-2">
           <div className="absolute left-0 w-full h-[1px] bg-gray-100"></div>
           <span className="relative z-10 bg-white px-4 text-sm font-bold text-gray-400 uppercase tracking-widest">Or login with</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
           <button className="flex items-center justify-center gap-2 py-3 border-2 border-gray-100 rounded-2xl hover:border-primary/20 hover:bg-gray-50 transition-all font-bold text-gray-700">
              <FcGoogle className="text-xl" /> Google
           </button>
           <button className="flex items-center justify-center gap-2 py-3 border-2 border-gray-100 rounded-2xl hover:border-primary/20 hover:bg-gray-50 transition-all font-bold text-gray-700">
              <FaFacebook className="text-xl text-[#1877F2]" /> Facebook
           </button>
        </div>

        <p className="text-center text-sm font-medium text-gray-500 mt-6">
           Don't have an account? <Link to="/signup" className="text-primary font-black hover:underline">Sign up for free</Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
