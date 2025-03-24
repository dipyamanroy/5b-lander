import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Heading, Lead } from '@/components/text'
import { Code, Server, Zap, Cog, Gauge, Blocks, BotIcon } from 'lucide-react'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tailored Dynamics 365 CRM Solutions',
  description: 'Transform your Microsoft Dynamics 365 CRM into a customized powerhouse that fits your business needs perfectly.',
}

function Header() {
  return (
    <Container className="mt-58 my-32">
      <Heading as="h3">Tailored 
        <Image 
          src="/dynamics365logo.png"  
          alt="Dynamics 365 Logo"
          width={225}
          height={225}
          className="inline-block align-middle mx-5"
        />CRM Solutions</Heading> 
      <Lead className="mt-6 max-w-3xl text-lg md:text-md sm:text-base">
        Is your CRM working for you, or are you working around it? <br/> <br/> At 5th Bridge, we specialize in Microsoft Dynamics 365 CRM, helping mid-market and enterprise businesses turn an off-the-shelf CRM into a perfect fit.
      </Lead>
      <Lead className="mt-6 max-w-3xl text-lg md:text-base sm:text-[10px]">
        We believe your CRM should adapt to your workflows (not the other way around). With our deep experience in system integrations and custom code solutions, we transform Dynamics 365 into a tool that truly supports your team and drives growth.
      </Lead>
    </Container>
  )
}

const services = [
  { icon: <Blocks size={32} className="text-[#90EE90]" />, title: 'Custom Plugin Development', description: 'Have a unique business process or rule? We’ll build custom plugins to automate those processes right inside your CRM.' },
  { icon: <Zap size={32} className="text-[#90EE90]" />, title: 'Workflow Automation', description: 'Tired of repetitive data entry and follow-ups? We create smart workflows and Power Automate flows that take care of the busywork.' },
  { icon: <Server size={32} className="text-[#1D80AF]" />, title: 'System Integrations', description: 'We connect Dynamics 365 CRM with ERP, websites, and third-party applications, ensuring seamless data flow.' },
  { icon: <Code size={32} className="text-[#90EE90]" />, title: 'Custom UI Controls (PCF)', description: 'Enhance user experience with interactive PowerApps Component Framework controls, including custom calendars and dashboards.' },
  { icon: <Cog size={32} className="text-[#34BEA5]" />, title: 'Customization & Configuration', description: 'We tailor your CRM by configuring forms, fields, and business logic to match your processes.' },
  { icon: <Gauge size={32} className="text-[#1D80AF]" />, title: 'ETL & Data Factory Solutions', description: 'Efficiently move, transform, and load your data using Azure Data Factory for timely insights.' },
  { icon: <BotIcon size={32} className="text-[#34BEA5]" />, title: 'AI Copilots & Intelligence', description: 'Supercharge productivity with Microsoft’s AI Copilot features, automating tasks and offering smart insights.' },
]

function ServicesSection() {
  return (
    <Container className="mt-12">
      <h2 className="text-2xl font-semibold text-center">Our Dynamics 365 CRM Services</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`
              bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center
              ${index === services.length - 1 && services.length % 3 === 1 ? "lg:col-start-2" : ""}
              ${index === services.length - 1 && services.length % 2 === 1 ? "md:col-span-2 md:mx-auto md:max-w-md lg:col-span-1" : ""}
            `}
          
>
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-medium">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}


const workflowSteps = [
  { step: 'Consultation & Requirements Gathering', description: 'We meet with you to understand your business needs, pain points, and goals.' },
  { step: 'Solution Design & Development', description: 'We design a custom solution aligned with Dynamics 365 best practices and begin development.' },
  { step: 'Testing & Deployment', description: 'Before launch, we rigorously test the solution in real-world scenarios to ensure it works flawlessly.' },
  { step: 'Ongoing Support & Maintenance', description: 'We provide continuous support to adapt your CRM as your business evolves.' },
]

function WorkflowSection() {
  return (
    <Container className="mt-24 mb-24">
      <h2 className="text-2xl font-semibold text-center">How We Work</h2>
      <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {workflowSteps.map((step, index) => (
          <div key={index} className="relative flex-1 flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#34BEA5] text-white font-bold">{index + 1}</div>
            <h3 className="mt-4 text-lg font-medium">{step.step}</h3>
            <p className="text-gray-600 mt-2">{step.description}</p>
            {index < workflowSteps.length - 1 && (
              <div className="hidden md:block absolute top-6 right-[-20px] w-10 border-t-2 border-gray-300"></div>
            )}
          </div>
        ))}
      </div>
    </Container>
  )
}


export default function CRM() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Header />
      <ServicesSection />
      <WorkflowSection />
      <Footer />
    </main>
  )
}