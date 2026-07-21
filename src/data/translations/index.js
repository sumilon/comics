import monkeyAndCrocodileHi from './monkey-and-crocodile-hi';
import tortoiseAndGeeseHi from './tortoise-and-geese-hi';
import blueJackalHi from './blue-jackal-hi';
import lionAndRabbitHi from './lion-and-rabbit-hi';
import loyalMongooseHi from './loyal-mongoose-hi';
import musicalDonkeyHi from './musical-donkey-hi';
import crowAndSnakeHi from './crow-and-snake-hi';
import brahminDreamHi from './brahmin-dream-hi';
import elephantAndMiceHi from './elephant-and-mice-hi';
import talkingCaveHi from './talking-cave-hi';
import threeFishHi from './three-fish-hi';
import twoHeadedBirdHi from './two-headed-bird-hi';
import storkAndCrabHi from './stork-and-crab-hi';
import monkeyWedgeHi from './monkey-wedge-hi';
import jackalDrumHi from './jackal-drum-hi';
import krishnaButterHi from './krishna-butter-hi';
import hanumanSunHi from './hanuman-sun-hi';
import ganeshaMoonHi from './ganesha-moon-hi';
import prahladHi from './prahlad-hi';
import krishnaGovardhanHi from './krishna-govardhan-hi';
import krishnaKaliyaHi from './krishna-kaliya-hi';
import krishnaFruitSellerHi from './krishna-fruit-seller-hi';
import chhotaBheemHi from './chhota-bheem-hi';
import motuPatluHi from './motu-patlu-hi';
import shinchanHomeworkHi from './shinchan-homework-hi';
import doraemonGadgetHi from './doraemon-gadget-hi';
import bheemKirmadaHi from './bheem-kirmada-hi';
import oggyAdventureHi from './oggy-adventure-hi';
import troyHi from './troy-hi';
import herculesStrengthHi from './hercules-strength-hi';
import icarusWingsHi from './icarus-wings-hi';

const translations = {
  'monkey-and-crocodile': monkeyAndCrocodileHi,
  'tortoise-and-geese': tortoiseAndGeeseHi,
  'blue-jackal': blueJackalHi,
  'lion-and-rabbit': lionAndRabbitHi,
  'loyal-mongoose': loyalMongooseHi,
  'musical-donkey': musicalDonkeyHi,
  'crow-and-snake': crowAndSnakeHi,
  'brahmin-dream': brahminDreamHi,
  'elephant-and-mice': elephantAndMiceHi,
  'talking-cave': talkingCaveHi,
  'three-fish': threeFishHi,
  'two-headed-bird': twoHeadedBirdHi,
  'stork-and-crab': storkAndCrabHi,
  'monkey-and-wedge': monkeyWedgeHi,
  'jackal-and-drum': jackalDrumHi,
  'krishna-butter': krishnaButterHi,
  'hanuman-sun': hanumanSunHi,
  'ganesha-moon': ganeshaMoonHi,
  'prahlad-faith': prahladHi,
  'krishna-govardhan': krishnaGovardhanHi,
  'krishna-kaliya': krishnaKaliyaHi,
  'krishna-fruit-seller': krishnaFruitSellerHi,
  'chhota-bheem': chhotaBheemHi,
  'motu-patlu': motuPatluHi,
  'shinchan-homework': shinchanHomeworkHi,
  'doraemon-gadget': doraemonGadgetHi,
  'bheem-kirmada': bheemKirmadaHi,
  'oggy-adventure': oggyAdventureHi,
  'odysseus-troy': troyHi,
  'hercules-apples': herculesStrengthHi,
  'icarus-wings': icarusWingsHi,
};

export function getTranslation(storyId) {
  return translations[storyId] || null;
}
