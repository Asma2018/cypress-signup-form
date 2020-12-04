/// <reference types="cypress" />
describe("Verify fields", () => {
  it("verify that the fields Company Name, Industry, Number of Employees and Phone Number are present.", () => {
    cy.visit("https://www.planday.com/signup/signup/#/form");

    cy.get("[type=email][name=email]").should("exist");

    cy.get("input[name=fullname]").should("exist");

    cy.get("input[name=company]").should("exist");

    cy.get("#consentLabel").click();

    cy.get(".btn.btn-primary.w-100.next_step").click();
    cy.get("[name=industry]").should("exist");
    cy.get("[name=employees]").should("exist");
    cy.get("[name=phone]").should("exist");
    cy.get("input[name=password]").should("exist");
  });
});
