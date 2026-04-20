import { ShieldCheck, UserRound, Map as MapIcon, Bell, Search, Filter, Download, Activity, Globe, ShieldAlert, Cpu, Database, Server, Smartphone, Users, Terminal, Info, BarChart3, AlertTriangle } from 'lucide-react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="bg-background min-h-screen flex flex-col text-white font-sans">
      <header className="px-10 md:px-20 py-10 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div className="flex flex-col gap-4">
          <div className="stat-label">National Command Center</div>
          <h1 className="hero-text text-white leading-none">Authority</h1>
        </div>
        <div className="flex items-center gap-10">
          <div className="text-right">
            <div className="stat-label">System State</div>
            <div className="text-sm font-bold text-secondary uppercase tracking-[4px] mt-1">Global Stable // Node 7 Active</div>
          </div>
          <div className="w-16 h-16 border border-white/10 flex items-center justify-center">
             <Activity size={20} className="text-white/40" />
          </div>
        </div>
      </header>

      <main className="flex-1 px-10 md:px-20 py-20 flex flex-col gap-20">
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-12">
           {[
              { icon: Globe, label: 'Active Clusters', val: '4,289' },
              { icon: ShieldAlert, label: 'Neural Alerts', val: '12' },
              { icon: Users, label: 'Citizen Registry', val: '1.24M' },
              { icon: Database, label: 'Relay Sync', val: '99.9%' }
           ].map(stat => (
              <div key={stat.label} className="bg-surface border border-white/5 p-10 space-y-8 flex flex-col justify-between group hover:border-white/20 transition-all">
                 <stat.icon className="text-white/20 group-hover:text-white transition-colors" size={24} />
                 <div className="space-y-2">
                    <div className="stat-label">{stat.label}</div>
                    <div className="text-4xl font-light tracking-tighter">{stat.val}</div>
                 </div>
              </div>
           ))}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-20">
           <div className="lg:col-span-8 space-y-12">
              <div className="bg-surface border border-white/5 p-12 space-y-12">
                 <div className="flex justify-between items-center">
                    <div className="stat-label uppercase tracking-[4px]">Unified Feed</div>
                    <div className="flex gap-4">
                       <button className="stat-label text-white/40 border border-white/5 px-4 py-2 hover:text-white transition-colors">Daily</button>
                       <button className="stat-label text-white border border-white/20 px-4 py-2">Cycle</button>
                    </div>
                 </div>
                 <div className="space-y-8">
                    {[
                      { time: '14:24:02', event: 'Biometric Handshake', node: 'Airport-HND', status: 'Authorized' },
                      { time: '14:22:45', event: 'Neural Anomaly Detected', node: 'Shibuya-4C', status: 'Warning' },
                      { time: '14:20:12', event: 'SOS Vector Invoke', node: 'Shinjuku-H2', status: 'Emergency' }
                    ].map(log => (
                      <div key={log.time} className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-white/5 gap-6">
                        <div className="flex gap-10">
                          <div className="stat-label w-24">{log.time}</div>
                          <div className="space-y-2">
                            <div className="text-lg font-light uppercase tracking-widest">{log.event}</div>
                            <div className="text-[10px] font-bold text-white/40 uppercase tracking-[4px]">{log.node}</div>
                          </div>
                        </div>
                        <div className="stat-label text-white uppercase tracking-[4px]">{log.status}</div>
                      </div>
                    ))}
                 </div>
                 <Button fullWidth className="text-[10px] tracking-[6px] py-6">Access Full Ledger</Button>
              </div>
           </div>

           <div className="lg:col-span-4 space-y-12">
              <div className="bg-white p-12 text-black space-y-10">
                 <Terminal size={32} strokeWidth={1} />
                 <div className="space-y-2">
                    <h3 className="text-2xl font-light uppercase tracking-widest leading-none">Resource<br />Allocation</h3>
                    <p className="text-[10px] font-bold uppercase tracking-[4px] opacity-40">System Core / Area Cluster 7</p>
                 </div>
                 <div className="space-y-8">
                    {[
                      { label: 'Cloud Latency', val: 78 },
                      { label: 'ID Verification', val: 45 },
                      { label: 'Response Units', val: 92 }
                    ].map(bar => (
                      <div key={bar.label} className="space-y-4">
                        <div className="flex justify-between stat-label text-black/60">
                           <span>{bar.label}</span>
                           <span>{bar.val}%</span>
                        </div>
                        <div className="h-0.5 w-full bg-black/5">
                           <motion.div initial={{ width: 0 }} animate={{ width: `${bar.val}%` }} className="h-full bg-black" />
                        </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative aspect-square border border-white/10 overflow-hidden group">
                 <img 
                   className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-all duration-1000" 
                   src="https://picsum.photos/seed/admin-map/1000/1000" 
                   alt="Admin Map"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-background/60" />
                 <div className="absolute inset-0 flex flex-col items-center justify-center p-12 gap-6 text-center">
                    <BarChart3 size={32} className="text-white/20" />
                    <div className="stat-label text-white">Zone Density Heatmap</div>
                    <Button variant="outline" className="text-[9px] tracking-[4px] py-4 px-10 border-white/20">Expand Vision</Button>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <footer className="px-10 md:px-20 py-10 bg-surface border-t border-white/5 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.5em] text-white/20">
        <span>Restricted Command Shell // Secure-ST.AI</span>
        <div className="flex gap-10">
          <span>AES-256</span>
          <span>Tokyo.HQ</span>
        </div>
      </footer>
    </div>
  );
}
