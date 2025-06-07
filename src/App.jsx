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
import lizaHeadshot from './assets/Lizaonbeachheadshot.jpeg'
import communityPhoto from './assets/communityof5.jpg'
import diverseGroupPhoto from './assets/grouppicdiverse.jpg'
import handPilePhoto from './assets/handpile.jpg'
import handsHeartPhoto from './assets/handswithheartpaint.jpg'

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
                      src={communityPhoto} 
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
                      src={diverseGroupPhoto} 
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
            backgroundImage: `url(${handsHeartPhoto})`,
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
                        src={handPilePhoto} 
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
                    <p className="text-gray-600">Get exclusive access to brand representatives, free samples, and special offers from your favorite natural products companies.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Brands Choose EngageNatural</h2>
                <p className="text-xl text-gray-600">Authentic engagement with verified retail professionals</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Audience</h3>
                    <p className="text-gray-600">Reach only verified natural products retail staff who influence purchasing decisions and customer recommendations.</p>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Measurable ROI</h3>
                    <p className="text-gray-600">Track engagement, product knowledge improvement, and sales impact through comprehensive analytics and reporting.</p>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Authentic Relationships</h3>
                    <p className="text-gray-600">Build genuine connections through interactive challenges, educational content, and community engagement activities.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How EngageNatural Works</h2>
            <p className="text-xl text-gray-600">Simple, effective, and designed for the natural products industry</p>
          </div>
          
          {activeTab === 'retail-staff' ? (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Join & Verify</h3>
                <p className="text-gray-600">Sign up with your retail credentials and get verified as a natural products professional. It's free and takes just minutes.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Engage & Learn</h3>
                <p className="text-gray-600">Participate in fun challenges, connect with brands, earn rewards, and expand your product knowledge through interactive content.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Grow & Connect</h3>
                <p className="text-gray-600">Build your professional network, advance your career, and become a trusted expert in natural products retail.</p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Set Up Your Community</h3>
                <p className="text-gray-600">Create your brand presence and define your engagement strategy. Choose your target retail partners and set up your monthly community.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Engage Directly</h3>
                <p className="text-gray-600">Brands pay for monthly community access and engage directly with participants they choose. Include challenges, free samples, and engaging games while developing connections with retailers.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Measure & Optimize</h3>
                <p className="text-gray-600">Track engagement metrics, measure sales impact, and optimize your strategy based on real-time data and feedback from retail partners.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Professional Bio Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Created by Liza Boone — a 30-year veteran of the natural products industry</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                EngageNatural was born from decades of experience in the natural products industry. Having worked with retailers, brands, and industry professionals, I recognized a critical gap: the lack of genuine connection and effective communication between brands and the retail staff who ultimately influence customer decisions.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                This platform bridges that gap by creating an authentic community where retail professionals can connect, learn, and grow while brands can engage meaningfully with the people who matter most to their success.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:lizapoodle@gmail.com" className="text-gray-700">Contact Liza</a>
                </Button>
                <Button variant="outline" className="flex items-center">
                  <Linkedin className="w-4 h-4 mr-2" />
                  <a href="https://linkedin.com/in/lizaboone" target="_blank" rel="noopener noreferrer" className="text-gray-700">LinkedIn</a>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={lizaHeadshot} 
                  alt="Liza Boone - Founder of EngageNatural" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Discussion Section */}
      <section id="book-discussion" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Brand Engagement?</h2>
            <p className="text-xl text-gray-600">Book a personalized discussion to explore how EngageNatural can drive your retail partnerships</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What We'll Discuss:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Your Specific Needs</h4>
                    <p className="text-gray-600">Understanding your brand's unique challenges and retail partnership goals</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Platform Demo</h4>
                    <p className="text-gray-600">Live walkthrough of EngageNatural's features and engagement tools</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Implementation Strategy</h4>
                    <p className="text-gray-600">Custom roadmap for launching your brand community and engagement campaigns</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">ROI Projections</h4>
                    <p className="text-gray-600">Data-driven insights on expected engagement rates and sales impact</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-xl">
                <Calendar className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Schedule Your Discussion</h3>
                <p className="text-gray-600 mb-6">Choose a time that works for you. Sessions are typically 30-45 minutes and can be conducted via video call.</p>
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3"
                  onClick={() => window.open('https://cal.com/lizaboonephd', '_blank')}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule with Cal.com
                </Button>
                <p className="text-sm text-gray-500 mt-4">Free consultation • No commitment required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Started Today</h2>
            <p className="text-xl text-gray-600">Ready to join the EngageNatural community? Let's connect!</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-green-600 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:lizapoodle@gmail.com" className="text-green-600 hover:text-green-700">lizapoodle@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Linkedin className="w-6 h-6 text-green-600 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900">LinkedIn</p>
                    <a href="https://linkedin.com/in/lizaboone" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">Connect with Liza</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 text-green-600 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900">Schedule a Call</p>
                    <a href="https://cal.com/lizaboonephd" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">Book a Discussion</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company/Store Name"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your interest in EngageNatural..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full h-32"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EngageNatural</h3>
              <p className="text-gray-400">Connecting natural products professionals with brands through authentic community engagement.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Retail Staff</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Join Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Learning Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Rewards Program</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Brands</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Platform Demo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:lizapoodle@gmail.com" className="hover:text-white transition-colors">Email Us</a></li>
                <li><a href="https://linkedin.com/in/lizaboone" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="https://cal.com/lizaboonephd" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Schedule Call</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EngageNatural. Created by Liza Boone — a 30-year veteran of the natural products industry.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

