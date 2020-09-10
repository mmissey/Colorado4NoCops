const VoiceResponse = require('twilio').twiml.VoiceResponse;
const services = require('./services').services;

const serviceTypes = Object.keys(services);

let currentService = {};
const BASE_URL = process.env.BASE || '';

exports.welcome = function welcome() {
  const voiceResponse = new VoiceResponse();

  const gather = voiceResponse.gather({
    action: BASE_URL + '/nocops/menu',
    numDigits: '1',
    method: 'POST',
  });
  let intro = 'Colorado 4 No Cops. ';
  let counter = 1;
  serviceTypes.forEach((service) => {
      intro += "For " + service + " services. Press " + counter + ". ";
      counter++;
  });
  gather.say(intro,{loop: 3});

  return voiceResponse.toString();
};

exports.menu = function menu(digit, sid) {
  return (serviceTypes[digit-1])
    ? giveServiceOptions(serviceTypes[digit-1], sid)
    : redirectWelcome();
};

/**
 * Returns a TwiML to interact with the client
 * @return {String}
 */

function giveServiceOptions(key, sid) {
  const twiml = new VoiceResponse();
  currentService[sid] = key;
  const gather = twiml.gather({
    action: BASE_URL + '/nocops/serviceOptions',
    numDigits: '1',
    method: 'POST',
  });
  
  let desc = key + ". To hear about the following services. Press the corresponding number. "
  let counter = 1;

  services[key].forEach((option) => {
    desc += option.name + " Press " + counter + ". ";
    counter ++;
  });

  desc += "To go back. Press " + counter;

  gather.say(desc,
    {loop: 3}
  );

  return twiml.toString();
}

exports.serviceOptions = function serviceOptions(serviceIndex, sid) {
  const s = currentService[sid] = services[currentService[sid]][serviceIndex-1];
  return (s)
    ? giveServiceDescription(s, sid)
    : redirectWelcome();
};

function giveServiceDescription(service, sid) {
  const twiml = new VoiceResponse();

  const gather = twiml.gather({
    action: BASE_URL + '/noCops/action',
    numDigits: '1',
    method: 'POST',
  });
  
  let desc = service.name + ". ";
  if(service.description){
    desc += service.description;
  }
  if(service.hours){
    desc += ". Hours are " + service.hours + ". ";
  }
  if(service.website){
    desc += "Their website is " + service.website + ". ";
  }

  if(service.phone){
    desc += "To hear their phone number: press 1. To call now: press 2. To get a text with info: press 3. To go back, press 4."
  }
  gather.say(desc,
    {loop: 3}
  );

  return twiml.toString();
}

exports.action = function serviceDescriptions(digit, sid, phone) {
  const s = currentService[sid];
  return (digit < 4)
    ? takeAction(s, digit, sid, phone)
    : redirectWelcome();
};

function takeAction(service, digit, sid, phone) {
    const twiml = new VoiceResponse();
    let resp = service.name + ". ";
    switch(digit){
      case "1":
        resp = "Phone number: " + service.phone;
        twiml.say(resp);
        twiml.redirect(BASE_URL + '/nocops/welcome');
        break;

      case "2":
        twiml.dial(service.phone);
        break;
      case "3":
        let sms = "**" + service.name + "** " + " -- " + service.description + "  -- " + service.hours + " -- " + service.phone + " -- " + service.website;
        let sms2 = "";
        if(sms.length > 153){
          sms2 = sms.substr(153)
          sms = sms.substr(0,152);
        }
        twiml.sms({
          from: '+14354662677',
          to: phone,
        }, sms);
        if(sms2){
          twiml.sms({
            from: '+14354662677',
            to: phone,
          }, sms2);
        }
      break;
    }
    
    
    return twiml.toString();
}
/**
 * Returns an xml with the redirect
 * @return {String}
 */
function redirectWelcome() {
  const twiml = new VoiceResponse();

  twiml.say('Returning to the main menu');

  twiml.redirect(BASE_URL + '/nocops/welcome');

  return twiml.toString();
}
