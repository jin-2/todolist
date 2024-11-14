import { Todo } from "../../recoil/todoState";

type ValidationError = string | null;

const MAX_TEXT_LENGTH = 20;
const MAX_INCOMPLETE_TODOS = 10;

export function validateIncompleteTodos(todos: Todo[]): ValidationError {
  const incompleteTodos = todos.filter((todo) => !todo.completed);
  if (incompleteTodos.length >= MAX_INCOMPLETE_TODOS) {
    return `완료되지 않은 할 일은 최대 ${MAX_INCOMPLETE_TODOS}개까지 등록할 수 있어요.`;
  }
  return null;
}

export function validateMaxLength(text: string): ValidationError {
  if (text.length > MAX_TEXT_LENGTH) {
    return `할 일은 최대 ${MAX_TEXT_LENGTH}자까지 입력할 수 있어요.`;
  }
  return null;
}

export function validateTodo(text: string, todos: Todo[]): ValidationError {
  const maxLengthError = validateMaxLength(text);
  if (maxLengthError) return maxLengthError;

  const incompleteTodosError = validateIncompleteTodos(todos);
  if (incompleteTodosError) return incompleteTodosError;

  return null;
}
