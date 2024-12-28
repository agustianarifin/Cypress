/// <reference types="cypress"/>
import AuthPage from "../../../pages/AuthPage";
import DirectoryPage from "../../../pages/DirectoryPage";
describe.only("Auth Feature", () => {
  beforeEach(function () {
    cy.fixture("auth_data").as("data");
    cy.interceptLoginPageLoad();
  });

  it("Check elements on login page", () => {
    AuthPage.visit();
    cy.wait("@pageLoad", 50000);
    AuthPage.getLoginTitle();
    AuthPage.getUsernameInput();
    AuthPage.getPasswordInput();
    AuthPage.getLoginButton();
    AuthPage.getForgotPasswordLink();
  });

  it("User Login with valid credentials", function () {
    AuthPage.visit();
    cy.wait("@pageLoad", 50000);
    cy.interceptActionSummary();
    cy.interceptShortcuts();
    cy.interceptFeeds();
    cy.interceptLeaves();
    cy.interceptSubunit();
    cy.interceptLocations();
    cy.interceptLocations();
    cy.formLogin(this.data.username, this.data.password);
    cy.wait("@actionSummary", 50000);
    cy.wait("@shortcuts", 50000);
    cy.wait("@feeds", 50000);
    cy.wait("@leaves", 50000);
    cy.wait("@subunit", 50000);
    cy.wait("@locations", 50000);
    AuthPage.verifyRedirectToDashboard();
  });

  it("User Login with invalid credentials", function () {
    AuthPage.visit();
    cy.wait("@pageLoad", 50000);
    cy.formLogin("invalid", "invalid");
    AuthPage.getAlertContent();
    AuthPage.verifyRedirectToLogin();
  });

  it("User Login with empty username", function () {
    AuthPage.visit();
    cy.wait("@pageLoad", 50000);
    cy.formLogin("", this.data.password);
    AuthPage.getInputGroupMessage();
    AuthPage.verifyRedirectToLogin();
  });

  it("User Login with empty password", function () {
    AuthPage.visit();
    cy.wait("@pageLoad", 50000);
    cy.formLogin(this.data.username, "");
    AuthPage.getInputGroupMessage();
    AuthPage.verifyRedirectToLogin();
  });

  it("User Login with empty username and password", function () {
    AuthPage.visit();
    cy.wait("@pageLoad", 50000);
    cy.formLogin("", "");
    AuthPage.getInputGroupMessage();
    AuthPage.verifyRedirectToLogin();
  });

  it("Check Forgot password link", function () {
    AuthPage.visit();
    cy.wait("@pageLoad", 50000);
    AuthPage.getForgotPasswordLink().click();
    AuthPage.verifyRedirectToRequestResetpassword();
  });

  it("Send Reset Password with valid username", function () {
    AuthPage.visit();
    cy.wait("@pageLoad", 50000);
    cy.formForgotPassword(this.data.username);
    AuthPage.verifyRedirectToSendResetpassword();
    AuthPage.getForgotPasswordTitle();
  });

  it("Send Reset Password with empty username", function () {
    AuthPage.visit();
    cy.wait("@pageLoad", 50000);
    cy.formForgotPassword("");
    AuthPage.getInputGroupMessage();
  });

  it("User logout", function () {
    AuthPage.visit();
    cy.wait("@pageLoad", 50000);
    cy.interceptActionSummary();
    cy.interceptShortcuts();
    cy.interceptFeeds();
    cy.interceptLeaves();
    cy.interceptSubunit();
    cy.interceptLocations();
    cy.interceptLocations();
    cy.formLogin(this.data.username, this.data.password);
    cy.wait("@actionSummary", 50000);
    cy.wait("@shortcuts", 50000);
    cy.wait("@feeds", 50000);
    cy.wait("@leaves", 50000);
    cy.wait("@subunit", 50000);
    cy.wait("@locations", 50000);
    AuthPage.verifyRedirectToDashboard();
    AuthPage.getDropdown();
    AuthPage.getLogoutLink();
    AuthPage.clickLogout();
    AuthPage.verifyRedirectToLogin();
  });
});

describe.only("Dashboard Feature", () => {
  beforeEach(function () {
    cy.fixture("auth_data").as("data");
    cy.fixture("directory_data").as("formData");
    cy.interceptLoginPageLoad();
  });

  it("Filter search by name, job title, and location", function () {
    AuthPage.visit();
    cy.wait("@pageLoad", 50000);
    cy.formLogin(this.data.username, this.data.password);
    DirectoryPage.verifyRedirectToDashboard();
    cy.interceptEmployess();
    DirectoryPage.visit();
    cy.wait("@employees", 50000);
    DirectoryPage.inputEmployeeName(this.formData.firstName);
    DirectoryPage.dropdownEmployee(this.formData.firstName);
    DirectoryPage.selectDropdownOption(0, this.formData.job_title);
    DirectoryPage.selectDropdownOption(1, this.formData.location);
    DirectoryPage.getSearchButton().click();
    DirectoryPage.getRecordFoundText(1);
    DirectoryPage.getCardUser();
    DirectoryPage.verifyUserName(this.formData.firstName);
    DirectoryPage.verifyUserJob(this.formData.job_title);
    DirectoryPage.verifyUserLoc(this.formData.location);
  });

  it("Filter search with invalid and show toast", function () {
    AuthPage.visit();
    cy.wait("@pageLoad", 50000);
    cy.formLogin(this.data.username, this.data.password);
    DirectoryPage.verifyRedirectToDashboard();
    cy.interceptEmployess();
    DirectoryPage.visit();
    cy.wait("@employees", 50000);
    DirectoryPage.inputEmployeeName(this.formData.firstName);
    DirectoryPage.dropdownEmployee(this.formData.firstName);
    DirectoryPage.selectDropdownOption(0, "Account Assistant");
    DirectoryPage.getSearchButton().click();
    DirectoryPage.verifyToastMessage();
  });

  it("Filter search with invalid name", function () {
    AuthPage.visit();
    cy.wait("@pageLoad", 50000);
    cy.formLogin(this.data.username, this.data.password);
    DirectoryPage.verifyRedirectToDashboard();
    cy.interceptEmployess();
    DirectoryPage.visit();
    cy.wait("@employees", 50000);
    DirectoryPage.inputEmployeeName("invalid");
    DirectoryPage.getSearchButton().click();
    DirectoryPage.inputEmployeeNameInvalid();
  });

  it("Filter search with job title", function () {
    AuthPage.visit();
    cy.wait("@pageLoad", 50000);
    cy.formLogin(this.data.username, this.data.password);
    DirectoryPage.verifyRedirectToDashboard();
    cy.interceptEmployess();
    DirectoryPage.visit();
    cy.wait("@employees", 50000);
    DirectoryPage.selectDropdownOption(0, this.formData.job_title);
    DirectoryPage.getSearchButton().click();
  });

  it("Filter search with location", function () {
    AuthPage.visit();
    cy.wait("@pageLoad", 50000);
    cy.formLogin(this.data.username, this.data.password);
    DirectoryPage.verifyRedirectToDashboard();
    cy.interceptEmployess();
    DirectoryPage.visit();
    cy.wait("@employees", 50000);
    DirectoryPage.selectDropdownOption(1, this.formData.location);
    DirectoryPage.getSearchButton().click();
  });
});
