import { Siren, ShieldAlert, PhoneForwarded, Radio, MapPin, Loader2, X, AlertOctagon } from 'lucide-react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function SOS() {
  const navigate = useNavigate();
  const [stage, setStage] = useState<'counting' | 'triggered'>('counting');
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (stage === 'counting' && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setStage('triggered');
    }
  }, [stage, countdown]);

  return (
    <div className={`bg-background min-h-screen flex flex-col items-center justify-center p-10 relative overflow-hidden font-sans transition-colors duration-1000 ${stage === 'triggered' ? 'bg-error' : ''}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-30" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-error/10 via-transparent to-transparent opacity-20" />
      </div>

      {stage === 'counting' ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center gap-16 z-10 w-full max-w-xl"
        >
          <div className="relative">
             <div className="hero-text text-white text-[12rem] leading-none tracking-tighter opacity-10 blur-sm absolute -top-10 -left-10">{countdown}</div>
             <div className="relative w-64 h-64 border-2 border-white flex items-center justify-center">
                <span className="text-[10rem] font-light text-white tracking-widest">{countdown}</span>
             </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-sm font-bold text-white uppercase tracking-[10px]">Emergency Protocol Active</h1>
            <p className="text-on-surface-variant font-bold uppercase tracking-widest text-[11px] leading-relaxed max-w-sm">
              Dispatching authority units to current telemetry node in {countdown} seconds.
            </p>
          </div>

          <div className="flex flex-col gap-8 w-full max-w-sm pt-10">
            <Button 
              className="py-8 bg-white text-black hover:bg-white/90" 
              onClick={() => navigate(-1)}
            >
              Abort Execution
            </Button>
            <div className="text-[10px] text-white/40 font-bold uppercase tracking-[4px]">Verified PIN Required for Signal Kill</div>
          </div>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center text-center gap-16 w-full max-w-4xl z-10"
        >
          <motion.div 
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-32 h-32 bg-white flex items-center justify-center"
          >
            <Siren size={48} className="text-error" />
          </motion.div>

          <header className="space-y-4">
            <h2 className="hero-text text-white leading-none">Alarm<br />Invoked</h2>
            <div className="text-[11px] font-bold text-white/60 uppercase tracking-[6px] mt-6">Protocol ID: STX-AI-88390</div>
          </header>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-surface border border-white/10 p-12 text-left space-y-10">
              <div className="stat-label">Response Cluster</div>
              <div className="flex items-center gap-6">
                <Loader2 className="text-white animate-spin" size={24} />
                <div className="space-y-1">
                  <p className="text-white font-bold text-lg uppercase tracking-widest">Sector 7 HQ Sync</p>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Units Active: 4x Rapid Tactical</p>
                </div>
              </div>
            </div>
            
            <div className="bg-surface border border-white/10 p-12 text-left space-y-10">
              <div className="stat-label">Cords / GPS</div>
              <div className="space-y-1">
                <p className="text-white font-bold text-lg uppercase tracking-widest">Shibuya Node</p>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">35.6618 / 139.7046</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 w-full flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="flex items-center gap-10">
                <div className="w-20 h-20 bg-black overflow-hidden border border-black grayscale">
                  <img src="https://picsum.photos/seed/operator/200/200" alt="Operator" referrerPolicy="no-referrer" />
                </div>
                <div className="text-left space-y-1">
                  <p className="stat-label text-black/40">Remote Agent</p>
                  <h4 className="text-2xl font-light text-black uppercase tracking-widest">Controller S-9</h4>
                  <p className="text-[10px] text-black/60 font-black uppercase tracking-widest">Establishing Secure Link...</p>
                </div>
              </div>
              <Button variant="secondary" className="px-12 bg-black text-white hover:bg-black/90">Contact Agent</Button>
          </div>

          <div className="pt-10 w-full max-w-sm space-y-6">
            <button className="text-[10px] font-bold text-white uppercase tracking-[8px] hover:opacity-60 transition-opacity" onClick={() => navigate(-1)}>System Standby / I am Safe</button>
            <div className="h-px w-full bg-white/10" />
          </div>
        </motion.div>
      )}
    </div>
  );
}
