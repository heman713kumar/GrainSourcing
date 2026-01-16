import React, { useState } from 'react';
import { ViewState, Product } from './types';
import { Header } from './components/Header';
import { Home } from './views/Home';
import { Catalog } from './views/Catalog';
import { Dashboard } from './views/Dashboard';
import { Sourcing } from './views/Sourcing';
import { Opening } from './views/Opening';
import { X, Check, ArrowRight } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('OPENING');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => setSelectedProduct(null);

  const renderView = () => {
    switch (currentView) {
      case 'OPENING':
        return <Opening onEnter={() => setCurrentView('HOME')} />;
      case 'HOME':
        return <Home onNavigate={setCurrentView} />;
      case 'CATALOG':
        return <Catalog onProductSelect={handleProductSelect} />;
      case 'DASHBOARD':
        return <Dashboard />;
      case 'SOURCING':
        return <Sourcing />;
      default:
        return <Home onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-earth-50 font-sans text-earth-900 selection:bg-nature-200">
      {currentView !== 'OPENING' && <Header currentView={currentView} onNavigate={setCurrentView} />}
      
      <main>
        {renderView()}
      </main>

      {currentView !== 'OPENING' && (
        <footer className="bg-earth-900 text-earth-300 py-12 mt-12 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-serif font-bold text-xl mb-4">GrainSource</h3>
              <p className="text-sm leading-relaxed">
                Connecting conscientious UK buyers with the world's finest organic farms since 2018.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setCurrentView('CATALOG')} className="hover:text-white transition-colors">Organic Rice</button></li>
                <li><button onClick={() => setCurrentView('CATALOG')} className="hover:text-white transition-colors">Millets & Ancient Grains</button></li>
                <li><button onClick={() => setCurrentView('CATALOG')} className="hover:text-white transition-colors">Bulk Pulses</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setCurrentView('SOURCING')} className="hover:text-white transition-colors">Our Sourcing</button></li>
                <li><button className="hover:text-white transition-colors">Sustainability Report</button></li>
                <li><button className="hover:text-white transition-colors">Careers</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Contact</h4>
              <p className="text-sm mb-2">London, UK</p>
              <p className="text-sm mb-4">sourcing@grainsource.co.uk</p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-8 h-8 bg-earth-800 rounded-full flex items-center justify-center hover:bg-nature-700 transition-colors cursor-pointer">in</div>
                <div className="w-8 h-8 bg-earth-800 rounded-full flex items-center justify-center hover:bg-nature-700 transition-colors cursor-pointer">ig</div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-earth-800 text-xs text-center text-earth-500">
            &copy; 2024 GrainSource Organic Ltd. All rights reserved.
          </div>
        </footer>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-earth-900/60 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-earth-100 rounded-full z-10 transition-colors"
            >
              <X className="h-6 w-6 text-earth-800" />
            </button>
            
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto bg-earth-100 relative">
                <img 
                  src={selectedProduct.imageUrl} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="mb-2 text-nature-700 font-bold uppercase text-xs tracking-wide">
                  {selectedProduct.category}
                </div>
                <h2 className="text-3xl font-serif font-bold text-earth-900 mb-4">{selectedProduct.name}</h2>
                <div className="flex items-center gap-2 mb-6">
                  {selectedProduct.certifications.map(cert => (
                    <span key={cert} className="inline-flex items-center gap-1 bg-nature-50 text-nature-800 text-xs font-bold px-2 py-1 rounded-md border border-nature-100">
                      <Check className="h-3 w-3" /> {cert}
                    </span>
                  ))}
                </div>
                
                <p className="text-earth-600 mb-6 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="bg-earth-50 rounded-xl p-6 mb-6">
                   <h3 className="font-bold text-earth-900 mb-3 text-sm uppercase">Technical Specifications</h3>
                   <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                     {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                       <React.Fragment key={key}>
                         <dt className="text-earth-500">{key}</dt>
                         <dd className="font-medium text-earth-900 text-right">{value}</dd>
                       </React.Fragment>
                     ))}
                     <dt className="text-earth-500 pt-2 border-t border-earth-200 mt-2">Origin</dt>
                     <dd className="font-medium text-earth-900 text-right pt-2 border-t border-earth-200 mt-2">{selectedProduct.origin.name}, {selectedProduct.origin.country}</dd>
                   </dl>
                </div>

                <div className="flex items-center justify-between gap-6">
                  <div>
                    <span className="block text-sm text-earth-500">Bulk Price</span>
                    <span className="text-2xl font-bold text-earth-900">£{selectedProduct.pricePerKg.toFixed(2)}<span className="text-sm font-normal text-earth-500">/kg</span></span>
                    <span className="block text-xs text-earth-400">Min. Order {selectedProduct.minOrderKg}kg</span>
                  </div>
                  <button className="flex-1 bg-earth-900 hover:bg-nature-800 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                    Request Quote
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}