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
        className="absolute inset-2 rounded-[2.5rem] p-2.5"
        style={{ filter: "blur(1.5px)" }}
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
            <Button href="mailto:rohit@fifthbridgetech.com">Contact Us</Button>
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
    <div className='mb-32'>
<Container>
      <Subheading>Services</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        How we help your business
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-1">
        
        <BentoCard
          eyebrow="Dynamics 365 CRM"
          title="Dynamics 365 CRM Solutions"
          description="We specialize in creating custom solutions for Microsoft Dynamics 365 CRM. Whether you need tailored UI components, automated processes, or deep 
system integrations, we deliver robust and scalable solutions. "
          graphic={
            <div className="h-80 bg-[url(/screenshots/dynamics.png)] bg-[size:1000px_560px] bg-[left_-10px_top_-10px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-2 lg:rounded-bl-4xl"
          href='/services/crm'
        />
        <BentoCard
          eyebrow="Powertrak CPQ"
          title="Powertrak CPQ Solutions"
          description="We specialize in customizing and implementing Powertrak CPQ to optimize your sales 
operations, and automate pricing and quoting, ensuring seamless integration with your existing CRM and ERP systems. 
 "
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/cpq.png)] bg-[size:1100px_650px] bg-[left_-500px_top_-100px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-2"
          href='/services/cpq'
        />
        <BentoCard
          eyebrow="Software"
          title="Software Development Services"
          description="We develop robust, scalable, and secure web applications tailored to your 
business needs. With expertise in the .NET framework and ReactJS, we create seamless 
digital experiences that drive efficiency and growth. "
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/app.jpg)] bg-[size:1100px_650px] bg-[left_-300px_top_-200px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
          href='/services/software'
        />
      </div>
    </Container>
    </div>
    
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>AI Research</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Working on the Cutting Edge
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-1">
          <BentoCard
            dark
            eyebrow="Human Resources"
            title="Have AI Answer all your employees' HR queries with 1stAskHR"
            description="Whether you are a part of an HR team or an employee seeking quick solutions, 1stAskHR is your go-to tool for fast, accurate, and reliable answers. It integrates seamlessly with your organization’s HR database, ensuring every answer aligns with your company’s policies and procedures. "
            graphic={
              <div className="h-85 bg-[url(/screenshots/1staskhr.png)] bg-[size:851px_344px] bg-no-repeat"  />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
            href='https://1staskhr.com'
          />
          <BentoCard
            dark
            eyebrow="Security"
            title="Protect every communication with Addu AI Firewall"
            description="Our AI-driven security detects unknown threats by learning from known attacks while proactively blocking malicious access. "
            graphic={<LogoTimeline />}
            // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          {/* <BentoCard
            dark
            eyebrow="Meetings"
            title="Smart call scheduling"
            description="Automatically insert intro calls into your leads' calendars without their consent."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Engagement"
            title="Become a thought leader"
            description="5th BridgeAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          /> */}
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
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-gradient-to-b from-white via-gray-100 to-white py-32">
          <BentoSection />
          <DarkBentoSection />
        </div>
      </main>
      {/* <Testimonials /> */}
      <Footer />
    </div>
  )
}
