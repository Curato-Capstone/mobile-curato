import Trie from 'triejs';

// Create a new trie
const autoCompleteTrie = new Trie();
const suggestions = [
    'sushi',
    'food',
    'restaurant',
    'art gallery',
    'museum',
    'thai',
    'park',
    'trail',
    'hike',
    'stadium',
    'catdog',
    'animal',
    'farm',
    'flowers',
    'gardens',
    'boutique',
    'hotel',
    'motels',
    'beach',
    'lake',
    'river',
    'culture',
    'theatre',
    'theater',
    'movie',
    'show',
    'music',
    'vietnamese',
    'chinese',
    'japanese',
    'indian',
    'mall',
    'strip mall',
    'outlet',
    'casino',
    'card room',
    'laser tag',
    'go kart',
    'golf',
    'mini golf',
    'disc golf',
    'driving range',
    'basketball court',
    'tennis',
    'racquetball',
    'racketball',
    'squash',
    'wallball',
    'handball',
    'martial arts',
    'monuments',
    'pike place market',
    'pioneer square',
    'belltown',
    'westlake',
    'international district',
    'uwajimaya',
    'orchestra',
    'opera',
    'roller derby',
    'ice skating',
    'horse racing',
    'emerald downs',
    'zoo',
    'aquarium',
    'pier',
    'skatepark',
    'skate park',
    'lagoon',
    'mountain'    
];

for (const suggestion of suggestions) {
    autoCompleteTrie.add(suggestion);
}

export default autoCompleteTrie;
