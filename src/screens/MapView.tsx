import { Search, MapPin, Navigation, Mountain, Layers, Crosshair, Plus, Minus, AlertTriangle, ShieldCheck, Thermometer, Wind, Zap, Info } from 'lucide-react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { TopNav } from '../components/TopNav';
import { BottomNav } from '../components/BottomNav';

export function MapView() {
  const navigate = useNavigate();

  return (
    <div className="bg-background min-h-screen flex flex-col relative overflow-hidden font-sans">
      <TopNav />
      
      <main className="flex-grow w-full relative pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#0D0D0F]">
          <img 
            className="w-full h-full object-cover grayscale opacity-20 brightness-[0.4] invert" 
            src="https://picsum.photos/seed/tokyo-map/1920/1080?blur=2" 
            alt="Base Map"
            referrerPolicy="no-referrer"
          />
          
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="absolute top-20 left-10 w-96 flex flex-col gap-6 z-20">
          <div className="glass-card p-1">
             <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                <input 
                  className="w-full bg-transparent border-none px-16 py-6 text-white focus:outline-none font-mono text-[11px] tracking-widest placeholder:text-white/20 uppercase" 
                  placeholder="Query Registry..." 
                  type="text" 
                />
             </div>
          </div>

          <div className="bg-surface border border-white/5 p-10 space-y-10">
            <h3 className="stat-label">System Active / Sector 7</h3>
            <div className="space-y-6">
              {[
                { label: 'Proximity Check', value: '0.2km' },
                { label: 'Neural Mesh', value: 'Stable' },
                { label: 'Signal Strength', value: 'High' }
              ].map(stat => (
                <div key={stat.label} className="flex justify-between items-center pb-4 border-b border-white/5 last:border-none">
                  <span className="stat-label">{stat.label}</span>
                  <span className="text-[11px] font-bold text-white uppercase tracking-widest">{stat.value}</span>
                </div>
              ))}
            </div>
            <Button variant="primary" fullWidth className="text-[10px]">Refresh Telemetry</Button>
          </div>
        </div>

        <div className="absolute top-20 right-10 flex flex-col gap-4 z-20">
           <button className="bg-surface p-6 border border-white/5 hover:border-white/20 transition-all text-white"><Navigation size={18} /></button>
           <button className="bg-surface p-6 border border-white/5 hover:border-white/20 transition-all text-white/60"><Layers size={18} /></button>
           <button className="bg-surface p-6 border border-white/5 hover:border-white/20 transition-all text-white/60"><Info size={18} /></button>
        </div>

        <div className="absolute bottom-20 left-10 right-10 z-20 flex justify-between items-end">
           <div className="glass-card p-10 flex gap-10 items-center border border-white/10">
              <div className="w-16 h-16 bg-white flex items-center justify-center text-black">
                <MapPin size={24} />
              </div>
              <div className="space-y-2">
                <div className="stat-label">Terminal Destination</div>
                <h4 className="text-xl font-light text-white uppercase tracking-widest">Shibuya Scramble Node</h4>
                <div className="flex gap-4 items-center">
                   <span className="text-[10px] font-bold text-secondary uppercase tracking-[3px]">Active Risk: Low</span>
                   <span className="w-1 h-1 bg-white/20 rounded-full" />
                   <span className="text-[10px] font-bold text-white/40 uppercase tracking-[3px]">12 Mins Transit</span>
                </div>
              </div>
           </div>
           
           <div className="flex flex-col items-end gap-2 pr-4 pb-4">
              <div className="sidebar-text">Tokyo Metropolitan / Area Hub</div>
              <div className="text-[9px] font-bold text-white uppercase tracking-[5px] opacity-20">Live Coordinate Mapping.v2</div>
           </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
           <div className="relative">
              <div className="w-40 h-40 border border-white/10 rounded-full animate-ping opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-4 h-4 bg-white shadow-[0_0_20px_white]" />
              </div>
           </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
