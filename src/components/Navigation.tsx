
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { buttonActions } from "@/utils/buttonActions";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
            <span className="text-xl font-bold text-gray-900">Solar Savings Guide AU</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#programs" className="text-gray-700 hover:text-blue-600 transition-colors">Programs</a>
            <a href="#federal" className="text-gray-700 hover:text-blue-600 transition-colors">Federal Rebates</a>
            <a href="#state-rebates" className="text-gray-700 hover:text-blue-600 transition-colors">State Rebates</a>
            <a href="#feed-in" className="text-gray-700 hover:text-blue-600 transition-colors">Feed-in Tariffs</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
            <Button onClick={buttonActions.getFreeQuotes}>Get Free Quotes</Button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-gray-600"></div>
              <div className="w-full h-0.5 bg-gray-600"></div>
              <div className="w-full h-0.5 bg-gray-600"></div>
            </div>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#programs" className="text-gray-700 hover:text-blue-600 transition-colors">Programs</a>
              <a href="#federal" className="text-gray-700 hover:text-blue-600 transition-colors">Federal Rebates</a>
              <a href="#state-rebates" className="text-gray-700 hover:text-blue-600 transition-colors">State Rebates</a>
              <a href="#feed-in" className="text-gray-700 hover:text-blue-600 transition-colors">Feed-in Tariffs</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
              <Button className="w-full" onClick={buttonActions.getFreeQuotes}>Get Free Quotes</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
