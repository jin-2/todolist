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

    const filteredList = list.filter((todo) => {
      switch (filter) {
        case "todo":
          return !todo.completed;
        case "done":
          return todo.completed;
        default:
          return true;
      }
    });

    return filteredList.sort(
      (a, b) => b.updatedDate.getTime() - a.updatedDate.getTime(),
    );
  },
});
