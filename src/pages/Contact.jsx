import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Instagram, MapPin, Send, ChevronRight } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleWhatsApp = (e) => {
        e.preventDefault();

        // WhatsApp number
        const phoneNumber = "919553339663";

        // Construct the message
        let text = `Hi Frusha! I have an inquiry:\n\n`;
        text += `*Name:* ${formData.name || "Not provided"}\n`;
        if (formData.phone) text += `*Phone:* ${formData.phone}\n`;
        text += `*Inquiry:* ${formData.message || "Hi, I'd like to check your menu!"}`;

        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

        window.open(whatsappUrl, "_blank");
    };

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
                                    <div className="flex-grow">
                                        <h3 className="font-semibold text-text">WhatsApp Us</h3>
                                        <p className="text-text/60 text-sm">Place orders, ask for customization</p>
                                    </div>
                                    <ChevronRight className="text-gray-300 group-hover:text-green-600 transition-colors" size={20} />
                                </a>

                                <a
                                    href="https://www.instagram.com/frushaa_/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group"
                                >
                                    <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mr-4 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                                        <Instagram size={24} />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="font-semibold text-text">DM on Instagram</h3>
                                        <p className="text-text/60 text-sm">Follow us & check our latest creations</p>
                                    </div>
                                    <ChevronRight className="text-gray-300 group-hover:text-pink-600 transition-colors" size={20} />
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
                        <form className="space-y-6" onSubmit={handleWhatsApp}>
                            <div>
                                <label className="block text-sm font-medium text-text/70 mb-1">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all"
                                    placeholder="Kavisha Bhandari"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text/70 mb-1">
                                    Phone Number <span className="text-xs text-text/40 font-normal ml-1">(Optional)</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all"
                                    placeholder="+91 98765 43210"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text/70 mb-1">Message / Order Details</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all"
                                    placeholder="I'd like to order 1kg Chocolate Cake..."
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-primary text-text font-bold rounded-lg hover:bg-white hover:text-primary border-2 border-transparent hover:border-primary transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Send to WhatsApp <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
