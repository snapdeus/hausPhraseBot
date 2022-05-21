const { greetings } = require('../resources/greetings')


makeUniquePhrase = () => {

}

makeUniqueGreeting = () => {
    let randomGreetings = greetings[Math.floor(Math.random() * greetings.length)]
    return randomGreetings
}





module.exports = { makeUniquePhrase, makeUniqueGreeting }