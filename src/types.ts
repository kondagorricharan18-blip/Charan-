export interface Item {
  id: string;
  name: string;
  rarity: 'Legendary' | 'Mythic' | 'Rare' | 'Epic';
  image: string;
  category: 'Skins' | 'Weapons' | 'Emotes' | 'Bundles';
}

export const MOCK_ITEMS: Item[] = [
  { id: '1', name: 'Crimson Dragon Bundle', rarity: 'Mythic', category: 'Bundles', image: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?w=400&q=80' },
  { id: '2', name: 'Arctic Blue M4A1', rarity: 'Legendary', category: 'Weapons', image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400&q=80' },
  { id: '3', name: 'Void Walker Skin', rarity: 'Mythic', category: 'Skins', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80' },
  { id: '4', name: 'Samba Dance Emote', rarity: 'Epic', category: 'Emotes', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=80' },
  { id: '5', name: 'Neon Samurai', rarity: 'Legendary', category: 'Skins', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&q=80' },
  { id: '6', name: 'Golden AK-47', rarity: 'Legendary', category: 'Weapons', image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400&q=80' },
  { id: '7', name: 'Galactic Wingman', rarity: 'Epic', category: 'Skins', image: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?w=400&q=80' },
  { id: '8', name: 'Inferno Katana', rarity: 'Mythic', category: 'Weapons', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&q=80' },
];
