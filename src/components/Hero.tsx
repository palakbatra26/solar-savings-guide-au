
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=800&fit=crop')"
        }}
      ></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto text-center">
        <Badge className="mb-4 text-sm font-medium">
          🌞 Updated for 2025
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          Solar Savings Guide Australia
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          Looking to save on solar installation in 2025? Solar rebates are designed to significantly reduce the upfront costs of solar systems for homeowners and businesses. 
          <span className="font-semibold text-green-600"> Save thousands</span> by taking advantage of both federal and state incentives.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="text-lg px-8 py-3">
            Find My Rebates
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-3">
            Compare Installers
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">$400-$600</div>
            <div className="text-sm text-muted-foreground">Per kW Federal Rebate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">$14,000</div>
            <div className="text-sm text-muted-foreground">Max Interest-Free Loan</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">2030</div>
            <div className="text-sm text-muted-foreground">Federal Program Ends</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">8</div>
            <div className="text-sm text-muted-foreground">States & Territories</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
