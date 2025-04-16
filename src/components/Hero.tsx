
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:py-32 overflow-hidden bg-gradient-to-br from-white to-c1x-lightGray">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Chat with your 
              <span className="gradient-text"> marketing campaigns</span>
            </h1>
            <p className="text-xl text-c1x-gray md:pr-10">
              C1X Marketing MCP Server connects LLMs with marketing APIs, enabling
              natural language interactions with your Facebook, Google, and other ad campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-c1x-orange hover:bg-c1x-gray text-white font-medium py-6 px-8 rounded-lg text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-c1x-orange text-c1x-orange hover:bg-c1x-orange hover:text-white py-6 px-8 rounded-lg text-lg">
                Book a Demo
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-full max-w-md lg:max-w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-c1x-blue/20 to-c1x-purple/20 rounded-3xl blur-3xl opacity-70"></div>
              <div className="relative bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-c1x-blue to-c1x-purple p-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-8 h-8 rounded-full bg-c1x-lightBlue flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
                      AI
                    </div>
                    <div className="bg-gray-100 rounded-lg rounded-tl-none p-3 text-sm">
                      How are my Facebook ad campaigns performing this week?
                    </div>
                  </div>
                  <div className="flex items-start mb-4 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-c1x-purple flex items-center justify-center text-white font-bold ml-3 flex-shrink-0">
                      C1X
                    </div>
                    <div className="bg-c1x-blue/10 rounded-lg rounded-tr-none p-3 text-sm">
                      Your Facebook campaigns generated 234 leads with a CPA of $12.40, down 15% from last week. Would you like to see the top performing ad creative?
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-c1x-lightBlue flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
                      AI
                    </div>
                    <div className="bg-gray-100 rounded-lg rounded-tl-none p-3 text-sm">
                      Yes, and increase budget on the top performer by 20%.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

