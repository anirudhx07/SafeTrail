import { Calendar, MapPin, Clock, Plus, ChevronRight, Hash, Route, Flag, Mountain, BadgeCheck, AlertTriangle, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { TopNav } from '../components/TopNav';
import { BottomNav } from '../components/BottomNav';

export function Itinerary() {
  const navigate = useNavigate();

  return (
    <div className="bg-background min-h-screen flex flex-col pb-40 font-sans">
      <TopNav />
      <main className="max-w-[1400px] mx-auto px-10 md:px-20 pt-32 w-full flex flex-col gap-20">
        <header className="flex flex-col md:flex-row justify-between items-end gap-10 border-b border-white/5 pb-10">
          <div>
            <div className="stat-label mb-4">Registry Configuration</div>
            <h2 className="hero-text text-white leading-[0.8]">
              Transit<br />Protocol
            </h2>
          </div>
          <div className="flex gap-4">
             <div className="text-right hidden md:block">
                <div className="stat-label">System Mode</div>
                <div className="text-[10px] font-bold text-secondary uppercase tracking-widest mt-1">AI-Assisted Monitoring Safe</div>
             </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7 space-y-16">
            <section className="bg-surface border border-white/5 p-12 space-y-12">
              <div className="flex items-center gap-4">
                <Route className="text-white/40" size={20} />
                <h3 className="text-sm font-bold tracking-widest uppercase text-white">Route Parameters</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="stat-label">Access Node (Source)</label>
                  <div className="flex items-center bg-background border border-white/5 p-5 focus-within:border-white transition-colors">
                    <MapPin className="text-white/20 mr-4" size={18} />
                    <input className="bg-transparent border-none w-full text-white placeholder:text-white/20 outline-none font-mono text-sm uppercase tracking-widest" placeholder="BASE CAMP / SECTOR 7" type="text" />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="stat-label">Terminal Point</label>
                  <div className="flex items-center bg-background border border-white/5 p-5 focus-within:border-white transition-colors">
                    <Flag className="text-white/20 mr-4" size={18} />
                    <input className="bg-transparent border-none w-full text-white placeholder:text-white/20 outline-none font-mono text-sm uppercase tracking-widest" placeholder="SUMMIT / HUB" type="text" />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <label className="stat-label">Sector Designations</label>
                  <div className="flex items-center bg-background border border-white/5 p-5 focus-within:border-white transition-colors">
                    <Mountain className="text-white/20 mr-4" size={18} />
                    <input className="bg-transparent border-none w-full text-white placeholder:text-white/20 outline-none font-mono text-sm uppercase tracking-widest" placeholder="BLACKWOOD RIDGE / METRO HUB 4" type="text" />
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-surface border border-white/5 p-12 space-y-12">
              <div className="flex items-center gap-4">
                <BadgeCheck className="text-white/40" size={20} />
                <h3 className="text-sm font-bold tracking-widest uppercase text-white">Authority & Logistics</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="stat-label">Registry Count</label>
                  <select className="w-full bg-background border border-white/5 p-5 text-white focus:border-white outline-none font-mono text-sm uppercase tracking-widest appearance-none">
                    <option>SINGLE ENTITY</option>
                    <option>SMALL CORE (2-4)</option>
                    <option>METRO GROUP (5+)</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="stat-label">Agency ID</label>
                  <div className="flex items-center bg-background border border-white/5 p-5 focus-within:border-white transition-colors">
                    <BadgeCheck className="text-white/20 mr-4" size={18} />
                    <input className="bg-transparent border-none w-full text-white placeholder:text-white/20 outline-none font-mono text-sm uppercase tracking-widest" placeholder="LICENSE X-092" type="text" />
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-error/5 border border-error/20 p-12 space-y-8">
              <div className="flex items-center gap-4">
                <AlertTriangle className="text-error" size={20} />
                <h3 className="text-sm font-bold tracking-widest uppercase text-white">Fallback Protocol</h3>
              </div>
              <div className="space-y-6">
                <p className="text-[11px] text-on-surface-variant uppercase tracking-wide leading-relaxed">Required execution: Specify secondary extraction vectors and dead-drop coordinates.</p>
                <textarea className="w-full bg-background border border-white/5 p-6 text-white focus:border-error transition-colors outline-none font-mono text-sm uppercase tracking-widest" placeholder="DESCRIBE EVACUATION VECTOR..." rows={4} />
              </div>
            </section>
          </div>

          <div className="lg:col-span-5 space-y-12">
            <div className="relative aspect-[3/4] border border-white/10 overflow-hidden group">
              <img 
                className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-50 transition-all duration-1000" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW542WmRooXCOuvhL_8xXQsNOWuupbNk6kMOQQqcN5q0oHnI9mQHFWIHSGe77xdE2hfG25BffoVsSH63g-d-0nZOrJqdkurMeMJIt1Sb-9LlzFal8y8_RrLCEuL6fhpnmRRTaAPq6yt8tYrvv7geh_iDyQgwF72yWqA8HcjTyjXnlUNL2VdPTb6nn1hvPSgcrmUk1XOXdA6ZUHqonkNPtRJYHIeIpvD2r38FjBWmWmeHNEG73bduIRCAyM8ge6cVPmEiZmgN6TNck" 
                alt="Map Graph"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-10 left-10 right-10 glass-card p-10 border border-white/10">
                <div className="stat-label mb-6">Neural Intelligence</div>
                <div className="space-y-6">
                   <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest">
                      <span className="text-white/40">Risk Index</span>
                      <span className="text-white">Low / Optimal</span>
                   </div>
                   <div className="h-0.5 w-full bg-white/5">
                      <div className="h-full bg-secondary w-4/5 shadow-[0_0_10px_#006a6a]" />
                   </div>
                   <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest">
                      <span className="text-white/40">Encryption</span>
                      <span className="text-white">AES-256 State</span>
                   </div>
                </div>
              </div>
            </div>

            <Button fullWidth className="py-8" onClick={() => navigate('/digital-id')}>
              Lock Protocol Registry
            </Button>
            
            <p className="text-[9px] text-center text-on-surface-variant font-bold uppercase tracking-[0.4em] opacity-40">
              System Authorized / Sector 7 Authority / 2026
            </p>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
