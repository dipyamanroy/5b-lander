"use client"

import { useRouter } from "next/navigation"

export default function Careers() {
  const router = useRouter();
    return (
        router.push("/")
    )
}