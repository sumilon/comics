const odysseusAndTheTrojanHorse = {
  id: 'odysseus-troy',
  title: 'Odysseus and the Trojan Horse',
  subtitle: 'A Greek tale of cleverness and courage',
  ageRange: '5-12',
  theme: 'cleverness',
  category: 'greek-mythology',
  moral: 'Cleverness and teamwork can solve problems that strength alone cannot. Always think before you act!',
  coverColor: '#5D4037',
  coverEmoji: '\uD83C\uDFC7',
  frames: [
    {
      id: 1,
      scene: 'tr-greece-intro',
      narrative: 'Long, long ago, across the shimmering blue seas, there was a beautiful land called Greece. Its people were brave, clever, and loved to tell stories under the starry skies.',
      dialogue: null,
      bg: ['#42A5F5', '#1E88E5', '#81D4FA', '#E3F2FD'],
      characters: [],
      mood: 'serene',
      effects: ['birds', 'sparkle']
    },
    {
      id: 2,
      scene: 'tr-odysseus-intro',
      narrative: 'Among the Greeks lived a hero named Odysseus. He was not the strongest or the tallest warrior, but he was the cleverest person in all of Greece! Everyone came to him for advice.',
      dialogue: { speaker: 'Odysseus', text: 'A good plan is worth more than a hundred swords! Let me think...', emotion: 'wise' },
      bg: ['#FFF9C4', '#FFE082', '#FFCC80', '#FFB74D'],
      characters: ['odysseus'],
      mood: 'happy',
      effects: ['warm-glow']
    },
    {
      id: 3,
      scene: 'tr-troy-city',
      narrative: 'Far across the sea stood the magnificent city of Troy. It had the tallest, thickest walls anyone had ever seen. No army could break through those mighty walls!',
      dialogue: null,
      bg: ['#BCAAA4', '#8D6E63', '#D7CCC8', '#A1887F'],
      characters: ['trojan-wall'],
      mood: 'grand',
      effects: ['sunset-glow']
    },
    {
      id: 4,
      scene: 'tr-war-begins',
      narrative: 'The Greeks and Trojans were in a big disagreement that had gone on for years and years. The Greek ships filled the harbor, but the tall walls of Troy kept them out.',
      dialogue: { speaker: 'Greek Soldier', text: 'We have tried everything! These walls are just too strong!', emotion: 'frustrated' },
      bg: ['#90A4AE', '#78909C', '#B0BEC5', '#ECEFF1'],
      characters: ['greek-ship', 'trojan-wall'],
      mood: 'tense',
      effects: ['wind']
    },
    {
      id: 5,
      scene: 'tr-greeks-tired',
      narrative: 'After ten long years, the Greek soldiers were tired and homesick. They missed their families, their homes, and their warm beds. Many wanted to give up and sail home.',
      dialogue: { speaker: 'Greek Soldier', text: 'I miss my family so much. Can we ever find a way to end this?', emotion: 'sad' },
      bg: ['#78909C', '#607D8B', '#546E7A', '#B0BEC5'],
      characters: ['odysseus', 'greek-ship'],
      mood: 'sad',
      effects: ['rain-light']
    },
    {
      id: 6,
      scene: 'tr-athena-appears',
      narrative: 'One starry night, the wise goddess Athena appeared to Odysseus in a dream. She glowed with silver light and spoke in a gentle, encouraging voice.',
      dialogue: { speaker: 'Athena', text: 'Odysseus, use your greatest gift — your clever mind! Strength cannot open these walls, but wisdom can.', emotion: 'wise' },
      bg: ['#1A237E', '#283593', '#5C6BC0', '#9FA8DA'],
      characters: ['athena', 'odysseus'],
      mood: 'mystical',
      effects: ['sparkle', 'moonlight']
    },
    {
      id: 7,
      scene: 'tr-odysseus-thinks',
      narrative: 'Odysseus sat on the beach, watching the waves and thinking very hard. He looked at the trees, the ships, and the stars. Then suddenly — his eyes lit up with the most brilliant idea!',
      dialogue: { speaker: 'Odysseus', text: 'I\'ve got it! If we cannot go THROUGH the walls... we will go INSIDE them! We need to build something very special!', emotion: 'eureka' },
      bg: ['#FF8A65', '#FF7043', '#FFAB91', '#FFE0B2'],
      characters: ['odysseus'],
      mood: 'thinking',
      effects: ['lightbulb', 'sparkle']
    },
    {
      id: 8,
      scene: 'tr-building-horse',
      narrative: 'Odysseus gathered the best builders and craftsmen. Day and night, they sawed wood, hammered nails, and shaped planks. They were building an enormous wooden horse — big enough to hide soldiers inside!',
      dialogue: { speaker: 'Odysseus', text: 'Make it beautiful! The Trojans must think it is a wonderful gift. Carve every detail with care!', emotion: 'determined' },
      bg: ['#A1887F', '#8D6E63', '#BCAAA4', '#D7CCC8'],
      characters: ['wooden-horse', 'odysseus'],
      mood: 'busy',
      effects: ['sawdust', 'hammering']
    },
    {
      id: 9,
      scene: 'tr-horse-complete',
      narrative: 'After many days, the wooden horse was finished! It was magnificent — as tall as two houses, with a shiny mane, painted eyes, and a secret door hidden in its belly!',
      dialogue: null,
      bg: ['#FFE082', '#FFD54F', '#FFC107', '#FF8F00'],
      characters: ['wooden-horse'],
      mood: 'grand',
      effects: ['sparkle', 'sunrise']
    },
    {
      id: 10,
      scene: 'tr-soldiers-hide',
      narrative: 'Under the cover of darkness, Odysseus and his bravest warriors climbed inside the wooden horse through the secret door. It was cramped and dark inside, but they stayed perfectly quiet.',
      dialogue: { speaker: 'Odysseus', text: 'Shhh! Not a sound, everyone. Our whole plan depends on being as quiet as little mice!', emotion: 'whispering' },
      bg: ['#37474F', '#455A64', '#546E7A', '#78909C'],
      characters: ['odysseus', 'wooden-horse'],
      mood: 'tense',
      effects: ['dark-vignette']
    },
    {
      id: 11,
      scene: 'tr-greeks-sail-away',
      narrative: 'When morning came, the Trojans looked out from their walls and could not believe their eyes. The Greek ships were sailing away! The beach was empty — except for one thing: a giant wooden horse!',
      dialogue: { speaker: 'Trojan Guard', text: 'Look! The Greeks are leaving! They\'ve given up! And what is that huge thing on the beach?', emotion: 'surprised' },
      bg: ['#4FC3F7', '#29B6F6', '#81D4FA', '#E3F2FD'],
      characters: ['trojan-guard', 'wooden-horse'],
      mood: 'surprised',
      effects: ['birds', 'sunrise']
    },
    {
      id: 12,
      scene: 'tr-trojans-debate',
      narrative: 'The Trojans gathered around the enormous horse. Some thought it was a gift from the gods. Others were not so sure. They argued back and forth about what to do with it.',
      dialogue: { speaker: 'Trojan Guard', text: 'It must be a peace offering! Let us bring it inside the city as a trophy of our victory!', emotion: 'excited' },
      bg: ['#D7CCC8', '#BCAAA4', '#A1887F', '#8D6E63'],
      characters: ['trojan-guard', 'wooden-horse'],
      mood: 'debating',
      effects: ['crowd-murmur']
    },
    {
      id: 13,
      scene: 'tr-horse-enters',
      narrative: 'The Trojans opened their massive gates for the first time in ten years! With ropes and rollers, they pulled the giant wooden horse through the gates and into the heart of their city!',
      dialogue: null,
      bg: ['#BCAAA4', '#A1887F', '#FFE082', '#FFD54F'],
      characters: ['wooden-horse', 'trojan-wall'],
      mood: 'triumphant',
      effects: ['cheering', 'confetti']
    },
    {
      id: 14,
      scene: 'tr-trojans-celebrate',
      narrative: 'The Trojans were overjoyed! They danced, sang, and feasted all day long. They thought the war was finally over and they had won! The celebration went on late into the night.',
      dialogue: { speaker: 'Trojan Guard', text: 'The war is over! We won! Let us celebrate until the stars come out!', emotion: 'celebrating' },
      bg: ['#FF8A65', '#FFB74D', '#FFD54F', '#FFF176'],
      characters: ['trojan-guard'],
      mood: 'happy',
      effects: ['confetti', 'celebration']
    },
    {
      id: 15,
      scene: 'tr-night-falls',
      narrative: 'As the moon rose high in the sky, the tired Trojans finally fell asleep. The whole city was quiet. Only the crickets chirped and the stars twinkled in the dark velvet sky.',
      dialogue: null,
      bg: ['#1A237E', '#0D47A1', '#283593', '#1B1B3A'],
      characters: [],
      mood: 'quiet',
      effects: ['moonlight', 'stars']
    },
    {
      id: 16,
      scene: 'tr-door-opens',
      narrative: 'CREEEAK! In the dead of night, the secret door in the horse\'s belly slowly opened. Odysseus peeked out carefully and whispered to his brave companions.',
      dialogue: { speaker: 'Odysseus', text: 'It\'s time! Everyone out, quietly now. Our clever plan is working perfectly!', emotion: 'determined' },
      bg: ['#263238', '#37474F', '#455A64', '#546E7A'],
      characters: ['odysseus', 'wooden-horse'],
      mood: 'tense',
      effects: ['dark-vignette', 'moonlight']
    },
    {
      id: 17,
      scene: 'tr-open-gates',
      narrative: 'The Greek warriors tiptoed through the sleeping city. They crept to the enormous gates and pushed them wide open! Outside, the Greek ships had secretly sailed back in the darkness!',
      dialogue: { speaker: 'Odysseus', text: 'Open the gates, friends! Signal the ships! Our plan has worked!', emotion: 'triumphant' },
      bg: ['#37474F', '#455A64', '#FF8A65', '#FFB74D'],
      characters: ['odysseus', 'trojan-wall'],
      mood: 'triumphant',
      effects: ['gate-opening', 'torchlight']
    },
    {
      id: 18,
      scene: 'tr-greeks-enter',
      narrative: 'The Greek army marched through the open gates! The Trojans woke up to find that the clever trick had worked. The war that could not be won by fighting was won by thinking!',
      dialogue: null,
      bg: ['#FF7043', '#FF8A65', '#FFB74D', '#FFD54F'],
      characters: ['odysseus', 'greek-ship'],
      mood: 'triumphant',
      effects: ['torchlight', 'sunrise']
    },
    {
      id: 19,
      scene: 'tr-odysseus-victory',
      narrative: 'Odysseus stood in the center of Troy and looked up at the sky with grateful eyes. His clever plan had worked! The long, long disagreement was finally over.',
      dialogue: { speaker: 'Odysseus', text: 'We did it! Not with swords, but with smarts! Remember, friends — the mind is the mightiest weapon of all!', emotion: 'proud' },
      bg: ['#FFD54F', '#FFC107', '#FF8F00', '#F57F17'],
      characters: ['odysseus'],
      mood: 'heroic',
      effects: ['sunrise', 'sparkle', 'confetti']
    },
    {
      id: 20,
      scene: 'tr-journey-home',
      narrative: 'With the war over, Odysseus and his men set sail for home. But the sea had other plans! Wild winds blew their ships far, far off course into unknown waters filled with wonders and dangers!',
      dialogue: { speaker: 'Odysseus', text: 'Hold on tight, everyone! The sea is rough, but we WILL find our way home!', emotion: 'brave' },
      bg: ['#1565C0', '#0D47A1', '#42A5F5', '#90CAF9'],
      characters: ['greek-ship', 'odysseus'],
      mood: 'adventurous',
      effects: ['waves', 'wind', 'storm']
    },
    {
      id: 21,
      scene: 'tr-sea-monsters',
      narrative: 'On their incredible journey, Odysseus faced giant whirlpools, magical islands, and even a one-eyed giant called a Cyclops! But each time, his cleverness saved the day.',
      dialogue: { speaker: 'Odysseus', text: 'Think, think, think! Every problem has a solution if you use your brain!', emotion: 'determined' },
      bg: ['#0D47A1', '#1A237E', '#4A148C', '#6A1B9A'],
      characters: ['odysseus'],
      mood: 'danger',
      effects: ['waves', 'dark-vignette', 'shake']
    },
    {
      id: 22,
      scene: 'tr-penelope-waits',
      narrative: 'Back home in Ithaca, Odysseus\'s wife Penelope waited patiently with their son Telemachus. Every night, she looked out at the sea, hoping to see his ship on the horizon.',
      dialogue: { speaker: 'Penelope', text: 'Your father is the cleverest man alive, Telemachus. He will find his way back to us. I know it in my heart.', emotion: 'hopeful' },
      bg: ['#FF7043', '#FF8A65', '#FFAB91', '#1565C0'],
      characters: ['penelope', 'telemachus'],
      mood: 'hopeful',
      effects: ['sunset-glow', 'stars']
    },
    {
      id: 23,
      scene: 'tr-athena-helps',
      narrative: 'The goddess Athena watched over Odysseus throughout his long journey. She sent fair winds to guide his ship and gave him courage when he felt lost and alone.',
      dialogue: { speaker: 'Athena', text: 'Be brave, Odysseus! You are almost home. Your family is waiting for you with open arms.', emotion: 'encouraging' },
      bg: ['#5C6BC0', '#7986CB', '#9FA8DA', '#C5CAE9'],
      characters: ['athena', 'greek-ship'],
      mood: 'mystical',
      effects: ['sparkle', 'divine-glow']
    },
    {
      id: 24,
      scene: 'tr-homecoming',
      narrative: 'After many long years and amazing adventures, Odysseus finally saw the shores of his beloved Ithaca! His heart leaped with joy as the familiar hills and trees came into view!',
      dialogue: { speaker: 'Odysseus', text: 'HOME! I can see it! We made it at last! Oh, how beautiful it looks!', emotion: 'overjoyed' },
      bg: ['#66BB6A', '#81C784', '#A5D6A7', '#C8E6C9'],
      characters: ['odysseus', 'greek-ship'],
      mood: 'happy',
      effects: ['sunrise', 'sparkle', 'birds']
    },
    {
      id: 25,
      scene: 'tr-family-reunion',
      narrative: 'Penelope and Telemachus came running to the shore! Tears of happiness streamed down everyone\'s faces as they hugged each other tightly. The family was together again at last!',
      dialogue: { speaker: 'Telemachus', text: 'Father! You came back! I knew you would! Tell me all about your adventures!', emotion: 'joyful' },
      bg: ['#FFD54F', '#FFE082', '#FFF9C4', '#FFFFFF'],
      characters: ['odysseus', 'penelope', 'telemachus'],
      mood: 'happy',
      effects: ['sparkle', 'confetti', 'warm-glow']
    },
    {
      id: 26,
      scene: 'tr-moral-scene',
      narrative: 'And so, dear children, the great Odysseus taught us that being clever and never giving up can overcome any challenge. He won the war not with muscles, but with his mind. And his love for his family guided him home through every storm and danger.',
      dialogue: { speaker: 'Odysseus', text: 'Remember, young friends — your mind is your greatest treasure. Be brave, be clever, and always find your way home to the people who love you!', emotion: 'wise' },
      bg: ['#FF8A65', '#FF7043', '#FFB74D', '#FFC107'],
      characters: ['odysseus', 'penelope', 'telemachus'],
      mood: 'ending',
      effects: ['sunset-glow', 'sparkle', 'birds']
    }
  ]
};

export default odysseusAndTheTrojanHorse;
