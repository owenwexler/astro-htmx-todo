import { db, eq, Todos } from "astro:db";
import type { Todo } from "../src/typedefs/Todo";

const getAllTodos = async (): Promise<Todo[]> => {
  try {
    const todos = await db.select().from(Todos);
    return todos.reverse();
  } catch(err) {
    console.error(err);
    throw err;
  }
}

const getTodo = async (id: string): Promise<Todo> => {
  try {
    const todo = await db.select().from(Todos).where(eq(Todos.id, id));
    return todo[0];
  } catch(err) {
    console.error(err);
    throw err;
  }
}

const deleteTodo = async (id: string) => {
  try {
    await db.delete(Todos).where(eq(Todos.id, id ));
  } catch(err) {
    console.error(err);
    throw err;
  }
}

const updateTodo = async (id: string, currentTodoCompleted: boolean) => {
  try {
    const updatedTodo = await db.update(Todos).set({ completed: !currentTodoCompleted }).where(eq(Todos.id, id )).returning({ id: Todos.id, content: Todos.content, completed: Todos.completed, createdAt: Todos.createdAt });
    return updatedTodo[0];
  } catch(err) {
    console.error(err);
    throw err;
  }
}

export {
  getAllTodos,
  getTodo,
  deleteTodo,
  updateTodo
}