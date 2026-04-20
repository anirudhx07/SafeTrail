import { Smartphone, ChevronRight, UserCheck, Lock, Globe } from 'lucide-react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { TopNav } from '../components/TopNav';

export function Login() {
  const navigate = useNavigate();

  return (
    <div className="bg-background min-h-screen flex flex-col font-sans pt-32">
      <TopNav />
      
      <main className="flex-grow flex items-center justify-center p-10 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-surface/30 -skew-x-12 translate-x-1/4 pointer-events-none" />
        
        <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-12 gap-20 relative z-10">
          <div className="lg:col-span-5 flex flex-col justify-center space-y-12">
            <div>
              <div className="stat-label mb-4">Authentication Node</div>
              <h1 className="hero-text text-white leading-[0.9]">
                Access<br /><span className="opacity-30">Identity.</span>
              </h1>
            </div>
            
            <p className="text-[14px] text-on-surface-variant leading-relaxed max-w-sm uppercase tracking-widest font-light">
              Secure digital gateway for asynchronous transit, biometric monitoring, and automated registry synchronization.
            </p>

            <div className="glass-card p-8 border border-white/10 group hover:border-white/20 transition-all duration-500">
              <div className="flex items-start gap-6">
                <div className="bg-white/5 p-4 border border-white/10">
                  <Lock className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="stat-label text-white">Encrypted Handshake</h3>
                  <p className="text-[11px] text-on-surface-variant mt-2 uppercase tracking-wide leading-relaxed">System authorization required for active sector monitoring.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-surface border border-white/10 p-10 md:p-16"
            >
              <div className="flex space-x-12 mb-12 border-b border-white/5">
                <button className="pb-6 text-[11px] font-bold uppercase tracking-[3px] text-white border-b border-white">Verification</button>
                <button className="pb-6 text-[11px] font-bold uppercase tracking-[3px] text-on-surface-variant hover:text-white transition-colors">Registry</button>
              </div>

              <form className="space-y-12" onSubmit={(e) => { e.preventDefault(); navigate('/kyc'); }}>
                <div className="space-y-6">
                  <label className="stat-label flex items-center gap-2">
                    <Smartphone size={14} /> Mobile Authorization
                  </label>
                  <div className="flex flex-col md:flex-row gap-4">
                    <input className="flex-1 bg-background border border-white/10 px-6 py-5 text-white focus:border-white outline-none font-mono text-sm tracking-widest" placeholder="+91 00000 00000" type="tel" />
                    <Button variant="primary" className="px-12" onClick={() => {}}>OTP</Button>
                  </div>
                </div>

                <div className="relative flex items-center py-4">
                  <div className="flex-grow border-t border-white/5"></div>
                  <span className="flex-shrink mx-6 stat-label">Alternative Protocol</span>
                  <div className="flex-grow border-t border-white/5"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="flex items-center justify-between p-6 bg-background border border-white/5 hover:border-white/30 transition-all group group">
                    <div className="flex items-center gap-4">
                      <Globe size={18} className="text-on-surface-variant group-hover:text-white" />
                      <span className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-white">Passport Link</span>
                    </div>
                    <ChevronRight size={14} className="text-white/20" />
                  </button>
                  <button className="flex items-center justify-between p-6 bg-background border border-white/5 hover:border-white/30 transition-all group group">
                    <div className="flex items-center gap-4">
                      <UserCheck size={18} className="text-on-surface-variant group-hover:text-white" />
                      <span className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-white">Biometric Vault</span>
                    </div>
                    <ChevronRight size={14} className="text-white/20" />
                  </button>
                </div>

                <div className="bg-white/2 p-6 space-y-6 border border-white/5">
                  <p className="text-[10px] text-on-surface-variant leading-relaxed uppercase tracking-wider">
                    Authorizing SafeTrail AI to access encrypted biometric data via <span className="text-white">Auth-Tunnel protocol</span>. No local caching.
                  </p>
                  <label className="flex items-center gap-4 cursor-pointer group">
                    <input className="peer h-4 w-4 bg-background border-white/10 text-white rounded-none focus:ring-0 focus:ring-offset-0" type="checkbox" required />
                    <span className="stat-label group-hover:text-white transition-colors">Accept Protocol Protocols</span>
                  </label>
                </div>

                <Button fullWidth onClick={() => navigate('/kyc')}>
                  Initiate Handshake
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <footer className="p-10 md:p-20 text-center border-t border-white/5">
        <div className="flex flex-wrap justify-center items-center gap-10 opacity-30">
          {['TLS 1.3 Secure', 'Neural Mesh Hub', 'V.2.4.0-Stable', 'Sector 7 Area'].map(item => (
            <span key={item} className="text-[9px] font-bold uppercase tracking-[0.3em]">{item}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}
