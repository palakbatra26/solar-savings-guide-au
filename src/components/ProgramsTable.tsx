import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buttonActions } from "@/utils/buttonActions";

const ProgramsTable = () => {
  const programs = [
    {
      program: "Small-scale Renewable Energy Scheme (SRES)",
      location: "Federal",
      type: "Solar Panel",
      amount: "Approx. $400-$600 per kW, varies by system size and location",
      eligibility: "Systems <100kW, installed by CEC-accredited installers",
      status: "active"
    },
    {
      program: "Large-scale Renewable Energy Target (LRET)",
      location: "Federal", 
      type: "Solar Panel (Commercial)",
      amount: "LGCs approx. $46.25 each, generated monthly",
      eligibility: "Commercial systems over 100kW",
      status: "active"
    },
    {
      program: "NSW Solar Battery Rebate (PDRS)",
      location: "NSW",
      type: "Battery",
      amount: "$1,600-$2,400 for battery, $250-$400 for VPP connection",
      eligibility: "Existing solar system, battery installed by Accredited Certificate Providers",
      status: "active"
    },
    {
      program: "Victoria Solar Homes Program",
      location: "VIC",
      type: "Solar Panel & Battery",
      amount: "Up to $1,400 for panels; interest-free loan for batteries",
      eligibility: "Homeowners and rental properties meeting income and property criteria",
      status: "active"
    },
    {
      program: "Queensland Battery Booster Loan and Rebate",
      location: "QLD",
      type: "Loan and Rebate (Battery)",
      amount: "Loans up to $6,000, rebates up to $3,000",
      eligibility: "Owner-occupied homes, income and property eligibility applies",
      status: "closed"
    },
    {
      program: "SA Home Battery Scheme",
      location: "SA",
      type: "Battery Subsidy",
      amount: "Up to $2,000 for battery storage",
      eligibility: "Owner-occupiers, landlords, VPP-compatible systems",
      status: "closed"
    }
  ];

  return (
    <div className="space-y-4">
      <div className="text-center mb-8">
        <p className="text-sm text-muted-foreground">Australian Solar Rebate Programs & Incentives by State as at November 14th 2024</p>
        <Button className="mt-4" onClick={buttonActions.compareNow}>
          COMPARE NOW - Up to 7 Free Quotes
        </Button>
      </div>
      
      <div className="grid gap-4">
        {programs.map((program, index) => (
          <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <CardTitle className="text-lg">{program.program}</CardTitle>
                <div className="flex gap-2">
                  <Badge variant="secondary">{program.location}</Badge>
                  <Badge variant={program.status === 'active' ? 'default' : 'destructive'}>
                    {program.status === 'active' ? 'Active' : 'Closed'}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Type</p>
                  <p className="text-sm">{program.type}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Rebate/Incentive Amount</p>
                  <p className="text-sm font-medium text-green-600">{program.amount}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Eligibility Criteria</p>
                  <p className="text-sm">{program.eligibility}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProgramsTable;
