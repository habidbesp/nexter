import { 
    featuresContainer, 
    homesContainer, 
    galleryContainer, 
    footerContainer, 
    headerLogosContainer } from "./variables.js";
import { 
    features, 
    homes, 
    galleryImages, 
    footerLinks,
    headerLogos } from "./fakeDB.js";

features.map( item => {
    return ( 
        featuresContainer.insertAdjacentHTML('beforeend',
        `<div class="feature">
            <svg class="feature__icon">
                <use xlink:href=${item.icon}></use>
            </svg>
            <h4 class="heading-4 heading-4--dark">${item.title}</h4>
            <p class="feature__text">${item.text}</p>
        </div>`)
    )
})

homes.map( item => {
    return (
        homesContainer.insertAdjacentHTML('beforeend', 
        `<div class="home">
        <img src=${item.image} alt=${item.imageAlt} class="home__img">
        <svg class="home__like">
            <use xlink:href="./img/sprite.svg#icon-heart-full"></use>
        </svg>
        <h5 class="home__name">${item.title}</h5>
        <div class="home__location">
            <svg>
                <use xlink:href="./img/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>${item.location.text}</p>
        </div>
        <div class="home__rooms">
            <svg>
                <use xlink:href="./img/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>${item.rooms.text}</p>
        </div>
        <div class="home__area">
            <svg>
                <use xlink:href="./img/sprite.svg#icon-expand"></use>
            </svg>
            <p>${item.area.text}</p>
        </div>
        <div class="home__price">
            <svg>
                <use xlink:href="./img/sprite.svg#icon-key"></use>
            </svg>
            <p>${item.price.text}</p>
        </div>
        <button class="btn home__btn">Contact realtor</button>
    </div>`)
    )
})

galleryImages.map( (item, i) => {
    return(
        galleryContainer.insertAdjacentHTML('beforeend',
            `<figure class="gallery__item gallery__item--${i + 1}">
                <img 
                    src=${item.imageUrl} 
                    alt=${item.imageAlt} 
                    class="gallery__img" 
                />
            </figure>`
        )
    )
})

footerLinks.map( item => {
    return (
        footerContainer.insertAdjacentHTML('beforeend',
            `<li class="nav__item">
                <a href="#" class="nav__link">${item}</a>
            </li>`
        )
    )
})

headerLogos.map( item => {
    return (
        headerLogosContainer.insertAdjacentHTML('beforeend', 
            `<img 
                src=${item.srcImg}
                alt=${item.altImg}
            />`
        )
    )
})