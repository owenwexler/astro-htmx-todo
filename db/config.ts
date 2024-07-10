import { column, defineDb, defineTable, NOW } from 'astro:db';

// https://astro.build/db/config

const Todos = defineTable({
  columns: {
    id: column.text({ unique: true, primaryKey: true }),
    content: column.text(),
    completed: column.boolean({ default: false }),
    createdAt: column.date({ default: NOW })
  }
})

export default defineDb({
  tables: { Todos }
});
