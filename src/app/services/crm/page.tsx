import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead } from '@/components/text'
import { CheckCircle, Code, Layers, Server, Cloud, RefreshCcw, Zap } from 'lucide-react'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Dynamics 365 CRM Solutions',
  description: 'Optimize, automate, and enhance your business with tailored Dynamics 365 CRM development and customization.',
}

function Header() {
  return (
      <Container className="mt-58 my-32">
      <Heading as="h3">Custom           
        <Image 
            src="/dynamics365logo.png"  
            alt="Dynamics 365 Logo"
            width={200}
            height={200}
            className="inline-block align-middle mx-2"
          />CRM Solutions</Heading> 
        <Lead className="mt-6 max-w-3xl">
          Optimize, automate, and enhance your business with tailored Dynamics 365
          CRM development and customization.
        </Lead>
      </Container>
  )
}

const services = [
  { 
    icon: <Code size={32} className="text-[#90EE90]" />,
    title: 'Custom PCF Controls', // Keeping text for title
    description: (
      <>
        Enhance user experience with interactive, responsive PowerApps
        <Image 
          src="/powerapps.png"  // Local image replacing "PowerApps Component Framework (PCF)"
          alt="PowerApps Component Framework (PCF)"
          width={50} 
          height={50} 
          className="inline-block align-middle mx-1"
        /> 
        controls.
      </>
    )
  },
  { icon: <Layers size={32} className="text-[#34BEA5]" />, title: 'Plugin Development', description: 'Extend CRM functionality with custom plugins to automate business logic and enhance processes.' },
  { icon: <Server size={32} className="text-[#1D80AF]" />, title: 'System Integrations', description: 'Seamlessly integrate with third-party applications, legacy systems, and cloud services.' },
  { icon: <Zap size={32} className="text-[#90EE90]" />, title: 'Workflow Automation', 
    description: (
      <>
        Streamline operations with automated workflows, Power Automate 
        <Image 
          src="/powerautomate.png"  // Local image replacing "PowerApps Component Framework (PCF)"
          alt="PowerApps Component Framework (PCF)"
          width={40} 
          height={40} 
          className="inline-block align-middle mx-1"
        /> 
        flows, and business rules.
      </>
    )
  },
  { icon: <Cloud size={32} className="text-[#34BEA5]" />, title: 'Customization & Configuration', description: 'Modify and extend CRM entities, forms, views, and business logic.' },
  { icon: <RefreshCcw size={32} className="text-[#1D80AF]" />, title: 'Performance Optimization', description: 'Enhance CRM performance with optimizations, scalability improvements, and best practices.' },
]

function ServicesSection() {
  return (
    <Container className="mt-12">
      <h2 className="text-2xl font-semibold text-center">Our Services</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
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
  { step: 'Consultation & Requirements Gathering', description: 'Understanding your business needs and identifying pain points.' },
  { step: 'Solution Design & Development', description: 'Building tailored solutions aligned with best practices.' },
  { step: 'Testing & Deployment', description: 'Ensuring seamless deployment and optimal performance.' },
  { step: 'Ongoing Support & Maintenance', description: 'Providing post-deployment support to ensure long-term success.' },
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
