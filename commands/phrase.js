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


const Discord = require('discord.js');


module.exports = {
    name: 'phrase',
    description: 'generates a phrase',

    async execute(client, message, args) {
        function createRandomPhrase() {
            const phrases = {
                phrase1: business[Math.floor(Math.random() * business.length)],
                phrase2: byPrepo[Math.floor(Math.random() * byPrepo.length)],
                phrase3: conversational[Math.floor(Math.random() * conversational.length)],
                phrase4: felicitous[Math.floor(Math.random() * felicitous.length)],
                phrase5: impressive[Math.floor(Math.random() * impressive.length)],
                phrase6: inPrepo[Math.floor(Math.random() * inPrepo.length)],
                phrase7: intoPrepo[Math.floor(Math.random() * intoPrepo.length)],
                phrase8: literary[Math.floor(Math.random() * literary.length)],
                phrase9: misc[Math.floor(Math.random() * misc.length)],
                phrase10: ofPrepo[Math.floor(Math.random() * ofPrepo.length)],
                phrase11: publicSpeaking[Math.floor(Math.random() * publicSpeaking.length)],
                phrase12: significant[Math.floor(Math.random() * significant.length)],
                phrase13: similies[Math.floor(Math.random() * similies.length)],
                phrase14: toPrepo[Math.floor(Math.random() * toPrepo.length)],
                phrase15: useful[Math.floor(Math.random() * useful.length)],
                phrase16: withPrepo[Math.floor(Math.random() * withPrepo.length)],
            }
            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }


            let array = []
            for (let i = 0; i < 5; i++) {

                let num = Math.ceil((Math.random() * 16))
                let filename = 'phrase' + num
                array.push(filename)
            }
            let randomPhrases = Array.from(new Set(array))
            if (randomPhrases.length < 5) {
                return createRandomPhrase()
            }
            let phraseArray = [];
            let payload;
            for (phrase of randomPhrases) {
                phraseArray.push((phrases[phrase].toLowerCase()))
                payload = phraseArray.join(' ')
            }

            message.channel.send(`${ capitalizeFirstLetter(payload) }.`);
        }


        createRandomPhrase()
        // message.channel.send(`${ createRandomPhrase() }`);

    }
}