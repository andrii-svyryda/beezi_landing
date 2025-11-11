import Container from "../Container";

export default function Features() {
  const features = [
    {
      title: "Native Integration",
      description: "Seamlessly integrates with your existing workflow and tools. Works where your team already works.",
      icon: "🔗"
    },
    {
      title: "Intelligent Automation",
      description: "AI-powered automation that learns from your codebase and adapts to your team's patterns.",
      icon: "🤖"
    },
    {
      title: "Code Quality",
      description: "Maintains high code quality standards with automated reviews and suggestions.",
      icon: "✨"
    },
    {
      title: "Time Savings",
      description: "Free up your engineers to focus on what matters most - product and architecture.",
      icon: "⚡"
    }
  ];

  return (
    <section id="features" className="h-screen flex items-center justify-center bg-white">
      <Container style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            What Beezi Brings To Your Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let your engineers focus on product, architecture, and velocity, while Beezi handles the manual dev work behind the scenes.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

