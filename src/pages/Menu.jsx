import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";

// Mock Data
const PRODUCTS = [
    { id: 1, name: "Chocolate Chip Cookies", category: "Cookies", image: "/images/chocolate_chip_cookies_pack.webp", desc: "Classic gooey chocolate chip cookies." },
    { id: 2, name: "Almond Caramel Cake", category: "Cakes", image: "/images/almond_caramel_cake.webp", desc: "Nutty and sweet caramel delight." },
    { id: 3, name: "Choco Lava Mini", category: "Brownies", image: "/images/egglesschocolavacake.webp", desc: "Molten chocolate center." },
    { id: 4, name: "Rainbow Cupcakes", category: "Cupcakes", image: "/images/cupcake_the_bakery.webp", desc: "Colorful frosting on vanilla base." },
    { id: 5, name: "Mocha Brownie", category: "Brownies", image: "/images/egglessmochabrownie.webp", desc: "Rich chocolate mocha brownie." },
    { id: 6, name: "Nutella Bombs", category: "Doughnuts", image: "/images/nutellabombs.webp", desc: "Soft doughnuts filled with Nutella." },
    { id: 7, name: "Marble Cookie", category: "Cookies", image: "/images/chocolate_knot_cookies.webp", desc: "Buttery twisted cookies." },
    { id: 8, name: "Mango Mousse", category: "Desserts", image: "/images/mangomousse.webp", desc: "Fresh seasonal mango mousse." },
    { id: 9, name: "Chocolate Cake", category: "Cakes", image: "/Products/chocolatecake.jpeg", desc: "Rich and moist chocolate cake." },
    { id: 10, name: "Chocolate Doughnut", category: "Doughnuts", image: "/Products/chocolatedoughtnut.jpeg", desc: "Indulgent chocolate glazed doughnut." },
    { id: 11, name: "Christmas Choco Chunk Cookies", category: "Cookies", image: "/Products/christmaschocochunkcookies.jpeg", desc: "Festive cookies loaded with chocolate chunks." },
    { id: 12, name: "Customised Makeup Cake", category: "Cakes", image: "/Products/customisedmakeupcake.jpeg", desc: "Creative makeup themed celebration cake." },
    { id: 13, name: "Customised Vanilla Cake", category: "Cakes", image: "/Products/customisedvanillacake.jpeg", desc: "Custom designed vanilla cake for your occasion." },
    { id: 14, name: "Doughnut Bouquet", category: "Doughnuts", image: "/Products/doughnutbouqet.jpeg", desc: "Beautiful bouquet of assorted doughnuts." },
    { id: 15, name: "Heart Shape Choco Chip Cookies", category: "Cookies", image: "/Products/heartshapechocochipcookies.jpeg", desc: "Heart-shaped cookies with chocolate chips." },
    { id: 16, name: "Marble Cake", category: "Cakes", image: "/Products/marblecake.jpeg", desc: "Classic marble swirl cake." },
    { id: 17, name: "Vanilla Cake", category: "Cakes", image: "/Products/Vanillacake.jpeg", desc: "Light and fluffy vanilla cake." },
    { id: 18, name: "All Flavours Customised Two Tier Cake", category: "Cakes", image: "/Products/inallflavours customised two tier cake.jpeg", desc: "Stunning two tier cake available in all flavours." },
    { id: 19, name: "Strawberry Cake", category: "Cakes", image: "/Products/Strawberrycake.jpeg", desc: "Fresh and fruity strawberry cake." },
];

const CATEGORIES = ["All", "Cookies", "Cakes", "Brownies", "Cupcakes", "Doughnuts"];

const Menu = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryFromURL = searchParams.get("category");

    const [activeCategory, setActiveCategory] = useState(categoryFromURL || "All");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Sync state if URL search params change
    useEffect(() => {
        if (categoryFromURL) {
            setActiveCategory(categoryFromURL);
        } else {
            setActiveCategory("All");
        }
    }, [categoryFromURL]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedProduct) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProduct]);

    const handleCategoryClick = (cat) => {
        setActiveCategory(cat);
        if (cat === "All") {
            setSearchParams({});
        } else {
            setSearchParams({ category: cat });
        }
    };

    const openProductModal = (product) => {
        setSelectedProduct(product);
    };

    const closeProductModal = () => {
        setSelectedProduct(null);
    };

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
                                onClick={() => handleCategoryClick(cat)}
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
                                onClick={() => openProductModal(product)}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                            >
                                <div className="relative h-64 overflow-hidden bg-gray-100">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="px-6 py-2 bg-white/90 text-text font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            View Details
                                        </span>
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

            {/* Product Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={closeProductModal}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeProductModal}
                                className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                            >
                                <X size={20} className="text-text" />
                            </button>

                            {/* Full Image */}
                            <div className="w-full aspect-square bg-gray-100">
                                <img
                                    src={selectedProduct.image}
                                    alt={selectedProduct.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Product Details */}
                            <div className="p-6 space-y-4">
                                <div>
                                    <span className="text-xs font-medium uppercase tracking-wider text-primary">
                                        {selectedProduct.category}
                                    </span>
                                    <h2 className="text-2xl font-bold text-text mt-1">
                                        {selectedProduct.name}
                                    </h2>
                                </div>

                                <p className="text-text/70 leading-relaxed">
                                    {selectedProduct.desc}
                                </p>

                                {/* Order Now Button */}
                                <a
                                    href={`https://wa.me/919553339663?text=Hi, I would like to order ${selectedProduct.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-4 bg-primary hover:bg-primary/90 text-text font-bold text-center rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                                >
                                    Order Now on WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Menu;
