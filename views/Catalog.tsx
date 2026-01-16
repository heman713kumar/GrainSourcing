import React, { useState } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { ProductCategory, Product } from '../types';
import { Filter, Info, ChevronRight, Award } from 'lucide-react';

interface CatalogProps {
  onProductSelect: (product: Product) => void;
}

export const Catalog: React.FC<CatalogProps> = ({ onProductSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All');
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = MOCK_PRODUCTS.filter(p => {
    if (inStockOnly && !p.inStock) return false;
    if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="bg-earth-50 min-h-screen py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-earth-900 mb-4">The Collection</h1>
            <p className="text-earth-500 max-w-xl mx-auto font-light">Explore our curated selection of premium organic grains, sourced directly from verified estates.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          
          {/* Filters Sidebar - Clean & Minimal */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center gap-2 mb-8 pb-4 border-b border-earth-200">
                <Filter className="h-4 w-4 text-grain-500" />
                <h2 className="font-serif font-bold text-earth-900 text-lg">Refine</h2>
              </div>
              
              <div className="mb-10">
                <h3 className="text-xs font-bold text-earth-400 uppercase tracking-widest mb-4">Category</h3>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className={`block w-full text-left text-sm py-2 px-4 rounded-lg transition-all duration-300 ${
                      selectedCategory === 'All' 
                        ? 'bg-nature-900 text-white shadow-md' 
                        : 'text-earth-600 hover:bg-earth-100 hover:pl-6'
                    }`}
                  >
                    All Grains
                  </button>
                  {Object.values(ProductCategory).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left text-sm py-2 px-4 rounded-lg transition-all duration-300 ${
                        selectedCategory === cat 
                          ? 'bg-nature-900 text-white shadow-md' 
                          : 'text-earth-600 hover:bg-earth-100 hover:pl-6'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-earth-400 uppercase tracking-widest mb-4">Status</h3>
                <label className="flex items-center gap-3 text-sm text-earth-700 cursor-pointer group">
                  <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${inStockOnly ? 'bg-grain-500 border-grain-500' : 'border-earth-300 bg-white group-hover:border-grain-400'}`}>
                    {inStockOnly && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                  <input 
                    type="checkbox" 
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="hidden"
                  />
                  <span>Available Now</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Product Grid - Showroom Style */}
          <div className="flex-1">
            <div className="grid sm:grid-cols-2 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group bg-white rounded-[2rem] shadow-soft hover:shadow-soft-hover transition-all duration-500 border border-earth-100 flex flex-col overflow-hidden">
                  {/* Image Area */}
                  <div className="relative h-80 overflow-hidden bg-earth-100">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    />
                    
                    {/* Floating Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.certifications.slice(0, 2).map((cert, i) => (
                         <div key={i} className="bg-white/90 backdrop-blur-md text-earth-900 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1 border border-earth-200/50">
                           <Award className="h-3 w-3 text-gold-500" />
                           {cert.split(' ')[0]}
                         </div>
                      ))}
                    </div>

                    {!product.inStock && (
                      <div className="absolute inset-0 bg-earth-900/40 backdrop-blur-[2px] flex items-center justify-center">
                        <span className="bg-earth-900 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider border border-white/20">Sold Out</span>
                      </div>
                    )}
                    
                    {/* Quick View Overlay on Hover */}
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between">
                       <span className="text-white text-sm font-medium">{product.origin.country}</span>
                       <button 
                         onClick={() => onProductSelect(product)}
                         className="bg-white text-earth-900 p-2 rounded-full hover:bg-grain-400 hover:text-white transition-colors"
                       >
                         <ChevronRight className="h-5 w-5" />
                       </button>
                    </div>
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-8 flex-1 flex flex-col relative">
                    {/* Category Tag - Absolute Top Right overlapping image slightly? No, keep it clean. */}
                    <div className="mb-3">
                       <span className="text-grain-500 text-xs font-bold tracking-widest uppercase">{product.category}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-earth-900 mb-2 leading-tight group-hover:text-nature-800 transition-colors">{product.name}</h3>
                    
                    <p className="text-earth-500 text-sm leading-relaxed mb-6 line-clamp-2 font-light">
                      {product.description}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-earth-100 flex items-end justify-between">
                      <div>
                        <span className="block text-xs text-earth-400 uppercase tracking-wide mb-1">Wholesale Price</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-serif font-medium text-earth-900">£{product.pricePerKg.toFixed(2)}</span>
                          <span className="text-sm text-earth-400">/kg</span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                         <span className="block text-xs text-earth-400 uppercase tracking-wide mb-1">Min. Order</span>
                         <span className="text-sm font-bold text-earth-700 bg-earth-100 px-3 py-1 rounded-lg">{product.minOrderKg} kg</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
               <div className="flex flex-col items-center justify-center py-32 bg-white rounded-[2rem] border border-dashed border-earth-200">
                 <div className="bg-earth-50 p-6 rounded-full mb-6">
                    <Info className="h-8 w-8 text-earth-400" />
                 </div>
                 <h3 className="text-xl font-serif font-medium text-earth-900 mb-2">No products found</h3>
                 <p className="text-earth-500 font-light">Try adjusting your filters to discover our collection.</p>
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};