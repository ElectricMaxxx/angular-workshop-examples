var View = function () {
    this.showButton = element(by.buttonText('Show'));
    this.hiddenDiv = element(by.css("div.hidden"));
};

describe("IndexSpec", function () {
    var view;
    beforeEach(function () {
        view = new View();
        browser.get("step_12_e2e/")
    });

    it("Should be visible when clicking the button", function () {
        expect(view.showButton.isDisplayed).toBeTruthy();
    });

    it("should display the hidden field, when clicking the button", function () {
        view.showButton.click();
        expect(view.hiddenDiv.isDisplayed).toBeTruthy();
    })
});
