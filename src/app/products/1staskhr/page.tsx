import { Container } from "@/components/container"
import { Footer } from "@/components/footer"
import { Gradient, GradientBackground } from "@/components/gradient"
import { Heading, Lead } from "@/components/text"
import { BentoCard } from "@/components/bento-card"
import { MessageSquare, Database, BarChart2, Users, Briefcase, Brain, Zap, Layout, Scale, MessageSquareDot } from "lucide-react"
import type { Metadata } from "next"
import { Button } from "@/components/button"
import Image from "next/image"

export const metadata: Metadata = {
  title: "1stAskHR",
  description: "Revolutionize your HR operations with AI-powered instant answers, insights, and streamlined processes.",
}

function Hero() {
    return (
      <div className="relative">
        <div className="rounded-4xl overflow-hidden">
          <Image
                  src="/banner2.jpg"
                  alt="Banner Image"
                  layout="fill" 
                  objectFit="cover" 
                  className="absolute inset-2 rounded-[2.5rem] p-2"
                  style={{ filter: "blur(1.0px)" }}
                />
          <Gradient className="absolute inset-2 p-3 rounded-4xl ring-1 ring-black/5 ring-inset bg-gradient-to-r from-pink-200/80 via-blue-300/80 to-green-300/80" />
        </div>
        <Container className="relative">
          <div className="pt-48 pb-12 sm:pt-32 sm:pb-24 md:pt-52 md:pb-32 flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
            <div className="flex flex-col space-y-2">
            <MessageSquareDot className="w-12 h-12 text-pink-500 sm:w-14 sm:h-14 md:w-16 md:h-16" />
            <h1
              className="font-display text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500"
            >
              1stAskHR
            </h1>
          </div>
              <p className="mt-8 max-w text-base sm:text-xl md:text-2xl font-medium text-gray-950/75">
                Simplifying HR, Empowering Employees.
              </p>
              <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                <Button href="https://1staskhr.com">Visit Website</Button>
                <Button variant="secondary" href="mailto:1staskhrsupport@fifthbridgetech.com">
                  Contact Support
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 lg:ml-8 mt-8 sm:mt-10 lg:mt-0"> 
              <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-2xl" // Use absolute positioning for the iframe
                  src="https://www.youtube.com/embed/Ti_9jxxiWnk?si=q8CXQ88HuDM01-7i" // Replace with your YouTube video ID
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
}

  const features = [
    {
      icon: <MessageSquare size={32} className="text-[#D5006D]" />,
      title: "Instant Q&A",
      description:
        "Get real-time responses to HR-related queries, minimizing downtime for employees and reducing the workload on HR teams.",
    },
    {
      icon: <Database size={32} className="text-[#3F51B5]" />,
      title: "Comprehensive Knowledge Base",
      description: "Ensure accurate answers by leveraging your organization's existing HR database and resources.",
    },
    {
      icon: <BarChart2 size={32} className="text-[#4CAF50]" />,
      title: "AI Insights",
      description: "Spot trends and patterns in employee concerns, helping HR teams proactively address common issues.",
    },
    {
      icon: <Layout size={32} className="text-[#D5006D]" />,
      title: "Easy Navigation",
      description: "Enjoy a clean, intuitive design that ensures a seamless experience for all users.",
    },
    {
      icon: <Scale size={32} className="text-[#3F51B5]" />,
      title: "Scalability",
      description: "From small startups to large enterprises, 1st Ask HR is built to support organizations of all sizes.",
    },
    {
      icon: <Zap size={32} className="text-[#4CAF50]" />,
      title: "Time Efficiency",
      description: "Save valuable time with immediate answers instead of waiting for HR responses.",
    },
  ]
  
  
  function FeaturesSection() {
    return (
      <Container className="mt-24">
        <h2 className="text-2xl font-semibold text-center">Key Features</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-medium">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    )
  }
  
  
  function BenefitsSection() {
    return (
      <Container className="mt-24">
        <h2 className="text-2xl font-semibold text-center mb-12">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BentoCard
            eyebrow="For HR Professionals"
            title="Streamline Operations"
            description="Automate routine queries and focus on strategic initiatives. Reduce workload and improve efficiency with AI-powered assistance."
            graphic={
              <div className="absolute inset-0 bg-[url(/1staskhr/streamline.jpg)] bg-[size:1100px_650px] bg-[left_-500px_top_-100px] bg-no-repeat" />
            }
            fade={['bottom']}
            className="h-full"
          />
          <BentoCard
            eyebrow="For Employees"
            title="Instant Answers"
            description="Get quick answers to your HR questions, from leave policies to benefits, without waiting for assistance. Improve your workplace experience."
            graphic={
              <div className="absolute inset-0 bg-[url(/1staskhr/answers.jpg)] bg-[size:1100px_1500px] bg-[left_-300px_top_-220px] bg-no-repeat" />
            }
            fade={['bottom']}
            className="h-full"
          />
          <BentoCard
            eyebrow="For Business Leaders"
            title="Data-Driven Insights"
            description="Leverage AI-driven insights to create a more efficient and satisfied workforce. Make informed decisions based on employee needs and trends."
            graphic={
              <div className="absolute inset-0 bg-[url(/1staskhr/data.jpg)] bg-[size:1100px_650px] bg-[left_-500px_top_-150px] bg-no-repeat" />
            }
            fade={['bottom']}
            className="h-full"
          />
        </div>
      </Container>
    )
  }
  
  
  const workflowSteps = [
    {
      step: "Ask a Question",
      description: "Employees submit HR-related questions through the intuitive interface.",
    },
    {
      step: "AI Processing",
      description: "Our AI engine analyzes the query against your company's HR policies and knowledge base.",
    },
    {
      step: "Instant Response",
      description: "Receive accurate, company-specific answers in seconds.",
    },
    {
      step: "Continuous Learning",
      description: "The system learns from interactions to improve future responses.",
    },
    {
      step: "Insights Generation",
      description: "HR teams gain valuable insights from question patterns and trends.",
    },
  ]
  
  function WorkflowSection() {
    return (
      <Container className="mt-24 mb-24">
        <h2 className="text-2xl font-semibold text-center">How It Works</h2>
        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {workflowSteps.map((step, index) => (
            <div key={index} className="relative flex-1 flex flex-col items-center text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#ff80bf] text-white font-bold">
                {index + 1}
              </div>
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
  
  function CTASection() {
    return (
      <Container className="my-24">
        <div className="bg-gradient-to-r from-pink-300 via-blue-300 to-green-300 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-semibold">Unlock the Potential of AI for Your HR Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-700">
            Ready to transform your HR experience? Discover how 1st Ask HR can revolutionize your organization by
            providing fast, accurate, and proactive HR solutions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button href="https://1staskhr.com">Visit Website</Button>
          <Button variant="secondary" href="mailto:1staskhrsupport@fifthbridgetech.com">
                  Contact Support
                </Button>
          </div>
        </div>
      </Container>
    )
  }

export default function FirstAskHR() {
  return (
    <main className="overflow-hidden">
        <Hero />
      <FeaturesSection />
      <BenefitsSection />
      <WorkflowSection />
      <CTASection />
      <Footer />
    </main>
  )
}