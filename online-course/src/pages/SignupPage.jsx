import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser, HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import AuthLayout from '../components/AuthLayout';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);

  const calculateStrength = (pass) => {
    let s = 0;
    if (pass.length > 8) s++;
    if (/[A-Z]/.test(pass)) s++;
    if (/[0-9]/.test(pass)) s++;
    if (/[^A-Za-z0-9]/.test(pass)) s++;
    setStrength(s);
  };

  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    calculateStrength(val);
  };

  const strengthLabels = ['Weak', 'Fair', 'Good', 'Strong'];
  const strengthColors = ['bg-red-400', 'bg-yellow-400', 'bg-blue-400', 'bg-green-500'];

  return (
    <AuthLayout 
      title="Create Account" 
      subtitle="Join thousand of students starting their career today"
      illustration="https://ouch-cdn2.icons8.com/6_583XU6O75f6O_4n0k_9_1wz9H_0y5L9-z-p_5_Y/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzkv/NjI0ZjYyNGYtYzlj/Mi00YmNmLWIyMDQt/OGIyYmQyYmU0MGYz/LnN2Zw.png"
    >
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
          <div className="relative group">
            <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="John Doe" 
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all font-medium text-gray-800"
            />
          </div>
        </div>

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
          <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
          <div className="relative group">
            <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 group-focus-within:text-primary transition-colors" />
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="••••••••" 
              value={password}
              onChange={handlePasswordChange}
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
          
          {/* Strength Indicator */}
          {password && (
            <div className="px-1 pt-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-black uppercase text-gray-400">Password Strength</span>
                <span className="text-[11px] font-black uppercase text-primary">{strengthLabels[strength - 1] || 'Too Short'}</span>
              </div>
              <div className="flex gap-1 h-1.5">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`flex-1 rounded-full transition-all duration-500 ${i <= strength ? strengthColors[strength - 1] : 'bg-gray-100'}`}></div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-start gap-2 px-1 pt-2">
           <input type="checkbox" className="mt-1 w-5 h-5 rounded-md border-gray-300 text-primary focus:ring-primary cursor-pointer" />
           <span className="text-sm text-gray-500 font-medium">
              I agree to the <a href="#" className="text-primary font-bold hover:underline">Terms of Service</a> and <a href="#" className="text-primary font-bold hover:underline">Privacy Policy</a>.
           </span>
        </div>

        <button className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95 transition-all mt-4">
           Create Account
        </button>

        <p className="text-center text-sm font-medium text-gray-500 mt-6">
           Already have an account? <Link to="/login" className="text-primary font-black hover:underline">Log in</Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default SignupPage;
