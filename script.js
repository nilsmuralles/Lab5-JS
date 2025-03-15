const messsages = [
  {
    "id": 1,
    "text": "Este es un mensaje corto",
    "user": "José Carlos"
  },
  {
    "id": 2,
    "text": "Este es un mensaje largoEste es un mensaje largoEste es un mensaje largoEste es un mensaje largoEste es un mensaje largoEste es un mensaje largoEste es un mensaje largoEste es un mensaje largoEste es un mensaje largoEste es un mensaje largoEste es un mensaje largoEste es un mensaje largoEste es un mensaje largoEste es un mensaje largo",
    "user": "usuario"
  },
  {
    "id": 3,
    "text": "hola",
    "user": "jaskdflaslkdfaslkdfjlkj"
  },
  {
    "id": 4,
    "text": "Este es un mensaje mio",
    "user": "Nils"
  },
]

const main = () => {
  renderHomePage()
}

const renderHomePage = () => {
  const body = document.querySelector('body')
  const main = document.createElement('main')
  const h1 = document.createElement('h1')

  const bgcolor = '#272B2C'
  const font = 'Roboto'
  
  body.style.backgroundColor = bgcolor 
  main.style.fontFamily = font
  main.style.color = "White"
  main.style.fontWeight = "lighter"
  main.style.textAlign = "center"

  h1.append('Web - Sección 20')
  main.append(h1)
  body.append(main)
}

main()
