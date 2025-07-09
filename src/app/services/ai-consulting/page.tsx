"use client"
import { Container } from "@/components/container"
import { Footer } from "@/components/footer"
import { GradientBackground } from "@/components/gradient"
import { Heading, Lead } from "@/components/text"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Zap,
  Target,
  Shield,
  Cpu,
  BarChart3,
  MessageSquare,
  Eye,
  Workflow,
  Lightbulb,
  Rocket,
  Users,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Globe,
  Star,
  Award,
  Layers,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

// Floating particles component
function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>(
    [],
  )

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: "4s",
          }}
        />
      ))}
    </div>
  )
}

// Animated background grid
function AnimatedGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-20">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
               linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
             `,
          backgroundSize: "50px 50px",
          animation: "grid-move 20s linear infinite",
        }}
      />
    </div>
  )
}

function Header() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <Container className="mt-24 sm:mt-32 md:mt-48 mb-16 sm:mb-24 md:mb-32 px-4 sm:px-6 relative">
      {/* Floating decorative elements */}
      <div
        className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      />
      <div
        className="absolute top-32 right-16 w-16 h-16 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-xl animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "5s" }}
      />

      <div
        className={`mt-48 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="text-center relative">
          <div className="relative">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200/50 mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
              <span className="text-sm font-medium text-blue-700">AI-Powered Business Transformation</span>
              <Star className="w-4 h-4 text-purple-600 animate-pulse" />
            </div> */}

            <Heading className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-green-400 via-blue-500 to-green-600 bg-clip-text text-transparent leading-tight font-extrabold">
              Transform Your Business with <br className="hidden sm:block" />
              <span className="relative">Intelligent AI Solutions</span>
            </Heading>

            <Lead className="text-xl mt-8 max-w-4xl mx-auto text-gray-600 px-4 leading-relaxed">
              Unlock the power of artificial intelligence to drive innovation, optimize operations, and create
              competitive advantages that propel your business into the future.
            </Lead>

            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center px-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Link href="https://cal.com/challu" className="flex items-center relative z-10">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>

              {/* <Button
                size="lg"
                variant="outline"
                className="group border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto bg-transparent"
              >
                <Eye className="w-5 h-5 mr-2 group-hover:text-blue-600 transition-colors duration-300" />
                View Case Studies
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

const services = [
  {
    icon: <Brain className="w-10 h-10 text-white" />,
    title: "Machine Learning Solutions",
    description:
      "Custom ML models for predictive analytics, pattern recognition, and intelligent automation tailored to your industry.",
    features: ["Predictive Analytics", "Pattern Recognition", "Automated Decision Making"],
    gradient: "from-green-500 to-blue-500",
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-white" />,
    title: "Natural Language Processing",
    description: "Advanced NLP solutions for document processing, sentiment analysis, and intelligent chatbots.",
    features: ["Document Analysis", "Sentiment Analysis", "Intelligent Chatbots"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-white" />,
    title: "Business Intelligence AI",
    description: "Transform data into actionable insights with AI-powered analytics and reporting systems.",
    features: ["Data Analytics", "Automated Reporting", "Insight Generation"],
    gradient: "from-green-600 to-blue-600",
  },
  {
    icon: <Workflow className="w-10 h-10 text-white" />,
    title: "Process Automation",
    description: "Intelligent automation solutions that streamline workflows and reduce operational costs.",
    features: ["Workflow Optimization", "Cost Reduction", "Efficiency Gains"],
    gradient: "from-blue-600 to-green-600",
  },
]

function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <Container className="mt-32 px-4 sm:px-6 relative">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200/50 mb-6">
          <Award className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-700">Our Expertise</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
          AI Solutions That Drive Results
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Cutting-edge artificial intelligence solutions designed to solve real business challenges
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Animated background gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
            />

            {/* Glowing border effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
            />

            <CardHeader className="p-8 relative z-10">
              <div className="mb-6 relative">
                <div
                  className={`p-4 bg-gradient-to-br ${service.gradient} rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>
                {hoveredCard === index && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
              <CardTitle className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                {service.title}
              </CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed mb-6">{service.description}</CardDescription>
            </CardHeader>

            <CardContent className="p-8 pt-0 relative z-10">
              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                  >
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} group-hover:scale-125 transition-transform duration-300`}
                    />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  )
}

const workflowSteps = [
  {
    step: "Discovery & Assessment",
    description: "Analyze your business challenges and identify AI opportunities with comprehensive data audits.",
    icon: <Target className="w-6 h-6 text-white" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: "Strategy & Planning",
    description: "Develop a tailored AI roadmap with clear milestones, timelines, and success metrics.",
    icon: <Lightbulb className="w-6 h-6 text-white" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    step: "Development & Training",
    description: "Build and train custom AI models using cutting-edge technologies and best practices.",
    icon: <Cpu className="w-6 h-6 text-white" />,
    color: "from-green-500 to-emerald-500",
  },
  {
    step: "Integration & Testing",
    description: "Seamlessly integrate AI solutions into your existing systems with rigorous testing.",
    icon: <Zap className="w-6 h-6 text-white" />,
    color: "from-orange-500 to-red-500",
  },
  {
    step: "Deployment & Optimization",
    description: "Launch AI solutions with continuous monitoring and performance optimization.",
    icon: <Rocket className="w-6 h-6 text-white" />,
    color: "from-indigo-500 to-purple-500",
  },
  {
    step: "Support & Evolution",
    description: "Provide ongoing support, maintenance, and model improvements for sustained success.",
    icon: <Users className="w-6 h-6 text-white" />,
    color: "from-teal-500 to-cyan-500",
  },
]

function WorkflowSection() {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(new Array(workflowSteps.length).fill(false))
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleSteps((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }, index * 200)
          }
        },
        { threshold: 0.3 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <Container className="mt-32 mb-32 px-4 sm:px-6 relative">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-blue-50 rounded-full border border-green-200/50 mb-6">
          <Layers className="w-4 h-4 text-green-600" />
          <span className="text-sm font-medium text-green-700">Our Process</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
          From Concept to Success
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          A proven methodology that ensures successful AI implementation and measurable ROI
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workflowSteps.map((step, index) => (
          <div
            key={index}
            ref={(el) => {
              stepRefs.current[index] = el
            }}
            className={`transform transition-all duration-700 ${
              visibleSteps[index] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Card className="group relative overflow-hidden border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
              {/* Animated background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <CardHeader className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {step.icon}
                  </div>
                  <Badge
                    className={`w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-white font-semibold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {index + 1}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                  {step.step}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">{step.description}</CardDescription>
              </CardHeader>

              {/* Progress indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
                <div
                  className={`h-full bg-gradient-to-r ${step.color} transition-all duration-1000 ${
                    visibleSteps[index] ? "w-full" : "w-0"
                  }`}
                  style={{ transitionDelay: `${index * 200 + 500}ms` }}
                />
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  )
}

const stats = [
  {
    number: "50+",
    label: "AI Projects Delivered",
    icon: <Rocket className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    number: "95%",
    label: "Client Success Rate",
    icon: <TrendingUp className="w-8 h-8" />,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    number: "40%",
    label: "Average Cost Reduction",
    icon: <BarChart3 className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    number: "24/7",
    label: "Support & Monitoring",
    icon: <Globe className="w-8 h-8" />,
    gradient: "from-orange-500 to-red-500",
  },
]

function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <Container className="px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">Proven Results That Speak</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Our track record demonstrates the transformative power of AI across industries
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              <CardContent className="p-8 text-center relative z-10">
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <div className="text-white">{stat.icon}</div>
                </div>

                <div
                  className={`text-4xl lg:text-5xl font-semibold text-white mb-2 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {stat.number}
                </div>

                <div className="text-blue-100 font-medium text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  )
}

const industries = [
  {
    name: "Healthcare",
    description: "AI-powered diagnostics and patient care optimization",
    icon: <Shield className="w-6 h-6" />,
    gradient: "from-red-500 to-pink-500",
  },
  {
    name: "Finance",
    description: "Fraud detection and algorithmic trading solutions",
    icon: <TrendingUp className="w-6 h-6" />,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Manufacturing",
    description: "Predictive maintenance and quality control systems",
    icon: <Cpu className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Retail",
    description: "Personalization engines and inventory optimization",
    icon: <BarChart3 className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Technology",
    description: "Intelligent automation and data processing",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Energy",
    description: "Smart grid optimization and predictive analytics",
    icon: <Globe className="w-6 h-6" />,
    gradient: "from-indigo-500 to-purple-500",
  },
]

function IndustriesSection() {
  return (
    <Container className="mt-32 mb-32 px-4 sm:px-6">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full border border-purple-200/50 mb-6">
          <Globe className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-medium text-purple-700">Industries We Serve</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
          Specialized Solutions for Every Sector
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Deep industry expertise that understands your unique challenges and opportunities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden border-0 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
            />

            <CardHeader className="p-6 relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`p-3 bg-gradient-to-br ${industry.gradient} rounded-xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {industry.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                  {industry.name}
                </CardTitle>
              </div>
              <CardDescription className="text-gray-600 leading-relaxed">{industry.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Container>
  )
}

function CTASection() {
  return (
    <Container className="mb-32 px-4 sm:px-6">
      <Card className="relative overflow-hidden border-0 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Floating elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div
          className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <CardContent className="p-12 lg:p-16 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
              <Rocket className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Ready to Transform?</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Let's Build the Future Together
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Transform your business with AI solutions that deliver real results. Schedule a consultation and discover
              your potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="group bg-white text-gray-900 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold"
              >
                <Link href="https://cal.com/challu" className="flex items-center">
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                <MessageSquare className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Get in Touch
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  )
}

export default function AIConsulting() {
  return (
    <main className="overflow-hidden relative">
      <FloatingParticles />
      <AnimatedGrid />
      <GradientBackground />
      <Header />
      <ServicesSection />
      <WorkflowSection />
      {/* <StatsSection />
      <IndustriesSection />
      <CTASection /> */}
      <Footer />

      <style jsx global>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </main>
  )
}
