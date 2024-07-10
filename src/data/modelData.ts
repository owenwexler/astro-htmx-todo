import type { Todo } from "../typedefs/Todo";

const modelData: Todo[] = [
  {
    id: '68e00617-1b20-4d57-8162-9a5499feef2c',
    content: 'Learn Astro',
    completed: false,
    createdAt: new Date('2024-01-19 16:16:37.750312')
  },
  {
    id: '86a33441-97f5-4a4a-8cf5-4c5cf07103fe',
    content: 'Learn HTMX',
    completed: true,
    createdAt: new Date('2024-01-19 16:16:37.756186')
  },
  {
    id: 'b67b04a8-5467-4bf7-84be-a01c8562e56d',
    content: 'Learn Astro DB',
    completed: false,
    createdAt: new Date('2024-01-19 16:16:37.756446')
  }
];

export {
  modelData
}