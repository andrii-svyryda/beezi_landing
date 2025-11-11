import Container from "../Container";

export default function CTA() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      <Container maxWidth="1024px" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="text-center space-y-8">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Ready to transform your development workflow?
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
          Join hundreds of engineering teams that are already shipping faster and smarter with Beezi
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <button className="px-10 py-5 bg-white text-purple-600 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 text-lg font-bold">
            Book a demo
          </button>
          <button className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-200 text-lg font-bold">
            View pricing
          </button>
        </div>
        
        <div className="pt-8 text-white/80">
          <p className="text-sm">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
        </div>
      </Container>
    </section>
  );
}

