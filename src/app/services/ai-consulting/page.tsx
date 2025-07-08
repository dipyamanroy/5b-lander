'use client'

import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Heading, Lead } from '@/components/text'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
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
  CheckCircle,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Globe,
  Lock
} from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

function Header() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <Container className="mt-48 mb-32">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center">
          <Heading className="bg-gradient-to-r from-green-300 via-green-700 to-blue-600 bg-clip-text text-transparent leading-tight">
            Transform Your Business with <br />Intelligent AI Solutions
        </Heading>

          <Lead className="mt-8 max-w-4xl mx-auto text-xl">
            Unlock the power of artificial intelligence to drive innovation, optimize operations, 
            and create competitive advantages that propel your business into the future.
          </Lead>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-700 to-blue-700 hover:from-green-800 hover:to-blue-800 text-white">
              <Link href="mailto:rohit@fifthbridgetech.com">Schedule Consultation</Link>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
           
          </div>
        </div>
      </div>
    </Container>
  )
}

const services = [
  { 
    icon: <Brain className="w-10 h-10 text-blue-600" />, 
    title: 'Machine Learning Solutions', 
    description: 'Custom ML models for predictive analytics, pattern recognition, and intelligent automation tailored to your industry.',
    features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making']
  },
  { 
    icon: <MessageSquare className="w-10 h-10 text-purple-600" />, 
    title: 'Natural Language Processing', 
    description: 'Advanced NLP solutions for document processing, sentiment analysis, and intelligent chatbots.',
    features: ['Document Analysis', 'Sentiment Analysis', 'Intelligent Chatbots']
  },
  { 
    icon: <BarChart3 className="w-10 h-10 text-orange-600" />, 
    title: 'Business Intelligence AI', 
    description: 'Transform data into actionable insights with AI-powered analytics and reporting systems.',
    features: ['Data Analytics', 'Automated Reporting', 'Insight Generation']
  },
  { 
    icon: <Workflow className="w-10 h-10 text-indigo-600" />, 
    title: 'Process Automation', 
    description: 'Intelligent automation solutions that streamline workflows and reduce operational costs.',
    features: ['Workflow Optimization', 'Cost Reduction', 'Efficiency Gains']
  },
]

function ServicesSection() {
  return (
    <Container className="mt-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">Our AI Expertise</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Solutions designed to solve real business challenges and drive results
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-gray-100">
            <CardHeader>
              <div className="mb-4 p-3 bg-gray-50 rounded-xl w-fit group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-300">
                {service.icon}
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription className="leading-relaxed">{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {feature}
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
    step: 'Discovery & Assessment', 
    description: 'Analyze your business challenges and identify AI opportunities with comprehensive data audits.',
    icon: <Target className="w-6 h-6 text-white" />
  },
  { 
    step: 'Strategy & Planning', 
    description: 'Develop a tailored AI roadmap with clear milestones, timelines, and success metrics.',
    icon: <Lightbulb className="w-6 h-6 text-white" />
  },
  { 
    step: 'Development & Training', 
    description: 'Build and train custom AI models using cutting-edge technologies and best practices.',
    icon: <Cpu className="w-6 h-6 text-white" />
  },
  { 
    step: 'Integration & Testing', 
    description: 'Seamlessly integrate AI solutions into your existing systems with rigorous testing.',
    icon: <Zap className="w-6 h-6 text-white" />
  },
  { 
    step: 'Deployment & Optimization', 
    description: 'Launch AI solutions with continuous monitoring and performance optimization.',
    icon: <Rocket className="w-6 h-6 text-white" />
  },
  { 
    step: 'Support & Evolution', 
    description: 'Provide ongoing support, maintenance, and model improvements for sustained success.',
    icon: <Users className="w-6 h-6 text-white" />
  },
]

function WorkflowSection() {
  return (
    <Container className="mt-32 mb-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">Our Process</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Implementation that ensures successful outcomes and measurable ROI
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workflowSteps.map((step, index) => (
          <Card key={index} className="hover:shadow-xl border-gray-100 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-green-600 to-blue-600 mr-4">
                  {step.icon}
                </div>
                <Badge variant="secondary" className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold text-sm">
                  {index + 1}
                </Badge>
              </div>
              <CardTitle className="text-xl">{step.step}</CardTitle>
              <CardDescription className="leading-relaxed">{step.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Container>
  )
}

const stats = [
  { number: '50+', label: 'AI Projects Delivered', icon: <Rocket className="w-8 h-8" /> },
  { number: '95%', label: 'Client Success Rate', icon: <TrendingUp className="w-8 h-8" /> },
  { number: '40%', label: 'Average Cost Reduction', icon: <BarChart3 className="w-8 h-8" /> },
  { number: '24/7', label: 'Support & Monitoring', icon: <Globe className="w-8 h-8" /> },
]

function StatsSection() {
  return (
    <div className="bg-gradient-to-r from-green-700 to-blue-700 py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-white mb-4">Proven Results</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Our track record speaks for itself - delivering transformative AI solutions across industries
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  )
}

const industries = [
  { name: 'Healthcare', description: 'AI-powered diagnostics and patient care optimization', icon: <Shield className="w-6 h-6" /> },
  { name: 'Finance', description: 'Fraud detection and algorithmic trading solutions', icon: <TrendingUp className="w-6 h-6" /> },
  { name: 'Manufacturing', description: 'Predictive maintenance and quality control systems', icon: <Cpu className="w-6 h-6" /> },
  { name: 'Retail', description: 'Personalization engines and inventory optimization', icon: <BarChart3 className="w-6 h-6" /> },
  { name: 'Technology', description: 'Intelligent automation and data processing', icon: <Zap className="w-6 h-6" /> },
  { name: 'Energy', description: 'Smart grid optimization and predictive analytics', icon: <Globe className="w-6 h-6" /> },
]

function IndustriesSection() {
  return (
    <Container className="mt-32 mb-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">Industries We Serve</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Delivering specialized solutions that understand your unique challenges
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry, index) => (
          <Card key={index} className="hover:shadow-lg border-gray-100 transition-all duration-300 hover:border-blue-200">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  {industry.icon}
                </div>
                <CardTitle className="text-lg">{industry.name}</CardTitle>
              </div>
              <CardDescription className="text-sm">{industry.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Container>
  )
}

function CTASection() {
  return (
    <Container className="mb-32">
      <Card className="bg-gradient-to-r from-green-600 to-blue-600 border-0">
        <CardContent className="p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can revolutionize your operations and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800">
             <Link href="mailto:rohit@fifthbridgetech.com">Schedule Consultation</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Container>
  )
}

export default function AIConsulting() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Header />
      <ServicesSection />
      <WorkflowSection />
      <StatsSection />
      <IndustriesSection />
      <CTASection />
      <Footer />
    </main>
  )
}