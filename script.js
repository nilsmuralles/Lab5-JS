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
  {
    "id": 5,
    "text": "Este mensaje asjdfksdjflkdasjf lkje es de alguien más después de uno mío",
    "user": "Diego"
  },
  {
    "id": 6,
    "text": "Yo respondo con algo",
    "user": "Nils"
  },
  {
    "id": 7,
    "text": "Me responden cualquier cosa",
    "user": "Usuario2"
  },
  {
    "id": 8,
    "text": "Este es un mensaje corto",
    "user": "José Carlos"
  },
  {
    "id": 9,
    "text": "Este es un mensaje corto",
    "user": "José Carlos"
  },
  {
    "id": 10,
    "text": "",
    "user": "Pepe"
  },
  {
    "id": 11,
    "text": "Mira a este perro https://misanimales.com/wp-content/uploads/2020/07/perro-beagle-contento.jpg",
    "user": "AmoALosPerros"
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

  const inputSection = document.createElement('section')
  inputSection.classList = ['input-section']

  const bgcolor = '#272B2C'
  const font = 'Roboto'
  
  body.style.backgroundColor = bgcolor 

  main.style.fontFamily = font
  main.style.color = "White"
  main.style.padding = "10px"

  h1.append('Web - Sección 20')
  h1.style.fontWeight = "lighter"
  h1.style.textAlign = "center"

  messagesSection.style.padding = '20px'

  main.append(h1)
  main.append(messagesSection)
  main.append(inputSection)
  body.append(main)

  renderMessages()
  renderUserInput()
}

const renderMessages = () => {
  const messagesSection = document.querySelector('.messages-section')
  messagesSection.style.maxHeight = '65dvh'
  messagesSection.style.overflowY = 'auto'; 
  messagesSection.style.scrollbarWidth = 'none'; 
  messagesSection.style.msOverflowStyle = 'none'; 

  const messagesList = document.createElement('ul')
  messagesList.style.listStyle = 'none'
  messagesList.style.margin = '0'
  messagesList.style.padding = '0'
  messagesList.style.display = 'flex'
  messagesList.style.flexDirection = 'column'
  messagesList.style.gap = '20px'

  const imageRegex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))/gi;

  messages.forEach(message => {
    const li = document.createElement('li')
    li.style.width = 'fit-content'
    li.style.maxWidth = '50dvw'
    li.style.display = 'flex'
    li.style.flexDirection = 'column'
    li.style.gap = '5px'
    li.style.padding = '15px 20px'
    li.style.background = '#403F44'
    li.style.borderRadius = '8px'

    const userSpan = document.createElement('span')
    userSpan.textContent = message.user
    userSpan.style.fontWeight = 'bold'

    const messageP = document.createElement('p')
    messageP.textContent = message.text
    messageP.style.margin = '0'

    if (message.user === 'Nils') {
      li.style.alignSelf = 'flex-end'
      li.style.background = '#404156'
    }

    if (message.text === '' || message.user === '') {
      return  
    }


    li.append(userSpan)
    li.append(messageP)
    const imgLink = message.text.match(imageRegex)
    if (imgLink) {
      const img = document.createElement('img')

      img.src = imgLink
      img.style.width = '300px'
      img.style.borderRadius = '8px'

      li.append(img)
    }
    messagesList.appendChild(li)
  })
  
  messagesSection.appendChild(messagesList)
}

const renderUserInput = () => {
  const inputSection = document.querySelector('.input-section')
  inputSection.style.display = 'flex'
  inputSection.style.justifyContent = 'center'
  inputSection.style.margin = '20px'

  const form = document.createElement('form')
  form.style.margin = '0'
  form.style.padding = '15px'
  form.style.borderRadius = '8px'
  form.style.display = 'flex'
  form.style.flexDirection = 'column'
  form.style.background = '#5e5c63'

  const input = document.createElement('textarea')
  input.placeholder = 'Escribe tu mensaje...'
  input.style.border = 'none'
  input.style.background = 'transparent'
  input.style.color = 'White'
  input.style.outline = 'none'
  input.style.resize = 'none'
  input.style.width = '60vw'
  input.style.fontFamily = 'Roboto'
  input.style.fontSize = '16px'
  input.style.overflowY = 'auto'; 
  input.style.scrollbarWidth = 'none'; 
  input.style.msOverflowStyle = 'none'; 

  const button = document.createElement('button')
  button.innerText = '>'
  button.style.width = '30px'
  button.style.height = '30px'
  button.style.padding = '0'
  button.style.borderRadius = '100%'
  button.style.border = 'none'
  button.style.outline = 'none'
  button.style.alignSelf = 'flex-end'
  button.style.fontFamily = 'Roboto'
  button.style.fontSize = '20px'

  form.appendChild(input)
  form.appendChild(button)

  inputSection.appendChild(form)
}

main()
