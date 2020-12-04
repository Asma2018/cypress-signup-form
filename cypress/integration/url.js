/// <reference types="cypress" />
describe("verify URL", () => {
  it("Check if URL is exists", () => {
    cy.visit("https://www.planday.com/signup/signup/#/form");
  });
});
