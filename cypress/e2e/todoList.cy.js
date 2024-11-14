describe("Todo List E2E Test", () => {
  const todos = [
    "환전하기",
    "비행기 예약",
    "숙소 예약",
    "기차표 구매",
    "짐싸기",
  ];

  beforeEach(() => {
    cy.visit("/"); // 앱의 루트 페이지로 이동
    cy.viewport("macbook-15");

    todos.forEach((todo) => {
      cy.get('input[placeholder="할 일을 입력해 주세요"]').type(todo);
      cy.get("form").submit();
    });
  });

  it("할 일이 정상 등록되었는지 확인한다.", () => {
    cy.get('[role="radiogroup"]').contains("All").click();
    todos.forEach((todo) => {
      cy.get(".todo-text").should("contain", todo);
    });
  });

  it("할 일이 입력한 순서대로 노출되는지 확인한다.", () => {
    cy.get('[role="radiogroup"]').contains("All").click();
    cy.get(".todo-text").each((item, index) => {
      cy.wrap(item).should("have.text", todos[index]);
    });
  });

  it("할 일을 완료 상태로 변경하고 탭에서 확인한다.", () => {
    ["비행기 예약", "숙소 예약"].forEach((completedTodo) => {
      cy.get(".todo-text")
        .contains(completedTodo)
        .parent()
        .find('button[aria-label="완료 상태로 바꾸기"]')
        .click();

      cy.get(".todo-text")
        .contains(completedTodo)
        .parent()
        .find("button")
        .should("have.class", "checked")
        .and("have.attr", "aria-label", "다시 할 일로 바꾸기");
    });

    cy.get('[role="radiogroup"]').contains("Done").click();
    ["비행기 예약", "숙소 예약"].forEach((completedTodo) => {
      cy.get(".todo-text").should("contain", completedTodo);
    });

    cy.get('[role="radiogroup"]').contains("To Do").click();
    ["비행기 예약", "숙소 예약"].forEach((completedTodo) => {
      cy.get(".todo-text").should("not.contain", completedTodo);
    });
  });

  it("할 일을 삭제하고 탭에서 확인한다.", () => {
    cy.get(".todo-text")
      .contains("짐싸기")
      .parent()
      .find('button[aria-label="할 일 지우기"]')
      .click();
    cy.get(".todo-text").should("not.contain", "짐싸기");

    cy.get('[role="radiogroup"]').contains("To Do").click();
    cy.get(".todo-text").should("not.contain", "짐싸기");

    cy.get('[role="radiogroup"]').contains("Done").click();
    cy.get("ul").should("not.contain", "짐싸기");
  });
});

describe("Todo List Validation Test", () => {
  const todos = [
    "할 일 1",
    "할 일 2",
    "할 일 3",
    "할 일 4",
    "할 일 5",
    "할 일 6",
    "할 일 7",
    "할 일 8",
    "할 일 9",
    "할 일 10",
    "할 일 11",
  ];

  beforeEach(() => {
    cy.visit("/");
    cy.on("window:alert", cy.stub().as("alertStub")); // alert 모킹하여 테스트할 수 있도록 설정

    todos.slice(0, 10).forEach((todo) => {
      cy.get('input[placeholder="할 일을 입력해 주세요"]').type(todo);
      cy.get("form").submit();
    });
  });

  it("완료되지 않은 할 일이 10개 이상 추가되었을 때 alert이 노출되는지 확인한다.", () => {
    cy.get('input[placeholder="할 일을 입력해 주세요"]').type(todos[10]);
    cy.get("form").submit();

    cy.get("@alertStub").should(
      "have.been.calledOnceWith",
      "완료되지 않은 할 일은 최대 10개까지 등록할 수 있어요.",
    );
  });

  it("'완료 안 된 할 일'이 10개 일 때 '완료 된 한 일'의 상태를 '다시 할 일'로 변경할 때 alert이 노출되는지 확인한다.", () => {
    cy.get(".todo-text")
      .contains(todos[0])
      .parent()
      .find('button[aria-label="완료 상태로 바꾸기"]')
      .click();
    cy.get('input[placeholder="할 일을 입력해 주세요"]').type(todos[10]);
    cy.get("form").submit();

    cy.get(".todo-text")
      .contains(todos[0])
      .parent()
      .find('button[aria-label="다시 할 일로 바꾸기"]')
      .click();

    cy.get("@alertStub").should(
      "have.been.calledOnceWith",
      "완료되지 않은 할 일은 최대 10개까지 등록할 수 있어요.",
    );
  });
});

describe("Todo List Max Length Validation Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("input의 maxlength가 20인지 확인한다.", () => {
    cy.get('input[placeholder="할 일을 입력해 주세요"]').should(
      "have.attr",
      "maxlength",
      "20",
    );
  });
});
