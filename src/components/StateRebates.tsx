import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { buttonActions } from "@/utils/buttonActions";

const StateRebates = () => {
  const states = [
    {
      id: "nsw",
      name: "NSW",
      fullName: "New South Wales",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=200&fit=crop",
      programs: [
        "NSW Solar Battery Rebate (PDRS): Up to $2,400 for battery installations",
        "NSW Solar & Energy Efficiency Grant for Apartments: Up to 50% of installation costs",
        "Empowering Homes Program: Interest-free loans up to $14,000",
        "Smart Distributed Batteries Project: Up to $4,950 discount on Tesla Powerwall 2"
      ]
    },
    {
      id: "vic",
      name: "VIC", 
      fullName: "Victoria",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&h=200&fit=crop",
      programs: [
        "Victoria Solar Homes Program: Up to $1,400 rebate on solar panels",
        "Solar for Rentals Program: $1,400 rebate for landlords",
        "Solar for Apartments: Up to $2,800 per apartment",
        "Interest-Free Battery Loans: Up to $8,800 for battery storage"
      ]
    },
    {
      id: "qld",
      name: "QLD",
      fullName: "Queensland", 
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=200&fit=crop",
      programs: [
        "Queensland Battery Booster Loan and Rebate: [CLOSED] Previously up to $6,000 loans and $3,000 rebates"
      ]
    },
    {
      id: "sa",
      name: "SA",
      fullName: "South Australia",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=200&fit=crop",
      programs: [
        "SA Home Battery Scheme: [CLOSED] Previously up to $2,000 subsidies",
        "Virtual Power Plant (VPP) Incentives: Extra incentives for VPP participation"
      ]
    },
    {
      id: "wa",
      name: "WA",
      fullName: "Western Australia",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=200&fit=crop",
      programs: [
        "Distributed Energy Buyback Scheme (DEBS): Up to 10 cents/kWh feed-in tariff",
        "Switch Your Thinking Program: Discounts on sustainable products"
      ]
    },
    {
      id: "act",
      name: "ACT",
      fullName: "Australian Capital Territory",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=200&fit=crop",
      programs: [
        "Next Gen Energy Storage Program: [CLOSED] Previously up to $3,500 rebates",
        "Sustainable Household Scheme (SHS): Zero-interest loans $2,000-$15,000"
      ]
    },
    {
      id: "nt",
      name: "NT",
      fullName: "Northern Territory",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=200&fit=crop",
      programs: [
        "Northern Territory Apartment Solar Rebate: Up to 50% of installation costs",
        "Home and Business Battery Scheme: Up to $5,000 for battery installations",
        "Feed-in Tariff: Payments for surplus energy sent to grid"
      ]
    }
  ];

  return (
    <section id="state-rebates" className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Solar Rebates by State in Australia</h2>
      <p className="text-lg text-muted-foreground text-center mb-12">
        Australian states and territories offer a range of solar rebate programs that can be paired with federal incentives, allowing homeowners and businesses to maximise their savings on solar installations.
      </p>
      
      <Tabs defaultValue="nsw" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 mb-8">
          {states.map((state) => (
            <TabsTrigger key={state.id} value={state.id} className="text-xs">
              {state.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {states.map((state) => (
          <TabsContent key={state.id} value={state.id}>
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <img 
                    src={state.image} 
                    alt={`${state.fullName} landscape`}
                    className="w-full lg:w-48 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{state.fullName} Solar Rebates</CardTitle>
                    <CardDescription className="text-base">
                      Available programs and incentives for {state.fullName} residents
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {state.programs.map((program, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm leading-relaxed">{program}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <Button onClick={() => buttonActions.learnMoreAboutState(state.name)}>
                    Learn More About {state.name} Rebates
                  </Button>
                  <Button variant="outline" onClick={() => buttonActions.getStateRebates(state.name)}>
                    Get {state.name} Installer Quotes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default StateRebates;
