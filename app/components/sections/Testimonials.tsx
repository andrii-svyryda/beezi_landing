import Container from "../Container";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Beezi has transformed how our team handles routine development tasks. We're shipping features 3x faster.",
      author: "Sarah Chen",
      role: "VP of Engineering",
      company: "TechCorp"
    },
    {
      quote: "The AI integration is seamless. It feels like having an extra senior engineer on every project.",
      author: "Michael Roberts",
      role: "CTO",
      company: "StartupXYZ"
    },
    {
      quote: "We've reduced our technical debt by 50% in just 3 months. The ROI is undeniable.",
      author: "Emily Davis",
      role: "Engineering Manager",
      company: "ScaleUp Inc"
    }
  ];

  return (
    <section id="testimonials" className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
      <Container style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="text-center space-y-16">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Loved by Engineering Teams
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what industry leaders are saying about their experience with Beezi
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="space-y-6">
                  <div className="text-4xl text-purple-600">"</div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                    <div className="text-purple-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

