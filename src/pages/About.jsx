import { motion } from "framer-motion";
import { Heart, Award, UtensilsCrossed } from "lucide-react";

const About = () => {
    return (
        <div className="pt-24 pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-cursive text-6xl text-primary mb-4"
                    >
                        Our Story
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-text/60 text-lg max-w-2xl mx-auto"
                    >
                        From a school project to Hyderabad's sweetest sensation.
                    </motion.p>
                </div>

                {/* Main Story Section */}
                <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex-1 relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                            {/* Placeholder for Kavisha's photo */}
                            <img src="/images/frusha_sticker_sheet.jpg" alt="Kavisha - The Founder" className="w-full h-auto object-cover" />
                        </div>
                        <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-primary rounded-2xl -z-10"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-6"
                    >
                        <h2 className="text-3xl font-serif text-text font-bold">
                            Meet Kavisha Bhandari <br />
                            <span className="text-primary font-cursive text-4xl font-normal">The Little Entrepreneur</span>
                        </h2>
                        <p className="text-text/70 leading-relaxed text-lg">
                            Hi! I'm Kavisha. I'm currently in 8th grade, and Frusha is my dream come true.
                        </p>
                        <p className="text-text/70 leading-relaxed text-lg">
                            It all started with a love for baking cookies for my friends and family. Seeing their smiles made me realize that I wanted to share this joy with everyone. What began in my home kitchen has now grown into a brand that serves happiness in every bite.
                        </p>
                        <p className="text-text/70 leading-relaxed text-lg">
                            At Frusha, we believe in quality over everything. Every cookie, cupcake, and brownie is handmade with the finest ingredients, ensuring that you get the authentic, artisanal taste that you deserve.
                        </p>

                        <div className="pt-4 flex gap-4">
                            <div className="flex flex-col items-center p-4 bg-secondary/20 rounded-xl min-w-[100px]">
                                <span className="text-3xl font-bold text-primary">50+</span>
                                <span className="text-xs uppercase tracking-wide text-text/60 mt-1">Orders</span>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-secondary/20 rounded-xl min-w-[100px]">
                                <span className="text-3xl font-bold text-primary">4.9</span>
                                <span className="text-xs uppercase tracking-wide text-text/60 mt-1">Rating</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Values Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Heart, title: "Made with Love", desc: "Every batch is baked with personal care and attention to detail." },
                        { icon: UtensilsCrossed, title: "Premium Ingredients", desc: "We use only the best quality chocolate, butter, and flavorings." },
                        { icon: Award, title: "Hygiene First", desc: "Strict hygiene standards are followed in our home bakery." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-text mb-3">{item.title}</h3>
                            <p className="text-text/60 mb-0">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default About;
