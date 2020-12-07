/// <reference types="cypress" />
describe("A field not exists Test", () => {
  it("Verify the presence of the field named Made Up Field that does not exist", () => {
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
    cy.url().should(
      "eq",
      " https://ignoretest1234.planday.com/Pages/PortalPage.aspx?PageId=3954942#/dashboard/kpi-frontpage"
    );
  });
});
