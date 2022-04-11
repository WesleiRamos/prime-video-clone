import { FEATURED, RECOMMENDED } from './series.js'

const featuredSwiper = document.querySelector('.featured .swiper-wrapper')
const recommendedSwiper = document.querySelector('.recommended .swiper-wrapper')
const featuredTemplate = document.getElementById('featured-serie-item')
const recommendedTemplate = document.getElementById('recommended-serie-item')

const maxChars = str => {
  if (str.length <= 400)
    return str

  return str.substring(0, 400) + '...'
}

FEATURED.forEach(({ logo, cover, sinopse }) => {
  const item = featuredTemplate.content.cloneNode(true)
  item.querySelector('.desc').innerText = maxChars(sinopse)
  item.querySelector('.logo').src = `./assets/series/logos/${logo}`
  item.querySelector('.cover-image').src = `./assets/series/covers/${cover}`
  featuredSwiper.appendChild(item)
})

RECOMMENDED.forEach(({ poster, titulo, sinopse, prime }) => {
  const item = recommendedTemplate.content.cloneNode(true)

  if (prime)
    item.firstElementChild.classList.add('prime')

  item.querySelector('.desc').innerText = maxChars(sinopse)
  item.querySelector('.poster').src = `./assets/series/posters/${poster}`
  item.querySelector('.titulo').innerText = titulo
  recommendedSwiper.appendChild(item)
})

new Swiper('.featured', {
  direction: 'vertical',
  speed: 500,
  autoplay: {
    delay: 5000,
  },
  resistanceRatio: 0.5,
  pagination: {
    el: '.featured-pagination',
    clickable: true
  }
})

new Swiper('.recommended-list', {
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
})