import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-blue-100 mb-8">
          Let's discuss your project and turn your ideas into reality
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Contact Us Today
        </Link>
      </div>
    </section>
  );
};

export default CTA;
