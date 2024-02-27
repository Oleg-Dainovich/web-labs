items = [
    {
        img: "https://whiskas.ru/Content/img/header/slider1-adult.jpg",
        link: "https://whiskas.ru/",
    },
    {
        img: "https://www.wagr.ai/cdn/shop/articles/benefits-of-pedigree-dog-food-for-puppies-both-wet-and-dry-894819.jpg?v=1687213867",
        link: "https://www.pedigree.ru/",
    },
    {
        img: "https://kesha.by/images/news/sovremennyie-igrushki-dlya-koshek-2.jpg",
        link: "https://garfield.by/",
    },
];

function bannersMain() {
    const defaultInterval = 3000;

    let currentItemIndex = 0;

    const bannerLink = document.getElementById('banner-link');
    const bannerImage = document.getElementById('banner-img');
    const intervalForm = document.getElementById('submit-btn');
    const intervalInput = document.getElementById('interval');

    const handleBannerSwitch = () => {
        if (document.hasFocus()) {
            const currentBanner = items[currentItemIndex % items.length];
            ++currentItemIndex;
            bannerImage.src = currentBanner.img;
            bannerLink.href = currentBanner.link;
        }
    };

    let intervalId = setInterval(handleBannerSwitch, defaultInterval);

    intervalForm?.addEventListener('click', (e) => {
        e.preventDefault();
        clearInterval(intervalId);
        const newInterval = Number(intervalInput.value);
        intervalId = setInterval(handleBannerSwitch, newInterval);
    });
}

bannersMain();