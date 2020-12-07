/// <reference types="cypress" />

describe("Check sign up form", () => {
  it("Fill and submit signup form", () => {
    cy.visit("https://www.planday.com/signup/signup/#/form");

    cy.get("input[name=email]")
      .first()

      .type("qa@outlook.com ")
      .should("have.value", "qa@outlook.com");

    cy.get("input[name=fullname]")
      .type("fIgnore Test")
      .should("have.value", "fIgnore Test");

    cy.get("input[name=company]")
      .type("IgnoreTest1234")
      .should("have.value", "IgnoreTest1234");

    cy.get("#consentLabel").click();
    cy.get(".btn.btn-primary.w-100.next_step").click();

    cy.get("[name=industry]")
      .select("Bar or nightclub")
      .should("have.value", "Bar, Pub & Nightclub");

    cy.get("[name=employees] option").then((optionsNodeList) => {
      const values = Array.from(optionsNodeList).map(
        (optionElement) => optionElement.value
      );
      expect(values).to.deep.eq([
        "",
        "1-10",
        "11-50",
        "51-250",
        "251-1K",
        "1K-5K",
      ]);
    });

    cy.get("[name=employees]").select("51-250").should("have.value", "51-250");
    cy.get("input[name=phone]")
      .type("+4577777777")
      .should("have.value", "+4577777777");

    cy.get("input[name=password]")
      .type("QAchallenge2020")
      .should("have.value", "QAchallenge2020");

    cy.get("span").contains("Start Your Free Trial").click();
  });
});
//
