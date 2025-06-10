
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Hero from "@/components/Hero";
import ProgramsTable from "@/components/ProgramsTable";
import StateRebates from "@/components/StateRebates";
import FeedInTariffs from "@/components/FeedInTariffs";
import FAQ from "@/components/FAQ";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      {/* Table of Contents */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">On This Page</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li><a href="#programs" className="text-blue-600 hover:text-blue-800 transition-colors">List Of Solar Rebate Programs & Incentives</a></li>
                <li><a href="#what-is" className="text-blue-600 hover:text-blue-800 transition-colors">What is a Solar Rebate?</a></li>
                <li><a href="#federal" className="text-blue-600 hover:text-blue-800 transition-colors">Federal Government Solar Rebates & Incentives</a></li>
                <li><a href="#state-rebates" className="text-blue-600 hover:text-blue-800 transition-colors">Solar Rebates by State in Australia</a></li>
              </ul>
              <ul className="space-y-2">
                <li><a href="#feed-in" className="text-blue-600 hover:text-blue-800 transition-colors">Feed-in Tariffs by Region</a></li>
                <li><a href="#calculation" className="text-blue-600 hover:text-blue-800 transition-colors">How Solar Rebates are Calculated</a></li>
                <li><a href="#faq" className="text-blue-600 hover:text-blue-800 transition-colors">Frequently Asked Questions (FAQs)</a></li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Programs Table */}
      <section id="programs" className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">List Of Solar Rebate Programs & Incentives</h2>
        <p className="text-lg text-muted-foreground text-center mb-8">
          Here's a comprehensive breakdown of available programs across each state, outlining location, type, rebate amount, and eligibility:
        </p>
        <ProgramsTable />
      </section>

      {/* What is a Solar Rebate */}
      <section id="what-is" className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">What is a Solar Rebate?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              A solar rebate is a financial incentive designed to make solar power more affordable for you by reducing the upfront solar panel installation costs in Australia. These incentives are offered at both federal and state levels, often as tradable certificates or credits that apply directly to your purchase.
            </p>
            
            <Alert className="mb-6">
              <AlertDescription>
                <strong>Is It Really a Rebate?</strong><br />
                Technically, federal solar incentives under the Small-scale Renewable Energy Scheme (SRES) don't provide a direct cash rebate. Instead, solar systems generate Small-scale Technology Certificates (STCs), which have a market value and can be sold to offset installation costs.
              </AlertDescription>
            </Alert>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop" 
              alt="Solar panels on house roof with mountains in background"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Federal Rebates */}
      <section id="federal" className="py-16 px-4 max-w-7xl mx-auto bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl">
        <h2 className="text-3xl font-bold text-center mb-8">Federal Government Solar Rebates & Incentives</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="default">SRES</Badge>
                Small-Scale Renewable Energy Scheme
              </CardTitle>
              <CardDescription>For systems under 100kW</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Upfront savings through Small-Scale Technology Certificates (STCs)</li>
                <li>• Approx. $400-$600 per kW savings</li>
                <li>• Must be installed by CEC-accredited professional</li>
                <li>• STCs decrease annually and end in 2030</li>
              </ul>
              <Button className="mt-4 w-full">Get Free Quotes</Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="secondary">LRET</Badge>
                Large-Scale Renewable Energy Target
              </CardTitle>
              <CardDescription>For commercial systems over 100kW</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Generates Large-Scale Generation Certificates (LGCs)</li>
                <li>• LGCs approx. $46.25 each, generated monthly</li>
                <li>• Ongoing revenue rather than one-time discount</li>
                <li>• Helps businesses lower carbon footprint</li>
              </ul>
              <Button className="mt-4 w-full" variant="outline">Learn More</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* State Rebates */}
      <StateRebates />

      {/* Feed-in Tariffs */}
      <FeedInTariffs />

      {/* FAQ */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Saving with Solar?</h2>
          <p className="text-xl mb-8 opacity-90">
            Compare quotes from up to 7 installers in your area now and maximize your solar rebates.
          </p>
          <Button size="lg" variant="secondary" className="text-blue-600 font-semibold">
            COMPARE NOW - FREE QUOTES
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
