"use client"
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  const logos = [
    { alt: "SavvyCal", src: "/logo-cloud/1.svg" },
    { alt: "Laravel", src: "/logo-cloud/2.svg" },
    { alt: "Tuple", src: "/logo-cloud/3.svg" },
    { alt: "Transistor", src: "/logo-cloud/4.svg" },
    { alt: "Statamic", src: "/logo-cloud/5.svg" }
  ];

  return (
    <div className={clsx('relative w-full', className)}>
      <motion.div 
        className="flex gap-40 py-4"
        animate={{
          x: [0, -1035],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* First set of logos */}
        {logos.map((logo, idx) => (
          <img
            key={`logo-1-${idx}`}
            alt={logo.alt}
            src={logo.src}
            className="h-9 shrink-0 sm:h-8 lg:h-12"
          />
        ))}
        {/* Duplicated set for seamless loop */}
        {logos.map((logo, idx) => (
          <img
            key={`logo-2-${idx}`}
            alt={logo.alt}
            src={logo.src}
            className="h-9 shrink-0 sm:h-8 lg:h-12"
          />
        ))}
      </motion.div>
    </div>
  );
}