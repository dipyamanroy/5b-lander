"use client";
import Marquee from "react-fast-marquee";

export function LogoCloud({ className }: React.ComponentPropsWithoutRef<"div">) {
  const logos = [
    { alt: "SavvyCal", src: "/logo-cloud/1.svg" },
    { alt: "Laravel", src: "/logo-cloud/2.svg" },
    { alt: "Tuple", src: "/logo-cloud/3.svg" },
    { alt: "Transistor", src: "/logo-cloud/4.svg" },
    { alt: "Statamic", src: "/logo-cloud/5.svg" },
  ];

  return (
    <div className={`w-full mx-0 py-4 ${className}`}>
      <Marquee
        gradient={true} 
        speed={40} 
        pauseOnHover={true} 
        loop={0}
        className="flex items-center"
      >
        {logos.map((logo, idx) => (
          <div key={idx} className="mx-18 flex items-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-10 sm:h-9 lg:h-12"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}