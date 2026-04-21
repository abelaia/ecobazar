export const homeList = [
    { label: 'Popular Categories', link: '/popular-categories' },
    { label: 'Popular Products', link: '/popular-products' },
    { label: 'Hot Deals', link: '/hot-deals' },
    { label: 'Featured Products', link: '/featured-products' },
    { label: 'Latest News', link: '/latest-news' },
];

export const shopList = [
    { label: 'Vegetables', link: '/shop/vegetables' },
    { label: 'Fresh Fruit', link: '/shop/fresh-fruit' },
    { label: 'Meat & Fish', link: '/shop/meat-fish' },
    { label: 'Snacks', link: '/shop/snacks' },
    { label: 'Beverages', link: '/shop/beverages' },
    { label: 'Bread & Bakery', link: '/shop/bread-bakery' },
    { label: 'Beauty & Health', link: '/shop/beauty-health' },
    { label: 'Cooking', link: '/shop/cooking' },
];

export const blogList = [
    { label: 'Blog List', link: '/blog/list' },
    { label: 'Single Blog', link: '/blog/single' },
];

export const pagesList = [
    { label: 'About Us', link: '/about' },
    { label: 'Blog', link: '/blog', children: blogList },
    { label: 'Contact Us', link: '/contact' },
    { label: 'Shop', link: '/shop' },
    { label: 'Track Order', link: '/track-order' },
    { label: 'FAQs', link: '/faqs' },
];

export const menuItems = [
    { label: 'Home', link: '/home', children: homeList },
    { label: 'Shop', link: '/shop', children: shopList },
    { label: 'Pages', link: '/pages', children: pagesList },
    { label: 'Blog', link: '/blog', children: blogList },
    { label: 'About Us', link: '/about' },
    { label: 'Contact Us', link: '/contact' },
];
