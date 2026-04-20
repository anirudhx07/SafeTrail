import { motion } from 'motion/react';
import { Eye, UserCheck, Lock, Siren } from 'lucide-react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { TopNav } from '../components/TopNav';

export function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="bg-background min-h-screen flex flex-col relative font-sans pt-32 pb-40">
      <TopNav />
      
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-5 pointer-events-none">
        <div className="col-start-1 col-end-13 row-start-1 row-end-13 border border-white/5" />
        <div className="col-start-4 col-end-9 row-start-2 row-end-11 bg-white/5" />
      </div>

      <main className="flex-1 w-full max-w-[1400px] mx-auto px-10 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        <div className="md:col-span-12 lg:col-span-7 space-y-12">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="h-0.5 w-12 bg-white"></div>
              <div className="h-0.5 w-24 bg-secondary"></div>
            </div>
            <h2 className="hero-text text-white leading-[0.8] mb-10">
              Neural<br />Safety<br /><span className="opacity-20 text-[0.4em] tracking-[0.2em]">MESH</span>
            </h2>
            <p className="text-[14px] text-on-surface-variant leading-relaxed max-w-xl uppercase tracking-widest font-light">
              Proprietary neural architecture providing asynchronous risk monitoring and sector-based geofencing for architectural and metropolitan landscapes.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col gap-2">
              <div className="stat-label">System Node</div>
              <div className="text-sm font-bold tracking-widest text-white uppercase">Sector 7 Authority</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="stat-label">Encryption</div>
              <div className="text-sm font-bold tracking-widest text-white uppercase">End-to-End Vault</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-12 lg:col-span-5 relative group mt-10 lg:mt-0">
          <div className="relative aspect-[3/4] w-full bg-surface overflow-hidden border border-white/10 group-hover:border-white/30 transition-all duration-700">
            <img 
              className="w-full h-full object-cover grayscale brightness-75 hover:scale-105 transition-transform duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsG6rqlGxEjqD4VAqASKGCYN0uSUVXxod4S6K_sIA5rtQcTYmNIl-2lAEG20BjZcRgdlzKPw48E3AIhy5BjALVazY7GMU_RB4KCIXieP8jCQ18hJZ_vDd5cvxpRIXlf5TYTJ_NU0ZEA7UoUhG1jqmZ7C2ZwkapKAaI43lP9kb-LzoXcde4iemJ8Gntm4OgofSQVaCY62PbjPNop9XrlBsorKq9Kfr0Ck8rxaD8s01SUFniF23XQf6KXbeY5DsDhNF-hmiwZqE5rfA" 
              alt="Architecture"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
            
            <div className="absolute bottom-10 left-10 right-10 glass-card p-8">
              <div className="flex items-center gap-5">
                <div className="bg-white text-black p-4 rounded-none">
                  <Eye size={24} />
                </div>
                <div>
                  <div className="stat-label">Active Monitoring</div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-white mt-1">Live Telemetry Feed</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-6 -left-6 glass-card p-6 border border-white/20 hidden md:block">
            <div className="flex items-center gap-4">
              <UserCheck size={20} className="text-secondary" />
              <span className="stat-label text-white">Identity Lock</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 w-full px-10 md:px-20 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center bg-background z-50">
        <div className="flex gap-12 items-center mb-8 md:mb-0">
          <div className="stat-group">
            <div className="stat-label">Registry</div>
            <div className="text-xs font-bold tracking-widest text-white">AES-256</div>
          </div>
          <div className="stat-group">
            <div className="stat-label">Status</div>
            <div className="text-xs font-bold tracking-widest text-white">STABLE</div>
          </div>
        </div>
        
        <div className="flex gap-4 w-full md:w-auto">
          <Button variant="outline" className="flex-1 md:flex-none border-white/10" onClick={() => navigate('/login')}>Sign In</Button>
          <Button variant="primary" className="flex-1 md:flex-none" onClick={() => navigate('/login')}>Initialize</Button>
        </div>
      </footer>

      <div className="fixed left-6 bottom-1/2 -translate-y-1/2 sidebar-text">
        SafeTrail AI / Neural Mesh Protocol / Vol 024
      </div>
    </div>
  );
}
