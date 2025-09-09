const allCarousels = document.querySelectorAll(".carousel-container");

const allCarouselData = [
    [
        {
            src: "imgs/car2.jpg",
            description:
                "Wooden Car (All ages): This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children.",
        },
        { src: "imgs/car3.jpg", description: "Wooden Car (All ages): This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children." },
        { src: "imgs/car4.jpg", description: "Wooden Car (All ages): This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children." },
        { src: "imgs/car1.jpg", description: "Wooden Car (All ages): This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children." },
    ],
    [
        {
            src: "imgs/plane3.jpg",
            description:
                "Wooden Car (All ages): This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children.",
        },
        { src: "imgs/plane1.jpg", description: "Wooden Car (All ages): This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children." },
        { src: "imgs/plane2.jpg", description: "Wooden Car (All ages): This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children." },
        { src: "imgs/plane3.jpg", description: "Wooden Car (All ages): This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children." },
    ],
    [
        { src: "imgs/train1.jpg", description: "Wooden Train Set (Age: 3+): Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood. Large size (84cm L x 11cm H x 13cm W) with moving wheels and a fully ecological design." },
        { src: "imgs/train2.jpg", description: "Wooden Train Set (Age: 3+): Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood. Large size (84cm L x 11cm H x 13cm W) with moving wheels and a fully ecological design." },
        { src: "imgs/train3.jpg", description: "Wooden Train Set (Age: 3+): Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood. Large size (84cm L x 11cm H x 13cm W) with moving wheels and a fully ecological design." },
        { src: "imgs/train4.jpg", description: "Wooden Train Set (Age: 3+): Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood. Large size (84cm L x 11cm H x 13cm W) with moving wheels and a fully ecological design." },
        { src: "imgs/train5.jpg", description: "Wooden Train Set (Age: 3+): Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood. Large size (84cm L x 11cm H x 13cm W) with moving wheels and a fully ecological design." },
        { src: "imgs/train6.jpg", description: "Wooden Train Set (Age: 3+): Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood. Large size (84cm L x 11cm H x 13cm W) with moving wheels and a fully ecological design." },
        { src: "imgs/train7.jpg", description: "Wooden Train Set (Age: 3+): Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood. Large size (84cm L x 11cm H x 13cm W) with moving wheels and a fully ecological design." },
    ],
    [
        { src: "imgs/block1.jpg", description: "Wooden Block Set (Age: 3+): Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate (13” L x 12” W x 2” H)." },
        { src: "imgs/block2.jpg", description: "Wooden Block Set (Age: 3+): Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate (13” L x 12” W x 2” H)." },
        { src: "imgs/block3.jpg", description: "Wooden Block Set (Age: 3+): Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate (13” L x 12” W x 2” H)." },
        { src: "imgs/block4.jpg", description: "Wooden Block Set (Age: 3+): Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate (13” L x 12” W x 2” H)." },
        { src: "imgs/block5.jpg", description: "Wooden Block Set (Age: 3+): Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate (13” L x 12” W x 2” H)." },
    ],
    [
        { src: "imgs/boat1.jpg", description: "Wooden Boat (Age: All ages): Set sail for bathtub adventures with this adorable wooden boat. Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety. Includes two peg lobster people. Size: 10.5 W x 3.5 H." },
        { src: "imgs/boat2.jpg", description: "Wooden Boat (Age: All ages): Set sail for bathtub adventures with this adorable wooden boat. Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety. Includes two peg lobster people. Size: 10.5 W x 3.5 H." },
    ],
];

allCarousels.forEach((carousel, index) => {
    const images = allCarouselData[index];
    let currentIndex = 0;

    const imgElement = carousel.querySelector(".carouselImage");
    const descElement = carousel.querySelector(".description p");
    const prevBtn = carousel.querySelector(".prevBtn");
    const nextBtn = carousel.querySelector(".nextBtn");

    function updateCarousel() {
        imgElement.src = images[currentIndex].src;
        imgElement.alt = images[currentIndex].description;
        descElement.textContent = images[currentIndex].description;
    }
    function updateCarousel() {
        imgElement.src = images[currentIndex].src;
        imgElement.alt = images[currentIndex].description;

        // Only update description if not the first carousel
        if (index !== 0) {
            descElement.textContent = images[currentIndex].description;
        }
    }
    // Initialize with first image
    updateCarousel();

    // Image click advances to next slide
    imgElement.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    // If you still want buttons to work:
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel();
        });

        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        });
    }
});