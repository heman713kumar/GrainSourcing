import React from 'react';
import { ArrowRight, CheckCircle, Globe, ShieldCheck, Leaf } from 'lucide-react';
import { ViewState } from '../types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface HomeProps {
  onNavigate: (view: ViewState) => void;
}

const impactData = [
  { name: 'Rice', tons: 1200 },
  { name: 'Millets', tons: 850 },
  { name: 'Quinoa', tons: 400 },
  { name: 'Pulses', tons: 600 },
];

const COLORS = ['#1F4B43', '#E76F51', '#C5A059', '#4A453E'];

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section - Editorial Style */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-earth-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-earth-100 via-earth-100/80 to-transparent z-10 w-1/2"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-earth-100 via-transparent to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1589134327393-bd442d580ce8?q=80&w=2000&auto=format&fit=crop" 
            alt="Organic Grain Sacks" 
            className="w-full h-full object-cover object-right opacity-90 animate-slow-zoom"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-grain-400"></span>
              <span className="text-grain-600 text-sm font-bold tracking-[0.2em] uppercase">Est. 2018 — Global Sourcing</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif font-medium text-earth-900 leading-[0.9] mb-8 drop-shadow-sm">
              Cultivated <br/>
              <span className="text-nature-800 italic pr-2">with</span>
              Conscience.
            </h1>
            
            <p className="text-xl text-earth-600 mb-12 leading-relaxed font-light max-w-lg border-l-2 border-nature-300 pl-6">
              A curated marketplace for premium organic grains. Connecting conscientious buyers with the world's finest, fully traceable farms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => onNavigate('CATALOG')}
                className="px-10 py-5 bg-nature-900 text-white rounded-full font-medium transition-all shadow-xl hover:shadow-2xl hover:bg-nature-800 hover:-translate-y-1 flex items-center justify-center gap-3 group"
              >
                Explore Catalog
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform text-grain-300" />
              </button>
              <button 
                onClick={() => onNavigate('SOURCING')}
                className="px-10 py-5 bg-white text-earth-900 border border-earth-200 rounded-full font-medium transition-all shadow-soft hover:shadow-soft-hover hover:border-grain-300 flex items-center justify-center gap-2"
              >
                Sourcing Process
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props - Soft UI Cards */}
      <section className="py-32 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
             <div className="col-span-full lg:col-span-1">
               <span className="text-grain-500 font-bold tracking-widest text-xs uppercase mb-3 block">Our Promise</span>
               <h2 className="text-4xl font-serif font-medium text-earth-900 mb-6">Bridging Heritage & Modernity</h2>
               <p className="text-earth-600 leading-relaxed">
                 We curate not just products, but stories. Every grain tells a tale of soil, toil, and tradition.
               </p>
             </div>
             {[
               {
                 icon: <ShieldCheck className="h-8 w-8 text-gold-500" />,
                 title: "Certified Integrity",
                 desc: "Digital certificates verifying USDA, EU, JAS organic status."
               },
               {
                 icon: <Globe className="h-8 w-8 text-nature-600" />,
                 title: "Global Origins",
                 desc: "Direct trade from India, Kenya, Thailand to your warehouse."
               },
               {
                 icon: <Leaf className="h-8 w-8 text-grain-500" />,
                 title: "Purely Organic",
                 desc: "Lab-tested for 100% purity and zero chemical residue."
               }
             ].map((feature, idx) => (
               <div key={idx} className="p-8 rounded-[2rem] bg-white shadow-soft hover:shadow-soft-hover transition-all duration-500 group border border-earth-100/50 hover:border-earth-200">
                 <div className="bg-earth-50 p-4 w-fit rounded-2xl mb-6 group-hover:bg-nature-50 transition-colors">
                   {feature.icon}
                 </div>
                 <h3 className="text-xl font-serif font-bold text-earth-900 mb-3 group-hover:text-nature-800 transition-colors">{feature.title}</h3>
                 <p className="text-earth-500 text-sm leading-relaxed">{feature.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Impact Stats - Dark Teal Section */}
      <section className="py-24 bg-nature-900 text-white rounded-t-[3rem] relative overflow-hidden">
        {/* Decorative pattern overlay could go here */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-nature-800 rounded-full blur-[100px] opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-grain-700 rounded-full blur-[120px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-gold-400 font-bold tracking-widest text-xs uppercase mb-4 block">Sustainability Report 2023</span>
              <h2 className="text-4xl md:text-6xl font-serif font-medium mb-8 leading-tight">
                Impact Beyond <br/> <span className="text-nature-400 italic">The Grain.</span>
              </h2>
              <p className="text-nature-100/80 mb-10 text-lg font-light leading-relaxed max-w-md">
                By prioritizing direct trade, we've helped sequester carbon and improve soil health across 5,000+ acres of farmland globally.
              </p>
              
              <div className="grid grid-cols-2 gap-8 border-t border-nature-800 pt-8">
                <div>
                   <div className="text-5xl font-serif text-white mb-2">50<span className="text-grain-400 text-3xl">+</span></div>
                   <p className="text-nature-300 text-sm uppercase tracking-wider">Partner Farms</p>
                </div>
                <div>
                   <div className="text-5xl font-serif text-white mb-2">3k<span className="text-gold-400 text-3xl">t</span></div>
                   <p className="text-nature-300 text-sm uppercase tracking-wider">Organic Imports</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/10 h-[450px] shadow-2xl">
              <h3 className="text-lg font-medium mb-8 text-center text-white/90">Sourcing Volume by Grain Type</h3>
              <ResponsiveContainer width="100%" height="80%">
                <BarChart data={impactData}>
                  <XAxis 
                    dataKey="name" 
                    stroke="#94C4BB" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                    tick={{ fill: '#DDECE9' }}
                  />
                  <YAxis 
                    stroke="#94C4BB" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    tick={{ fill: '#DDECE9' }}
                  />
                  <Tooltip 
                    cursor={{fill: 'rgba(255,255,255,0.05)'}}
                    contentStyle={{ backgroundColor: '#1F4B43', border: '1px solid #2A6359', borderRadius: '12px', color: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
                    itemStyle={{ color: '#DDECE9' }}
                  />
                  <Bar dataKey="tons" radius={[6, 6, 6, 6]} barSize={40}>
                    {impactData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};