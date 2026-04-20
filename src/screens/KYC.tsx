import { FileText, ShieldAlert, UserCheck, ShieldCheck, Camera, RotateCw } from 'lucide-react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { TopNav } from '../components/TopNav';

export function KYC() {
  const navigate = useNavigate();

  return (
    <div className="bg-background min-h-screen flex flex-col font-sans pt-32 pb-40">
      <TopNav />
      <main className="max-w-[1400px] mx-auto px-10 md:px-20 w-full flex flex-col gap-20">
        <section className="w-full flex flex-col md:flex-row justify-between items-end gap-12 border-b border-white/5 pb-12">
          <div className="flex flex-col gap-4">
            <span className="stat-label">Verification Phase 01</span>
            <h2 className="hero-text text-white leading-none">Identity<br />Scan</h2>
          </div>
          <div className="flex flex-col gap-6 w-full md:w-64">
             <div className="flex justify-between stat-label">
                <span>Progress</span>
                <span>33%</span>
             </div>
             <div className="h-0.5 w-full bg-white/5">
                <motion.div initial={{ width: 0 }} animate={{ width: '33%' }} className="h-full bg-white" />
             </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-4 flex flex-col gap-12">
            <div className="bg-surface p-12 border border-white/5 space-y-10">
              <div className="flex items-center gap-4">
                <FileText className="text-white/40" size={20} />
                <h3 className="text-sm font-bold tracking-widest uppercase text-white">Registry Details</h3>
              </div>
              <form className="space-y-8">
                <div className="space-y-3">
                  <label className="stat-label">Full Legal Identity</label>
                  <input className="w-full bg-background border border-white/5 p-5 text-white focus:border-white outline-none font-mono text-sm" placeholder="PASSPORT NAME" type="text" />
                </div>
                <div className="grid grid-cols-1 gap-8">
                  <div className="space-y-3">
                    <label className="stat-label">Origin</label>
                    <select className="w-full bg-background border border-white/5 p-5 text-white focus:border-white outline-none font-mono text-sm uppercase">
                      <option>UNITED STATES</option>
                      <option>GERMANY</option>
                      <option>JAPAN</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            
            <div className="glass-card p-8 border border-white/5 flex gap-6">
              <ShieldAlert className="text-white/20 shrink-0" />
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-white uppercase tracking-widest leading-relaxed">Protocol: Zero Storage</p>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-wide leading-relaxed">Biometric data is processed in volatile memory. Hardware-level encryption only.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-12">
            <div className="bg-surface border border-white/5 p-12 relative">
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-4">
                  <Camera className="text-white/40" size={20} />
                  <h3 className="text-sm font-bold tracking-widest uppercase text-white">Document Acquisition</h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-secondary animate-pulse" />
                  <span className="stat-label text-white">Live Stream</span>
                </div>
              </div>
              <div className="relative aspect-[16/9] bg-black border border-white/10 flex items-center justify-center overflow-hidden">
                <img 
                  className="w-full h-full object-cover opacity-40 grayscale" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3xmmAN-UMrwgGeew5y2tFPEPQ4S6OyQnu8eCJiMpWjL4qK-baB01choAptZPDbmKmiBGFgICnm9Jm78kWxTkSKKAdEcQgLBIHo3IJGbC9tLuwkf0RBQgR4g6ikO5nkqHZJiyUFHZKAqGpMSDmiqHjFdUW9SMTyThbFvY7K5_CuH-B4vJA7vjEGFgOOilJI1FEET99pnPHcUXRZKPeoi2nXVrq4rSVBLx52bvxrdnaY9hNeAeiaoTFF69oXrJII78sl64vfNHBIrw" 
                  alt="Scan"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border-[40px] border-black/60 shadow-inner"></div>
                <div className="absolute inset-20">
                  <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-white" />
                  <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-white" />
                  <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-white" />
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-white" />
                  <motion.div 
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    className="absolute left-0 w-full h-px bg-white/50 shadow-[0_0_20px_white]" 
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-surface border border-white/5 p-8 flex flex-col gap-6 items-center text-center">
                 <div className="stat-label">Biometric Feed</div>
                 <div className="w-32 h-32 bg-black border border-white/10 relative group">
                    <img className="w-full h-full object-cover grayscale opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE5JQ_6JuwUqC9SMkiShK-SPVjrnmHLyZ5anpv0g60L3nF-wQ0MLimotdAp7zGoQFm4W6CjEl2NZxsfmJYRSya_GiUvg4KzzTDGOtDeGH-JJtJOsLhKnaGT7zu-Y5TZ3wuP3c1tkqX7ZHibvFuHooizcYTmiBZW2T80fW2EZ56qFbHXFuWuEhIGhaEuP8r4XlrCHkKiEh7ft9I1rusxUYUZSDWth69PGJB8pwcUESMtl4kh085UGsaubBVYb8Ce6QR_I3VP790QA0" alt="Selfie" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                      <RotateCw className="text-white" size={24} />
                    </div>
                 </div>
                 <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Matched 99.8%</span>
              </div>
              <div className="bg-surface border border-white/5 p-8 flex flex-col justify-center items-center gap-6">
                <ShieldCheck size={48} className="text-white/20" />
                <div>
                   <h4 className="text-sm font-bold text-white uppercase tracking-[4px]">Validation</h4>
                   <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-2">Authority Node Sector 7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white/5 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <button className="stat-label hover:text-white transition-colors" onClick={() => navigate(-1)}>Abort Application</button>
          <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto">
             <div className="text-right hidden md:block">
                <div className="stat-label">Next Sequence</div>
                <div className="text-[10px] font-bold text-white uppercase tracking-widest mt-1">Movement Registry</div>
             </div>
             <Button variant="primary" className="px-20 text-sm" onClick={() => navigate('/itinerary')}>
                Sync Metadata
             </Button>
          </div>
        </div>
      </main>

      <div className="fixed left-6 bottom-1/2 -translate-y-1/2 sidebar-text">
        Identity / Sector 7 / Unified Registry
      </div>
    </div>
  );
}
