import { ShieldCheck, Info, Map as MapIcon, Siren, AlertCircle, CheckCircle, ChevronRight, TrendingUp, BarChart3, MapPin, Clock, Navigation, Signal, Lightbulb, Target, Layers } from 'lucide-react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { TopNav } from '../components/TopNav';
import { BottomNav } from '../components/BottomNav';

export function SafetyScore() {
  const navigate = useNavigate();

  return (
    <div className="bg-background min-h-screen flex flex-col pb-40 font-sans">
      <TopNav />
      <main className="max-w-[1400px] mx-auto px-10 md:px-20 pt-32 w-full flex flex-col gap-20 relative z-10">
        <header className="flex flex-col md:flex-row justify-between items-end gap-10 border-b border-white/5 pb-10">
          <div>
            <div className="stat-label mb-4">Neural Analysis</div>
            <h2 className="hero-text text-white leading-[0.8]">
              Safety<br />Indices
            </h2>
          </div>
          <div className="flex gap-12">
            <div className="text-right">
              <div className="stat-label">Live Drift</div>
              <div className="text-sm font-bold tracking-widest text-secondary mt-1 uppercase">+1.24% STABLE</div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <section className="lg:col-span-12 xl:col-span-5 bg-surface border border-white/5 p-12 space-y-12 flex flex-col items-center">
            <div className="stat-label uppercase tracking-[6px]">Zone Integrity</div>
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle className="text-white/5" cx="144" cy="144" r="130" fill="transparent" stroke="currentColor" strokeWidth="2" />
                <motion.circle 
                  initial={{ strokeDashoffset: 816.81 }}
                  animate={{ strokeDashoffset: 816.81 * (1 - 0.92) }}
                  transition={{ duration: 2, ease: 'easeOut' }}
                  className="text-white" cx="144" cy="144" r="130" fill="transparent" stroke="currentColor" strokeDasharray="816.81" strokeWidth="2" strokeLinecap="none" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-8xl sm:text-9xl font-light text-white tracking-tighter">92</span>
                <span className="text-[10px] font-bold text-secondary uppercase tracking-[4px] mt-4">OPTIMIZED STATE</span>
              </div>
            </div>
            <div className="bg-white/5 w-full p-8 grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="stat-label">Network</div>
                <div className="text-lg font-bold text-white uppercase tracking-widest">99%</div>
              </div>
              <div className="space-y-2">
                 <div className="stat-label">Latency</div>
                 <div className="text-lg font-bold text-white uppercase tracking-widest">12ms</div>
              </div>
            </div>
          </section>

          <section className="lg:col-span-12 xl:col-span-7 space-y-12 flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { label: 'Metropolitan Aura', score: 'S-TIER', desc: 'Minimal risk in current district / Shinjuku Hub' },
                { label: 'Group Beacon', score: 'ACTIVE', desc: 'Secure transit linking established / Family Sync' }
              ].map(item => (
                <div key={item.label} className="bg-surface border border-white/5 p-10 space-y-6 group hover:border-white/20 transition-all">
                  <div className="stat-label">{item.label}</div>
                  <div className="text-3xl font-light text-white tracking-widest uppercase">{item.score}</div>
                  <p className="text-[11px] text-on-surface-variant uppercase tracking-wide leading-relaxed font-bold">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-surface border border-white/5 p-12">
               <div className="flex justify-between items-center mb-10">
                  <h3 className="stat-label text-white uppercase tracking-[4px]">Risk Distribution</h3>
                  <Info size={16} className="text-white/20" />
               </div>
               <div className="space-y-10">
                 {[
                   { label: 'Ambient Traffic', percent: 45, color: 'bg-white' },
                   { label: 'Sector Density', percent: 20, color: 'bg-white/40' },
                   { label: 'Node Proximity', percent: 85, color: 'bg-secondary' }
                 ].map(bar => (
                   <div key={bar.label} className="space-y-4">
                     <div className="flex justify-between stat-label">
                       <span>{bar.label}</span>
                       <span>{bar.percent}%</span>
                     </div>
                     <div className="h-0.5 w-full bg-white/5">
                        <motion.div 
                          initial={{ width: 0 }} 
                          animate={{ width: `${bar.percent}%` }} 
                          className={`h-full ${bar.color}`} 
                        />
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </section>

          <section className="lg:col-span-12 flex flex-col md:flex-row gap-12 bg-white text-black p-12 items-center justify-between">
            <div className="flex items-center gap-10">
              <ShieldCheck size={60} strokeWidth={1} />
              <div className="space-y-2">
                <h3 className="text-2xl font-light uppercase tracking-widest">Protocol Verified</h3>
                <p className="text-[11px] font-bold uppercase tracking-widest opacity-60">System running on isolated core / Encryption stable</p>
              </div>
            </div>
            <Button variant="secondary" className="px-12 bg-black text-white hover:bg-black/80" onClick={() => navigate('/itinerary')}>Recalculate Mesh</Button>
          </section>
        </div>
      </main>
      <div className="fixed right-10 top-1/2 -translate-y-1/2 sidebar-text">
        Indices / Neural Infrastructure / Sector 7
      </div>
      <BottomNav />
    </div>
  );
}
