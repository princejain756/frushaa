import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-secondary/30 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link to="/" className="font-cursive text-3xl font-bold text-primary">
                            Frusha
                        </Link>
                        <p className="text-text/80 text-sm leading-relaxed max-w-xs">
                            Fine baked desserts made with love. Cookies, cupcakes, and more to sweeten your day.
                            Hyderabad's little artisan bakery.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text hover:text-accent transition-colors"
                            >
                                <Instagram size={20} />
                            </a>
                            {/* Add more social icons if needed */}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-sans font-semibold text-lg text-text mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-text/80 hover:text-primary transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/menu" className="text-text/80 hover:text-primary transition-colors text-sm">
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-text/80 hover:text-primary transition-colors text-sm">
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-text/80 hover:text-primary transition-colors text-sm">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-sans font-semibold text-lg text-text mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-primary mt-0.5" />
                                <span className="text-text/80 text-sm">Hyderabad, Telangana</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-primary" />
                                <a href="tel:+919553339663" className="text-text/80 hover:text-primary transition-colors text-sm">
                                    +91 95533 39663
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-primary" />
                                <a href="mailto:orders@frusha.in" className="text-text/80 hover:text-primary transition-colors text-sm">
                                    DM on Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 text-center">
                    <p className="text-text/60 text-sm">
                        &copy; {new Date().getFullYear()} Frusha. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
