import React, { useState } from 'react';
import { MOCK_FARMS } from '../constants';
import { MapPin, Sprout, Sun, Droplets, Send, CheckCircle, User, Briefcase, Mail } from 'lucide-react';

export const Sourcing = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    grainType: '',
    quantity: '',
    certifications: [] as string[],
    requirements: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleCertification = (cert: string) => {
    setFormData(prev => {
      const exists = prev.certifications.includes(cert);
      if (exists) {
        return { ...prev, certifications: prev.certifications.filter(c => c !== cert) };
      }
      return { ...prev, certifications: [...prev.certifications, cert] };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, send data to backend here
  };

  const certOptions = ['USDA Organic', 'EU Organic', 'JAS Organic', 'Fair Trade', 'Rainforest Alliance', 'Non-GMO Project'];

  return (
    <div className="animate-fade-in pb-16">
      {/* Header */}
      <div className="bg-earth-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Origins Matter</h1>
          <p className="text-xl text-earth-200 max-w-3xl mx-auto">
            We don't just buy grain; we cultivate partnerships. Explore the specific cooperatives and estates that grow your food.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-20">
        <div className="grid gap-8">
          {MOCK_FARMS.map((farm, index) => (
            <div key={farm.id} className={`bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <img 
                  src={farm.imageUrl} 
                  alt={farm.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 flex gap-2">
                   {farm.certifications.map(cert => (
                     <span key={cert} className="bg-white/90 backdrop-blur text-nature-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                       {cert}
                     </span>
                   ))}
                </div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-nature-700 font-bold tracking-wide uppercase text-sm mb-4">
                  <MapPin className="h-4 w-4" />
                  {farm.location}
                </div>
                <h2 className="text-3xl font-serif font-bold text-earth-900 mb-4">{farm.name}</h2>
                <p className="text-earth-600 mb-8 leading-relaxed text-lg">
                  {farm.story}
                </p>
                
                <div className="grid grid-cols-3 gap-4 border-t border-earth-100 pt-6">
                  <div className="text-center">
                    <Sprout className="h-6 w-6 text-nature-600 mx-auto mb-2" />
                    <span className="text-xs font-bold text-earth-500 uppercase">Soil Health</span>
                    <p className="text-sm font-bold text-earth-800">Regenerative</p>
                  </div>
                  <div className="text-center border-l border-earth-100">
                    <Sun className="h-6 w-6 text-grain-400 mx-auto mb-2" />
                    <span className="text-xs font-bold text-earth-500 uppercase">Harvest</span>
                    <p className="text-sm font-bold text-earth-800">Hand Picked</p>
                  </div>
                  <div className="text-center border-l border-earth-100">
                    <Droplets className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                    <span className="text-xs font-bold text-earth-500 uppercase">Water</span>
                    <p className="text-sm font-bold text-earth-800">Rain Fed</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Sourcing Form */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lg border border-earth-100 overflow-hidden">
          <div className="bg-earth-100 p-8 md:p-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-earth-900 mb-4">Custom Sourcing Request</h2>
            <p className="text-earth-700 max-w-2xl mx-auto">
              Looking for a specific heritage grain or need large-scale bulk sourcing? Tell us your requirements, and our team will find the perfect organic match from our global network.
            </p>
          </div>
          
          <div className="p-8 md:p-12">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-nature-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-nature-600" />
                </div>
                <h3 className="text-2xl font-bold text-earth-900 mb-2">Request Submitted Successfully</h3>
                <p className="text-earth-600 mb-8 max-w-md mx-auto">
                  Thank you for your interest. Our sourcing specialists have received your request and will contact you within 24 hours with potential matches and quotes.
                </p>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '', email: '', company: '', grainType: '', quantity: '', certifications: [], requirements: ''
                    });
                  }}
                  className="px-6 py-3 bg-earth-900 text-white rounded-full font-bold hover:bg-earth-800 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Contact Section */}
                <div>
                  <h3 className="text-lg font-bold text-earth-900 mb-6 flex items-center gap-2 pb-2 border-b border-earth-100">
                    <User className="h-5 w-5 text-nature-700" /> Contact Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-earth-700">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-earth-400" />
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-earth-200 focus:border-nature-500 focus:ring-2 focus:ring-nature-200 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-earth-700">Company Name</label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-earth-400" />
                        <input 
                          type="text" 
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-earth-200 focus:border-nature-500 focus:ring-2 focus:ring-nature-200 outline-none transition-all"
                          placeholder="Organic Foods Ltd"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium text-earth-700">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-earth-400" />
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-earth-200 focus:border-nature-500 focus:ring-2 focus:ring-nature-200 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Requirements Section */}
                <div>
                  <h3 className="text-lg font-bold text-earth-900 mb-6 flex items-center gap-2 pb-2 border-b border-earth-100">
                    <Sprout className="h-5 w-5 text-nature-700" /> Grain Requirements
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-earth-700">Grain Type / Variety</label>
                      <input 
                        type="text" 
                        name="grainType"
                        value={formData.grainType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-earth-200 focus:border-nature-500 focus:ring-2 focus:ring-nature-200 outline-none transition-all"
                        placeholder="e.g. Jasmine Rice, Teff, Amaranth"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-earth-700">Estimated Quantity</label>
                      <input 
                        type="text" 
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-earth-200 focus:border-nature-500 focus:ring-2 focus:ring-nature-200 outline-none transition-all"
                        placeholder="e.g. 500kg, 2 containers"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-earth-700 mb-3">Required Certifications</label>
                    <div className="flex flex-wrap gap-3">
                      {certOptions.map(cert => (
                        <button
                          key={cert}
                          type="button"
                          onClick={() => toggleCertification(cert)}
                          className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                            formData.certifications.includes(cert)
                              ? 'bg-nature-100 border-nature-500 text-nature-800'
                              : 'bg-white border-earth-200 text-earth-600 hover:border-earth-300 hover:bg-earth-50'
                          }`}
                        >
                          {cert}
                          {formData.certifications.includes(cert) && <span className="ml-2">✓</span>}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-earth-700">Special Requirements</label>
                    <textarea 
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-earth-200 focus:border-nature-500 focus:ring-2 focus:ring-nature-200 outline-none transition-all resize-none"
                      placeholder="Please specify any additional requirements such as specific moisture content, packaging preferences, delivery timeline, or processing needs..."
                    ></textarea>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button 
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-earth-900 hover:bg-nature-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    Submit Sourcing Request
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};