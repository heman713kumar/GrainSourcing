import React, { useState } from 'react';
import { ViewState } from '../types';
import { Menu, X, ShoppingBag, Leaf, User } from 'lucide-react';

interface HeaderProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: 'HOME' as ViewState },
    { label: 'Sourcing & Farms', value: 'SOURCING' as ViewState },
    { label: 'Grain Catalog', value: 'CATALOG' as ViewState },
  ];

  const handleNav = (view: ViewState) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-earth-50/80 backdrop-blur-lg border-b border-earth-100/50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer gap-3 group" 
            onClick={() => handleNav('HOME')}
          >
            <div className="bg-nature-800 p-2.5 rounded-xl shadow-lg group-hover:bg-grain-400 transition-colors duration-300">
              <Leaf className="h-6 w-6 text-earth-50" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-serif text-2xl font-bold text-earth-900 tracking-tight leading-none group-hover:text-grain-700 transition-colors">GrainSource</h1>
              <p className="text-[10px] text-nature-800 tracking-[0.2em] uppercase font-bold mt-1">Premium Organic</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center bg-earth-100/50 rounded-full px-6 py-2 border border-earth-200/50 backdrop-blur-sm">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.value)}
                className={`text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 ${
                  currentView === item.value
                    ? 'bg-white text-nature-900 shadow-md transform scale-105'
                    : 'text-earth-600 hover:text-grain-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-earth-600 hover:text-grain-600 relative transition-colors">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-grain-400 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">0</span>
            </button>
            <button 
              onClick={() => handleNav('DASHBOARD')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all border ${
                currentView === 'DASHBOARD' 
                ? 'bg-nature-900 text-white border-nature-900 shadow-lg shadow-nature-900/20' 
                : 'bg-white text-earth-900 border-earth-200 hover:border-grain-300 hover:shadow-soft'
              }`}
            >
              <User className="h-4 w-4" />
              <span className="text-sm font-medium">Client Portal</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-earth-800 hover:text-nature-800 p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-earth-50 border-t border-earth-200 animate-in slide-in-from-top-5 duration-200 shadow-soft">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.value)}
                className={`block w-full text-left px-4 py-4 text-lg font-serif font-medium rounded-xl ${
                  currentView === item.value
                    ? 'text-nature-900 bg-earth-100'
                    : 'text-earth-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('DASHBOARD')}
              className="block w-full text-left px-4 py-4 text-lg font-serif font-medium text-grain-600 border-t border-earth-100 mt-2"
            >
              Client Dashboard
            </button>
          </div>
        </div>
      )}
    </header>
  );
};