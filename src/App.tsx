import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Icons
import { Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';

// Pages
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

import PillNav from './components/PillNav';

const logoDataUri = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><circle cx='50' cy='50' r='50' fill='%23000'/><text x='50' y='55' font-family='Arial' font-size='30' font-weight='bold' fill='%23fff' text-anchor='middle'>RA</text></svg>";

const Navigation = () => {
    const { pathname } = useLocation();
    
    return (
        <PillNav
            logo={logoDataUri}
            logoAlt="Rhian Augusto Logo"
            items={[
                { label: 'Home', href: '/' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Services', href: '/services' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' }
            ]}
            activeHref={pathname}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto shadow-lg"
            baseColor="#000000"
            pillColor="#ffffff"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#000000"
            onMobileMenuClick={() => {}}
        />
    );
};

const Footer = () => {
    const SOCIAL_LINKS = [
        { name: 'Instagram', url: '#', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
        { name: 'X', url: '#', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'},
        { name: 'YouTube', url: '#', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
        { name: 'TikTok', url: '#', icon: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.5 3.96-1.65 5.56-1.28 1.78-3.3 2.94-5.46 3.1-2.16.15-4.4-.38-6.07-1.64-1.74-1.32-2.8-3.41-2.95-5.61-.15-2.28.65-4.66 2.22-6.2 1.34-1.3 3.19-2.06 5.06-2.1 1.08-.02 2.15.17 3.17.57V12.9c-1.07-.38-2.21-.49-3.32-.3-1.1.18-2.12.72-2.87 1.55-.91 1.01-1.35 2.45-1.13 3.82.2 1.25.96 2.37 1.99 3.03 1.08.7 2.44.89 3.69.57 1.25-.33 2.33-1.14 2.97-2.26.63-1.1.84-2.4.78-3.67V.02h-.01z' },
        { name: 'Reddit', url: '#', icon: 'M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.688-.561-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z' }
    ];

    return (
        <footer className="w-full px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center border-t border-neutral-200 bg-neutral-50 gap-8">
            <div className="flex gap-8 text-[11px] font-bold tracking-[0.1em] text-neutral-400 uppercase">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Belo Horizonte, BR
                </div>
                <div>Built with Intention. &copy; {new Date().getFullYear()}</div>
            </div>
            
            <div className="flex gap-6">
                {SOCIAL_LINKS.map(link => (
                    <motion.a 
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-neutral-900 transition-colors p-2 rounded-full hover:bg-neutral-200"
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={link.name}
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d={link.icon} />
                        </svg>
                    </motion.a>
                ))}
            </div>
        </footer>
    );
}

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-neutral-50 flex flex-col font-sans text-neutral-900 selection:bg-neutral-900 selection:text-white">
        <Navigation />
        <main className="flex-1 pt-16">
            <AnimatePresence mode="wait">
                <Routes>
                    <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                    <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
                    <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
                    <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                    <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                </Routes>
            </AnimatePresence>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
