
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: 1,
    title: "Connect Your Ad Accounts",
    description: "Link your Facebook, Google, and other marketing platform accounts to C1X Marketing MCP Server with secure OAuth authentication.",
    color: "from-blue-500 to-indigo-600 dark:from-c1x-orange dark:to-amber-600",
  },
  {
    number: 2,
    title: "Access Through Your Favorite LLM",
    description: "Connect to our MCP Server through any compatible LLM interface like ChatGPT, Claude, or custom solutions.",
    color: "from-indigo-500 to-purple-600 dark:from-amber-600 dark:to-orange-500",
  },
  {
    number: 3,
    title: "Chat Naturally With Your Campaigns",
    description: "Ask questions, give instructions, and manage your marketing efforts using natural language - no special commands needed.",
    color: "from-purple-500 to-pink-600 dark:from-orange-500 dark:to-red-500",
  },
  {
    number: 4,
    title: "Get Insights & Take Action",
    description: "Receive campaign performance data, make adjustments, allocate budgets, and create new campaigns - all through conversation.",
    color: "from-pink-500 to-rose-600 dark:from-red-500 dark:to-rose-500",
  },
];

const HowItWorks = () => {
  return (
    <section id="howitworks" className="py-20 bg-white dark:bg-c1x-dark-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Transforming marketing campaign management through the power of conversation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className={cn(
                  "flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl bg-gradient-to-r",
                  step.color
                )}>
                  {step.number}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="ml-8 my-4 pl-8 border-l-2 border-dashed border-gray-300 dark:border-gray-600 h-8 md:h-12"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center text-c1x-blue dark:text-c1x-orange font-medium hover:text-c1x-purple dark:hover:text-c1x-orange/80 transition-colors">
            <a href="#" className="flex items-center">
              View detailed integration guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
