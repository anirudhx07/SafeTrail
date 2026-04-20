import { ReactNode } from 'react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'error';
  onClick?: () => void;
  icon?: ReactNode;
  fullWidth?: boolean;
}

export function Button({ children, className, variant = 'primary', onClick, icon, fullWidth }: ButtonProps) {
  const variants = {
    primary: 'bg-white text-black hover:bg-white/90',
    secondary: 'bg-surface text-on-surface border border-outline hover:bg-surface/80',
    outline: 'border border-outline text-on-surface hover:bg-white/5',
    ghost: 'text-on-surface/60 hover:text-white',
    error: 'bg-error text-white hover:bg-error/90',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        'group relative flex items-center justify-center gap-3 py-4 px-10 text-[11px] font-bold uppercase tracking-[2px] transition-all duration-300',
        fullWidth && 'w-full',
        variants[variant],
        className
      )}
    >
      {icon && <span className="flex items-center transition-transform group-hover:scale-110">{icon}</span>}
      <span>{children}</span>
    </motion.button>
  );
}
