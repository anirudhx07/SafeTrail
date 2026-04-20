import { ShieldCheck, UserRound, Map as MapIcon, Bell, Download, Fingerprint, Terminal, Train, DoorOpen, Hotel, ShieldPlus, Hospital, Hash, Link, Shield, Globe, Cpu } from 'lucide-react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { TopNav } from '../components/TopNav';
import { BottomNav } from '../components/BottomNav';

export function DigitalID() {
  const navigate = useNavigate();

  return (
    <div className="bg-background min-h-screen flex flex-col pb-40 font-sans">
      <TopNav />
      <main className="max-w-[1400px] mx-auto px-10 md:px-20 pt-32 w-full flex flex-col gap-20">
        <header className="flex flex-col md:flex-row justify-between items-end gap-10 border-b border-white/5 pb-10">
          <div>
            <div className="stat-label mb-4">Identity Matrix</div>
            <h2 className="hero-text text-white leading-[0.8]">
              Digital<br />Aura
            </h2>
          </div>
          <div className="flex gap-12">
            <div className="text-right">
              <div className="stat-label">Security Tier</div>
              <div className="text-sm font-bold tracking-widest text-secondary mt-1 uppercase">LEVEL-S VERIFIED</div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 flex flex-col gap-12">
             <div className="stat-label uppercase tracking-[6px]">Credential Core</div>
             <motion.div 
               initial={{ x: -20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               className="bg-white p-1 pb-1 shadow-2xl relative"
             >
                <div className="bg-black text-white p-12 space-y-20 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                      <Globe size={200} strokeWidth={1} />
                   </div>
                   
                   <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <div className="text-[10px] font-bold text-white/40 uppercase tracking-[4px]">Verified Holder</div>
                        <h3 className="text-2xl font-light uppercase tracking-widest text-white">Julian Morrison</h3>
                      </div>
                      <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                         <Fingerprint size={20} className="text-white/40" />
                      </div>
                   </div>

                   <div className="space-y-4">
                      <div className="stat-label text-white/40 uppercase tracking-widest">Aura Hash</div>
                      <div className="text-sm font-mono text-white tracking-[5px] break-all">X-8839-4402-9X-2026</div>
                   </div>

                   <div className="flex justify-between items-end border-t border-white/10 pt-12">
                      <div className="space-y-2">
                        <div className="stat-label text-white/40 uppercase tracking-widest">Expiration</div>
                        <div className="text-xs font-bold text-white uppercase tracking-widest">Nov 15, 2026</div>
                      </div>
                      <div className="w-20 h-20 bg-white/5 flex items-center justify-center grayscale">
                         <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCho1AcEUvIqsDALwltIEk-Mcj2NzUxyU6qB2-xQjMtFs4ni8_mGGJJDl_uvyl3ElJHFcDKB_DGQuv7Jyj74TqKwk4q7zjj8Om1pBGHqrwgD3ma57Vq4NgToVcaxlOCZJmQ2HjgVOg-8wDE4g31wffRurCUbXPHA8dlv-Vz5B-Hsop53JtftBadh3CJh0NgHlTrZj1bmO17GodHi5D6K8Ja-SgAv2yQ631QD0s_0wv1eJkjl56Wzhm963ubJn9UZ3jSESklIjAOF1Y" alt="QR" className="w-12 h-12 invert opacity-40" referrerPolicy="no-referrer" />
                      </div>
                   </div>
                </div>
             </motion.div>

             <div className="bg-surface border border-white/5 p-10 space-y-8">
                <div className="flex items-center gap-4">
                   <Cpu size={18} className="text-white/40" />
                   <div className="stat-label">Neural Signature</div>
                </div>
                <div className="space-y-4">
                   <p className="text-[11px] text-on-surface-variant uppercase tracking-wide leading-relaxed font-bold">Your biometric hash is synchronized across Sector 7 decentralized hubs. Real-time verification is active.</p>
                   <Button variant="outline" className="w-full py-4 uppercase text-[10px] tracking-[4px] border border-white/10 font-bold" icon={<Download size={14} />}>Generate Payload</Button>
                </div>
             </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-12">
            <div className="bg-surface border border-white/5 p-12 space-y-12">
              <div className="stat-label text-white uppercase tracking-[4px]">System Permissions</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  { icon: Shield, label: 'Medical Override', status: 'AUTHORIZED' },
                  { icon: Train, label: 'Hub Transit', status: 'UNRESTRICTED' },
                  { icon: Hospital, label: 'Rapid Response', status: 'PRIORITY-1' },
                  { icon: Globe, label: 'Sector Mobility', status: 'OMNIPRESENT' }
                ].map(p => (
                  <div key={p.label} className="p-8 border border-white/5 hover:border-white/20 transition-all space-y-4">
                    <p.icon size={20} className="text-white/40" />
                    <div>
                       <div className="stat-label mb-2">{p.label}</div>
                       <div className="text-sm font-bold text-white tracking-widest">{p.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface border border-white/5 p-12 space-y-12">
               <div className="stat-label text-white uppercase tracking-[4px]">Temporal Logs</div>
               <div className="space-y-6">
                 {[
                   { label: 'Gate Entrance / North Hub', time: '09:45 AM', type: 'BIO-SCAN' },
                   { label: 'Registry Sync / Hotel Aura', time: '08:12 AM', type: 'D-AID' },
                   { label: 'Public Transit / Sector 4', time: '07:30 AM', type: 'D-AID' }
                 ].map(log => (
                   <div key={log.label + log.time} className="flex justify-between items-center pb-6 border-b border-white/5 last:border-none">
                     <div className="space-y-1">
                        <div className="text-sm font-light text-white uppercase tracking-widest">{log.label}</div>
                        <div className="text-[9px] font-bold text-white/40 uppercase tracking-[4px]">{log.type} // VERIFIED</div>
                     </div>
                     <div className="text-[11px] font-mono text-white tracking-widest">{log.time}</div>
                   </div>
                 ))}
               </div>
            </div>
            
            <p className="text-[9px] text-center text-on-surface-variant font-bold uppercase tracking-[0.4em] opacity-40">
              Matrix V.4.2 / Secured Node Protocol / 2026
            </p>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
