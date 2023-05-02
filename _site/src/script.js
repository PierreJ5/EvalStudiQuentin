// Script Sélection d'image pour la galerie

// La sélection d'images se fait à partir de la class CSS .photo,
// Le script récupère les class CSS des élements <img>
// La fonction forEach analyse chaque élément et compare la valeur du select à la valeur img.classList[0] de chaque image

const pictures = document.querySelectorAll('.photo') // Récupère toutes les images
const pictureSelect = document.getElementById('picture-select') // Récupère le Select
let temp

pictureSelect.addEventListener('change', (e) => {
    temp = e.target.value // Définie dans une variable la valeur du Select à un changement d'état
    pictures.forEach(picture => {
        if (temp === 'NDR') { // Nos dernières réalisations -> Affiche toutes les images
            picture.style.display = 'inline-flex'
        }else if (temp !== picture.classList[0]) { // Caches les images qui ne correspondent pas au select
            picture.style.display = 'none'
        }else {
            picture.style.display = 'inline-flex' // Affiche les images demandées.
        }
    })
})
