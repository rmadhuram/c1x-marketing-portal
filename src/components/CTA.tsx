
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-c1x-blue to-c1x-purple dark:from-c1x-orange dark:to-c1x-gray text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your marketing workflow?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join marketing teams already using C1X Marketing MCP Server to streamline campaign management through natural conversation.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="mr-3 h-6 w-6 text-white" />
                <span className="text-lg">Reduce campaign management time by 60%</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-3 h-6 w-6 text-white" />
                <span className="text-lg">No technical knowledge required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-3 h-6 w-6 text-white" />
                <span className="text-lg">Works with all major marketing platforms</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-c1x-blue dark:text-c1x-orange hover:bg-gray-100 font-medium py-6 px-8 rounded-lg text-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 py-6 px-8 rounded-lg text-lg">
                Schedule Demo
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">What our customers say</h3>
            
            <div className="space-y-6">
              <div className="bg-white/10 p-5 rounded-xl backdrop-blur-sm">
                <p className="italic mb-4">
                  "C1X Marketing MCP Server has completely transformed how our team manages campaigns. What used to take hours now takes minutes through simple conversation."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 mr-3"></div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm opacity-80">Marketing Director, TechCorp</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 p-5 rounded-xl backdrop-blur-sm">
                <p className="italic mb-4">
                  "The ability to manage both Facebook and Google campaigns through a single conversational interface has been a game-changer for our agency."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 mr-3"></div>
                  <div>
                    <p className="font-semibold">Michael Chen</p>
                    <p className="text-sm opacity-80">CEO, Digital Growth Agency</p>
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

export default CTA;
