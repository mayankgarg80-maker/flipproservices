const Features = () => {
  const features = [
    {
      title: "Fast & Reliable",
      description: "High-performance solutions that scale with your business",
    },
    {
      title: "Expert Team",
      description: "Experienced developers and designers ready to help",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to keep your systems running",
    },
    {
      title: "Latest Technology",
      description: "We use cutting-edge tools and frameworks",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
