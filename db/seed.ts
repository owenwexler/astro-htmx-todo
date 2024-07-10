import { db, Todos } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Todos).values([
    { id: 'aec55286-646d-407e-bf6f-ed564e550e09', content: 'Learn Astro' },
    { id: 'e0b04549-3539-4da4-aeff-1cf931659573', content: 'Learn HTMX' },
    { id: '7877b1c6-7aac-4d4f-b3f7-b22a14cef8ff', content: 'Learn Astro DB' }
  ]);
}
