import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Dynamics 365 CRM Solutions',
  description: 'Optimize, automate, and enhance your business with tailored Dynamics 365 CRM development and customization.',
}

function Header() {
  return (
    <Container className="mt-58">
      <Heading as="h1">Custom Dynamics 365 CRM Solutions</Heading>
      <Lead className="mt-6 max-w-3xl">
        Optimize, automate, and enhance your business with tailored Dynamics 365 CRM development and customization.
      </Lead>
    </Container>
  )
}

function ContentSection() {
  return (
    <Container className="mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Side - Our Services Table */}
        <div>
          <h2 className="text-2xl font-semibold">Our Services</h2>
          <table className="mt-6 w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left">Service</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Custom PCF Controls</td>
                <td className="border border-gray-300 px-4 py-3">
                  Enhance user experience with interactive, responsive, and feature-rich PowerApps Component Framework (PCF) controls.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Plugin Development</td>
                <td className="border border-gray-300 px-4 py-3">
                  Extend Dynamics 365 functionality with custom plugins that automate business logic and enhance CRM processes.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">System Integrations</td>
                <td className="border border-gray-300 px-4 py-3">
                  Seamlessly integrate Dynamics 365 with third-party applications, legacy systems, and cloud services.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Workflow Automation</td>
                <td className="border border-gray-300 px-4 py-3">
                  Streamline operations with automated workflows, Power Automate flows, and business rules.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Customization & Configuration</td>
                <td className="border border-gray-300 px-4 py-3">
                  Modify and extend Dynamics 365 entities, forms, views, and business logic.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Performance Optimization</td>
                <td className="border border-gray-300 px-4 py-3">
                  Enhance CRM performance with optimizations, scalability improvements, and best-practice implementations.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Right Side - How We Work Table */}
        <div>
          <h2 className="text-2xl font-semibold">How We Work</h2>
          <table className="mt-6 w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left">Step</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Consultation & Requirements Gathering</td>
                <td className="border border-gray-300 px-4 py-3">
                  We understand your business needs and identify pain points.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Solution Design & Development</td>
                <td className="border border-gray-300 px-4 py-3">
                  We build tailored solutions aligned with Dynamics 365 best practices.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Testing & Deployment</td>
                <td className="border border-gray-300 px-4 py-3">
                  Rigorous testing ensures seamless deployment and performance.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Ongoing Support & Maintenance</td>
                <td className="border border-gray-300 px-4 py-3">
                  We provide post-deployment support to ensure long-term success.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </Container>
  )
}

export default function CRM() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Header />
      <ContentSection />
      <Footer />
    </main>
  )
}
