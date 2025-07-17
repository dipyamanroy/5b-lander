import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { FlaskConical } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  description:
    'Specialists in Digital Transformation.',
}

function Hero() {
  return (
    <div className="relative">
      <div className="rounded-4xl overflow-hidden"> {/* Parent container */}
      <Image
        src="/banner.jpg"
        alt="Banner Image"
        layout="fill" 
        objectFit="cover" 
        className="absolute inset-2 rounded-[2.5rem] p-2"
        style={{ filter: "blur(1.0px)" }}
      />
      <Gradient className="absolute inset-2 p-3 rounded-4xl ring-1 ring-black/5 ring-inset" />
    </div>
      <Container className="relative">
        
        <div className="pt-48 pb-24 sm:pt-48 sm:pb-32 md:pt-64 md:pb-48">
        <h1 className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-gray-950 leading-tight">
          Specialists in Digital Transformation
        </h1>
        <p className="mt-8 max-w text-base sm:text-xl md:text-2xl font-medium text-gray-950/75">
          5th Bridge brings in more efficiency to your business,
          <span className="hidden md:inline"> <br /> </span>
          <span className="inline md:hidden"> </span>
          so you can focus on what you do best, serving your customers.
        </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="https://cal.com/challu">Contact Us</Button>
            <Button variant="secondary" href="/careers">
              Careers
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          A snapshot of your entire sales pipeline.
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/app.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>AI Consulting</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        AI That Delivers, <br /> Not Just Demos.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-1 mb-32">
        <BentoCard
          eyebrow="Discovery"
          title="Find your AI goldmine, then strike it."
          description="Uncover hidden opportunities and inefficiencies lurking in your business processes."
          graphic={
            <div
              className="h-80 bg-no-repeat"
              style={{
                backgroundImage: "url('/giphy3.gif')",
                backgroundSize: "700px 700px",
                backgroundPosition: "left -75px top -80px",
              }}
            />
          }
          fade={['bottom']}
          className="lg:col-span-2 lg:rounded-tl-4xl lg:rounded-bl-4xl"
          href='/services/ai-consulting'
        />
        <BentoCard
          eyebrow="Execution"
          title={
              <span>From strategy to live systems that deliver.</span>
          }
          description="With the right AI opportunities, we build solutions that deliver business value."      
          graphic={
            <div
              className="h-80 bg-no-repeat"
              style={{
                backgroundImage: "url('/giphy2.gif')",
                backgroundSize: "650px 366px",
                backgroundPosition: "left 0px top -10px",
              }}
            />
          }  
          fade={['bottom']}
          className="lg:col-span-2"
          href='/services/ai-consulting'
        />
        <BentoCard
          eyebrow="Future-proof"
          title="We implement solutions for the future"
          description="Not only do build AI, but launch and maintain them, for new use cases and continued growth."
          graphic={
            <div
              className="h-80 bg-no-repeat"
              style={{
                backgroundImage: "url('/giphy5.gif')",
                backgroundSize: "450px 450px",
                backgroundPosition: "left -10px top -20px",
              }}
            />
          }  
          fade={['bottom']}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-tr-4xl lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-24">
      <Container>
      <Subheading dark style={{ display: "flex", alignItems: "center", gap: 8 }}>Software services</Subheading>
      <Heading dark as="h3" className="mt-2 max-w-3xl">
        Our Service Portfolio.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-1">
        <BentoCard
          dark
          eyebrow="Customer Relationship Management"
            title={
              <span className="flex items-center gap-2 flex-wrap">
                <img
                  src="/dynamics365.svg"
                  alt="Dynamics 365 Logo"
                  className="h-10 w-auto"
                />
                Dynamics 365 Solutions
              </span>
            }
          description="We specialize in creating custom solutions for Microsoft Dynamics 365 CRM. Whether you need tailored UI components, automated processes, or deep system integrations, we deliver robust and scalable solutions."
          graphic={
            <div className="relative h-80">
            <div
              className="absolute inset-0 bg-no-repeat"
              style={{
                backgroundImage: "url('/screenshots/dynamics.png')",
                backgroundSize: "719px 406px",
                backgroundPosition: "left -5px top -5px",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1e2939]" />
          </div>
          }
          fade={['bottom']}
          className="lg:col-span-2 lg:rounded-tl-4xl lg:rounded-bl-4xl"
          href='/services/crm'
        />
        <BentoCard
          dark
          eyebrow="Configure Price Quote"
          title={
            <span className="flex items-center gap-2 flex-wrap">
              <img
                src="/revalize.png"
                alt="Revalize Logo"
                className="h-10 w-auto"
              />
              Revalize CPQ Solutions
            </span>
          }
          description="We specialize in customizing and implementing Revalize CPQ to optimize your sales operations, and automate pricing and quoting, ensuring seamless integration with your existing CRM and ERP systems."
          graphic={
            <div className="relative h-80">
              <div
                className="h-80 bg-no-repeat"
                style={{
                  backgroundImage: "url('/screenshots/cpq.png')",
                  backgroundSize: "657px 370px",
                  backgroundPosition: "left -20px top -25px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1e2939]" />
            </div>
          }  
          fade={['bottom']}
          className="lg:col-span-2"
          href='/services/cpq'
        />
        <BentoCard
          dark
          eyebrow="Software"
          title="Software Development"
          description="We develop robust, scalable, and secure web applications tailored to your business needs. With expertise in the .NET framework and ReactJS, we create seamless digital experiences that drive efficiency and growth. "graphic={
            <div className="relative h-80">
              <div
                className="h-80 bg-no-repeat"
                style={{
                  backgroundImage: "url('/screenshots/app.jpg')",
                  backgroundSize: "648px 430px",
                  backgroundPosition: "left -60px top -70px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1e2939]" />
            </div>
          } 
          fade={['bottom']}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-tr-4xl lg:rounded-br-4xl"
          href='/services/software'
        />
      </div>
    </Container>
    </div>
  )
}

function BentoSection2() {
  return (
    <div className='mt-32'>
    <Container>
      <Subheading>Products</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Some of our offerings
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-1">
        
        <BentoCard
            
            eyebrow="Human Resources"
            title="Have AI Answer all your employees' HR queries with 1stAskHR"
            description="Whether you are a part of an HR team or an employee seeking quick solutions, 1stAskHR is your go-to tool for fast, accurate, and reliable answers. It integrates seamlessly with your organization’s HR database, ensuring every answer aligns with your company’s policies and procedures. "
            graphic={
              <div className="h-80 bg-[url(/screenshots/1staskhr.png)] bg-[size:1050px_400px] bg-no-repeat"  />
            }
            fade={['bottom']}
            className="max-lg:rounded-l-4xl lg:col-span-4 lg:rounded-l-4xl"
            href='https://www.fifthbridgetech.com/products/1staskhr'
          />
          <BentoCard
            eyebrow="Security"
            title="Protect every communication with Addu AI Firewall"
            description="Our AI-driven security detects unknown threats by learning from known attacks while proactively blocking malicious access. "
            graphic={<LogoTimeline />}
            fade={['bottom']}

            // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-r-4xl"
            href='https://www.fifthbridgetech.com/products/addu-ai-firewall'
          />
      </div>
    </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        {/* <Container className="mt-10">
          <LogoCloud />
        </Container> */}
        <div className="bg-gradient-to-b from-white via-gray-100 to-white py-32">
          <BentoSection/>
          <DarkBentoSection />
          <BentoSection2/>
        </div>
      </main>
      {/* <Testimonials /> */}
      <Footer />
    </div>
  )
}
