import { Facebook, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[rgba(0,25,49,1)] text-white py-12 px-6">
            <div className="w-full mx-auto
                grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 
                md:gap-10 gap-5"
            >
                {/* Brand Info */}
                <div className="text-center sm:text-left">
                    <h2 className="text-3xl font-bold mb-3">
                        Smart <span className="bg-linear-to-r from-violet-700 to-purple-500 bg-clip-text text-transparent">Deals</span>
                    </h2>
                    <p className="text-sm leading-relaxed">
                        Your trusted marketplace for authentic local products. Discover the
                        best deals from across Bangladesh.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="text-center sm:text-left">
                    <h3 className="footer-title font-semibold mb-3 text-lg">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a className="link link-hover" href="/products">All Products</a></li>
                        <li><a className="link link-hover" href="/dashboard">Dashboard</a></li>
                        <li><a className="link link-hover" href="/login">Login</a></li>
                        <li><a className="link link-hover" href="/register">Register</a></li>
                    </ul>
                </div>

                {/* Categories */}
                <div className="text-center sm:text-left">
                    <h3 className="footer-title font-semibold mb-3 text-lg">Categories</h3>
                    <ul className="space-y-2">
                        <li><a className="link link-hover" href="/category/electronics">Electronics</a></li>
                        <li><a className="link link-hover" href="/category/fashion">Fashion</a></li>
                        <li><a className="link link-hover" href="/category/home-living">Home & Living</a></li>
                        <li><a className="link link-hover" href="/category/groceries">Groceries</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="text-center sm:text-left">
                    <h3 className="footer-title font-semibold mb-3 text-lg">Contact & Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Email: <a href="mailto:support@smartdeals.com" className="link link-hover">support@smartdeals.com</a></li>
                        <li>Phone: <a href="tel:+880123456789" className="link link-hover">+880 123 456 789</a></li>
                        <li>Address: 123 Commerce Street, Dhaka, Bangladesh</li>
                    </ul>
                </div>

                {/* Social */}
                <div className="text-center sm:text-left">
                    <h3 className="footer-title font-semibold mb-3 text-lg">Follow Us</h3>
                    <div className="flex justify-center sm:justify-start space-x-6 text-2xl">
                        <a href="#" className="hover:text-blue-400">
                            <Twitter />
                        </a>
                        <a href="#" className="hover:text-blue-600">
                            <Linkedin />
                        </a>
                        <a href="#" className="hover:text-blue-700">
                            <Facebook />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 text-center text-sm border-t border-gray-700 pt-5">
                © 2025 SmartDeals. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
