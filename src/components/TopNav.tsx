import { ShieldPlus } from 'lucide-react';

export function TopNav() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md flex justify-between items-center px-10 py-6 border-b border-outline">
      <div className="flex items-center gap-4">
        <div className="text-[20px] font-black uppercase tracking-tighter text-white">SafeTrail</div>
      </div>
      <nav className="hidden md:flex gap-10">
        {['Status', 'Map', 'ID', 'Alerts'].map(item => (
          <button key={item} className="nav-item text-on-surface-variant hover:text-white transition-colors">{item}</button>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <div className="h-8 w-8 rounded-none bg-surface border border-outline flex items-center justify-center overflow-hidden grayscale">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_TVwQKjsiFOL8pZGWrsPoFCeaQOLazrXOtbd-f9K1C8oVSNwaqflQ0cL78GPWL22lMMr2J-Q5b-MBCzX4dntJdXkaoLGisiPab5Z19lqVrANs0CyF7Jat3DMvXwxzRtp_rEp_azdOQ5lzCfnypcmlafNDiuK3adE7Npb1LbnZYBXpPBY2gMWgZvCMwYq90nn1nUqo5E6fms6FwJUB4iFb9UYT6c0OLzCvJ82cYS0C4VAxyF-L8ekuO58xgn_3DWGPu7oS10fnmBY" 
            alt="Gov Seal" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
}
