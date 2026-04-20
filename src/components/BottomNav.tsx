import { ShieldCheck, UserRound, Map as MapIcon, Bell } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export function BottomNav() {
  const navItems = [
    { icon: ShieldCheck, label: 'Index', path: '/status' },
    { icon: UserRound, label: 'Vault', path: '/my-id' },
    { icon: MapIcon, label: 'Venture', path: '/map' },
    { icon: Bell, label: 'Feed', path: '/alerts' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-8 pb-10 pt-4 bg-background z-50 border-t border-outline md:hidden">
      {navItems.map((item) => (
        <NavLink
          key={item.label}
          to={item.path}
          className="relative flex flex-col items-center justify-center transition-all duration-300"
        >
          {({ isActive }) => (
            <>
              <item.icon 
                size={20} 
                strokeWidth={isActive ? 2.5 : 1.5} 
                className={cn(isActive ? 'text-white' : 'text-on-surface-variant hover:text-white')} 
              />
              <span className={cn(
                "text-[9px] uppercase tracking-[2px] font-bold mt-2",
                isActive ? 'text-white' : 'text-on-surface-variant'
              )}>{item.label}</span>
              {isActive && (
                <motion.div layoutId="nav-glow" className="absolute -top-4 w-12 h-px bg-white" />
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
