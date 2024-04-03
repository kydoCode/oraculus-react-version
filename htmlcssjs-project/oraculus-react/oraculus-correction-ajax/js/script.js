let datas = []
async function init(){
  datas = await getDatas()
  populateData(0)
  changeTop(0)
}
init()

async function getDatas(){
  const req = await fetch('json/horoscope.json')
  return await req.json()
}

  const populateData = (index) => {
    document.querySelector('h1').innerText = datas[index].signe
    document.querySelector('#date').innerText = datas[index].date
    document.querySelector('#amour').innerHTML = `<span>Amour : </span> ${datas[index].amour}`
    document.querySelector('#travail').innerHTML = `<span>Travail : </span> ${datas[index].travail}`
    document.querySelector('#argent').innerHTML = `<span>Argent : </span> ${datas[index].argent}`
    document.querySelector('#sante').innerHTML = `<span>Santé : </span> ${datas[index].sante}`
    document.querySelector('#famille').innerHTML = `<span>Famille : </span> ${datas[index].famille}`
    document.querySelector('#conseil').innerHTML = `<span>Conseil : </span> ${datas[index].conseil}`

    document.querySelector('aside img').src = datas[index].image
  }
// Premier lancement de la page, on peupler les données avec le premier signe


// Ajouter un eventlistener sur la flèche de droite
const arrowRight = document.querySelector('.arrow-right')
let index = 0
arrowRight.addEventListener('click', () => {
  // On change la valeur de l'index
  // variable = condition ? si vrai : si faux
  index = index >= datas.length - 1 ? 0 : index + 1
  populateData(index)
  changeTop(index)
})

// On fait la même chose pour la flèche de gauche
const arrowLeft = document.querySelector('.arrow-left')
arrowLeft.addEventListener('click', () => {
  index = index <= 0 ? datas.length - 1 : index - 1
  populateData(index)
  changeTop(index)
})

// Changer la date par la date du jour <p id="datejour">-- HOROSCOPE DU 28/09/2023</p>
document.querySelector('#datejour').innerText = `-- HOROSCOPE DU ${new Date().toLocaleDateString()}`

// Fonction pour changer le signe du haut de page
const leftHoroscope = document.querySelector('.left-horoscope')
const rightHoroscope = document.querySelector('.right-horoscope') 
const changeTop = (index) => {
  // Signe précédent
  const signePrecedent = index <= 0 ? datas.length - 1 : index - 1
  leftHoroscope.innerHTML = `${datas[signePrecedent].signe} <span>${datas[signePrecedent].date}</span>`
  // on ajoute l'attribut data-index pour pouvoir le récupérer plus tard
  leftHoroscope.setAttribute('data-index', signePrecedent)

  // Signe suivant
  const signeSuivant = index >= datas.length - 1 ? 0 : parseInt(index + 1)
  rightHoroscope.innerHTML = `${datas[signeSuivant].signe} <span>${datas[signeSuivant].date}</span>`
  rightHoroscope.setAttribute('data-index', signeSuivant)
}


// Ajouter un eventlistener sur les signes du haut de page
leftHoroscope.addEventListener('click', () => {
  const index = Number(leftHoroscope.dataset.index)
  populateData(index)
  changeTop(index)
})

rightHoroscope.addEventListener('click', () => {
  const index = Number(rightHoroscope.dataset.index)
  populateData(index)
  changeTop(index)
})

// Prendre en compte la navigation au clavier (flèches gauche et droite)
document.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowRight') {
    index = index >= datas.length - 1 ? 0 : index + 1
    populateData(index)
    changeTop(index)
  }

  if (e.key === 'ArrowLeft') {
    index = index <= 0 ? datas.length - 1 : index - 1
    populateData(index)
    changeTop(index)
  }
})