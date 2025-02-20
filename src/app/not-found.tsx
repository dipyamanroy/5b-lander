import { Container } from "@/components/container";
import { GradientBackground } from "@/components/gradient";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Heading, Lead } from "@/components/text";
import { Button } from "@/components/button";

export default function NotFound() {
  return (
    <main className="relative overflow-hidden">
      <GradientBackground />
      <Container className="relative mt-68 my-120 text-center">
        <Heading as="h1" className="text-6xl font-bold text-gray-900">
          404
        </Heading>
        <Lead className="mt-4 text-gray-600">
          Oops! We haven&apos;t rendered that part yet.
        </Lead>
        <div className="m-10">
          <a href="/" className="">
            <Button variant="secondary">Go Home</Button>
          </a>
        </div>
      </Container>
    </main>
  );
}
