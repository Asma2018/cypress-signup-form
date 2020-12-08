/// <reference types="cypress" />
describe("Verify URL", () => {
  it("Verify that the next page has the URL containing [CompanyName].com", () => {
    cy.visit("https://www.planday.com/login/");

    cy.get('[ng-model="data.company"]').type("IgnoreTest1234");
    cy.get("button").contains("Log in").click();
    cy.get("button#cookie-consent-button").click();

    cy.get("input[name=Username]")
      .first()

      .type("qa@outlook.com ")
      .should("have.value", "qa@outlook.com");
    cy.get("input[name=Password]")
      .type("QAchallenge2020")
      .should("have.value", "QAchallenge2020");
    cy.get("button").contains("Log in").click();
    cy.url().should("include", "ignoretest1234.planday.com");
  });
});
