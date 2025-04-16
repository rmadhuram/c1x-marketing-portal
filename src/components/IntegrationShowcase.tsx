
import { useState } from "react";
import { cn } from "@/lib/utils";

const platforms = [
  {
    name: "Facebook Ads",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png",
    features: [
      "Campaign creation and management",
      "Performance analysis",
      "Budget optimization",
      "Creative testing"
    ]
  },
  {
    name: "Google Ads",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/2560px-Google_Ads_logo.svg.png",
    features: [
      "Keyword performance tracking",
      "Ad copy generation",
      "Bid strategy optimization",
      "Quality score analysis"
    ]
  },
  {
    name: "LinkedIn Ads",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png",
    features: [
      "B2B audience targeting",
      "Lead generation campaign setup",
      "Professional audience insights",
      "Content performance tracking"
    ]
  },
  {
    name: "TikTok Ads",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/1024px-TikTok_logo.svg.png",
    features: [
      "Video ad performance",
      "Creator collaboration tracking",
      "Audience demographic analysis",
      "Trend-based campaign creation"
    ]
  }
];

const IntegrationShowcase = () => {
  const [activePlatform, setActivePlatform] = useState(0);

  return (
    <section id="integrations" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Platform Integrations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with all your marketing platforms through our MCP Server. Chat with them all from one interface.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-12 items-start">
          {/* Platform Selector */}
          <div className="w-full md:w-1/3 flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-4 pb-4 md:pb-0">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center p-4 rounded-lg cursor-pointer transition-all min-w-[200px]",
                  activePlatform === index 
                    ? "bg-white shadow-lg border-l-4 border-c1x-blue" 
                    : "bg-white/50 hover:bg-white hover:shadow"
                )}
                onClick={() => setActivePlatform(index)}
              >
                <img 
                  src={platform.logo} 
                  alt={platform.name} 
                  className="w-10 h-10 object-contain mr-4" 
                />
                <span className="font-medium">{platform.name}</span>
              </div>
            ))}
          </div>

          {/* Platform Features */}
          <div className="w-full md:w-2/3 bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex items-center mb-6">
              <img 
                src={platforms[activePlatform].logo} 
                alt={platforms[activePlatform].name} 
                className="w-12 h-12 object-contain mr-4" 
              />
              <h3 className="text-2xl font-bold">{platforms[activePlatform].name}</h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Our C1X Marketing MCP Server enables LLMs to interact with {platforms[activePlatform].name} through natural language. Manage campaigns, analyze performance, and make adjustments - all through conversation.
              </p>
              
              <div>
                <h4 className="font-semibold text-lg mb-3">Key Capabilities:</h4>
                <ul className="space-y-2">
                  {platforms[activePlatform].features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-c1x-blue mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-sm text-gray-600 italic">
                  Example: "Show me the top performing {platforms[activePlatform].name} campaigns from last week and increase budget on the best one by 15%"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationShowcase;
