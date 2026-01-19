import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const Home = () => {
    return (
        <div className="w-full overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center px-4">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/bg.webp"
                        alt="Delicious Cake"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
                    {/* Decorative Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-medium tracking-wide uppercase"
                    >
                        Taste the Love
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="font-cursive text-6xl md:text-8xl lg:text-9xl mb-4 drop-shadow-lg"
                    >
                        Frusha
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md text-gray-100"
                    >
                        Hyderabad’s Little Entrepreneur bringing you artisanal cookies, cakes, and sweet delights.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="pt-8 flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            to="/menu"
                            className="px-8 py-3 bg-primary hover:bg-white text-text hover:text-primary font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                        >
                            Order Now <ArrowRight size={18} />
                        </Link>
                        <Link
                            to="/about"
                            className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white text-white font-semibold rounded-full transition-all duration-300"
                        >
                            Our Story
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Featured Categories */}
            <section className="py-20 bg-secondary/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-cursive text-5xl text-text mb-4">Sweet Creations</h2>
                        <p className="text-text/60 max-w-2xl mx-auto">Handcrafted with premium ingredients and passion.</p>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {/* Category 1 */}
                        <motion.div variants={fadeInUp} className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer">
                            <img
                                src="/images/chocolate_chip_cookies_pack.webp"
                                alt="Cookies"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="font-cursive text-3xl mb-2">Artisanal Cookies</h3>
                                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Crunchy, chewy, and full of flavor.</p>
                            </div>
                        </motion.div>

                        {/* Category 2 */}
                        <motion.div variants={fadeInUp} className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer">
                            <img
                                src="/images/butterfly_chocolate_cake.webp"
                                alt="Cakes"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="font-cursive text-3xl mb-2">Celebration Cakes</h3>
                                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Make every occasion special.</p>
                            </div>
                        </motion.div>

                        {/* Category 3 */}
                        <motion.div variants={fadeInUp} className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer">
                            <img
                                src="/images/egglessmochabrownie.webp"
                                alt="Brownies & More"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="font-cursive text-3xl mb-2">Brownies & Lava Cakes</h3>
                                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Decadent chocolate delights.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* About Teaser */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex-1"
                        >
                            <h2 className="font-cursive text-5xl text-text mb-6">Meet Kavisha</h2>
                            <h3 className="text-xl font-medium text-primary mb-4">The Little Entrepreneur</h3>
                            <p className="text-text/70 leading-relaxed mb-6 text-lg">
                                Starting Frusha while in 8th grade, Kavisha proves that passion has no age limit. What began as a love for baking in her home kitchen has grown into a beloved brand in Hyderabad.
                            </p>
                            <p className="text-text/70 leading-relaxed mb-8 text-lg">
                                Each recipe is crafted with precision, creativity, and a whole lot of love. From midnight baking sessions to designing packaging, she does it all.
                            </p>
                            <Link
                                to="/about"
                                className="inline-flex items-center text-text font-semibold border-b-2 border-primary hover:text-primary transition-colors pb-1"
                            >
                                Read Full Story <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex-1 relative"
                        >
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                                <img src="/images/frusha_bakery_labels.webp" alt="Kavisha's Work" className="w-full" />
                            </div>
                            {/* Decorative background blob */}
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonial / Trust Section */}
            <section className="py-20 bg-primary/10">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Star size={32} className="text-accent mx-auto mb-6 fill-current" />
                    <h2 className="font-cursive text-4xl mb-8">"The most delicious cookies I've ever had! The packaging is so cute and professional."</h2>
                    <p className="font-bold text-lg text-text">– Happy Customer</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
