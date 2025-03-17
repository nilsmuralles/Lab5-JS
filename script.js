const main = () => {
  renderHomePage()
  getMessages()
  renderUserInput()
}

const renderHomePage = () => {
  const bgcolor = '#272B2C'
  const font = 'Roboto'

  const body = document.querySelector('body')
  body.style.backgroundColor = bgcolor 

  const main = document.createElement('main')
  main.style.fontFamily = font
  main.style.color = "White"
  main.style.padding = "10px"

  const h1 = document.createElement('h1')
  h1.append('Web - Sección 20')
  h1.style.fontWeight = "lighter"
  h1.style.textAlign = "center"

  const messagesSection = document.createElement('section')
  messagesSection.classList = ['messages-section']
  messagesSection.style.padding = '20px'
  messagesSection.style.maxHeight = '65dvh'
  messagesSection.style.overflowY = 'auto'; 
  messagesSection.style.scrollbarWidth = 'none'; 
  messagesSection.style.msOverflowStyle = 'none'; 

  const inputSection = document.createElement('section')
  inputSection.classList = ['input-section']

  const messagesList = document.createElement('ul')
  messagesList.style.listStyle = 'none'
  messagesList.style.margin = '0'
  messagesList.style.padding = '0'
  messagesList.style.display = 'flex'
  messagesList.style.flexDirection = 'column'
  messagesList.style.gap = '20px'

  messagesSection.appendChild(messagesList)

  main.append(h1)
  main.append(messagesSection)
  main.append(inputSection)
  body.append(main)
}

const renderMessages = (messages) => {
  const messagesList = document.querySelector('ul')
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
    messageP.style.overflowWrap = 'break-word'

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
      img.style.maxWidth = '100%'
      img.style.borderRadius = '8px'

      li.append(img)
    }

    messagesList.appendChild(li)
  })
}

const renderUserInput = () => {
  const inputSection = document.querySelector('.input-section')
  const messagesList = document.querySelector('ul')
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
  form.style.gap = '10px'

  const input = document.createElement('textarea')
  input.id = 'user-input'
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

  input.addEventListener('input', () => {
    const length = input.value.length
    if (length <= 140) {
      characterSpan.textContent = `${length}/140`
    } else {
      input.value = input.value.substring(0, 140)
    }
  })

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input.value)
      messagesList.innerHTML = ''
      input.value = ''
    }
  })

  const container = document.createElement('div')
  container.style.display = 'flex'
  container.style.justifyContent = 'space-between'
  container.style.padding = '5px 10px'

  const characterSpan = document.createElement('span')
  characterSpan.innerText = '0/140'
  characterSpan.style.fontFamily = 'Roboto'
  characterSpan.style.fontSize = '16px'
  characterSpan.style.alignSelf = 'center'

  const button = document.createElement('button')
  button.innerText = '>'
  button.id = 'submit-button'
  button.style.width = '30px'
  button.style.height = '30px'
  button.style.padding = '0'
  button.style.borderRadius = '100%'
  button.style.border = 'none'
  button.style.outline = 'none'
  button.style.alignSelf = 'flex-end'
  button.style.fontFamily = 'Roboto'
  button.style.fontSize = '20px'

  button.addEventListener('click', (e) => {
    e.preventDefault()
    sendMessage(input.value)
    messagesList.innerHTML = ''
    input.value = ''
  })

  container.append(characterSpan, button)

  form.appendChild(input)
  form.appendChild(container)

  inputSection.appendChild(form)
}

const getMessages = async () => {
  try {
    const response = await fetch('https://chat.calicheoficial.lat/messages')
    const messages = await response.json()
    renderMessages(messages)
  } catch (error) {
    console.error('Error obteniendo mensajes', error);
  }
}

const sendMessage = async (texto) => {
  try {
    await fetch('https://chat.calicheoficial.lat/messages', {
      method: 'POST',
      body: JSON.stringify(
        {
          text: texto,
          user: 'Nils'
        }
      )
    }) 
    getMessages()
  } catch (error) {
    console.error('Error al enviar el mensaje', error);
  }
}

main()
