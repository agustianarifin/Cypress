/// <reference types="cypress"/>
import loginPage from "../../../POM/OrangeHRM/Login/login";
import DashboardDirectory from "../../../POM/OrangeHRM/Login/MenuDirectory";

describe("Dashboard : Directory", () => {
  // it('Search by Filter Employee Name', () => {
  //        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //        loginPage.textLogin().should('have.text','Login');
  //        loginPage.inputUsername().type('Admin');
  //        loginPage.inputPassword().type('admin123');
  //        cy.intercept("GET","/employees/action-summary").as("actionsummary");
  //        loginPage.buttonLogin().click();
  //        cy.wait("@actionsummary").then((intercept) => {
  //            expect(intercept.response.statusCode).to.equal(200)
  //        });
  //        loginPage.menuDashboard().should('have.text','Dashboard');
  //        cy.intercept("GET","/index.php/api/v2/directory/*").as("employ-limit");
  //        DashboardDirectory.menuDirectory().click();
  //        cy.wait("@employ-limit").then((intercept)=>{
  //         expect(intercept.response.statusCode).to.equal(200)
  //        });
  //        DashboardDirectory.inputEmployeeName().type('Peter');
  //        DashboardDirectory.dropdownEmployee().should('contain.text', 'Peter').click();
  //        DashboardDirectory.buttonSearch().click();
  //        DashboardDirectory.MessageRecord().should('contain.text','(1) Record Found');
  //     })

  // it('Search Employee Name tanpa memilih picklist', () => {
  //        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //        loginPage.textLogin().should('have.text','Login');
  //        loginPage.inputUsername().type('Admin');
  //        loginPage.inputPassword().type('admin123');
  //        cy.intercept("GET","/employees/action-summary").as("actionsummary");
  //        loginPage.buttonLogin().click();
  //        cy.wait("@actionsummary").then((intercept) => {
  //            expect(intercept.response.statusCode).to.equal(200)
  //        });
  //        loginPage.menuDashboard().should('have.text','Dashboard');
  //        cy.intercept("GET","/index.php/api/v2/directory/*").as("employ-limit");
  //        DashboardDirectory.menuDirectory().click();
  //        cy.wait("@employ-limit").then((intercept)=>{
  //         expect(intercept.response.statusCode).to.equal(200)
  //        });
  //        DashboardDirectory.inputEmployeeName().type('Peter');
  //        DashboardDirectory.buttonSearch().click();
  //        DashboardDirectory.MessageInvalid().should('have.text','Invalid');
  //     })

  // it('Search by Filter Job Title', () => {
  //        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //        loginPage.textLogin().should('have.text','Login');
  //        loginPage.inputUsername().type('Admin');
  //        loginPage.inputPassword().type('admin123');
  //        cy.intercept("GET","/employees/action-summary").as("actionsummary");
  //        loginPage.buttonLogin().click();
  //        cy.wait("@actionsummary").then((intercept) => {
  //            expect(intercept.response.statusCode).to.equal(200)
  //        });
  //        loginPage.menuDashboard().should('have.text','Dashboard');
  //        cy.intercept("GET","/index.php/api/v2/directory/*").as("employ-limit");
  //        DashboardDirectory.menuDirectory().click();
  //        cy.wait("@employ-limit").then((intercept)=>{
  //         expect(intercept.response.statusCode).to.equal(200)
  //        });
  //        DashboardDirectory.dropdownJobTitle().click();
  //        DashboardDirectory.listBoxJobTitle_Location().should('be.visible');
  //        cy.contains('Chief Financial Officer').should('be.visible').click();
  //        DashboardDirectory.buttonSearch().click();
  //        DashboardDirectory.MessageRecord().should('contain.text','Record Found');
  //     })

  // it('Search by Filter Job Title dengan kondisi tidak ada record', () => {
  //        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //        loginPage.textLogin().should('have.text','Login');
  //        loginPage.inputUsername().type('Admin');
  //        loginPage.inputPassword().type('admin123');
  //        cy.intercept("GET","/employees/action-summary").as("actionsummary");
  //        loginPage.buttonLogin().click();
  //        cy.wait("@actionsummary").then((intercept) => {
  //            expect(intercept.response.statusCode).to.equal(200)
  //        });
  //        loginPage.menuDashboard().should('have.text','Dashboard');
  //        cy.intercept("GET","/index.php/api/v2/directory/*").as("employ-limit");
  //        DashboardDirectory.menuDirectory().click();
  //        cy.wait("@employ-limit").then((intercept)=>{
  //         expect(intercept.response.statusCode).to.equal(200)
  //        });
  //        DashboardDirectory.dropdownJobTitle().click();
  //        DashboardDirectory.listBoxJobTitle_Location().should('be.visible');
  //        cy.contains('Automaton Tester').should('be.visible').click();
  //        DashboardDirectory.buttonSearch().click();
  //        DashboardDirectory.MessageRecord().should('contain.text','No Records Found');
  //        DashboardDirectory.PopupNoRecordFound().should('be.visible');
  //     })

  it("Search by Filter Location", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    loginPage.textLogin().should("have.text", "Login");
    loginPage.inputUsername().type("Admin");
    loginPage.inputPassword().type("admin123");
    cy.intercept("GET", "/employees/action-summary").as("actionsummary");
    loginPage.buttonLogin().click();
    cy.wait("@actionsummary").then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
    loginPage.menuDashboard().should("have.text", "Dashboard");
    cy.intercept("GET", "/index.php/api/v2/directory/*").as("employ-limit");
    DashboardDirectory.menuDirectory().click();
    cy.wait("@employ-limit").then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
    DashboardDirectory.dropdownLocation().click();
    DashboardDirectory.listBoxJobTitle_Location().should("be.visible");
    cy.contains("Texas").should("be.visible").click();
    DashboardDirectory.buttonSearch().click();
    DashboardDirectory.MessageRecord().should(
      "contain.text",
      " (4) Records Found"
    );
  });

  it("Search by Filter Location dengan kondisi tidak ada record", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    loginPage.textLogin().should("have.text", "Login");
    loginPage.inputUsername().type("Admin");
    loginPage.inputPassword().type("admin123");
    cy.intercept("GET", "/employees/action-summary").as("actionsummary");
    loginPage.buttonLogin().click();
    cy.wait("@actionsummary").then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
    loginPage.menuDashboard().should("have.text", "Dashboard");
    cy.intercept("GET", "/index.php/api/v2/directory/*").as("employ-limit");
    DashboardDirectory.menuDirectory().click();
    cy.wait("@employ-limit").then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
    DashboardDirectory.dropdownLocation().click();
    DashboardDirectory.listBoxJobTitle_Location()
      .should("be.visible")
      .scrollIntoView();
    cy.contains("Canadian").should("be.visible").click();
    DashboardDirectory.buttonSearch().click();
    DashboardDirectory.MessageRecord().should(
      "contain.text",
      "No Records Found"
    );
    DashboardDirectory.PopupNoRecordFound().should("be.visible");
  });

  it("Search All Filter then Reset", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    loginPage.textLogin().should("have.text", "Login");
    loginPage.inputUsername().type("Admin");
    loginPage.inputPassword().type("admin123");
    cy.intercept("GET", "/employees/action-summary").as("actionsummary");
    loginPage.buttonLogin().click();
    cy.wait("@actionsummary").then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
    loginPage.menuDashboard().should("have.text", "Dashboard");
    cy.intercept("GET", "/index.php/api/v2/directory/*").as("employ-limit");
    DashboardDirectory.menuDirectory().click();
    cy.wait("@employ-limit").then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
    DashboardDirectory.inputEmployeeName().type("Peter");
    DashboardDirectory.dropdownEmployee()
      .should("contain.text", "Peter")
      .click();
    DashboardDirectory.dropdownJobTitle().click();
    DashboardDirectory.listBoxJobTitle_Location().should("be.visible");
    cy.contains("Chief Financial Officer").should("be.visible").click();
    DashboardDirectory.dropdownLocation().click();
    DashboardDirectory.listBoxJobTitle_Location().should("be.visible");
    cy.contains("Texas").should("be.visible").click();
    DashboardDirectory.buttonReset().click();
  });
});
