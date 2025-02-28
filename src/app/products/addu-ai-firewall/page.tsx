import { Container } from "@/components/container"
import { Footer } from "@/components/footer"
import { Gradient, GradientBackground } from "@/components/gradient"
import { Heading, Lead } from "@/components/text"
import { BentoCard } from "@/components/bento-card"
import { MessageSquare, Database, BarChart2, Users, Briefcase, Brain, Zap, Layout, Scale, Shield, Eye, Filter, Lock, Bug, Target, ShieldAlert } from "lucide-react"
import type { Metadata } from "next"
import { Button } from "@/components/button"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Addu AI Firewall",
  description: "Next-gen AI-powered security to detect and prevent unknown attacks in real-time.",
};

function Hero() {
    return (
      <div className="relative">
        <div className="rounded-4xl overflow-hidden">
          <Image
                  src="/banner3.jpg"
                  alt="Banner Image"
                  layout="fill" 
                  objectFit="cover" 
                  className="absolute inset-2 rounded-[2.5rem] p-2"
                  style={{ filter: "blur(1.0px)" }}
                />
          <Gradient className="absolute inset-2 p-3 rounded-4xl ring-1 ring-black/5 ring-inset bg-gradient-to-b from-zinc-500/10 via-stone-600/80 to-zinc-900/80" />
        </div>
        <Container className="relative">
          <div className="pt-48 pb-24 sm:pt-62 sm:pb-12 md:pt-48 md:pb-24 flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
            <div className="flex flex-col space-y-2">
            <Shield className="w-12 h-12 text-black-500 sm:w-14 sm:h-14 md:w-16 md:h-16" />
            <h1
  className="font-display text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r  from-black to-zinc-200
"
>
Addu AI Firewall
</h1>
</div>

              <p className="mt-8 max-w text-base sm:text-xl md:text-2xl font-medium text-gray-100/75">
              Next-gen AI-powered security to detect and prevent unknown attacks in real-time.
              </p>
              <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                <Button variant="secondary" href="mailto:rohit@fifthbridgetech.com">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
}

const features = [
  { icon: <Shield size={32} className="text-zinc-500" />, title: "AI-Powered Threat Detection", description: "Identify and stop unknown attacks using AI knowledge from previous threats." },
  { icon: <Eye size={32} className="text-stone-600" />, title: "Auto Endpoint Detection", description: "Automatically detect endpoints to secure your network perimeter." },
  { icon: <Filter size={32} className="text-zinc-900" />, title: "Data Filtering", description: "Filter data from endpoints to prevent unauthorized access." },
  { icon: <Bug size={32} className="text-zinc-500" />, title: "Honeypots & Traps", description: "Detect honeypots and analyze malicious actors." },
  { icon: <Database size={32} className="text-stone-600" />, title: "Database Monitoring", description: "Monitor and log database activity to detect unusual behavior." },
  { icon: <Target size={32} className="text-zinc-900" />, title: "User Tracking & Threat Analysis", description: "Track and gather intelligence on suspicious users." },
];

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
  );
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
        <div className="bg-gradient-to-b from-zinc-500 via-stone-600 to-zinc-900/80 rounded-2xl p-10 text-center">
          <h2 className="text-2xl text-white font-semibold">
            Secure Your Network with Addu AI Firewall
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-100">
            Stay ahead of cyber threats with AI-powered protection. Addu AI Firewall detects unknown attacks, filters endpoint data, blocks malicious access, and tracks suspicious activity—keeping your network secure and resilient.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="primary" href="rohit@fifthbridgetech.com">
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
      <CTASection />
      <Footer />
    </main>
  )
}