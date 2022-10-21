// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');
const data = [
  'बुध ग्रह में एक साल में केवल अठासी दिन होते हैं',
        'सूरज से दूर होने के बावजूद, Venus का तापमान Mercury से ज़्यादा होता हैं',
        'Earth के तुलना से Mars में सूरज का size तक़रीबन आधा हैं',
        'सूरज का shape एकदम गेंद आकार में हैं',
        'चाँद पृथ्वी से हर साल 1.6 इंच दूर हो रहा है',
        'सूर्य सौर मंडल में सबसे बड़ा वस्तु है',
        'सूर्य और पृथ्वी के बीच की दुरी को एक खगोलीय इकाई या AU के रुप में परिभाषित किया गया है',
        'हमारे लिए सबसे निकटम आकाशगंगा एंड्रोमेडा गैलेक्सी है',
        'अंतरिक्ष लचीला है यह समय की शुरुआत के बाद से एक औस्त दर्जे की दर पर विस्तार कर रहा है',
        'मनुष्य अगर अंतरिक्ष पर 30 सेकंड सांस रोक लेता है तो जान जा सकती है',
        'अंतरिक्ष से सूरज हमें सफेद दिखाई देगा',
        'ओलंपस मॉन्स 25 किलोमीटर ऊंचा है जोकि माउंट एवरेस्ट से लगभग 3 गुना है',
        'एक प्रकाश वर्ष, प्रकाश द्वारा 1 वर्ष में चली गई दूरी होती है जो कि 9.5 ट्रिलियन किलोमीटर के बराबर है',
        'सूर्य पृथ्वी से 3,00,000 गुना बड़ा है',
        'अंतरिक्ष के अंदर पहली सेल्फी 1966 में बज एल्ड्रिन ने ली थी',
        'यदि कोई तारा ब्लैक होल के काफी पास से होकर गुजरता है तो वह बिखर सकता है',
        'शुक्र सौर मंडल का सबसे गर्म ग्रह है और इसका औसत सतह तापमान 450 डिग्री सेल्सियस है',
        'अंतरिक्ष में तारे पूरी तरह से बेशुमार है कोई नहीं जानता की अंतरिक्ष में कितने तारे है',
        'मंगल ग्रह पर एक ज्वालामुखी एवरेस्ट से 3 गुना बड़ी है जो किसी भी ग्रह का सबसे बड़ा शिखर है',
        'सौर मंडल में मनुष्यों के लिए सबसे ज्यादा रहने के लिए जगह है',
        'सौर मंडल में शनि दूसरा सबसे बड़ा ग्रह है',
        'मंगल ग्रह का दिन 24 घंटे 39 मिनट और 35 सेकंड का होता है',
        'शुक्र ही एकमात्र ग्रह है जो दुसरें ग्रहों की तुलना में पीछे की और घूमता है',
        'शुक्र पर एक दिन एक वर्ष से अधिक है',
        'अगर आप चाँद पर कोई निशान बनाओगे तो वो निशान हमेशा बना रहेगा',
        'मंगल पर सूर्यास्त नीला दिखाई देता है'
        
];

const GET_FACT_MESSAGE = "यह रहा आपका fact";

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = 'नमस्ते, आप मुझे अंतरिक्ष के फैक्ट पूछ सकते है  ';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speechText = 'नमस्कार';
        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const GetNewFactIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'GetNewFactIntent';
    },
    handle(handlerInput) {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;


        const speechText = speechOutput;
        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = 'धन्यवाद ';
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = handlerInput.requestEnvelope.request.intent.name;
        const speechText = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.message}`);
        const speechText = `Sorry, I couldn't understand what you said. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

// This handler acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        GetNewFactIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler) // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    .addErrorHandlers(
        ErrorHandler)
    .lambda();
