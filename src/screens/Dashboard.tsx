import { Users, Watch, Plus, Minus, Siren, UserSquare, MoreHorizontal, AlertCircle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { TopNav } from '../components/TopNav';
import { BottomNav } from '../components/BottomNav';

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="bg-background min-h-screen flex flex-col pb-40 font-sans">
      <TopNav />
      
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-5 pointer-events-none">
        <div className="col-start-1 col-end-13 row-start-1 row-end-13 border-outline" />
      </div>

      <main className="max-w-[1400px] mx-auto px-10 md:px-20 pt-32 w-full relative z-10 flex flex-col gap-20">
        <header className="flex flex-col md:flex-row justify-between items-end gap-10 border-b border-white/5 pb-10">
          <div>
            <div className="stat-label mb-4">Network Status</div>
            <h2 className="hero-text text-white leading-[0.8]">
              Active<br />Venture
            </h2>
          </div>
          <div className="flex gap-10">
            {[
              { icon: Users, label: 'Shared' },
              { icon: Watch, label: 'Linked' }
            ].map(tag => (
              <div key={tag.label} className="flex flex-col gap-2">
                <div className="stat-label">{tag.label}</div>
                <div className="text-sm font-bold tracking-widest text-white uppercase flex items-center gap-2">
                   <tag.icon size={14} /> Protocol v2
                </div>
              </div>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.section 
            whileHover={{ y: -5 }}
            onClick={() => navigate('/status')}
            className="lg:col-span-4 bg-surface border border-white/5 p-12 flex flex-col items-center justify-center text-center relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-all duration-500" />
            <div className="stat-label mb-10">Safety Index</div>
            <div className="relative w-56 h-56 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle className="text-white/5" cx="112" cy="112" fill="transparent" r="100" stroke="currentColor" strokeWidth="2" />
                <motion.circle 
                  initial={{ strokeDashoffset: 628.32 }}
                  animate={{ strokeDashoffset: 628.32 * (1 - 0.85) }}
                  transition={{ duration: 2, ease: 'easeOut' }}
                  className="text-white" cx="112" cy="112" fill="transparent" r="100" stroke="currentColor" strokeDasharray="628.32" strokeWidth="2" strokeLinecap="none" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-7xl font-light text-white tracking-tighter">85</span>
                <span className="stat-label mt-2">Optimal</span>
              </div>
            </div>
            <p className="text-on-surface-variant text-[11px] uppercase tracking-widest mt-10 leading-relaxed font-bold">Safe for solo exploration / Tokyo Hub</p>
          </motion.section>

          <section className="lg:col-span-8 h-[500px] lg:h-auto bg-surface border border-white/5 relative overflow-hidden group">
            <img 
              className="w-full h-full object-cover grayscale opacity-20 brightness-200" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRUgiWQR9uz2YYn4YJN5r8kdmOTtSYjQR-jKfTQHABd6PFuGTI3bWQd1bABF9-c4hmW2UklheRhX33PBz07Unk0fJAvcQlrwnSbJuFLIgnuSdvWqT72-3koIUORV58m1MAkWw0_lrntMH2akLeLofdoPj9JpLfakEHzQCdczXiBEVTI1iUdSyCprXTGklt9rBhNzBV1XI_Hhfo3cyjF9nowP9hG-ZhttNHuSIKO6VX494porQP4QSSn4zC1cJGKzg5DZh68LFO0gU" 
              alt="Sector Map"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-10 left-10 p-8 glass-card">
              <div className="stat-label mb-2">Current Coordinates</div>
              <div className="text-sm font-bold tracking-widest text-white uppercase">Shibuya District / Safe</div>
            </div>
            <div className="absolute bottom-10 right-10 flex flex-col gap-4">
              <button className="bg-white/5 p-4 border border-white/10 hover:bg-white/10 transition-colors"><Plus size={20} /></button>
              <button className="bg-white/5 p-4 border border-white/10 hover:bg-white/10 transition-colors"><Minus size={20} /></button>
            </div>
          </section>

          <section className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <button 
              onClick={() => navigate('/sos')}
              className="h-48 bg-error text-white flex flex-col items-center justify-center gap-4 hover:brightness-110 transition-all border border-transparent"
            >
              <Siren size={40} strokeWidth={1.5} />
              <span className="text-[11px] font-bold uppercase tracking-[4px]">Initiate SOS</span>
            </button>
            <div className="md:col-span-2 bg-surface p-10 border border-white/5">
              <div className="flex justify-between items-center mb-8">
                <h3 className="stat-label text-white">Recent Intelligence</h3>
                <MoreHorizontal className="text-on-surface-variant cursor-pointer" />
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-8 group">
                  <div className="stat-label mt-1">12:04</div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-bold text-white uppercase tracking-wider">Crowd Alert: Meiji Shrine</p>
                    <p className="text-[11px] text-on-surface-variant uppercase tracking-wide leading-relaxed">High density detected / Recalculating path.</p>
                  </div>
                  <AlertCircle size={16} className="text-error" />
                </div>
                <div className="flex items-start gap-8 group">
                  <div className="stat-label mt-1">10:45</div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-bold text-white uppercase tracking-wider">Safe Path Updated</p>
                    <p className="text-[11px] text-on-surface-variant uppercase tracking-wide leading-relaxed">System optimization complete.</p>
                  </div>
                  <CheckCircle size={16} className="text-secondary" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <div className="fixed right-10 top-1/2 -translate-y-1/2 sidebar-text">
        SafeTrail / Vol. 024 / Digital Infrastructure
      </div>
      <BottomNav />
    </div>
  );
}
