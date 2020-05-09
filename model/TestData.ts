import { Todo } from "./Todo"

// test data
export const testTodos: Todo[] = []

for (let i = 0; i < 6; i++) {
  testTodos.push({
    id: i + 1,
    name: `Task ${i + 1}`,
    complete: i % 2 == 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  })
}
