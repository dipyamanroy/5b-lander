import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead } from '@/components/text'
import { CheckCircle, Code, Layers, Server, Cloud, RefreshCcw, Zap } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Software Development Services',
  description: 'Building high-performance web applications with .NET and ReactJS for businesses of all sizes.',
}

function Header() {
  return (
    <div 
      className="relative w-full h-[500px] flex items-center justify-center text-center bg-cover bg-center" 
      style={{ backgroundImage: "url('/screenshots/app.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/30" /> {/* Light overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white" /> {/* Fades down */}
      <Container className="relative mt-58 z-10">
        <Heading as="h1" className="text-gray-900">Custom Software Development Services</Heading>
        <Lead className="mt-6 max-w-3xl mx-auto text-gray-800">
          Building high-performance web applications with .NET and ReactJS for businesses of all sizes.
        </Lead>
      </Container>
    </div>
  )
}


const services = [
  { icon: <Code size={32} className="text-[#90EE90]" />, title: 'Custom Web Apps', description: 'High-performance applications using .NET & ReactJS.' },
  { icon: <Layers size={32} className="text-[#34BEA5]" />, title: 'Enterprise Solutions', description: 'Scalable apps for business efficiency.' },
  { icon: <Server size={32} className="text-[#1D80AF]" />, title: 'API Development', description: 'Secure and seamless third-party integrations.' },
  { icon: <Zap size={32} className="text-[#90EE90]" />, title: 'UI/UX Design', description: 'Modern, responsive, and user-friendly interfaces.' },
  { icon: <Cloud size={32} className="text-[#34BEA5]" />, title: 'Cloud Solutions', description: 'Deploying apps on AWS & Azure for reliability.' },
  { icon: <RefreshCcw size={32} className="text-[#1D80AF]" />, title: 'Maintenance & Support', description: 'Ongoing performance optimization and security.' },
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
  { step: 'Consultation & Analysis', description: 'Understanding your business needs to define the best approach.' },
  { step: 'Design & Development', description: 'Crafting user-friendly designs and building applications.' },
  { step: 'Testing & Deployment', description: 'Ensuring reliability and security before launching.' },
  { step: 'Ongoing Support', description: 'Continuous improvements for long-term success.' },
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

export default function Software() {
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
