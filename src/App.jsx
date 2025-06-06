import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { CheckCircle, X, ArrowRight, Users, TrendingUp, Target, Linkedin, Mail, User, MessageSquare, Home, Trophy, BookOpen, Brain, BarChart3, Star, Award, Clock, CheckCircle2, LogIn, Calendar, Building2, UserCheck, Zap, Shield, Heart, Gamepad2 } from 'lucide-react'
import './App.css'

// Import assets
import salesImpactGraph from './assets/sales_impact_graph.png'
import roiGrowthGraph from './assets/roi_growth_graph.png'
import userEngagementGraph from './assets/user_engagement_graph.png'
import lizaHeadshot from './assets/Lizaonbeachheadshot.jpg'
import communityHero from './assets/communityof5.jpg'
import handsWithHeart from './assets/handswithheartpaint.jpg'
import diverseGroup from './assets/grouppicdiverse.jpg'
import handPile from './assets/handpile.jpg'

function App() {
  const [activeTab, setActiveTab] = useState('retail-staff')
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
    // For demo purposes, just show an alert
    alert('Login functionality would connect to the EngageNatural app here!')
    setLoginData({ email: '', password: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Formspree will handle the form submission
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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-gray-900">EngageNatural</div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => setActiveTab('retail-staff')}
                className={`transition-colors ${activeTab === 'retail-staff' ? 'text-green-600 font-semibold' : 'text-gray-700 hover:text-green-600'}`}
              >
                For Retail Staff
              </button>
              <button 
                onClick={() => setActiveTab('brands')}
                className={`transition-colors ${activeTab === 'brands' ? 'text-green-600 font-semibold' : 'text-gray-700 hover:text-green-600'}`}
              >
                For Brands
              </button>
              <a href="/landing" className="text-gray-700 hover:text-green-600 transition-colors">App Details</a>
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
              <Button 
                onClick={() => setActiveTab('retail-staff')} 
                className="bg-green-600 hover:bg-green-700"
              >
                Join Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'retail-staff' ? (
            // Retail Staff Tab Content
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Connect, Learn & Earn
                  <span className="text-green-600 block">in Natural Products</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Join the verified community for natural products retail professionals. Free access to exclusive training, brand connections, and rewards.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                    <UserCheck className="w-5 h-5 mr-2" />
                    Join Free Today
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                    Learn More
                  </Button>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-green-600" />
                    Verified Staff Only
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-2 text-green-600" />
                    Free Forever
                  </div>
                  <div className="flex items-center">
                    <Gamepad2 className="w-4 h-4 mr-2 text-green-600" />
                    Fun & Engaging
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-2xl">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={communityHero} 
                      alt="Diverse community of natural products professionals" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2 flex items-center">
                        <Heart className="w-5 h-5 mr-2 text-green-600" />
                        Real Community
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Join verified natural products professionals who share your passion for authentic, meaningful connections.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Brands Tab Content
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Engage Your
                  <span className="text-green-600 block">Retail Partners</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Connect directly with verified natural products retail staff. Build genuine relationships that drive sales through targeted education and engagement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                    <Building2 className="w-5 h-5 mr-2" />
                    Get Started
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-3" onClick={scrollToContact}>
                    Book Demo
                  </Button>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Target className="w-4 h-4 mr-2 text-green-600" />
                    Verified Audience
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                    Proven ROI
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-green-600" />
                    Direct Engagement
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-2xl">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={diverseGroup} 
                      alt="Large diverse group of engaged community members" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2 flex items-center">
                        <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
                        Engaged Community
                      </h3>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-green-50 rounded-lg p-3 text-center">
                          <div className="text-xl font-bold text-green-600">1,245</div>
                          <div className="text-xs text-gray-600">Active Staff</div>
                          <div className="text-xs text-green-600 mt-1">↗ +23%</div>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3 text-center">
                          <div className="text-xl font-bold text-blue-600">87%</div>
                          <div className="text-xs text-gray-600">Engagement</div>
                          <div className="text-xs text-green-600 mt-1">↗ +12%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Value Propositions Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${handsWithHeart})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {activeTab === 'retail-staff' ? (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Natural Products Professionals Choose EngageNatural</h2>
                <p className="text-xl text-gray-600">Built by industry experts, for industry experts</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                      <img 
                        src={handPile} 
                        alt="Teamwork" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Industry-Specific Community</h3>
                    <p className="text-gray-600">Connect with fellow natural products professionals who understand your challenges and share your passion.</p>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Gamepad2 className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Fun Learning Experience</h3>
                    <p className="text-gray-600">Engaging games, challenges, and interactive content make learning about products enjoyable and memorable.</p>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Direct Brand Connections</h3>
                    <p className="text-gray-600">Get exclusive access to brand representatives, product samples, and insider knowledge.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Reach Verified Natural Products Retail Staff</h2>
                <p className="text-xl text-gray-600">Connect with the people who influence purchasing decisions</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Audience</h3>
                    <p className="text-gray-600">Every member is verified as a real natural products retail professional through our rigorous screening process.</p>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Targeted Engagement</h3>
                    <p className="text-gray-600">Reach specific retail segments, geographic regions, or store types with precision targeting.</p>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Measurable Results</h3>
                    <p className="text-gray-600">Track engagement, completion rates, and ROI with detailed analytics and reporting.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-4">
              {activeTab === 'retail-staff' ? 'Join the Community' : 'Partner With Us'}
            </h2>
            <p className="text-xl text-green-100 mb-8">
              {activeTab === 'retail-staff' 
                ? 'Be part of the natural products retail revolution' 
                : 'Connect with verified natural products professionals'}
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
                  placeholder={activeTab === 'retail-staff' ? 'Store/Company Name' : 'Brand/Company Name'}
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder={activeTab === 'retail-staff' 
                    ? 'Tell us about your role in natural products retail...' 
                    : 'Tell us about your brand and engagement goals...'}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full h-32"
                />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                {activeTab === 'retail-staff' ? 'Request Access' : 'Get Started'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">EngageNatural</div>
            <p className="text-gray-400 mb-4">
              Created by Liza Boone — a 30-year veteran of the natural products industry
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:lizapoodle@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/liza-boone" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

