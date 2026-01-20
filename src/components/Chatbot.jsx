import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ChevronRight, Phone, Instagram, MapPin, Cake, Image as ImageIcon } from "lucide-react";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => setIsOpen(!isOpen);

    const helpTopics = [
        {
            icon: Cake,
            label: "Custom Order Inquiry",
            action: () => window.open("https://wa.me/919553339663?text=Hi, I would like to enquire about a custom order.", "_blank")
        },
        {
            icon: MapPin,
            label: "Delivery & Pickup",
            action: () => window.open("https://maps.google.com/?q=Hyderabad,Telangana", "_blank")
        },
        {
            icon: ImageIcon,
            label: "Browse Menu",
            action: () => window.location.href = "/menu"
        }
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="mb-4 bg-white rounded-2xl shadow-2xl overflow-hidden w-80 sm:w-96 border border-gray-100"
                    >
                        {/* Header */}
                        <div className="bg-primary p-6 text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="font-cursive text-3xl mb-1">How can we help?</h3>
                                <p className="text-white/80 text-sm">Frusha - Hyderabad's Little Bakery</p>
                            </div>
                            <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
                            <div className="absolute -left-6 -bottom-6 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>

                            <button
                                onClick={toggleChat}
                                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Popular Topics */}
                        <div className="p-4 bg-gray-50/50">
                            <h4 className="text-xs font-bold text-text/40 uppercase tracking-widest mb-3 px-2">Popular Topics</h4>
                            <div className="space-y-2">
                                {helpTopics.map((topic, index) => (
                                    <button
                                        key={index}
                                        onClick={topic.action}
                                        className="w-full flex items-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group text-left"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-secondary/30 text-primary flex items-center justify-center mr-3 group-hover:bg-primary group-hover:text-white transition-colors">
                                            <topic.icon size={18} />
                                        </div>
                                        <span className="text-text font-medium flex-grow">{topic.label}</span>
                                        <ChevronRight size={16} className="text-gray-300 group-hover:text-primary transition-colors" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Contact Actions */}
                        <div className="p-6 bg-white border-t border-gray-100">
                            <div className="grid grid-cols-3 gap-2">
                                <a
                                    href="https://wa.me/919553339663"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-green-50 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <MessageCircle size={20} />
                                    </div>
                                    <span className="text-xs font-medium text-text/70">WhatsApp</span>
                                </a>

                                <a
                                    href="tel:+919553339663"
                                    className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-blue-50 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Phone size={20} />
                                    </div>
                                    <span className="text-xs font-medium text-text/70">Call</span>
                                </a>

                                <a
                                    href="https://www.instagram.com/frushaa_/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-pink-50 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Instagram size={20} />
                                    </div>
                                    <span className="text-xs font-medium text-text/70">Instagram</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleChat}
                className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-white text-text" : "bg-primary text-text animate-bounce-slow"
                    }`}
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={28} className="fill-current" />}
            </motion.button>
        </div>
    );
};

export default Chatbot;
