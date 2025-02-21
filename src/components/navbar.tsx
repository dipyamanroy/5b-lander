"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { Bars2Icon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import { Link } from "./link"
import Image from "next/image"

const links = [
  { href: "/about-us", label: "About Us" },
  { href: "/careers", label: "Careers" },
]

function DesktopNav({ isScrolled }: { isScrolled: boolean }) {
  return (
    <nav className={`relative hidden lg:flex ${isScrolled ? "gap-4" : "gap-4"}`}>
      {links.map(({ href, label }) => (
        <div key={href} className={`relative flex ${isScrolled ? "" : ""}`}>
          <Link
            href={href}
            className={`flex items-center px-5 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/[2.5%] ${
              isScrolled ? "hover:bg-gray-100 rounded-md transition-colors" : "hover:bg-gray-100 rounded-md transition-colors"
            }`}
          >
            {label}
          </Link>
        </div>
      ))}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav({ close }: { close: () => void }) {
  return (
    <DisclosurePanel className="lg:hidden bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-4 mt-2 rounded-lg shadow-md absolute top-full left-0 right-0 z-50">
      <div className="flex flex-col gap-6 py-4">
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: "easeInOut",
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={href}
          >
            <Link href={href} className="text-base font-medium text-gray-950" onClick={close}>
              {label}
            </Link>
          </motion.div>
        ))}
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const isMobile = window.innerWidth < 1024; // Adjust breakpoint as needed (e.g., 768px for tablets)
  
      if (scrollY < 20 || (!isMobile && scrollY >= maxScroll - 10)) {
        setIsScrolled(false); // Fixed at the top (only on desktop when at bottom)
      } else {
        setIsScrolled(true); // Floating in between
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Disclosure>
      {({ open, close }) => ( // Get `close` from Disclosure
        <header
          className={`fixed top-4 left-2 right-2 z-50 transition-all duration-300 ${
            isScrolled ? "bg-white/80 backdrop-blur-sm shadow-lg rounded-xl" : "bg-transparent"
          } p-4`}
        >
          <div className={`transition-all duration-300 ${isScrolled ? "py-0.2 px-4" : "py-5 px-4"}`}>
            <div className="relative flex justify-between items-center">
              <div className="relative flex gap-6">
              <div
                className={`py-3 transition-all duration-300 ${isScrolled ? "ml-0" : "md:ml-20 mt-8 scale-120 md:scale-180"}`}
              >
                <Link href="/" title="Home"   onClick={(e) => {close() }}>
                  <Image
                    src="/logo.png"
                    alt="5th Bridge Logo"
                    width={127}
                    height={34}
                    style={{
                      filter: isScrolled ? "contrast(2.5) brightness(1.8)" : "brightness(0)",
                    }}
                  />
                </Link>
                </div>
                <div className={`relative hidden items-center py-3 lg:flex transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-0"}`}>
                  {banner}
                </div>
              </div>
              <DesktopNav isScrolled={isScrolled} />
              <MobileNavButton />
            </div>
          </div>
          <MobileNav close={close} /> {/* Pass `close` function */}
        </header>
      )}
    </Disclosure>
  )
}
