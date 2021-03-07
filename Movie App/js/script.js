const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=70f1d4e8b3d61790c260c953b3936c41'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=70f1d4e8b3d61790c260c953b3936c41&query="'


const main = document.getElementById('movie-grid')
const form = document.getElementById('form')
const search = document.getElementById('search')
const wrapper = document.getElementById('pagination-wrapper')
const amountOfPagesVisible = 5

let searchTerm;
let currentPage = 1;
let searching = false

getMovies(API_URL,currentPage)

async function getMovies(url,page) {

    const res = await fetch(url + "&page=" + page)
    const data = await res.json()
    
    
    showMovies(data.results)
    pagination(data.total_pages,main,wrapper,currentPage)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie-wrapper')

        movieEl.innerHTML = `
        <div class="movie">
            <img src="${getImage(poster_path)}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        </div>
        `
        main.appendChild(movieEl)
        
    })
}

function getImage(poster_path) {
    if(poster_path) {
        return IMG_PATH + poster_path
    } else {
        return '../images/no_image.png'
    }
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit',(e) => {
    e.preventDefault()
    
    searching = true

    searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        currentPage = 1
        getMovies(SEARCH_API + searchTerm,currentPage)

        search.value = ''
    } else {
        window.location.reload()
    }
})

function pagination(totalPages) {
    wrapper.innerHTML = ` `

    var leftPageButton = (currentPage - Math.floor(amountOfPagesVisible/2))
    var rightPageButton = (currentPage + Math.floor(amountOfPagesVisible/2))

    if (leftPageButton < 1) {
        leftPageButton = 1
        rightPageButton = amountOfPagesVisible
    }

    if (rightPageButton > totalPages) {
        leftPageButton = totalPages - (amountOfPagesVisible - 1)

        if (leftPageButton < 1) {
            leftPageButton = 1
        }
        rightPageButton = totalPages
    }

    for (var page = leftPageButton; page <= rightPageButton; page++) {
        if(page === currentPage) {
            wrapper.innerHTML += `<button value=${page} class="page page-active btn btn-sm ">${page}</button>`
        } else {
            wrapper.innerHTML += `<button value=${page} class="page btn btn-sm ">${page}</button>`
        }
        
    }

    if (currentPage != 1) {
        wrapper.innerHTML = `<button value=${1} class="page btn btn-sm ">&#60; First</button>` + wrapper.innerHTML
    }

    if (currentPage != totalPages) {
        wrapper.innerHTML += `<button value=${totalPages} class="page btn btn-sm ">Last &#62;</button>`
    }

    let pageElements = document.querySelectorAll('.page')

    pageElements.forEach(pageEl => {
        pageEl.addEventListener('click',() => {
            main.innerHTML = ''
            currentPage = Number(pageEl.value)
            getMovies(searching ? SEARCH_API + searchTerm : API_URL,currentPage)
        })
    })
}