import { Container } from "@/components/container";
import { GradientBackground } from "@/components/gradient";
import { Heading, Lead } from "@/components/text";
import { Button } from "@/components/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex flex-col min-h-screen w-full overflow-hidden">
      <GradientBackground />
      <Container className="flex flex-col items-center justify-center flex-grow text-center w-full px-4">
        <Lead className="mt-10 text-gray-900">404</Lead>
        <Heading as="h1" className="text-6xl font-bold text-gray-900">Page not found</Heading>
        <Lead className="mt-10 text-gray-600">Oops! We haven&apos;t rendered that part yet.</Lead>
        <div className="m-10">
          <Link href="/">
            <Button variant="primary">Go Home</Button>
          </Link>
        </div>
      </Container>
    </main>
  )
}