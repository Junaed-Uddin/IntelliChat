
export default function PricingPage() {

  const tiers = [
    {
      name: "Starter",
      price: "0",
      description: "Explore basic AI capabilities",
      features: [
        "100 messages/month",
        "Standard AI model access",
        "Basic API access",
        "Community support",
        "Personal use only",
      ],
      cta: "Get Started",
    },
    {
      name: "Professional",
      price: "20",
      description: "For power users and developers",
      features: [
        "2,000 messages/month",
        "Advanced model access",
        "Priority API endpoints",
        "Commercial license",
        "Email support",
        "Customizable models",
      ],
      cta: "Start Free Trial",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale deployments",
      features: [
        "Unlimited messages",
        "Dedicated GPU clusters",
        "SLA & Priority support",
        "Custom model training",
        "Team management",
        "Account manager",
        "SSO & SAML",
      ],
      cta: "Contact Sales",
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Platform Pricing
          </h1>
          <p className="text-xl text-gray-300">
            Flexible plans for individuals, teams, and enterprises
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-8 rounded-2xl shadow-lg transition-all hover:shadow-xl ${
                tier.featured
                  ? "border-2 border-blue-500 bg-base-100"
                  : "border border-gray-200 bg-base-300"
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">
                {tier.name}
              </h3>
              <p className="text-white mb-6">{tier.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-bold text-white">
                  {tier.price === "0" ? "Free" : `$${tier.price}`}
                </span>
                {tier.price !== "Custom" && tier.price !== "0" && (
                  <span className="text-gray-300">/month</span>
                )}
              </div>

              <ul className="space-y-4 mb-12">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-medium ${
                  tier.featured
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                } transition-colors`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-300 text-sm">
          <p>Looking for annual pricing? Get 2 months free →</p>
          <p className="mt-4">
            Need custom SLAs or compliance? Contact our sales team
          </p>
        </div>
      </div>
    </div>
  );
}
