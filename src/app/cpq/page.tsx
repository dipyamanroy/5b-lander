import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Powertrak CPQ Customization & Implementation',
  description: 'Streamline your sales process with customized Powertrak CPQ solutions tailored to your business needs.',
}

function Header() {
  return (
    <Container className="mt-58">
      <Heading as="h1">Powertrak CPQ Customization & Implementation</Heading>
      <Lead className="mt-6 max-w-3xl">
        Streamline your sales process with customized Powertrak CPQ solutions tailored to your business needs.
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
                <td className="border border-gray-300 px-4 py-3 font-medium">Powertrak CPQ Implementation</td>
                <td className="border border-gray-300 px-4 py-3">
                  Deploy Powertrak CPQ to streamline product configuration, pricing, and quoting.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Customization & Enhancements</td>
                <td className="border border-gray-300 px-4 py-3">
                  Tailor Powertrak CPQ to meet unique business needs with custom rules, workflows, and UI enhancements.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Integration with CRM & ERP</td>
                <td className="border border-gray-300 px-4 py-3">
                  Connect Powertrak CPQ with Microsoft Dynamics 365, Salesforce, and ERP systems.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Guided Selling & Workflow Automation</td>
                <td className="border border-gray-300 px-4 py-3">
                  Enhance sales with guided selling tools, automated approvals, and streamlined workflows.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">3D Visualization & Interactive Configuration</td>
                <td className="border border-gray-300 px-4 py-3">
                  Leverage advanced 3D visualization for interactive product configuration.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Training & Support</td>
                <td className="border border-gray-300 px-4 py-3">
                  Ensure team success with expert training, ongoing support, and performance optimization.
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
                <td className="border border-gray-300 px-4 py-3 font-medium">Discovery & Planning</td>
                <td className="border border-gray-300 px-4 py-3">
                  We analyze business needs and outline the best CPQ solution.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Customization & Development</td>
                <td className="border border-gray-300 px-4 py-3">
                  Our experts tailor Powertrak CPQ to your workflow and requirements.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Seamless Integration</td>
                <td className="border border-gray-300 px-4 py-3">
                  We connect CPQ with your existing CRM & ERP systems for smooth data flow.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Testing & Deployment</td>
                <td className="border border-gray-300 px-4 py-3">
                  Rigorous testing ensures a flawless implementation.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Training & Ongoing Support</td>
                <td className="border border-gray-300 px-4 py-3">
                  We provide training and continuous support to maximize your ROI.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </Container>
  )
}

export default function CPQ() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Header />
      <ContentSection />
      <Footer />
    </main>
  )
}
