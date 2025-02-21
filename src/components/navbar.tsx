"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { Bars2Icon, ChevronDownIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import { Link } from "./link"
import Image from "next/image"

const links = [
  { href: "/about-us", label: "About Us" },
  { href: "/careers", label: "Careers" },
]

const serviceLinks = [
  { href: "/services/crm", label: "CRM Solutions" },
  { href: "/services/cpq", label: "CPQ Implementation" },
  { href: "/services/software", label: "Software Development" },
]

function DesktopNav({ isScrolled }: { isScrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative hidden lg:flex gap-6">
      {/* About Us */}
      <Link
        href="/about-us"
        className="px-5 py-3 text-base font-medium text-gray-950 data-hover:bg-black/[2.5%] rounded-md transition-colors"
      >
        About Us
      </Link>

      {/* Services Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-5 py-3 text-base font-medium text-gray-950 flex items-center gap-2 data-hover:bg-black/[2.5%] rounded-md transition-colors"
        >
          Services <ChevronDownIcon className="w-4 h-4" />
        </button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 mt-2 w-56 bg-white/80 backdrop-blur-md shadow-lg rounded-lg overflow-hidden"
          >
            {serviceLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block px-5 py-3 text-base text-gray-950 data-hover:bg-black/[2.5%] transition-colors"
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>

      {/* Careers */}
      <Link
        href="/careers"
        className="px-5 py-3 text-base font-medium text-gray-950 data-hover:bg-black/[2.5%] rounded-md transition-colors"
      >
        Careers
      </Link>
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
    <DisclosurePanel className="lg:hidden bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-4 mt-2 absolute top-full left-0 right-0 z-50">
      <div className="flex flex-col gap-6 py-4">
        {links.map(({ href, label }) => (
          <motion.div
            key={href}
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
          >
            <Link href={href} className="text-base font-medium text-gray-950" onClick={close}>
              {label}
            </Link>
          </motion.div>
        ))}

        {/* Mobile Services Section */}
        <div>
          <motion.p
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="text-base font-medium text-gray-950"
          >
            Services
          </motion.p>
          <div className="pl-4 flex flex-col gap-3 mt-2">
            {serviceLinks.map(({ href, label }) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, rotateX: -90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
              >
                <Link href={href} className="text-sm text-gray-700" onClick={close}>
                  {label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const isMobile = window.innerWidth < 1024

      if (scrollY < 20 || (!isMobile && scrollY >= maxScroll - 10)) {
        setIsScrolled(false)
      } else {
        setIsScrolled(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Disclosure>
      {({ open, close }) => (
        <header
          className={`fixed top-4 left-2 right-2 z-50 transition-all duration-300 ${
            isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg rounded-xl" : "bg-transparent"
          } p-4`}
        >
          <div className={`transition-all duration-300 ${isScrolled ? "py-2 px-4" : "py-5 px-4"}`}>
            <div className="relative flex justify-between items-center">
              <div className="relative flex gap-6">
                {/* Logo */}
                <div className={`py-3 transition-all duration-300 ${isScrolled ? "ml-0" : "md:ml-20 mt-8 scale-120 md:scale-180"}`}>
                  <Link href="/" title="Home" onClick={() => close()}>
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

                {/* Banner */}
                <div className={`relative hidden items-center py-3 lg:flex transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-0"}`}>
                  {banner}
                </div>
              </div>

              {/* Navigation */}
              <DesktopNav isScrolled={isScrolled} />
              <MobileNavButton />
            </div>
          </div>

          {/* Mobile Navigation */}
          <MobileNav close={close} />
        </header>
      )}
    </Disclosure>
  )
}
