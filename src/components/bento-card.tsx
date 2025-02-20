"use client"

import type React from "react"

import { clsx } from "clsx"
import { motion } from "framer-motion"
import { Subheading } from "./text"
import Link from "next/link"

export function BentoCard({
  dark = false,
  className = "",
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
  href,
}: {
  dark?: boolean
  className?: string
  eyebrow: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
  graphic: React.ReactNode
  fade?: ("top" | "bottom")[]
  href?: string
}) {
  const content = (
    <>
      <div className="relative h-80 shrink-0">
        {graphic}
        {fade.includes("top") && (
          <div className="absolute inset-0 bg-linear-to-b from-white to-50% group-data-dark:from-gray-800 group-data-dark:from-[-25%]" />
        )}
        {fade.includes("bottom") && (
          <div className="absolute inset-0 bg-linear-to-t from-white to-50% group-data-dark:from-gray-800 group-data-dark:from-[-25%]" />
        )}
      </div>
      <div className="relative p-10">
        <Subheading as="h3" dark={dark}>
          {eyebrow}
        </Subheading>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 group-data-dark:text-white">{title}</p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600 group-data-dark:text-gray-400">{description}</p>
      </div>
    </>
  )

  const cardProps = {
    initial: "idle",
    whileHover: "active",
    variants: {
      idle: { scale: 1 },
      active: { scale: 1.02, transition: { duration: 0.2 } },
    },
    "data-dark": dark ? "true" : undefined,
    className: clsx(
      className,
      "group relative flex flex-col overflow-hidden rounded-lg",
      "bg-white ring-1 shadow-xs ring-black/5",
      "data-dark:bg-gray-800 data-dark:ring-white/15",
      href && "cursor-pointer",
    ),
  }

  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a {...cardProps} className={clsx(cardProps.className, "block")}>
          {content}
        </motion.a>
      </Link>
    )
  }

  return <motion.div {...cardProps}>{content}</motion.div>
}

