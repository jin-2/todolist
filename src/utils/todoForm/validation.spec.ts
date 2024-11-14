import {
  validateIncompleteTodos,
  validateMaxLength,
  validateTodo,
} from "./validation";
import { Todo } from "../../recoil/todoState";

describe("Validation Functions", () => {
  describe("validateIncompleteTodos", () => {
    it("완료되지 않은 할 일이 10개 미만일 때 null을 반환한다.", () => {
      const todos: Todo[] = Array.from({ length: 9 }, (_, i) => ({
        id: i,
        text: `할 일 ${i}`,
        completed: false,
        updatedDate: new Date(),
      }));
      expect(validateIncompleteTodos(todos)).toBeNull();
    });

    it("완료되지 않은 할 일이 10개 이상일 때 에러 메시지를 반환한다.", () => {
      const todos: Todo[] = Array.from({ length: 10 }, (_, i) => ({
        id: i,
        text: `할 일 ${i}`,
        completed: false,
        updatedDate: new Date(),
      }));
      expect(validateIncompleteTodos(todos)).toBe(
        `완료되지 않은 할 일은 최대 10개까지 등록할 수 있어요.`,
      );
    });
  });

  describe("validateMaxLength", () => {
    it("텍스트 길이가 20자 이하일 때 null을 반환한다.", () => {
      const text = "12345678901234567890";
      expect(validateMaxLength(text)).toBeNull();
    });

    it("텍스트 길이가 20자를 초과할 때 에러 메시지를 반환한다.", () => {
      const text = "이 할 일은 텍스트 길이가 20자를 초과하는 예제입니다.";
      expect(validateMaxLength(text)).toBe(
        `할 일은 최대 20자까지 입력할 수 있어요.`,
      );
    });
  });

  describe("validateTodo", () => {
    it("텍스트 길이가 20자 이하이고, 완료되지 않은 할 일이 10개 미만일 때 null을 반환한다.", () => {
      const todos: Todo[] = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        text: `할 일 ${i}`,
        completed: false,
        updatedDate: new Date(),
      }));
      const text = "적당한 길이의 할 일";
      expect(validateTodo(text, todos)).toBeNull();
    });

    it("텍스트 길이가 20자를 초과하면 길이 초과 에러 메시지를 반환한다.", () => {
      const todos: Todo[] = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        text: `할 일 ${i}`,
        completed: false,
        updatedDate: new Date(),
      }));
      const text = "이 할 일은 텍스트 길이가 20자를 초과하는 예제입니다.";
      expect(validateTodo(text, todos)).toBe(
        `할 일은 최대 20자까지 입력할 수 있어요.`,
      );
    });

    it("완료되지 않은 할 일이 10개 이상일 때 할 일 개수 초과 에러 메시지를 반환한다.", () => {
      const todos: Todo[] = Array.from({ length: 10 }, (_, i) => ({
        id: i,
        text: `할 일 ${i}`,
        completed: false,
        updatedDate: new Date(),
      }));
      const text = "새로운 할 일";
      expect(validateTodo(text, todos)).toBe(
        `완료되지 않은 할 일은 최대 10개까지 등록할 수 있어요.`,
      );
    });
  });
});
