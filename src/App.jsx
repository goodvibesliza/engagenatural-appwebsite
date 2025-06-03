import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { CheckCircle, X, ArrowRight, Users, TrendingUp, Target, Linkedin, Mail, User, MessageSquare, Home, Trophy, BookOpen, Brain, BarChart3, Star, Award, Clock, CheckCircle2 } from 'lucide-react'
import './App.css'

// Import assets
import salesImpactGraph from './assets/sales_impact_graph.png'
import roiGrowthGraph from './assets/roi_growth_graph.png'
import userEngagementGraph from './assets/user_engagement_graph.png'
import lizaHeadshot from './assets/Lizaonbeachheadshot.jpg'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
    },
    {
      title: "Challenges",
      desc: "Browse available challenges",
      color: "bg-blue-100 border-blue-300",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      mockup: (
        <div className="bg-gradient-to-b from-blue-50 to-white rounded-lg p-4 min-h-[400px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
              Challenges
            </h3>
            <div className="text-sm text-blue-600 font-medium">12 Available</div>
          </div>
          
          <div className="mb-4">
            <Input placeholder="Search challenges..." className="w-full" />
          </div>

          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-green-700">Essential Oils Basics</h4>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                  50 pts
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Learn about popular essential oils and their uses</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">⏱️ 8 minutes</span>
                <Button size="sm" className="bg-green-600 hover:bg-green-700">Start</Button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-blue-700">Customer Service Excellence</h4>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                  30 pts
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Master the art of natural product recommendations</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">⏱️ 5 minutes</span>
                <Button size="sm" variant="outline">Start</Button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-purple-500">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-purple-700">Supplement Knowledge</h4>
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                  40 pts
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Understanding vitamins, minerals, and supplements</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">⏱️ 6 minutes</span>
                <Button size="sm" variant="outline">Start</Button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Profile",
      desc: "User stats and achievements",
      color: "bg-yellow-100 border-yellow-300",
      icon: <User className="w-8 h-8 text-yellow-600" />,
      mockup: (
        <div className="bg-gradient-to-b from-yellow-50 to-white rounded-lg p-4 min-h-[400px]">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto mb-3 flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-lg">Sarah Mitchell</h3>
            <p className="text-gray-600 text-sm">Natural Grocers • Austin, TX</p>
            <div className="flex items-center justify-center mt-2">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="ml-1 text-sm font-medium text-yellow-700">Gold Member</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-2xl font-bold text-green-600">1,450</div>
              <div className="text-xs text-gray-600">Total Points</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-2xl font-bold text-blue-600">23</div>
              <div className="text-xs text-gray-600">Challenges</div>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold mb-3 flex items-center">
              <Award className="w-4 h-4 mr-2 text-yellow-600" />
              Recent Achievements
            </h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Knowledge Expert</p>
                  <p className="text-xs text-gray-500">Completed 20+ challenges</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Top Performer</p>
                  <p className="text-xs text-gray-500">Top 10% this month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Quiz",
      desc: "Interactive product knowledge",
      color: "bg-purple-100 border-purple-300",
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      mockup: (
        <div className="bg-gradient-to-b from-purple-50 to-white rounded-lg p-4 min-h-[400px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-600" />
              Essential Oils Quiz
            </h3>
            <div className="text-sm text-purple-600 font-medium">Question 3/5</div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className="bg-purple-600 h-2 rounded-full" style={{width: '60%'}}></div>
            </div>
            
            <h4 className="font-semibold mb-4 text-gray-800">
              Which essential oil is commonly used for relaxation and sleep?
            </h4>
            
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg border-2 border-gray-200 hover:border-purple-300 transition-colors">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 mr-3"></div>
                  <span>Peppermint</span>
                </div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border-2 border-purple-500 bg-purple-50 transition-colors">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full border-2 border-purple-500 bg-purple-500 mr-3 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="font-medium">Lavender</span>
                </div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border-2 border-gray-200 hover:border-purple-300 transition-colors">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 mr-3"></div>
                  <span>Eucalyptus</span>
                </div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border-2 border-gray-200 hover:border-purple-300 transition-colors">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 mr-3"></div>
                  <span>Tea Tree</span>
                </div>
              </button>
            </div>
          </div>

          <div className="flex justify-between">
            <Button variant="outline" size="sm">Previous</Button>
            <Button className="bg-purple-600 hover:bg-purple-700" size="sm">Next Question</Button>
          </div>
        </div>
      )
    },
    {
      title: "Dashboard",
      desc: "Analytics and management",
      color: "bg-teal-100 border-teal-300",
      icon: <BarChart3 className="w-8 h-8 text-teal-600" />,
      mockup: (
        <div className="bg-gradient-to-b from-teal-50 to-white rounded-lg p-4 min-h-[400px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-teal-600" />
              Brand Dashboard
            </h3>
            <div className="text-sm text-teal-600 font-medium">May 2025</div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-teal-600">1,245</div>
              <div className="text-sm text-gray-600">Total Engagements</div>
              <div className="text-xs text-green-600 mt-1">↗ +23% vs last month</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-blue-600">87%</div>
              <div className="text-sm text-gray-600">Completion Rate</div>
              <div className="text-xs text-green-600 mt-1">↗ +12% vs last month</div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
            <h4 className="font-semibold mb-3">Engagement Trends</h4>
            <div className="h-24 bg-gradient-to-r from-teal-100 to-teal-200 rounded-lg flex items-end justify-between p-2">
              <div className="w-4 bg-teal-400 rounded-t" style={{height: '40%'}}></div>
              <div className="w-4 bg-teal-500 rounded-t" style={{height: '60%'}}></div>
              <div className="w-4 bg-teal-600 rounded-t" style={{height: '80%'}}></div>
              <div className="w-4 bg-teal-700 rounded-t" style={{height: '100%'}}></div>
              <div className="w-4 bg-teal-600 rounded-t" style={{height: '75%'}}></div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold mb-3">Top Performing Content</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Essential Oils Challenge</span>
                <span className="text-sm font-medium text-teal-600">156 engagements</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Product Knowledge Quiz</span>
                <span className="text-sm font-medium text-teal-600">134 engagements</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Customer Service Training</span>
                <span className="text-sm font-medium text-teal-600">98 engagements</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
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
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
            </div>
            <Button onClick={scrollToContact} className="bg-green-600 hover:bg-green-700">Get Early Access</Button>
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
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToContact} size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                  Get Early Access
                </Button>
              </div>
            </div>
            <div className="relative">
              {/* UPDATED: Using the actual Home Screen mockup */}
              <div className="bg-gray-100 rounded-3xl p-8 shadow-2xl">
                <div className="bg-gradient-to-b from-green-50 to-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">EngageNatural</h3>
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-4 mb-6">
                    <div className="flex items-center mb-2">
                      <Trophy className="w-5 h-5 mr-2" />
                      <span className="font-semibold">Featured Challenge</span>
                    </div>
                    <h4 className="font-bold mb-1">Essential Oils Knowledge</h4>
                    <p className="text-green-100 text-sm mb-3">Complete for 50 points • 5 min</p>
                    <Button size="sm" className="bg-white text-green-600 hover:bg-green-50">
                      Start
                    </Button>
                  </div>

                  <div>
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
                          <p className="text-xs text-gray-500">Completed challenge</p>
                        </div>
                        <span className="text-xs text-gray-400">2h ago</span>
                      </div>
                      <div className="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <Star className="w-4 h-4 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Mike R.</p>
                          <p className="text-xs text-gray-500">Earned badge</p>
                        </div>
                        <span className="text-xs text-gray-400">4h ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Broken vs How We Fix It */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* What's Broken */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">What's Broken</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">High staff turnover & unread emails</h3>
                    <p className="text-gray-600">Traditional training methods fail to reach and engage retail staff effectively.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Generic training platforms</h3>
                    <p className="text-gray-600">One-size-fits-all approaches don't address the unique needs of natural retail.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Lack of trust and personalization</h3>
                    <p className="text-gray-600">Staff don't feel connected to brands or invested in their success.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Fix It */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">How We Fix It</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified, staff-only access</h3>
                    <p className="text-gray-600">Creates a trusted community of authentic retail professionals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Real community + bite-sized learning</h3>
                    <p className="text-gray-600">Retailers connect, chat, and support each other's professional growth and healing journeys while mastering products in minutes, not hours.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Community and brand dashboard</h3>
                    <p className="text-gray-600">Provides measurable ROI and direct connection to frontline staff.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works - WITH UPDATED TEXT */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why It Works</h2>
            <p className="text-xl text-gray-600">Data-driven results that speak for themselves</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Sales Impact */}
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="mb-4">
                  <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Sales Impact</h3>
                  <p className="text-gray-600 mb-4">Retailers sell 3 more products until they are trained by someone else</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <img 
                    src={salesImpactGraph} 
                    alt="Sales Impact Graph" 
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                </div>
              </CardContent>
            </Card>

            {/* ROI Growth - UPDATED TEXT */}
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="mb-4">
                  <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">ROI Growth</h3>
                  <p className="text-gray-600 mb-4">275% ROI based on sales impact with 100 community members</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <img 
                    src={roiGrowthGraph} 
                    alt="ROI Growth Graph showing 275% ROI" 
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                </div>
              </CardContent>
            </Card>

            {/* User Engagement */}
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="mb-4">
                  <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">User Engagement</h3>
                  <p className="text-gray-600 mb-4">Gamified users interact 3-5x more often</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <img 
                    src={userEngagementGraph} 
                    alt="User Engagement Graph" 
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* UPDATED: Industry relevance without claiming experience */}
          <div className="text-center">
            <p className="text-lg text-gray-600">
              Built exclusively for the natural products industry, addressing the unique challenges of specialty retail environments.
            </p>
          </div>
        </div>
      </section>

      {/* App Interface Showcase - ENHANCED MOCKUPS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">App Interface</h2>
            <p className="text-xl text-gray-600">Designed for busy retail professionals - Click to enlarge</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {appScreenshots.map((item, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className={`p-6 ${item.color} border-2 cursor-pointer hover:shadow-lg transition-shadow`}>
                    <CardContent className="p-0 text-center">
                      <div className="w-full h-32 bg-white rounded-lg mb-4 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                      <p className="text-xs text-gray-500 mt-2">Click to view details</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    {item.mockup}
                    <p className="text-gray-600 mt-4">{item.desc}</p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
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
                <p className="text-gray-300">Quizzes, challenges, and peer interaction build skills and loyalty.</p>
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

      {/* About Section - WITH ACTUAL LINKEDIN LINK */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About EngageNatural</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Circular Headshot */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src={lizaHeadshot} 
                    alt="Liza Boone - Founder of EngageNatural" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Bio Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Created by Liza Boone — a 30-year veteran of the natural products industry
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  This app was built to empower the people who power your sales: retail staff.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With extensive experience in the natural products industry, Liza identified a critical gap 
                  between brands and retail staff. Her vision for EngageNatural stems from understanding that 
                  knowledgeable, engaged retail staff are the key to successful product sales and customer satisfaction.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    Visit Learning with Liza <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                    onClick={() => window.open('https://www.linkedin.com/in/learningwithliza/', '_blank')}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Waitlist - WITH FORMSPREE FORM */}
      <section id="contact" className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-4">Join the Waitlist</h2>
            <p className="text-xl text-green-100 mb-8">
              Be the first to experience the new standard in natural retail training.
            </p>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company/Store
                </label>
                <Input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="Your company or store name"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full"
                  placeholder="Tell us about your interest in EngageNatural..."
                />
              </div>
              <div className="text-center">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3"
                >
                  Send Message & Join Waitlist
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer - EMAIL REMOVED */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 EngageNatural. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

