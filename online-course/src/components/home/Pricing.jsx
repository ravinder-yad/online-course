import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiX, FiCheckCircle } from 'react-icons/fi';

const plans = [
  {
    id: 1,
    name: 'Free',
    price: '$0',
    desc: 'Perfect for starters who want to explore basic skills.',
    features: [
      { text: 'Access to 100+ free courses', included: true },
      { text: 'Community forum access', included: true },
      { text: 'Basic certificates', included: true },
      { text: 'Priority support', included: false },
      { text: 'Offline viewing', included: false }
    ],
    button: 'Get Started',
    popular: false
  },
  {
    id: 2,
    name: 'Pro',
    price: '$29',
    desc: 'Best for professionals looking to advance their careers.',
    features: [
      { text: 'Access to 2,000+ courses', included: true },
      { text: 'Expert Q&A sessions', included: true },
      { text: 'Industry recognized certificates', included: true },
      { text: 'Priority support', included: true },
      { text: 'Offline viewing', included: false }
    ],
    button: 'Start Free Trial',
    popular: true
  },
  {
    id: 3,
    name: 'Premium',
    price: '$59',
    desc: 'The ultimate learning experience with all features.',
    features: [
      { text: 'Unlimited course access', included: true },
      { text: '1-on-1 mentor sessions', included: true },
      { text: 'Customized learning paths', included: true },
      { text: '24/7 Priority support', included: true },
      { text: 'Offline viewing', included: true }
    ],
    button: 'Go Premium',
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="bg-gray-50 py-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10 animate-pulse"></div>
      
      <div className="section-padding">
        <div className="flex flex-col items-center text-center gap-3 lg:gap-4 mb-12 lg:mb-20">
          <span className="px-4 py-2 rounded-full bg-primary/5 text-primary text-[10px] lg:text-sm font-black uppercase tracking-widest w-fit mb-2">💰 Simple Pricing</span>
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight">
            Choose Your <span className="text-gradient">Flexible Plan</span>
          </h2>
          <p className="text-sm lg:text-lg text-gray-500 max-w-2xl leading-relaxed italic font-bold tracking-tight">
            Invest in your future with our affordable learning plans. Choose the one that works best for you and start your journey today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`p-10 rounded-[3rem] border-2 flex flex-col gap-8 transition-all duration-500 bg-white hover:shadow-2xl hover:shadow-primary/10 relative ${
                plan.popular ? 'border-primary shadow-2xl scale-105 z-10' : 'border-gray-50'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-black text-gray-900">{plan.name}</h3>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-black text-gray-900">{plan.price}</span>
                  <span className="text-lg font-bold text-gray-400 pb-1">/month</span>
                </div>
                <p className="text-sm font-bold text-gray-500 leading-relaxed italic">{plan.desc}</p>
              </div>

              <div className="flex flex-col gap-5 pt-8 border-t border-gray-50">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {feature.included ? (
                      <FiCheckCircle className="text-green-500 text-xl font-bold" />
                    ) : (
                      <FiX className="text-gray-300 text-xl font-bold" />
                    )}
                    <span className={`text-sm font-bold tracking-tight ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 lg:py-5 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 transform active:scale-95 ${
                plan.popular ? 'bg-primary text-white shadow-xl shadow-primary/20 hover:shadow-primary/40' : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-100'
              }`}>
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
