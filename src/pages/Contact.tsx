import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, ChevronLeft, Send, Sparkles } from 'lucide-react';
import GradientText from '../components/GradientText';

const businessTypes = ['Barbershop', 'Restaurant', 'Bakery', 'Auto Repair Shop', 'Clinic', 'Gym', 'Beauty Salon', 'Other'];
const websiteNeeded = ['Landing Page', 'Business Website', 'Online Menu', 'Portfolio', 'Booking System', 'Custom Solution'];
const budgets = ['Under R$500', 'R$500–R$1,500', 'R$1,500–R$3,000', 'R$3,000+'];
const urgencies = ['ASAP', 'This Month', 'Next 3 Months', 'Just Researching'];

export default function Contact() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        businessType: '',
        hasWebsite: '',
        websiteType: '',
        budget: '',
        urgency: '',
        description: '',
        name: '',
        email: '',
        phone: '',
        _honeypot: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const nextStep = () => setStep(s => Math.min(s + 1, 7));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    const handleSelect = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (field !== 'description' && field !== 'name' && field !== 'email' && field !== 'phone') {
            setTimeout(nextStep, 300);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: `Business Type: ${formData.businessType}
Website Status: ${formData.hasWebsite}
Desired Service: ${formData.websiteType}
Budget: ${formData.budget}
Timeline: ${formData.urgency}
Contact Phone: ${formData.phone}

Project Description:
${formData.description}`,
                    _honeypot: formData._honeypot
                })
            });

            if (res.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 50 : -50,
            opacity: 0
        })
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white mb-6">What type of business do you have?</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {businessTypes.map(type => (
                                <button key={type} onClick={() => handleSelect('businessType', type)} className={`p-4 rounded-xl text-left transition-all ${formData.businessType === type ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' : 'bg-neutral-800/50 border-white/5 text-neutral-300 hover:bg-neutral-800 hover:border-white/20'} border`}>
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white mb-6">Do you already have a website?</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {['Yes', 'No'].map(opt => (
                                <button key={opt} onClick={() => handleSelect('hasWebsite', opt)} className={`p-4 rounded-xl text-center font-medium transition-all ${formData.hasWebsite === opt ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' : 'bg-neutral-800/50 border-white/5 text-neutral-300 hover:bg-neutral-800 hover:border-white/20'} border`}>
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white mb-6">What type of website do you need?</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {websiteNeeded.map(type => (
                                <button key={type} onClick={() => handleSelect('websiteType', type)} className={`p-4 rounded-xl text-left transition-all ${formData.websiteType === type ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' : 'bg-neutral-800/50 border-white/5 text-neutral-300 hover:bg-neutral-800 hover:border-white/20'} border`}>
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white mb-6">What is your estimated budget?</h3>
                        <div className="grid grid-cols-1 gap-3">
                            {budgets.map(type => (
                                <button key={type} onClick={() => handleSelect('budget', type)} className={`p-4 rounded-xl text-left transition-all ${formData.budget === type ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' : 'bg-neutral-800/50 border-white/5 text-neutral-300 hover:bg-neutral-800 hover:border-white/20'} border`}>
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white mb-6">What is your project urgency?</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {urgencies.map(type => (
                                <button key={type} onClick={() => handleSelect('urgency', type)} className={`p-4 rounded-xl text-left transition-all ${formData.urgency === type ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' : 'bg-neutral-800/50 border-white/5 text-neutral-300 hover:bg-neutral-800 hover:border-white/20'} border`}>
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 6:
                return (
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white mb-6">Tell us about your project</h3>
                        <textarea 
                            name="description" 
                            rows={6} 
                            value={formData.description} 
                            onChange={handleChange} 
                            placeholder="Describe your goals, desired features, and vision..." 
                            className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white/30 transition-colors resize-none placeholder-neutral-600"
                        />
                        <button onClick={nextStep} disabled={!formData.description.trim()} className="w-full bg-white text-neutral-900 px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors disabled:opacity-50">
                            Continue <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                );
            case 7:
                return (
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white mb-6">Final Contact Details</h3>
                        <input type="text" name="_honeypot" value={formData._honeypot} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Full Name *</label>
                                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Email Address *</label>
                                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Phone Number</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" />
                            </div>
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={status === 'submitting' || !formData.name.trim() || !formData.email.trim()}
                            className="w-full bg-emerald-500 text-neutral-900 px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)] disabled:opacity-50"
                        >
                            {status === 'submitting' ? 'Sending...' : 'Submit Project Request'}
                            {!status && <Send className="w-4 h-4" />}
                        </button>
                        {status === 'error' && <p className="text-red-400 text-sm text-center mt-2">Error sending message. Please try again.</p>}
                    </div>
                );
        }
    };

    return (
        <div className="w-full bg-neutral-900 min-h-[calc(100vh-64px)] flex items-center pt-16 pb-24 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-2xl mx-auto px-6 w-full relative z-10">
                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 mb-6 border border-white/10 backdrop-blur-md">
                            <Sparkles className="w-5 h-5 text-emerald-400" />
                        </div>

                        <div className="flex justify-center mb-4">
                            <GradientText
                                colors={["#ffffff", "#34d399", "#ffffff"]}
                                animationSpeed={4}
                                showBorder={false}
                                className="text-4xl md:text-5xl font-bold tracking-tight"
                            >
                                Let's build your vision.
                            </GradientText>
                        </div>
                        <p className="text-neutral-400 font-light">Complete the questionnaire below to help us understand your project needs.</p>
                    </div>
                    
                    {status === 'success' ? (
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-neutral-800/40 backdrop-blur-xl p-12 rounded-[2rem] border border-white/10 text-center shadow-2xl"
                        >
                            <CheckCircle2 className="w-20 h-20 mx-auto mb-6 text-emerald-400 opacity-90" />
                            <h2 className="text-3xl font-bold text-white mb-3">Request Received</h2>
                            <p className="text-neutral-400 mb-8 max-w-sm mx-auto">Thank you for sharing your project details. Our team will review your requirements and reach out to your email shortly.</p>
                            <button onClick={() => window.location.reload()} className="px-8 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors">Start Again</button>
                        </motion.div>
                    ) : (
                        <div className="bg-neutral-800/40 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
                            {/* Progress Bar */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-neutral-800">
                                <motion.div 
                                    className="h-full bg-gradient-to-r from-emerald-500 to-blue-500"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(step / 7) * 100}%` }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                />
                            </div>

                            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                                <div className="flex items-center gap-4">
                                    {step > 1 && (
                                        <button onClick={prevStep} className="p-2 rounded-full hover:bg-white/10 text-neutral-400 transition-colors">
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                    )}
                                    <span className="text-sm font-medium text-neutral-500 tracking-widest uppercase">Step {step} of 7</span>
                                </div>
                            </div>

                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={step}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.3 }}
                                >
                                    {renderStepContent()}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

