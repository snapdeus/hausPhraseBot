const { business } = require('../resources/business')
const { byPrepo } = require('../resources/byPrepo')
const { conversational } = require('../resources/conversational')
const { felicitous } = require('../resources/felicitous')
const { greetings } = require('../resources/greetings')
const { impressive } = require('../resources/impressive')
const { inPrepo } = require('../resources/inPrepo')
const { intoPrepo } = require('../resources/intoPrepo')
const { literary } = require('../resources/literary')
const { misc } = require('../resources/misc')
const { ofPrepo } = require('../resources/ofPrepo')
const { publicSpeaking } = require('../resources/publicSpeaking')
const { significant } = require('../resources/significant')
const { similies } = require('../resources/similies')
const { toPrepo } = require('../resources/toPrepo')
const { useful } = require('../resources/useful')
const { withPrepo } = require('../resources/withPrepo')



makeUniquePhrase = () => {

}

makeUniqueGreeting = () => {
    let randomGreetings = greetings[Math.floor(Math.random() * greetings.length)]
    return randomGreetings
}





module.exports = { makeUniquePhrase, makeUniqueGreeting }