enum Status {
  in_progress = "IN PROGRESS",
  to_do = "TO DO",
  done = "DONE",
}

interface ToDoItem {
  id: number;
  title: string;
  status: Status;
  completedOn?: Date;
}

const todoItems = [
  {
    id: 1,
    title: "Learn HTML",
    status: Status.done,
    completedOn: new Date("2021-09-11"),
  },
  { id: 2, title: "Learn TypeScript", status: Status.in_progress },
  { id: 3, title: "Write the best app in the world", status: Status.to_do },
];

function addTodoItem(todo: string): ToDoItem {
  const id = getNextId(todoItems);

  const newTodo = {
    id,
    title: todo,
    status: Status.to_do,
  };

  todoItems.push(newTodo);

  return newTodo;
}

function getNextId<T extends { id: number }>(items: T[]): number {
  return items.reduce((max, x) => (x.id > max ? max : x.id), 0) + 1;
}

const newTodo = addTodoItem(
  "Buy lots of stuff with all the money we make from the app"
);

console.log(JSON.stringify(newTodo));
