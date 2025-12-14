// ========================================
// PRODUCTS DATA & MANAGEMENT
// ========================================

// Sample products database (In production, this would come from backend API)
const productsDatabase = [
    // Jewelry & Accessories
    { id: 'j001', name: 'Handwoven Bamboo Bracelet', price: 24.99, category: 'jewelry', image: 'images/Brac1.webp', rating: 4.8, sales: 156, materials: 'Bamboo, Cotton Thread', inStock: true, description: 'Beautiful handwoven bracelet made from sustainable bamboo' },
    { id: 'j002', name: 'Silver Earrings with Turquoise', price: 45.99, category: 'jewelry', image: 'images/Ear1.avif', rating: 4.9, sales: 243, materials: 'Sterling Silver, Turquoise', inStock: true, description: 'Elegant silver earrings featuring natural turquoise stones' },
    { id: 'j003', name: 'Wooden Bead Necklace', price: 32.99, category: 'jewelry', image: 'images/Nec1.webp', rating: 4.7, sales: 189, materials: 'Sandalwood, Cotton Cord', inStock: true, description: 'Aromatic sandalwood beads on a durable cotton cord' },
    { id: 'j004', name: 'Macrame Bracelet Set', price: 18.99, category: 'jewelry', image: 'images/macr1.jpg', rating: 4.6, sales: 298, materials: 'Cotton Thread, Wooden Beads', inStock: true, description: 'Set of 3 macrame bracelets in earth tones' },
    { id: 'j005', name: 'Clay Pendant Necklace', price: 29.99, category: 'jewelry', image: 'images/clay.jpg', rating: 4.8, sales: 167, materials: 'Terracotta Clay, Leather Cord', inStock: true, description: 'Unique terracotta pendant with traditional patterns' },

    // Home Decor
    { id: 'h001', name: 'Ceramic Flower Vase', price: 38.99, category: 'homedecor', image: 'images/vase.webp', rating: 4.9, sales: 312, materials: 'Ceramic', inStock: true, description: 'Hand-painted ceramic vase with floral motifs' },
    { id: 'h002', name: 'Embroidered Cushion Cover', price: 22.99, category: 'homedecor', image: 'images/emb1.jpg', rating: 4.7, sales: 421, materials: 'Cotton, Silk Thread', inStock: true, description: 'Beautifully embroidered cushion cover in cream tones' },
    { id: 'h003', name: 'Wooden Candle Holder Set', price: 34.99, category: 'homedecor', image: 'images/candle.jpg', rating: 4.8, sales: 267, materials: 'Mango Wood', inStock: true, description: 'Set of 3 hand-carved wooden candle holders' },
    { id: 'h004', name: 'Jute Wall Hanging', price: 27.99, category: 'homedecor', image: 'images/wall.webp', rating: 4.6, sales: 198, materials: 'Jute, Cotton', inStock: true, description: 'Bohemian-style jute wall hanging with tassels' },
    { id: 'h005', name: 'Bamboo Plant Stand', price: 42.99, category: 'homedecor', image: 'images/bamboo.jpg', rating: 4.9, sales: 334, materials: 'Bamboo', inStock: true, description: '3-tier bamboo plant stand for indoor plants' },
    { id: 'h006', name: 'Cotton Bedsheet Set', price: 56.99, category: 'homedecor', image: 'images/bedset.webp', rating: 4.8, sales: 289, materials: 'Organic Cotton', inStock: true, description: 'Hand-block printed cotton bedsheet with pillow covers' },

    // Apparel & Textiles
    { id: 'a001', name: 'Handloom Cotton Sari', price: 89.99, category: 'apparel', image: 'images/sari.webp', rating: 4.9, sales: 145, materials: 'Handloom Cotton', inStock: true, description: 'Traditional handloom cotton sari with intricate border' },
    { id: 'a002', name: 'Embroidered Kurti', price: 45.99, category: 'apparel', image: 'images/kurti.webp', rating: 4.8, sales: 267, materials: 'Cotton, Silk Thread', inStock: true, description: 'Elegant cotton kurti with hand embroidery' },
    { id: 'a003', name: 'Handwoven Tote Bag', price: 28.99, category: 'apparel', image: 'images/tot.webp', rating: 4.7, sales: 398, materials: 'Jute, Cotton Lining', inStock: true, description: 'Eco-friendly jute tote bag with leather handles' },
    { id: 'a004', name: 'Cotton Block Print Dress', price: 52.99, category: 'apparel', image: 'images/dress.webp', rating: 4.8, sales: 221, materials: 'Organic Cotton', inStock: true, description: 'Hand-block printed cotton dress in traditional patterns' },
    { id: 'a005', name: 'Leather Sandals', price: 39.99, category: 'apparel', image: 'images/shoe.jpg', rating: 4.6, sales: 178, materials: 'Genuine Leather', inStock: true, description: 'Handcrafted leather sandals with comfortable sole' },

    // Bath & Beauty
    { id: 'b001', name: 'Natural Soap Set', price: 19.99, category: 'bathbeauty', image: 'images/soap01.webp', rating: 4.8, sales: 567, materials: 'Natural Oils, Essential Oils', inStock: true, description: 'Set of 4 handmade natural soaps with different scents' },
    { id: 'b002', name: 'Lavender Essential Oil', price: 16.99, category: 'bathbeauty', image: 'images/oil.webp', rating: 4.9, sales: 432, materials: 'Pure Lavender Extract', inStock: true, description: '100% pure lavender essential oil for relaxation' },
    { id: 'b003', name: 'Herbal Face Cream', price: 24.99, category: 'bathbeauty', image: 'images/face.jpg', rating: 4.7, sales: 298, materials: 'Natural Herbs, Aloe Vera', inStock: true, description: 'Organic herbal face cream for all skin types' },
    { id: 'b004', name: 'Bamboo Bath Brush', price: 12.99, category: 'bathbeauty', image: 'images/brush.webp', rating: 4.6, sales: 345, materials: 'Bamboo, Natural Bristles', inStock: true, description: 'Eco-friendly bamboo bath brush with sisal bristles' },

    // Stationery & Paper
    { id: 's001', name: 'Handmade Leather Journal', price: 32.99, category: 'stationery', image: 'images/poetry.jpg', rating: 4.9, sales: 412, materials: 'Leather, Recycled Paper', inStock: true, description: 'Leather-bound journal with handmade paper sheets' },
    { id: 's002', name: 'Wooden Bookmark Set', price: 8.99, category: 'stationery', image: 'images/bm.webp', rating: 4.7, sales: 598, materials: 'Bamboo Wood', inStock: true, description: 'Set of 5 laser-engraved wooden bookmarks' },
    { id: 's003', name: 'Greeting Card Pack', price: 14.99, category: 'stationery', image: 'images/card.webp', rating: 4.8, sales: 476, materials: 'Handmade Paper', inStock: true, description: 'Pack of 10 handmade greeting cards with envelopes' },
    { id: 's004', name: 'Recycled Paper Notebook', price: 11.99, category: 'stationery', image: 'images/book.avif', rating: 4.6, sales: 532, materials: 'Recycled Paper', inStock: true, description: 'Eco-friendly notebook with 200 recycled pages' },

    // Toys & Games
    { id: 't001', name: 'Wooden Puzzle Set', price: 26.99, category: 'toys', image: 'images/puz.jpg', rating: 4.8, sales: 289, materials: 'Pine Wood', inStock: true, description: 'Educational wooden puzzle for ages 3+' },
    { id: 't002', name: 'Handmade Rag Doll', price: 22.99, category: 'toys', image: 'images/doll.jpg', rating: 4.9, sales: 234, materials: 'Cotton Fabric, Wool Stuffing', inStock: true, description: 'Traditional handmade rag doll with changeable clothes' },
    { id: 't003', name: 'Wooden Building Blocks', price: 34.99, category: 'toys', image: 'images/blocks.jpg', rating: 4.7, sales: 367, materials: 'Beech Wood', inStock: true, description: 'Set of 50 natural wooden building blocks' },

    // Arts & Collectives
    { id: 'ar001', name: 'Watercolor Landscape Painting', price: 78.99, category: 'art', image: 'images/picc.webp', rating: 4.9, sales: 89, materials: 'Watercolor on Paper', inStock: true, description: 'Original watercolor painting of mountain landscape' },
    { id: 'ar002', name: 'Clay Sculpture', price: 65.99, category: 'art', image: 'images/clayscul.jpg', rating: 4.8, sales: 67, materials: 'Terracotta Clay', inStock: true, description: 'Hand-sculpted terracotta decorative piece' },
    { id: 'ar003', name: 'Mandala Wall Art', price: 42.99, category: 'art', image: 'images/med.webp', rating: 4.7, sales: 156, materials: 'Canvas, Acrylic Paint', inStock: true, description: 'Hand-painted mandala on stretched canvas' },

    // DIY Supplies
    { id: 'd001', name: 'Macrame Craft Kit', price: 29.99, category: 'diy', image: 'images/mac.jpg', rating: 4.8, sales: 345, materials: 'Cotton Rope, Instructions', inStock: true, description: 'Complete macrame kit for beginners with instructions' },
    { id: 'd002', name: 'Clay Pottery Kit', price: 38.99, category: 'diy', image: 'images/clays2.webp', rating: 4.7, sales: 223, materials: 'Natural Clay, Tools', inStock: true, description: 'Air-dry clay pottery kit with shaping tools' },
    { id: 'd003', name: 'Embroidery Starter Kit', price: 24.99, category: 'diy', image: 'images/ckit.jpg', rating: 4.9, sales: 412, materials: 'Fabric, Thread, Needles', inStock: true, description: 'Everything you need to start embroidery crafts' },
    { id: 'd004', name: 'Candle Making Kit', price: 32.99, category: 'diy', image: 'images/kitsrange.avif', rating: 4.6, sales: 267, materials: 'Wax, Wicks, Molds', inStock: true, description: 'Complete candle making kit with natural soy wax' },
];

// Category information
const categories = {
    all: { name: 'All Products', description: 'Browse our complete collection' },
    jewelry: { name: 'Jewelry & Accessories', description: 'Handcrafted jewelry and accessories' },
    homedecor: { name: 'Home Decor', description: 'Beautiful decor for your home' },
    apparel: { name: 'Apparel & Textiles', description: 'Handwoven clothing and textiles' },
    bathbeauty: { name: 'Bath & Beauty', description: 'Natural and organic beauty products' },
    stationery: { name: 'Stationery & Paper', description: 'Handmade paper products' },
    toys: { name: 'Toys & Games', description: 'Fun and educational toys' },
    art: { name: 'Arts & Collectives', description: 'Original artworks and crafts' },
    diy: { name: 'DIY Supplies', description: 'Craft kits and materials' }
};

// Filter and sort products
function filterAndSortProducts(categoryFilter = 'all', sortBy = 'featured') {
    let filtered = [...productsDatabase];

    // Filter by category
    if (categoryFilter !== 'all') {
        filtered = filtered.filter(p => p.category === categoryFilter);
    }

    // Sort products
    switch (sortBy) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'popular':
            filtered.sort((a, b) => b.sales - a.sales);
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            // In a real app, you'd sort by date. For now, reverse order
            filtered.reverse();
            break;
        case 'featured':
        default:
            // Featured: high rating and sales
            filtered.sort((a, b) => (b.rating * b.sales) - (a.rating * a.sales));
            break;
    }

    return filtered;
}

// Generate product card HTML
function generateProductCard(product) {
    const stars = generateStars(product.rating);

    return `
        <div class="product-card">
            ${product.sales > 200 ? '<div class="product-badge">Popular</div>' : ''}
            <div class="product-img-wrapper">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     class="product-img" 
                     id="img-${product.id}"
                     width="300" 
                     height="300"
                     style="width: 100%; height: 300px; object-fit: cover; display: block;"
                     onerror="this.src='images/placeholder.jpg'">
                <div class="product-overlay" style="display: flex; gap: 0.5rem; justify-content: center; align-items: center;">
                    <button class="btn btn-primary btn-sm" onclick="quickAddToCart('${product.id}')">
                        Quick Add
                    </button>
                    <!-- Image Upload Feature -->
                    <input type="file" id="file-${product.id}" style="display: none;" accept="image/*" onchange="previewImage(this, '${product.id}')">
                    <button class="btn btn-secondary btn-sm" onclick="document.getElementById('file-${product.id}').click()" title="Test Image" style="padding: 0.25rem 0.5rem;">
                        <i class="fas fa-camera"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <p class="product-category">${categories[product.category].name}</p>
                <h3 class="product-name">
                    <a href="product-detail.html?id=${product.id}" style="color: inherit;">
                        ${product.name}
                    </a>
                </h3>
                <div class="product-rating">
                    ${stars}
                    <span style="font-size: 0.875rem; color: var(--gray-dark); margin-left: 0.25rem;">
                        (${product.rating})
                    </span>
                </div>
                <div class="product-price-row">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" onclick="quickAddToCart('${product.id}')">
                        <i class="fas fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star star"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt star"></i>';
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star star"></i>';
    }

    return stars;
}

// Quick add to cart from product listing
function quickAddToCart(productId) {
    const product = productsDatabase.find(p => p.id === productId);
    if (product) {
        addToCart(product, 1);
    }
}

// Load products on products page
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const productCount = document.getElementById('productCount');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');

    if (!productsGrid) return;

    const category = categoryFilter ? categoryFilter.value : getURLParameter('category') || 'all';
    const sort = sortFilter ? sortFilter.value : 'featured';

    // Update category filter if URL has category parameter
    if (categoryFilter && getURLParameter('category')) {
        categoryFilter.value = getURLParameter('category');
    }

    // Update category title
    const categoryTitle = document.getElementById('categoryTitle');
    if (categoryTitle && category !== 'all') {
        categoryTitle.textContent = categories[category].description;
    }

    const products = filterAndSortProducts(category, sort);

    if (productCount) {
        productCount.textContent = `${products.length} Product${products.length !== 1 ? 's' : ''}`;
    }

    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 0;">
                <p style="font-size: 1.25rem; color: var(--gray-dark);">No products found in this category.</p>
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = products.map(product => generateProductCard(product)).join('');
}

// Load featured products on homepage
function loadFeaturedProducts() {
    const featuredGrid = document.getElementById('featuredProducts');
    if (!featuredGrid) return;

    const featured = filterAndSortProducts('all', 'featured').slice(0, 8);
    featuredGrid.innerHTML = featured.map(product => generateProductCard(product)).join('');
}

// Load product detail page
function loadProductDetail() {
    const productDetail = document.getElementById('productDetail');
    if (!productDetail) return;

    const productId = getURLParameter('id');
    const product = productsDatabase.find(p => p.id === productId);

    if (!product) {
        productDetail.innerHTML = `
            <div style="text-align: center; padding: 4rem 0;">
                <h2>Product not found</h2>
                <p style="margin: 1rem 0;">The product you're looking for doesn't exist.</p>
                <a href="products.html" class="btn btn-primary">Browse Products</a>
            </div>
        `;
        return;
    }

    const stars = generateStars(product.rating);

    productDetail.innerHTML = `
        <div class="grid grid-2" style="gap: 3rem; align-items: start;">
            <div class="img-zoom-container">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     class="img-zoom" 
                     width="600" 
                     height="600"
                     style="width: 100%; height: 600px; object-fit: cover; display: block; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);"
                     onerror="this.src='images/placeholder.jpg'">
            </div>
            
            <div>
                <p style="color: var(--light-brown); font-weight: 600; text-transform: uppercase; font-size: 0.875rem; margin-bottom: 0.5rem;">
                    ${categories[product.category].name}
                </p>
                <h1 style="color: var(--chocolate); margin-bottom: 1rem;">${product.name}</h1>
                
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                    <div class="product-rating">
                        ${stars}
                        <span style="margin-left: 0.5rem; color: var(--gray-dark);">${product.rating}</span>
                    </div>
                    <span style="color: var(--gray-dark);">|</span>
                    <span style="color: var(--gray-dark);">${product.sales} sold</span>
                </div>
                
                <div style="background: var(--cream); padding: 1.5rem; border-radius: var(--radius-lg); margin-bottom: 1.5rem;">
                    <p class="product-price" style="font-size: 2.5rem; margin: 0;">$${product.price.toFixed(2)}</p>
                </div>
                
                <p style="color: var(--gray-dark); margin-bottom: 1.5rem; line-height: 1.8;">
                    ${product.description}
                </p>
                
                <div style="margin-bottom: 1.5rem;">
                    <p style="font-weight: 600; color: var(--chocolate); margin-bottom: 0.5rem;">Materials:</p>
                    <p style="color: var(--gray-dark);">${product.materials}</p>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <p style="font-weight: 600; color: var(--chocolate); margin-bottom: 0.5rem;">Stock Status:</p>
                    <p style="color: ${product.inStock ? 'var(--success)' : 'var(--error)'}; font-weight: 500;">
                        ${product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                    </p>
                </div>
                
                <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                    <button class="btn btn-primary" onclick="quickAddToCart('${product.id}')" style="flex: 1;">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button class="btn btn-secondary" onclick="buyNow('${product.id}')">
                        Buy Now
                    </button>
                </div>
                
                <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--cream-dark);">
                    <p style="color: var(--gray-dark); font-size: 0.875rem;">
                        🌿 Eco-friendly &nbsp;|&nbsp; 🤝 Fair trade &nbsp;|&nbsp; 🚚 Free shipping over $50
                    </p>
                </div>
            </div>
        </div>
    `;

    // Load related products
    loadRelatedProducts(product.category, product.id);
}

// Load related products
function loadRelatedProducts(category, excludeId) {
    const relatedGrid = document.getElementById('relatedProducts');
    if (!relatedGrid) return;

    const related = productsDatabase
        .filter(p => p.category === category && p.id !== excludeId)
        .slice(0, 4);

    if (related.length === 0) return;

    relatedGrid.innerHTML = related.map(product => generateProductCard(product)).join('');
}

// Buy now function
function buyNow(productId) {
    const product = productsDatabase.find(p => p.id === productId);
    if (product) {
        addToCart(product, 1);
        setTimeout(() => {
            window.location.href = 'checkout.html';
        }, 500);
    }
}

// Get URL parameter
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Load featured products on homepage
    if (document.getElementById('featuredProducts')) {
        loadFeaturedProducts();
    }
});

// Export functions for global use
window.loadProducts = loadProducts;
window.loadProductDetail = loadProductDetail;
window.quickAddToCart = quickAddToCart;
window.buyNow = buyNow;

// Load products grouped by category for category.html
function loadCategorySections() {
    const container = document.getElementById('categorySections');
    if (!container) return;

    // Clear loading state
    container.innerHTML = '';

    // Iterate through all categories (excluding 'all')
    Object.keys(categories).forEach(catKey => {
        if (catKey === 'all') return;

        const category = categories[catKey];
        const categoryProducts = productsDatabase.filter(p => p.category === catKey);

        if (categoryProducts.length === 0) return;

        // Create section for this category
        const sectionHtml = `
            <div class="category-section" style="margin-bottom: 4rem;">
                <div class="category-header" style="display: flex; justify-content: space-between; align-items: end; margin-bottom: 1.5rem; border-bottom: 2px solid var(--cream-dark); padding-bottom: 0.5rem;">
                    <div>
                        <h2 style="color: var(--chocolate); margin-bottom: 0.25rem;">${category.name}</h2>
                        <p style="color: var(--gray-dark);">${category.description}</p>
                    </div>
                    <a href="products.html?category=${catKey}" class="btn-link" style="color: var(--light-brown); font-weight: 600; text-decoration: none;">
                        View All <i class="fas fa-arrow-right" style="font-size: 0.8em;"></i>
                    </a>
                </div>
                
                <div class="grid grid-4">
                    ${categoryProducts.map(product => generateProductCard(product)).join('')}
                </div>
            </div>
        `;

        container.innerHTML += sectionHtml;
    });
}

window.loadCategorySections = loadCategorySections;

// Preview uploaded image
function previewImage(input, productId) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = document.getElementById(`img-${productId}`);
            if (img) {
                img.src = e.target.result;

                // Show notification
                const cleanName = input.files[0].name.replace(/\s+/g, '-').toLowerCase();
                console.log(`To use this image permanently: rename it to '${cleanName}' and move to frontend/images/`);

                // Notification simulation (if notification element exists)
                const notif = document.getElementById('notification');
                if (notif) {
                    notif.style.display = 'block';
                    notif.style.borderColor = 'var(--primary)';
                    notif.innerHTML = `<strong>Image Preview:</strong><br>To save, rename file to: <br><code>${cleanName}</code>`;
                    setTimeout(() => { notif.style.display = 'none'; }, 8000);
                }
            }
        }

        reader.readAsDataURL(input.files[0]);
    }
}
window.previewImage = previewImage;
