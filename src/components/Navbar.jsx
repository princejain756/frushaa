import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Cake, Cookie, IceCream, Croissant, Phone, Instagram, MessageCircle } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuCategories = [
        { name: "Cookies", icon: Cookie, path: "/menu?category=Cookies" },
        { name: "Cakes", icon: Cake, path: "/menu?category=Cakes" },
        { name: "Brownies", icon: Croissant, path: "/menu?category=Brownies" },
        { name: "Desserts", icon: IceCream, path: "/menu?category=Desserts" },
    ];

    const contactOptions = [
        { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/919553339663", color: "text-green-500" },
        { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/frushaa_/", color: "text-pink-500" },
        { name: "Call Us", icon: Phone, href: "tel:+919553339663", color: "text-blue-500" },
    ];

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Menu", path: "/menu", hasDropdown: true, dropdownType: "menu" },
        { name: "Our Story", path: "/about" },
        { name: "Contact", path: "/contact", hasDropdown: true, dropdownType: "contact" },
    ];

    const handleDropdownEnter = (type) => setActiveDropdown(type);
    const handleDropdownLeave = () => setActiveDropdown(null);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || isOpen
                ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-primary/10"
                : "bg-white/80 backdrop-blur-md"
                }`}
        >
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="relative group"
                    >
                        <span className="font-cursive text-4xl font-bold bg-gradient-to-r from-primary via-pink-400 to-accent bg-clip-text text-transparent drop-shadow-sm">
                            Frusha
                        </span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
                        {/* Little entrepreneur badge */}
                        <span className="absolute -top-2 -right-16 text-[10px] font-medium text-white bg-accent px-2 py-0.5 rounded-full shadow-sm hidden sm:block">
                            Little Entrepreneur ✨
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => link.hasDropdown && handleDropdownEnter(link.dropdownType)}
                                onMouseLeave={handleDropdownLeave}
                            >
                                <Link
                                    to={link.path}
                                    className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${location.pathname === link.path
                                        ? "bg-primary/20 text-primary"
                                        : "text-text hover:bg-primary/10 hover:text-primary"
                                        }`}
                                >
                                    {link.name}
                                    {link.hasDropdown && (
                                        <ChevronDown
                                            size={14}
                                            className={`transition-transform duration-300 ${activeDropdown === link.dropdownType ? "rotate-180" : ""
                                                }`}
                                        />
                                    )}
                                </Link>

                                {/* Dropdown for Menu */}
                                <AnimatePresence>
                                    {link.dropdownType === "menu" && activeDropdown === "menu" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                                        >
                                            <div className="p-2">
                                                <p className="px-3 py-2 text-xs font-bold text-text/40 uppercase tracking-wider">Categories</p>
                                                {menuCategories.map((cat, idx) => (
                                                    <Link
                                                        key={idx}
                                                        to={cat.path}
                                                        className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-primary/10 transition-colors group"
                                                    >
                                                        <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                                            <cat.icon size={18} />
                                                        </div>
                                                        <span className="font-medium text-text group-hover:text-primary transition-colors">{cat.name}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4">
                                                <Link to="/menu" className="block text-center text-sm font-semibold text-primary hover:underline">
                                                    View All Products →
                                                </Link>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Dropdown for Contact */}
                                    {link.dropdownType === "contact" && activeDropdown === "contact" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full right-0 mt-2 w-52 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                                        >
                                            <div className="p-2">
                                                <p className="px-3 py-2 text-xs font-bold text-text/40 uppercase tracking-wider">Get in Touch</p>
                                                {contactOptions.map((opt, idx) => (
                                                    <a
                                                        key={idx}
                                                        href={opt.href}
                                                        target={opt.href.startsWith("http") ? "_blank" : undefined}
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors group"
                                                    >
                                                        <div className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center ${opt.color} group-hover:scale-110 transition-transform`}>
                                                            <opt.icon size={18} />
                                                        </div>
                                                        <span className="font-medium text-text">{opt.name}</span>
                                                    </a>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}

                        {/* CTA Button */}
                        <a
                            href="https://wa.me/919553339663?text=Hi, I want to place an order!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 px-5 py-2.5 bg-gradient-to-r from-primary to-pink-400 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            <MessageCircle size={16} />
                            Order Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
                    >
                        <div className="px-4 py-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 rounded-xl text-lg font-semibold transition-colors ${location.pathname === link.path
                                        ? "bg-primary/20 text-primary"
                                        : "text-text hover:bg-primary/10"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            {/* Mobile CTA */}
                            <a
                                href="https://wa.me/919553339663?text=Hi, I want to place an order!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block mt-4 px-4 py-4 bg-gradient-to-r from-primary to-pink-400 text-white text-center font-bold rounded-xl shadow-lg"
                            >
                                <MessageCircle size={18} className="inline mr-2" />
                                Order on WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
