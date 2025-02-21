import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Software Development Services',
  description: 'Building high-performance web applications with .NET and ReactJS for businesses of all sizes.',
}

function Header() {
  return (
    <Container className="mt-58">
      <Heading as="h1">Custom Software Development Services</Heading>
      <Lead className="mt-6 max-w-3xl">
        Building high-performance web applications with .NET and ReactJS for businesses of all sizes.
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
                <td className="border border-gray-300 px-4 py-3 font-medium">Custom Web Application Development</td>
                <td className="border border-gray-300 px-4 py-3">
                  Design and develop high-performance web applications using .NET and ReactJS.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Enterprise Solutions</td>
                <td className="border border-gray-300 px-4 py-3">
                  Develop scalable enterprise applications to enhance productivity and streamline operations.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">API Development & Integration</td>
                <td className="border border-gray-300 px-4 py-3">
                  Build secure APIs for seamless integration with third-party services and databases.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">UI/UX Design & Frontend Development</td>
                <td className="border border-gray-300 px-4 py-3">
                  Craft responsive, user-friendly interfaces using ReactJS for a modern web experience.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Cloud-Based Application Development</td>
                <td className="border border-gray-300 px-4 py-3">
                  Deploy scalable and reliable applications using Azure and AWS cloud technologies.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Maintenance & Support</td>
                <td className="border border-gray-300 px-4 py-3">
                  Ensure long-term success with ongoing maintenance, security updates, and performance optimizations.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Refactoring & Modernization</td>
                <td className="border border-gray-300 px-4 py-3">
                  Upgrade legacy applications by migrating them to the latest .NET and ReactJS frameworks.
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
                <td className="border border-gray-300 px-4 py-3 font-medium">Consultation & Requirement Analysis</td>
                <td className="border border-gray-300 px-4 py-3">
                  We understand your business needs and define the best approach.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Design & Development</td>
                <td className="border border-gray-300 px-4 py-3">
                  We craft user-friendly designs and develop high-performance applications.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Testing & Deployment</td>
                <td className="border border-gray-300 px-4 py-3">
                  We rigorously test and deploy solutions to ensure reliability and security.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Ongoing Support & Enhancements</td>
                <td className="border border-gray-300 px-4 py-3">
                  We provide continuous support and improvements for long-term success.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </Container>
  )
}

export default function Software() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Header />
      <ContentSection />
      <Footer />
    </main>
  )
}
