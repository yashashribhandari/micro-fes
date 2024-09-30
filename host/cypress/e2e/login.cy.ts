describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("renders login form", () => {
    cy.get('[data-testid="username"]').should("be.visible");
    cy.get('[data-testid="password"]').should("be.visible");
    cy.get('[data-testid="loginbtn"]').should("be.visible");
  });

  it("allows user to input username and password", () => {
    cy.get('[data-testid="username"]').clear().type("testuser");
    cy.get('[data-testid="password"]').clear().type("password");

    cy.get('[data-testid="username"]').should("have.value", "testuser");
    cy.get('[data-testid="password"]').should("have.value", "password");
  });
});
