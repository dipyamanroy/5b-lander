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
    <nav className={`relative hidden lg:flex ${isScrolled ? "gap-4" : "gap-6"}`}>
      {links.map(({ href, label }) => (
        <div key={href} className={`relative flex ${isScrolled ? "" : "border-l border-t border-black/5"}`}>
          <Link
            href={href}
            className={`flex items-center px-5 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/[2.5%] ${
              isScrolled ? "hover:bg-gray-100 rounded-md transition-colors" : ""
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

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden bg-white/90 backdrop-blur-sm shadow-lg rounded-xl p-4 mt-2 rounded-lg shadow-md absolute top-full left-0 right-0 z-50">
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
            <Link href={href} className="text-base font-medium text-gray-950 ">
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
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Disclosure
      as="header"
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-lg rounded-xl" : "bg-transparent"
      } p-4`}
    >
      <div className={`transition-all duration-300 ${isScrolled ? "py-0.2 px-4" : "py-5 px-6"}`}>
        <div className="relative flex justify-between items-center">
          <div className="relative flex gap-6">
            <div className={`py-3 ${isScrolled ? "" : "border-l border-t border-black/5"}`}>
              <Link href="/" title="Home">
                <Image src="/logo.png" alt="5th Bridge Logo" width={127} height={34} />
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
      <MobileNav />
    </Disclosure>
  )
}