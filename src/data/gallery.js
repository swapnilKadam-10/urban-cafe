import { img } from '../utils/images'

export const galleryCategories = ['All', 'Food', 'Coffee', 'Interior', 'Events']

export const galleryItems = [
  ['Coffee', 'Barista pouring latte art', 'photo-1442512595331-e89e73853f31'],
  ['Food', 'Signature brunch plate', 'photo-1546069901-ba9599a7e63c'],
  ['Interior', 'Warm cafe seating', 'photo-1554118811-1e0d58224f24'],
  ['Events', 'Celebration table setup', 'photo-1527529482837-4698179dc6ce'],
  ['Food', 'Artisan dessert counter', 'photo-1488477181946-6428a0291777'],
  ['Coffee', 'Fresh espresso service', 'photo-1511920170033-f8396924c348'],
  ['Interior', 'Premium cafe counter', 'photo-1501339847302-ac426a4a7cbb'],
  ['Events', 'Evening cafe gathering', 'photo-1511795409834-ef04bbd61622'],
  ['Food', 'Handcrafted pizza', 'photo-1594007654729-407eedc4be65'],
  ['Coffee', 'Cold brew on ice', 'photo-1517701604599-bb29b565090c'],
].map(([category, alt, photo], index) => ({
  id: index + 1,
  category,
  alt,
  image: img(photo, 1000, index % 3 === 0 ? 1300 : 900),
}))
