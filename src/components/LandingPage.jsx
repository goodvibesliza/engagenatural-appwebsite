import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { CheckCircle, X, ArrowRight, Users, TrendingUp, Target, Linkedin, Mail, User, MessageSquare, Home, Trophy, BookOpen, Brain, BarChart3, Star, Award, Clock, CheckCircle2, LogIn, Calendar } from 'lucide-react'

// Import assets
import salesImpactGraph from '../assets/sales_impact_graph.png'
import roiGrowthGraph from '../assets/roi_growth_graph.png'
import userEngagementGraph from '../assets/user_engagement_graph.png'
import lizaHeadshot from '../assets/Lizaonbeachheadshot.jpg'

function LandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    alert('Login functionality would connect to the EngageNatural app here!')
    setLoginData({ email: '', password: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    
    fetch('https://formspree.io/f/xeokjykw', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert('Thank you! Your message has been sent.')
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        alert('Oops! There was a problem submitting your form')
      }
    }).catch(error => {
      alert('Oops! There was a problem submitting your form')
    })
  }

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  // Enhanced app interface mockups with beautiful designs
  const appScreenshots = [
    {
      title: "Home Screen",
      desc: "Daily challenges and activity feed",
      color: "bg-green-100 border-green-300",
      icon: <Home className="w-8 h-8 text-green-600" />,
      mockup: (
        <div className="bg-gradient-to-b from-green-50 to-white rounded-lg p-4 min-h-[400px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg">EngageNatural</h3>
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-4 mb-4">
            <div className="flex items-center mb-2">
              <Trophy className="w-5 h-5 mr-2" />
              <span className="font-semibold">Featured Challenge</span>
            </div>
            <h4 className="font-bold mb-1">Essential Oils Knowledge</h4>
            <p className="text-green-100 text-sm mb-3">Complete for 50 points • 5 min</p>
            <Button size="sm" className="bg-white text-green-600 hover:bg-green-50">
              Start Challenge
            </Button>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold mb-3 flex items-center">
              <Clock className="w-4 h-4 mr-2 text-gray-600" />
              Recent Activity
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Sarah M.</p>
                  <p className="text-xs text-gray-500">Completed Herb Knowledge Quiz</p>
                </div>
                <span className="text-xs text-gray-400">2h ago</span>
              </div>
              <div className="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Mike R.</p>
                  <p className="text-xs text-gray-500">Earned Product Expert badge</p>
                </div>
                <span className="text-xs text-gray-400">4h ago</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
    // Add other mockups as needed...
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-gray-900">EngageNatural</div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors">How It Works</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
              <a href="#book-discussion" className="text-gray-700 hover:text-green-600 transition-colors">Book Discussion</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
            </div>
            <div className="flex space-x-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Login to EngageNatural</h2>
                    <p className="text-gray-600">Access your retail staff community</p>
                  </div>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={loginData.email}
                        onChange={handleLoginChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={loginData.password}
                        onChange={handleLoginChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      Login to App
                    </Button>
                  </form>
                  <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                      Don't have an account? 
                      <Button variant="link" className="text-green-600 p-0 ml-1" onClick={scrollToContact}>
                        Request Access
                      </Button>
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
              <Button onClick={scrollToContact} className="bg-green-600 hover:bg-green-700">Get Early Access</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - WITH HOME SCREEN MOCKUP */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Genuine<br />
                Connection<br />
                <span className="text-green-600">= Sales</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect brands with retail staff in natural products through engaging, educational experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button onClick={scrollToContact} size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                  Get Early Access
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                  Verified Staff Only
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                  Free to Join
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                  Industry Experts
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-2xl">
                {appScreenshots[0].mockup}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-2 border-gray-200">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Staff Verification</h3>
                <p className="text-gray-600">Only real store employees get access via photo and store contact verification.</p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center bg-gray-900 text-white border-2 border-gray-900">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-gray-900">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Learn & Connect</h3>
                <p className="text-gray-300">Brands pay for a monthly community and engage directly with participants they choose. They can include challenges to take product, free samples, and engaging games while they develop connections with other retailers.</p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center border-2 border-gray-200">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Track Impact</h3>
                <p className="text-gray-600">Brands see real-time ROI and staff feedback through the dashboard.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About EngageNatural</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src={lizaHeadshot} 
                    alt="Liza Boone - Founder of EngageNatural" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Created by Liza Boone — a 30-year veteran of the natural products industry
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  This app was built to empower the people who power your sales: retail staff.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With extensive experience in the natural products industry, Liza identified a critical gap between brands and retail staff. Her vision for EngageNatural stems from understanding that knowledgeable, engaged retail staff are the key to successful product sales and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Discussion Section */}
      <section id="book-discussion" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Book a Discussion</h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule a personalized conversation about how EngageNatural can transform your retail staff training and engagement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What we'll discuss:</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Your specific needs</h4>
                    <p className="text-gray-600">Understanding your retail environment and training challenges</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">App demonstration</h4>
                    <p className="text-gray-600">Live walkthrough of EngageNatural's features and capabilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Implementation strategy</h4>
                    <p className="text-gray-600">How to roll out the platform to your retail staff effectively</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">ROI projections</h4>
                    <p className="text-gray-600">Expected impact on sales, staff retention, and brand loyalty</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-6">
                <Calendar className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule Your Call</h3>
                <p className="text-gray-600">30-minute personalized discussion</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <p className="text-gray-600 mb-4">
                  Click below to choose a time that works for you
                </p>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-lg py-3"
                  onClick={() => {
                    alert('Cal.com booking will be integrated here. Please use the contact form below for now to request a discussion.')
                  }}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule with Cal.com
                </Button>
                <p className="text-sm text-gray-500 mt-3">
                  Free consultation • No commitment required • Powered by Cal.com
                </p>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Prefer to reach out directly? 
                  <Button variant="link" className="text-green-600 p-0 ml-1" onClick={scrollToContact}>
                    Send us a message
                  </Button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Waitlist */}
      <section id="contact" className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-4">Join the Waitlist</h2>
            <p className="text-xl text-green-100 mb-8">
              Be the first to experience the new standard in natural retail training.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <Input
                  type="text"
                  name="company"
                  placeholder="Store/Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell us about your role in natural products retail..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full h-32"
                />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                Join Waitlist
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage

