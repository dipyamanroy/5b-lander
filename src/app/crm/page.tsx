import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead } from '@/components/text'
import { CheckCircle, Code, Layers, Server, Cloud, RefreshCcw, Zap } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Dynamics 365 CRM Solutions',
  description: 'Optimize, automate, and enhance your business with tailored Dynamics 365 CRM development and customization.',
}

function Header() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/screenshots/dynamics.png')" }}>
      <div className="absolute inset-0 bg-white/30" /> {/* Light overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white" /> {/* Fades down */}
      <Container className="relative mt-58 z-10">
        <Heading as="h1" className="text-gray-900">Custom Dynamics 365 CRM Solutions</Heading>
        <Lead className="mt-6 max-w-3xl mx-auto text-gray-800">
          Optimize, automate, and enhance your business with tailored Dynamics 365 CRM development and customization.
        </Lead>
      </Container>
    </div>
  )
}


const services = [
  { icon: <Code size={32} className="text-[#90EE90]/70" />, title: 'Custom PCF Controls', description: 'Enhance user experience with interactive, responsive PowerApps Component Framework (PCF) controls.' },
  { icon: <Layers size={32} className="text-[#34BEA5]/70" />, title: 'Plugin Development', description: 'Extend Dynamics 365 functionality with custom plugins to automate business logic and enhance CRM processes.' },
  { icon: <Server size={32} className="text-[#1D80AF]/70" />, title: 'System Integrations', description: 'Seamlessly integrate Dynamics 365 with third-party applications, legacy systems, and cloud services.' },
  { icon: <Zap size={32} className="text-[#90EE90]/70" />, title: 'Workflow Automation', description: 'Streamline operations with automated workflows, Power Automate flows, and business rules.' },
  { icon: <Cloud size={32} className="text-[#34BEA5]/70" />, title: 'Customization & Configuration', description: 'Modify and extend Dynamics 365 entities, forms, views, and business logic.' },
  { icon: <RefreshCcw size={32} className="text-[#1D80AF]/70" />, title: 'Performance Optimization', description: 'Enhance CRM performance with optimizations, scalability improvements, and best practices.' },
]

function ServicesSection() {
  return (
    <Container className="mt-24">
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
  { step: 'Solution Design & Development', description: 'Building tailored solutions aligned with Dynamics 365 best practices.' },
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
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#34BEA5]/70 text-white font-bold">{index + 1}</div>
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
