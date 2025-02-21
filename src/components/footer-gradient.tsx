import { clsx } from 'clsx';

export function FooterGradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-gradient-to-b from-white/0 via-[#90EE90]/70 via-40% to-[#1D80AF]/70 sm:bg-gradient-to-b sm:via-[#34BEA5]/70',
      )}
    />
  );
}