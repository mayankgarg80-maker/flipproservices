const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$999",
      description: "Perfect for small projects",
      features: ["Up to 5 pages", "Responsive design", "Basic SEO", "1 month support"],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$2,499",
      description: "Most popular choice",
      features: [
        "Up to 20 pages",
        "Full responsive design",
        "Advanced SEO",
        "3 months support",
        "Blog setup",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large scale projects",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "E-commerce integration",
        "6 months support",
        "Analytics setup",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 ${
                plan.highlighted
                  ? "bg-blue-600 text-white shadow-xl scale-105"
                  : "bg-gray-50 border border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={plan.highlighted ? "text-blue-100" : "text-gray-600"} className="mb-4">
                {plan.description}
              </p>
              <div className="text-4xl font-bold mb-6">{plan.price}</div>
              <button
                className={`w-full py-3 rounded-lg font-semibold mb-6 transition ${
                  plan.highlighted
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Get Started
              </button>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span>✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
