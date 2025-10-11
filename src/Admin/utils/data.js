const slug = "carousel_card";

export const dashboardInfo = (info) => {
    const { version, isPremium, hasPro } = info;

    const proSuffix = isPremium ? " Pro" : "";

    return {
        name: `Carousel Card${proSuffix}`,
        displayName: `Carousel Card${proSuffix} - Display Multiple Card in Grid or Lightbox`,
        description:
            "A lightweight Gutenberg block plugin for WordPress that allows you to easily create responsive carousel card sections. Display multiple cards with images, titles, descriptions, and buttons in a sleek, modern slider layout — fully customizable directly from the block editor.",
        slug,
        logo: `https://i.ibb.co.com/1Y5TtzC3/Details.png`,
        // banner: `https://i.ibb.co.com/nqNHxg8g/demoOne.png`,
        video: "https://www.youtube.com/watch?v=milYZrqLJsE",
        isYoutube: true,
        version,
        isPremium,
        hasPro,
        pages: {
            org: `https://wordpress.org/plugins/${slug}/`,
            landing: `https://bplugins.com/products/${slug}/`,
            docs: `https://bplugins.com/docs/${slug}/`,
            pricing: `https://bplugins.com/products/${slug}/pricing`,
        },
        freemius: {
            product_id: 21086,
            plan_id: 35183,
            public_key: "pk_7409dca5099207c685fdf146edf18",
        },
    };
};

export const changelogs = [
    {
        version: "1.0.0",
        list: [
            "Initial release of the Carousel Card block.",
            "Added responsive carousel layout with desktop, tablet, and mobile view.",
            "Added option to display multiple cards with title, description, image, and button.",
            "Integrated custom shortcode [carousel_card id=''] for frontend rendering.",
            "Added admin column to show shortcode and publisher info.",
        ],
    }
];

export const demoInfo = {
    title: "Live Overview",
    description: "Click on any section to view it live",
    allInOneLabel: "See All Demos",
    allInOneLink: "https://apb.bplugins.com/all-demos-in-one-place/",
    demos: [
        {
            icon: "",
            title: "Carousel Card- Default",
            description: "",
            category: "",
            type: "image",
            url: "https://i.ibb.co.com/RGqHStbN/demo1.png",
        },
        {
            icon: "",
            title: "Carousel Card- ThemeTwo",
            description: "",
            category: "",
            type: "image",
            url: "https://i.ibb.co.com/zhmLpvsr/demo2.png",
        },
        {
            icon: "",
            title: "Carousel Card- ThemeThree",
            description: "",
            category: "",
            type: "image",
            url: "https://i.ibb.co.com/RGqHStbN/demo1.png",
        },
        // {
        //     icon: "",
        //     title: "Grid- Default layout",
        //     description: "",
        //     category: "",
        //     type: "iframe",
        //     url: "https://apb.bplugins.com/demo/grid-default-layout/",
        // },
    ],
};

export const pricingInfo = {
    cycles: [
        {
            cycle: "monthly",
            label: "Monthly",
            isDefault: false,
        },
        {
            cycle: "annual",
            label: "Yearly",
            isDefault: true,
        },
        {
            cycle: "lifetime",
            label: "Lifetime",
            isDefault: false,
        },
    ],

    heading: "One-time payment, lifetime access",
    headingStyles: {
        textAlign: "center",
        fontSize: "30px",
        fontWeight: "bold",
        marginBottom: "25px",
    },

    plans: [
        {
            name: "Single Site",
            quantity: 1,
            prices: {
                monthly: "10.99",
                annual: "55",
                lifetime: "149.99",
            },
            pricePrefix: "",
            priceSuffix: "",
            isFeatured: false,
            note: "",
        },
        {
            name: "3 Sites",
            quantity: 3,
            prices: {
                monthly: "8.99",
                annual: "79",
                lifetime: "259.99",
            },
            pricePrefix: "",
            priceSuffix: "",
            isFeatured: true,
            note: "",
        },
        {
            name: "Unlimited Sites",
            quantity: "null",
            prices: {
                monthly: "33.99",
                annual: "199",
                lifetime: "979.99",
            },
            pricePrefix: "",
            priceSuffix: "",
            isFeatured: false,
            note: "",
        },
    ],

    features: [
        "Add Service Card Easy Design",
        "Add videos from YouTube, Vimeo, Wistia, or files",
        "Use custom poster images for previews",
        "Add titles, subtitles, and captions",
        "Show star ratings for reviews",
        "Group videos into albums",
        "Choose from multiple gallery styles",
        "Use sliders, carousels, lightboxes, and more",
        "Adjust columns, rows, and spacing",
        "Add optional headers and subheaders",
        "Customize video size and play button",
        "Style navigation arrows, dots, and thumbnails",
        "Optimize galleries for desktop, tablet, and mobile",
        "Edit with a visual WordPress editor",
    ],
    button: {
        label: "Buy Now ➜",
    },
    featured: {
        text: "",
        // text: "Best Value",
    },
};

export const filterDemoInfo = {
    categories: [
        { label: "All", value: "all", col: 3, height: "300px" },
        { label: "Card", value: "card", col: 3, height: "300px" },
        { label: "Hero", value: "hero", col: 3 },
        { label: "Ticker", value: "ticker", col: 4 },
        { label: "FAQ", value: "faq", col: 2, height: "400px" },
        { label: "Testimonial", value: "testimonial", col: 3 },
        { label: "Info List", value: "info-list", col: 2, height: "350px" },
        { label: "About", value: "about", col: 3, height: "300px" },
        { label: "Timeline", value: "timeline", col: 3 },
        { label: "Team", value: "team", col: 1 },
    ],

    demos: [
        {
            title: "Carousel Card",
            categories: ["card", "testimonial"],
            url: "https://i.ibb.co.com/RGqHStbN/demo1.png",
        },
        {
            title: "Carousel Card Two",
            categories: ["card", "testimonial"],
            url: "https://i.ibb.co.com/zhmLpvsr/demo2.png",
        },
        {
            title: "Simple Card Three",
            categories: ["card", "testimonial"],
            url: "https://i.ibb.co.com/RGqHStbN/demo1.png",
        },
        {
            title: "Testimonial Hero",
            categories: ["card", "testimonial"],
            url: "https://images.pexels.com/photos/32837692/pexels-photo-32837692.jpeg",
        },
        {
            title: "luxurious fanion furniture store website",
            categories: ["about", "faq"],
            url: "https://www.shutterstock.com/image-vector/luxuriou…tion-furniture-store-website-260nw-2558738679.jpg",
        },
        {
            title: "Home Page Hero",
            categories: ["ticker", "faq"],
            url: "https://www.shutterstock.com/image-vector/pet-adopt-website-homepage-hero-260nw-2572368469.jpg",
        },
        {
            title: "Pet healthcare grooming food shop",
            categories: ["ticker", "faq"],
            url: "https://www.shutterstock.com/image-vector/pet-healthcare-grooming-food-shop-260nw-2572367501.jpg",
        },
        {
            title: "Store",
            categories: ["timeline", "call-to-actions"],
            url: "https://i.ibb.co.com/RGqHStbN/demo1.png",
        },
        {
            title: "Modern Furniture landing page design",
            categories: ["about", "faq"],
            url: "https://www.shutterstock.com/image-vector/modern-furniture-landing-page-design-260nw-2558737307.jpg",
        },
        {
            title: "Web Design Elements",
            categories: ["ticker"],
            url: "https://img.freepik.com/free-vector/web-design-elements-flat-style_23-2147542130.jpg",
        },
        {
            title: "Modern Original Style Search Banners",
            categories: ["ticker"],
            url: "https://img.freepik.com/premium-vector/set-modern-original-style-search-banners_105895-325.jpg",
        },
        {
            title: "Objects Collection",
            categories: ["ticker"],
            url: "https://i.ibb.co.com/RGqHStbN/demo1.png",
        },
        {
            title: "Web Ad",
            categories: ["ticker"],
            url: "https://img.freepik.com/free-vector/create-your-ad-web_23-2147510092.jpg",
        },
        {
            title: "Templates Applications",
            categories: ["ticker"],
            url: "https://img.freepik.com/premium-vector/set-navbar-templates-applications_1062041-141.jpg",
        },
        {
            title: "Design Elements Flat Style",
            categories: ["team", "testimonial"],
            url: "https://img.freepik.com/free-vector/web-design-elements-flat-style_23-2147542130.jpg",
        },
        {
            title: "Design Elements Flat Style",
            categories: ["team", "info-list"],
            url: "https://img.freepik.com/free-vector/web-design-elements-flat-style_23-2147542130.jpg",
        },
    ],
};

export const featureCompareInfo = {
    title: "Features",
    plans: [
        {
            id: "ztbk4ex2fyi",
            name: "Free Plan",
            color: "#485781",
        },
        {
            id: "lhmjqhkeyi",
            name: `<span style='color: #485781;'>Pro Start from </span><span style='font-size: 1.3em;'>47.88/y</span>`,
            color: "#146EF5",
        },
    ],
    features: [
        {
            label: "Service Multiple card Design",
            plans: ["lhmjqhkeyi", "ztbk4ex2fyi"],
        },
        {
            label: "Multiple Layouts (Grid, Masonry, Ticker, and Slider)",
            plans: ["ztbk4ex2fyi", "lhmjqhkeyi"],
        },
        {
            label: "Sub Layout (Left/Right Image, Overlay Box, Title Meta, and more)",
            plans: ["ztbk4ex2fyi", "lhmjqhkeyi"],
        },
        {
            label: "More Layouts and Sub Layouts",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Customization for Post Ticker layout",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Shortcode to display the posts block anywhere",
            plans: ["lhmjqhkeyi"],
        },
        {
            label:
                "Post Query (filter by post type, categories, author, post count, and order)",
            plans: ["ztbk4ex2fyi", "lhmjqhkeyi"],
        },
        {
            label: "Display Pages & Custom Post Types",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Advanced Filtering (filter by tag, taxonomy, author, and more)",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Post Offset (skip the first [n] posts)",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Include/Exclude Posts by IDs and Exclude Current Post",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Custom Post Query Hook",
            plans: ["lhmjqhkeyi"],
        },
        {
            label:
                "Show/Hide Post Elements (feature image, title, metadata, excerpt, and read more button)",
            plans: ["ztbk4ex2fyi", "lhmjqhkeyi"],
        },
        {
            label:
                "Customize/Style Post Element (feature image, title, metadata, excerpt, and read more button)",
            plans: ["ztbk4ex2fyi", "lhmjqhkeyi"],
        },
        {
            label: "Fully Responsiveness for mobile, tablet, and desktop",
            plans: ["ztbk4ex2fyi", "lhmjqhkeyi"],
        },
        {
            label: "Customizable Pagination",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Rearrange/Sort post title and metadata",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Feature Image custom size",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Display Reading Time",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Show Excerpt from Main Content",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Enable/Disable Meta Author link",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Custom Meta icons",
            plans: ["lhmjqhkeyi"],
        },
    ],
};
