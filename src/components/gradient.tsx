import Image from 'next/image';
import { clsx } from 'clsx';

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-linear-115 from-[#90EE90]/70 from-28% via-[#34BEA5]/70 via-70% to-[#1D80AF]/70 sm:bg-linear-145',
      )}
    />
  );
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -top-44 -right-60 h-60 w-[36rem] transform-gpu md:right-0',
          'bg-linear-115 from-[#90EE90]/70 from-28% via-[#34BEA5]/70 via-70% to-[#1D80AF]/70',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  );
}