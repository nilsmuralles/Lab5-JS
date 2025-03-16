// Esto es lo que la API va a devolver
const messages = [
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

// Código final
const main = () => {
  renderHomePage()
}

const renderHomePage = () => {
  const body = document.querySelector('body')
  const main = document.createElement('main')
  const h1 = document.createElement('h1')
  const messagesSection = document.createElement('section')
  messagesSection.classList = ['messages-section']

  const bgcolor = '#272B2C'
  const font = 'Roboto'
  
  body.style.backgroundColor = bgcolor 

  main.style.fontFamily = font
  main.style.color = "White"
  main.style.textAlign = "center"
  main.style.padding = "10px"

  h1.append('Web - Sección 20')
  h1.style.fontWeight = "lighter"

  main.append(h1)
  main.append(messagesSection)
  body.append(main)

  renderMessages()
}

const renderMessages = () => {
  const messagesSection = document.querySelector('.messages-section')
  const messagesList = document.createElement('ul')

  messages.forEach(message => {
    const messageLi = document.createElement('li')
    messageLi.textContent = message.user + " " + message.text
    messagesList.appendChild(messageLi)
  })
  
  messagesSection.appendChild(messagesList)
}

main()
