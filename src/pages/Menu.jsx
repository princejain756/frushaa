import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

// Mock Data
const PRODUCTS = [
    { id: 1, name: "Chocolate Chip Cookies", category: "Cookies", image: "/images/chocolate_chip_cookies_pack.webp", desc: "Classic gooey chocolate chip cookies." },
    { id: 2, name: "Almond Caramel Cake", category: "Cakes", image: "/images/almond_caramel_cake.webp", desc: "Nutty and sweet caramel delight." },
    { id: 3, name: "Choco Lava Mini", category: "Brownies", image: "/images/egglesschocolavacake.webp", desc: "Molten chocolate center." },
    { id: 4, name: "Rainbow Cupcakes", category: "Cupcakes", image: "/images/cupcake_the_bakery.webp", desc: "Colorful frosting on vanilla base." },
    { id: 5, name: "Double Chocolate Brownie", category: "Brownies", image: "/images/egglessmochabrownie.webp", desc: "Rich chocolate fudge brownie." },
    { id: 6, name: "Nutella Bombs", category: "Doughnuts", image: "/images/nutellabombs.webp", desc: "Soft doughnuts filled with Nutella." },
    { id: 7, name: "Knot Cookies", category: "Cookies", image: "/images/chocolate_knot_cookies.webp", desc: "Buttery twisted cookies." },
    { id: 8, name: "Mango Mousse", category: "Desserts", image: "/images/mangomousse.webp", desc: "Fresh seasonal mango mousse." },
];

const CATEGORIES = ["All", "Cookies", "Cakes", "Brownies", "Cupcakes", "Doughnuts"];

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = PRODUCTS.filter((product) => {
        const matchesCategory = activeCategory === "All" || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="pt-24 pb-20 min-h-screen bg-secondary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="font-cursive text-5xl text-text mb-4">Our Menu</h1>
                    <p className="text-text/60">Explore our wide range of handcrafted delights</p>
                </div>

                {/* Filters & Search */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                    ? "bg-primary text-text shadow-md transform scale-105"
                                    : "bg-white text-text/70 hover:bg-white/80"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search treats..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-full border-none focus:ring-2 focus:ring-primary/50 bg-white shadow-sm"
                        />
                    </div>
                </div>

                {/* Product Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                key={product.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
                            >
                                <div className="relative h-64 overflow-hidden bg-gray-100">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Quick Add Overlay */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <a
                                            href={`https://wa.me/919553339663?text=Hi, I would like to order ${product.name}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-2 bg-white text-text font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-primary"
                                        >
                                            Order Now
                                        </a>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-sans font-semibold text-lg text-text truncate pr-2">{product.name}</h3>
                                    </div>
                                    <p className="text-text/60 text-sm line-clamp-2 mb-3">{product.desc}</p>
                                    <div className="flex items-center text-xs text-text/40 font-medium uppercase tracking-wide">
                                        {product.category}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 text-text/50">
                        <p>No treats found matching your search. 🍪</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Menu;
