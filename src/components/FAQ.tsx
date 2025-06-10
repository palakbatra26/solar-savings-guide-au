import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { buttonActions } from "@/utils/buttonActions";

const FAQ = () => {
  const faqs = [
    {
      question: "How much can I save with solar rebates in Australia?",
      answer: "You can save between $400-$600 per kW through federal rebates, plus additional state-specific rebates. For a typical 6.6kW system, this could mean $2,640-$3,960 in federal savings alone, with potential additional thousands from state programs."
    },
    {
      question: "Do solar rebates expire?",
      answer: "Yes, the federal SRES program decreases annually and will end in 2030. Many state programs also have limited timeframes or funding. It's important to act sooner rather than later to maximize your savings."
    },
    {
      question: "Can I combine federal and state rebates?",
      answer: "Yes! Federal rebates can typically be combined with state and territory rebates, allowing you to maximize your savings. However, you should check specific program eligibility requirements as some may have restrictions."
    },
    {
      question: "How are Small-scale Technology Certificates (STCs) calculated?",
      answer: "STCs are calculated based on your system size, location zone, and remaining years until 2030. The formula is: System size (kW) × Zone factor × Years remaining. Each STC is worth approximately $40-$45."
    },
    {
      question: "Do I need to apply for solar rebates separately?",
      answer: "For federal rebates (STCs), your installer typically handles the process and applies the discount directly to your invoice. For state rebates, you may need to apply separately, though some installers can assist with applications."
    },
    {
      question: "What happens to feed-in tariffs in the future?",
      answer: "Feed-in tariff rates can change over time and vary by electricity retailer. While current rates provide good returns, it's wise to compare rates regularly and consider battery storage to maximize self-consumption of your solar energy."
    }
  ];

  return (
    <section id="faq" className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <p className="text-lg text-muted-foreground text-center mb-12">
        Get answers to the most common questions about solar rebates and incentives in Australia.
      </p>
      
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      <div className="mt-12 text-center">
        <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-green-50">
          <CardHeader>
            <CardTitle>Still Have Questions?</CardTitle>
            <CardDescription>
              Our solar experts are here to help you navigate rebates and find the best deals.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={buttonActions.speakToExpert}
              >
                Speak to an Expert
              </button>
              <button 
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                onClick={buttonActions.getFreeAssessment}
              >
                Get Free Assessment
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FAQ;
