import { Target, Users, Award, TrendingUp, Sparkles, Globe, Heart, Leaf } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const stats = [
    { label: 'Active Farmers', value: '50K+', icon: Users },
    { label: 'Consultations', value: '2M+', icon: Sparkles },
    { label: 'Countries', value: '45+', icon: Globe },
    { label: 'Crop Yield Increase', value: '35%', icon: TrendingUp },
  ];

  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms analyze your land data to provide personalized crop recommendations and farming strategies.',
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'Promote environmentally friendly farming methods that protect soil health, conserve water, and reduce chemical usage.',
    },
    {
      icon: TrendingUp,
      title: 'Yield Optimization',
      description: 'Data-driven recommendations to maximize your harvest while minimizing costs and environmental impact.',
    },
    {
      icon: Globe,
      title: 'Global Knowledge Base',
      description: 'Access agricultural insights from around the world, adapted to your local climate and soil conditions.',
    },
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Agricultural Scientist',
      bio: 'PhD in Agronomy with 15+ years of experience in sustainable farming practices.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead AI Engineer',
      bio: 'Specializes in machine learning applications for precision agriculture.',
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Climate Research Director',
      bio: 'Expert in climate adaptation strategies for modern farming.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-100 rounded-full mb-6">
            <Leaf className="w-4 h-4 text-[#2e7d32]" />
            <span className="text-sm text-[#2e7d32] font-medium">About AgroMind AI</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
            Empowering Farmers with AI Intelligence
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're on a mission to revolutionize agriculture by combining artificial intelligence with traditional farming wisdom, 
            helping farmers make smarter decisions for better harvests and a sustainable future.
          </p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="py-12 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-100 p-8 text-center shadow-lg shadow-gray-100/50"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-[#2e7d32]" />
                </div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8" />
                <h2 className="text-3xl font-semibold">Our Mission</h2>
              </div>
              <p className="text-lg text-green-50 leading-relaxed mb-8">
                To democratize access to advanced agricultural knowledge and technology, enabling farmers worldwide to increase 
                productivity, reduce environmental impact, and build sustainable farming practices for future generations.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Award className="w-6 h-6 mb-3" />
                  <h3 className="font-medium mb-2">Excellence</h3>
                  <p className="text-sm text-green-50">Delivering the highest quality insights and recommendations</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Heart className="w-6 h-6 mb-3" />
                  <h3 className="font-medium mb-2">Accessibility</h3>
                  <p className="text-sm text-green-50">Making AI technology available to farmers everywhere</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Leaf className="w-6 h-6 mb-3" />
                  <h3 className="font-medium mb-2">Sustainability</h3>
                  <p className="text-sm text-green-50">Promoting practices that protect our planet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for modern agriculture</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-100 p-10 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-gray-200/50 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-[#2e7d32]" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="py-20 px-6 mb-12"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Led by experts in agriculture, AI, and sustainability</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-100 p-8 text-center shadow-lg shadow-gray-100/50"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-[#2e7d32] font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
