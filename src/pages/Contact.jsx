import { motion } from "framer-motion";
import { MessageCircle, Instagram, MapPin, Send } from "lucide-react";

const Contact = () => {
    return (
        <div className="pt-24 pb-20 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-cursive text-6xl text-primary mb-4"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-text/60 text-lg max-w-xl mx-auto"
                    >
                        Have a sweet craving or planning a party? We'd love to hear from you!
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info & Direct Links */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="bg-secondary/20 p-8 rounded-2xl">
                            <h2 className="text-2xl font-serif text-text font-bold mb-6">Order Directly</h2>
                            <div className="space-y-6">
                                <a
                                    href="https://wa.me/919553339663"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group"
                                >
                                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                        <MessageCircle size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-text">WhatsApp Us</h3>
                                        <p className="text-text/60 text-sm">Place orders, ask for customization</p>
                                    </div>
                                    <ArrowRightIcon className="ml-auto text-gray-300 group-hover:text-green-600 transition-colors" />
                                </a>

                                <a
                                    href="https://instagram.com/frusha"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group"
                                >
                                    <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mr-4 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                                        <Instagram size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-text">DM on Instagram</h3>
                                        <p className="text-text/60 text-sm">Follow us & check our latest creations</p>
                                    </div>
                                    <ArrowRightIcon className="ml-auto text-gray-300 group-hover:text-pink-600 transition-colors" />
                                </a>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl">
                            <div className="flex items-start space-x-4">
                                <MapPin className="text-primary mt-1" size={24} />
                                <div>
                                    <h3 className="font-semibold text-text text-lg mb-2">Location</h3>
                                    <p className="text-text/70 mb-4">
                                        Hyderabad, Telangana, India<br />
                                        (Home Bakery - Delivery & Takeaway only)
                                    </p>
                                    <div className="aspect-video w-full rounded-lg overflow-hidden border border-gray-200">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.452632!2d78.4!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Inquiry Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg"
                    >
                        <h2 className="text-2xl font-serif text-text font-bold mb-6">Send an Inquiry</h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-text/70 mb-1">Your Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all" placeholder="Kavisha Bhandari" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text/70 mb-1">Phone Number</label>
                                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all" placeholder="+91 98765 43210" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text/70 mb-1">Message / Order Details</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all" placeholder="I'd like to order 1kg Chocolate Cake..."></textarea>
                            </div>
                            <button className="w-full py-4 bg-primary text-text font-bold rounded-lg hover:bg-white hover:text-primary border-2 border-transparent hover:border-primary transition-all duration-300 flex items-center justify-center gap-2">
                                Send to WhatsApp <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const ArrowRightIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

export default Contact;
