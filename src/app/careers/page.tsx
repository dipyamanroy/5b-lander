import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Careers',
    description:
      'Careers at 5th Bridge.',
}

function CareersListing() {
  return (
    <Container className="mt-58 my-32">
      <Heading as="h3" className="mt-2">
        Join our team.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We work together as team from all over India with goals to achieve more.
      </Lead>
      <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
        <div className="lg:max-w-2xl">
          <Subheading as="h3">Open positions</Subheading>
          <div>
            <table className="w-full text-left">
              <colgroup>
                <col className="w-2/3" />
                <col className="w-1/3" />
                <col className="w-0" />
              </colgroup>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Location</th>
                  <th scope="col">Read more</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pt-10 pb-0">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      Engineering
                    </div>
                  </th>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Data Analyst Intern</td>
                  <td className="px-0 py-4 text-gray-600">Hyderabad, IN</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      Apply
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">.NET Development Intern</td>
                  <td className="px-0 py-4 text-gray-600">Hyderabad, IN</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      Apply
                    </Button>
                  </td>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">Product Engineer</td>
                  <td className="px-0 py-4 text-gray-600">Hyderabad, IN</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      Apply
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pt-5 pb-0">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      Marketing
                    </div>
                  </th>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Marketing Manager</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      Apply
                    </Button>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default function Careers() {
    return (
        <main className="overflow-hidden">
            <GradientBackground />
            <CareersListing />
            <Footer />
        </main>
    )
}