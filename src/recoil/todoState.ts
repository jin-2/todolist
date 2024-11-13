import { atom, selector } from "recoil";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  updatedDate: Date;
}

export const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [],
});

export const todoFilterState = atom<"all" | "todo" | "done">({
  key: "todoFilterState",
  default: "all",
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "todo":
        return list.filter((todo) => !todo.completed);
      case "done":
        return list.filter((todo) => todo.completed);
      default:
        return list;
    }
  },
});
