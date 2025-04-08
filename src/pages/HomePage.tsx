import * as React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Shield,
  CreditCard,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Shop Securely,
                <br />
                <span className="text-blue-600">Pay Confidently</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Experience the future of online shopping with SecureShop.
                Industry-leading security meets seamless user experience.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Start Shopping
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                alt="Shopping Experience"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose SecureShop?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine security, convenience, and reliability to deliver the
              best shopping experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="Secure Transactions"
              description="Bank-grade encryption for all your payments and personal data"
            />
            <FeatureCard
              icon={<CreditCard className="h-8 w-8" />}
              title="Multiple Payment Options"
              description="Choose from various payment methods that suit your needs"
            />
            <FeatureCard
              icon={<Star className="h-8 w-8" />}
              title="Quality Products"
              description="Curated selection of premium products from trusted sellers"
            />
            <FeatureCard
              icon={<TrendingUp className="h-8 w-8" />}
              title="Best Deals"
              description="Regular discounts and promotional offers on top products"
            />
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="24/7 Support"
              description="Dedicated customer support team at your service"
            />
            <FeatureCard
              icon={<ShoppingBag className="h-8 w-8" />}
              title="Easy Returns"
              description="Hassle-free return policy with quick refunds"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust SecureShop for their
            online shopping needs.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-blue-50 transition-colors"
          >
            Create Free Account
          </Link>
        </div>
      </section>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
      <div className="bg-blue-100 p-3 rounded-full text-blue-600 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
