
import { MessagesSquare, Zap, Code, Layers, Lock, BarChart3 } from "lucide-react";

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureProps) => (
  <div className="feature-card">
    <div className="icon-container text-c1x-blue">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <MessagesSquare size={24} />,
      title: "Natural Language Interactions",
      description: "Chat with your marketing campaigns using everyday language - no need to learn complex interfaces."
    },
    {
      icon: <Zap size={24} />,
      title: "Model Context Protocol",
      description: "Our MCP technology enables AI to discover and invoke marketing tools automatically."
    },
    {
      icon: <Code size={24} />,
      title: "API Integrations",
      description: "Connect seamlessly with Facebook, Google, and other marketing platforms through our unified API."
    },
    {
      icon: <Layers size={24} />,
      title: "Multi-Channel Management",
      description: "Manage all your marketing channels from one conversational interface, saving time and effort."
    },
    {
      icon: <Lock size={24} />,
      title: "Secure Access",
      description: "Enterprise-grade security ensures your marketing data and credentials remain protected."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Real-time Analytics",
      description: "Get instant insights and performance metrics through simple conversational queries."
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            C1X Marketing MCP Server bridges the gap between AI language models and your marketing tools.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
