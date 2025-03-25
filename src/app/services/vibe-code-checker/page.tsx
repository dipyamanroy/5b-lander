import { Container } from "@/components/container"
import { Footer } from "@/components/footer"
import { Gradient, GradientBackground } from "@/components/gradient"
import { Heading, Lead, Subheading } from "@/components/text"
import { BentoCard } from "@/components/bento-card"
import { MessageSquare, Database, BarChart2, Users, Briefcase, Brain, Zap, Layout, Scale, MessageSquareDot, Binoculars } from "lucide-react"
import type { Metadata } from "next"
import { Button } from "@/components/button"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Vibe Code Checker",
  description: "You vibe, we check.",
}

function Hero() {
    return (
      <div className="relative">
        <div className="rounded-4xl overflow-hidden">
          <Image
                  src="/banner3.png"
                  alt="Banner Image"
                  layout="fill" 
                  objectFit="cover" 
                  className="absolute inset-2 rounded-[2.5rem] p-2"
                  style={{ filter: "blur(0.5px)" }}
                />
          <Gradient className="absolute inset-2 p-3 rounded-4xl ring-1 ring-black/5 ring-inset bg-gradient-to-r from-orange-200/90 via-blue-200/80 to-blue-400/80" />
        </div>
        <Container className="relative">
          <div className="pt-48 pb-12 sm:pt-32 sm:pb-24 md:pt-52 md:pb-32 flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
            <div className="flex flex-col space-y-2">
            <Binoculars className="w-12 h-12 text-orange-600 sm:w-14 sm:h-14 md:w-16 md:h-16" />
            <h1
              className="font-display text-3xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600"
            >
              Vibe Code Checker
            </h1>
            
          </div>
              <p className="mt-8 max-w text-base sm:text-l md:text-xl font-medium text-gray-950/75">
              Your Code’s Got Good Vibes… And Some Bugs
              </p>
              <p className="mt-8 max-w text-base sm:text-md md:text-l font-normal text-gray-950/75">
              Built an app on a caffeine-fueled weekend? <br /> It might work (for 
              now) – but watch out for the ‘oopsies’ lurking in your code. <br /> We’re the fun 
              cleanup crew that fixes your YOLO-coded mistakes.
              </p>
              <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                <Button variant="secondary" href="mailto:1staskhrsupport@fifthbridgetech.com">
                  Contact Support
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 lg:ml-8 mt-8 sm:mt-10 lg:mt-0"> 
              <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-2xl" // Use absolute positioning for the iframe
                  src="https://www.youtube.com/embed/Ti_9jxxiWnk?si=q8CXQ88HuDM01-7i" // Replace with your YouTube video ID
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
}


function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-18">
      <Container>
        <Subheading dark style={{ display: "flex", alignItems: "center", gap: 8 }}>
        Risks of Vibe Coding
        </Subheading>
        <p className="mt-2 max-w-3xl text-[50px] font-medium text-gray-900 dark:text-white">
          Every ‘Oops’ Has Consequences
        </p>


        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-8 lg:grid-cols-6 lg:grid-rows-1">
        <BentoCard
          dark
          eyebrow="Classic Mistakes"
          title="Hardcoded Credentials or Exposed API Keys"
          description={
            <>
              You’re in a rush, so you quickly write:  
              <pre className="bg-gray-800 text-white p-0 rounded-md mt-2">
                password = "12345"  {"// TODO: change this later"}
              </pre>  
              Spoiler alert: You won’t. Then one day, your repo goes public, or worse, someone reverse-engineers your app. Now, your admin password is floating around the internet.
            </>
          }
          graphic={
            <div className="h-80 bg-[url(/vibe/api.png)] bg-[size:110%] bg-no-repeat bg-center" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          href="https://www.fifthbridgetech.com/products/1staskhr"
        />

          <BentoCard
            dark
            eyebrow="Threat from Hackers"
            title="The One You Didn’t See Coming"
            description="There’s a security hole in your code, but you don’t know about it. Nobody does—until it’s too late. The real nightmare? Hackers already know. Stay paranoid, update regularly, and never assume you’re safe."
            graphic={
              <div className="h-80 bg-[url(/vibe/unknown.jpg)] bg-[size:100%] rounded-t-xl bg-no-repeat bg-center"  />
            }
            fade={['bottom']}
            // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
            href='https://www.fifthbridgetech.com/products/addu-ai-firewall'
          />
        </div>
      </Container>
    </div>
  )
}

  function BentoSection() {
    return (
      <Container className="mt-24">
        <Subheading dark style={{ display: "flex", alignItems: "center", gap: 8 }}>
        Services offered
        </Subheading>
        <p className="mt-2 max-w-3xl text-[50px] font-medium text-gray-900">
        What We Do (So You Keep Vibing)
        </p>
        <h2 className="text-2xl font-semibold text-center mb-12"></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BentoCard
            eyebrow="Code Audit"
            title="Spot the 'Uh-Ohs'"
            description="Think of it as a code 
spa day – we’ll let you know everything that’s creaky or leaky."
            graphic={
              <div className="absolute inset-0 bg-[url(/vibe/codespa.jpg)] bg-[size:110%] bg-no-repeat bg-center" />

            }
            fade={['bottom']}
            className="h-full"
          />
          <BentoCard
            eyebrow="Code Refactoring"
            title="Turn Spaghetti into Clean Code"
            description="We untangle your spaghetti code and refactor it into 
fettuccine alfredo – smooth and easy to digest!"
            graphic={
              <div className="absolute inset-0 bg-[url(/vibe/spaghetti.jpg)] bg-[size:110%] bg-no-repeat bg-center" />
            }
            fade={['bottom']}
            className="h-full"
          />
          <BentoCard
            eyebrow="Security Review"
            title="Lock It Down"
            description="We’ll hunt down any vulnerabilities hiding in the shadows of 
your code."
            graphic={
              <div className="absolute inset-0 bg-[url(/vibe/shield.jpg)] bg-[size:100%] bg-no-repeat bg-center" />
            }
            fade={['bottom']}
            className="h-full"
          />
        </div>
      </Container>
    )
  }
  
  function CTASection() {
    return (
      <Container className="my-24">
        <div className="bg-gradient-to-r from-orange-200 via-red-200 to-red-300 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-semibold">Ready for a Code Cleanup?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-700">
          Let’s turn your risky “ship now, fix later” code into something you 
          can truly brag about. Reach out and let’s chat about how we can help polish up 
          your project. No judgment – we love a good fixer-upper!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="secondary" href="mailto:1staskhrsupport@fifthbridgetech.com">
                  Contact Support
                </Button>
          </div>
        </div>
      </Container>
    )
  }

export default function FirstAskHR() {
  return (
    <main className="overflow-hidden">
        <Hero />
      <DarkBentoSection />
      <BentoSection />
      <CTASection />
      <Footer />
    </main>
  )
}