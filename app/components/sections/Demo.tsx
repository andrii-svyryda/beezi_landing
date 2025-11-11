import Container from "../Container";

export default function Demo() {
  return (
    <section id="demo" className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <Container style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Smart ticket system
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Beezi automatically triages, categorizes, and routes tickets to the right team members. 
              AI-powered insights help prioritize work and identify patterns across your development workflow.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">Automated Triaging</h4>
                  <p className="text-gray-600">Intelligent categorization and priority assignment</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">Smart Routing</h4>
                  <p className="text-gray-600">Routes tasks to the most qualified team member</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">Pattern Recognition</h4>
                  <p className="text-gray-600">Identifies recurring issues and suggests solutions</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Right Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-white/30 rounded-full" />
                  <div className="w-3 h-3 bg-white/30 rounded-full" />
                  <div className="w-3 h-3 bg-white/30 rounded-full" />
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg animate-pulse" />
                <div className="h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg animate-pulse delay-75" />
                <div className="h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg animate-pulse delay-150" />
                <div className="h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg animate-pulse delay-300" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

