const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web applications built with modern technologies",
      icon: "🌐",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces for your products",
      icon: "🎨",
    },
    {
      id: 3,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
      icon: "📱",
    },
    {
      id: 4,
      title: "E-Commerce",
      description: "Full-featured online stores and shopping platforms",
      icon: "🛍️",
    },
    {
      id: 5,
      title: "SEO Optimization",
      description: "Boost your online visibility with expert SEO strategies",
      icon: "📈",
    },
    {
      id: 6,
      title: "Maintenance & Support",
      description: "Ongoing support and updates for your digital products",
      icon: "🔧",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
