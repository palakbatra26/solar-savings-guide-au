
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const FeedInTariffs = () => {
  const tariffs = [
    { state: "NSW", rate: "Varies by provider", description: "Check with local electricity retailers for exact rates", value: 70 },
    { state: "VIC", rate: "~6.7 cents/kWh", description: "Averages around 6.7 cents/kWh but can differ by provider", value: 67 },
    { state: "QLD", rate: "3-10 cents/kWh", description: "Offers between 3 and 10 cents/kWh in most regions", value: 65 },
    { state: "SA", rate: "3-5 cents/kWh", description: "Typically around 3-5 cents/kWh", value: 40 },
    { state: "WA", rate: "10¢ peak / 3¢ off-peak", description: "10 cents/kWh (peak) and 3 cents/kWh (off-peak) through DEBS", value: 100 },
    { state: "ACT", rate: "Varies by provider", description: "Check with local electricity retailers", value: 60 },
    { state: "NT", rate: "Varies by provider", description: "Payments vary by provider for surplus energy", value: 50 }
  ];

  return (
    <section id="feed-in" className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Feed-in Tariffs by Region</h2>
      <p className="text-lg text-muted-foreground text-center mb-12">
        Feed-in tariffs provide payments for surplus energy exported back to the grid, helping homeowners maximise savings and reduce payback times.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tariffs.map((tariff, index) => (
          <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <span>{tariff.state}</span>
                <span className="text-lg font-bold text-green-600">{tariff.rate}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{tariff.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Rate Competitiveness</span>
                  <span>{tariff.value}%</span>
                </div>
                <Progress value={tariff.value} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <div className="bg-blue-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-4">Maximize Your Feed-in Tariff Returns</h3>
          <p className="text-muted-foreground mb-6">
            Including feed-in tariffs in your solar planning can further reduce payback times, especially in regions with higher rates like Western Australia.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">Export</div>
              <div className="text-sm text-muted-foreground">Unused solar energy</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">Earn</div>
              <div className="text-sm text-muted-foreground">Get paid per kWh</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">Save</div>
              <div className="text-sm text-muted-foreground">Reduce payback time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedInTariffs;
