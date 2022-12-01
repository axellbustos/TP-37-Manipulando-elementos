
const body = document.querySelector('body')
const H1 = document.querySelector('h1')

const cambiar = confirm('Desea modo oscuro?')
if (cambiar) {
    body.classList.add('fondoMoviesList')
    body.style.backgroundColor = '#7f7f7f'
}

H1.innerText = 'LISTADO DE PELICULAS'
H1.style.color = 'white',
    H1.style.backgroundColor = 'teal'
H1.style.padding = '20px'
