import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/Button';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-900">
                SecureShop
              </Link>
              <div className="ml-10 flex items-center space-x-4">
                <Link to="/products" className="text-gray-700 hover:text-gray-900">
                  Products
                </Link>
                <Link to="/orders" className="text-gray-700 hover:text-gray-900">
                  Orders
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/cart" className="text-gray-700 hover:text-gray-900">
                <ShoppingCart className="h-6 w-6" />
              </Link>
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link to="/account">
                    <User className="h-6 w-6" />
                  </Link>
                  <Button onClick={() => signOut()} variant="ghost">
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Link to="/login">
                  <Button>Sign In</Button>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <footer className="bg-white border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500">
            © 2024 SecureShop. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}