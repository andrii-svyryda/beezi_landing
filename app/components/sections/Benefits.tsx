import Container from "../Container";

export default function Benefits() {
  const stats = [
    { value: "80%", label: "Time Saved on Routine Tasks" },
    { value: "3x", label: "Faster Code Review Process" },
    { value: "50%", label: "Reduction in Technical Debt" },
    { value: "24/7", label: "AI-Powered Support" }
  ];

  return (
    <section id="benefits" className="h-screen flex items-center justify-center bg-white">
      <Container style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="text-center space-y-16">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Measurable Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See real results from day one. Our AI teammate delivers quantifiable improvements to your development workflow.
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="space-y-2 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-left p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cost Efficiency</h3>
              <p className="text-gray-600">Reduce operational costs while maintaining quality and velocity</p>
            </div>
            <div className="text-left p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Faster Delivery</h3>
              <p className="text-gray-600">Ship features faster with automated workflows and smart assistance</p>
            </div>
            <div className="text-left p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable Growth</h3>
              <p className="text-gray-600">Scale your engineering team's output without proportional headcount growth</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

