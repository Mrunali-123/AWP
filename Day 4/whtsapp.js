var userInput = document.getElementById('user-input')
var chatSection = document.getElementById('chat-box')

userInput.addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        displayMessage();
    }
})


function displayMessage(){
    if(userInput.value == "") return

    var textDate = Date().split(' GMT')[0]
    let parent = document.createElement('div')
    parent.setAttribute('class', 'text-element')

    let child1 = document.createElement('p')
    child1.setAttribute('class', 'user-text')
    child1.innerText = userInput.value

    let child2 = document.createElement('p')
    child2.setAttribute('class', 'text-date')
    child2.innerText = textDate

    parent.appendChild(child1)
    parent.appendChild(child2)

    chatSection.appendChild(parent)

    userInput.value = ""
}
