import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Heading, Lead } from '@/components/text'
import { CheckCircle, Settings, RefreshCcw, Cloud, Code, Link } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CPQ Implementation & Customization',
  description: 'Optimize your sales process with tailored CPQ solutions for seamless configuration, pricing, and quoting.',
}

function Header() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/screenshots/cpq.png')" }}>
      <div className="absolute inset-0 bg-white/30" /> {/* Light overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white" /> {/* Fades down */}
      <Container className="relative mt-58 z-10">
        <Heading as="h1" className="text-gray-900">Powertrak CPQ Customization & Implementation</Heading>
        <Lead className="mt-6 max-w-3xl mx-auto text-gray-800">
          Streamline your sales process with customized Powertrak CPQ solutions tailored to your business needs.
        </Lead>
      </Container>
    </div>
  )
}


const services = [
  { icon: <Code size={32} className="text-[#90EE90]/70" />, title: 'CPQ Deployment', description: 'Implement and configure CPQ solutions to streamline quoting and pricing.' },
  { icon: <Settings size={32} className="text-[#34BEA5]/70" />, title: 'Customization & Enhancements', description: 'Tailor CPQ workflows, rules, and UI to fit business needs.' },
  { icon: <Link size={32} className="text-[#1D80AF]/70" />, title: 'CRM & ERP Integration', description: 'Seamlessly connect CPQ with Microsoft Dynamics, Salesforce, and ERP systems.' },
  { icon: <RefreshCcw size={32} className="text-[#90EE90]/70" />, title: 'Guided Selling & Automation', description: 'Optimize sales with guided workflows and approval automation.' },
  { icon: <Cloud size={32} className="text-[#34BEA5]/70" />, title: 'Cloud & On-Prem Solutions', description: 'Deploy CPQ on the cloud or on-premises for flexibility and security.' },
  { icon: <CheckCircle size={32} className="text-[#1D80AF]/70" />, title: 'Training & Support', description: 'Empower teams with expert training and ongoing support.' },
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
  { step: 'Discovery & Planning', description: 'Assess business needs and outline an optimal CPQ strategy.' },
  { step: 'Customization & Development', description: 'Configure workflows, pricing rules, and UI enhancements.' },
  { step: 'Integration & Testing', description: 'Seamlessly integrate CPQ with CRM & ERP, ensuring a smooth workflow.' },
  { step: 'Deployment & Optimization', description: 'Launch CPQ with performance monitoring and enhancements.' },
  { step: 'Training & Ongoing Support', description: 'Provide training and continuous support to maximize ROI.' },
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

export default function CPQ() {
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
