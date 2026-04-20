import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/onboarding'), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-background h-screen w-full flex overflow-hidden relative font-sans">
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-5 pointer-events-none">
        <div className="col-start-8 col-end-12 row-start-3 row-end-10 bg-white/20 border border-white/10" />
        <div className="col-start-2 col-end-5 row-start-8 row-end-12 bg-white/10 border border-white/10" />
      </div>

      <div className="grid grid-cols-12 w-full h-full p-10 md:p-20 relative z-10">
        <header className="col-span-12 flex justify-between items-end border-b border-white/10 pb-4 h-fit">
          <div className="text-2xl font-black uppercase tracking-tighter text-white">SafeTrail</div>
          <div className="flex gap-10">
            {['Index', 'Vault', 'Venture', 'Feed'].map(item => (
              <span key={item} className="nav-item text-white/40">{item}</span>
            ))}
          </div>
        </header>

        <motion.main 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="col-span-12 md:col-start-1 md:col-end-10 mt-20 md:mt-40"
        >
          <h1 className="hero-text text-white">
            Form &<br />Safety
          </h1>
          <div className="text-[12px] uppercase tracking-[6px] text-white/50 mt-10 ml-2">
            Smart Tourist Protocol / Vol. 024 / 2026
          </div>
        </motion.main>

        <div className="col-span-12 md:col-start-10 md:col-end-13 flex flex-col justify-end items-end gap-2 mt-auto">
          <div className="stat-label">Security Mesh</div>
          <div className="text-xl font-light tabular-nums tracking-widest text-white">VERIFIED</div>
          <div className="stat-label mt-4">Protocol</div>
          <div className="text-xl font-light tabular-nums tracking-widest text-white text-right">NEURAL V2.4</div>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 sidebar-text">
        SYSTEM AUTHORIZED / SECTOR 7 / INFRASTRUCTURE
      </div>

      <div className="absolute top-1/2 right-10 -translate-y-1/2 sidebar-text h-40 flex items-center justify-center">
        ESTABLISHED 2026.04.20
      </div>
    </div>
  );
}
