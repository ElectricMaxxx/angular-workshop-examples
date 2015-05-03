describe("obiDirective", function () {
    var $compile,
        $rootScope,
        element;

    // lade das Modul, welches die directive enthält
    beforeEach(module("testModule"));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    beforeEach(function () {

        // compiliere das Element und feuere alle Watcher
        element = $compile("<obi-directive></obi-directive>")($rootScope);
        $rootScope.$digest();
    });

    it("should contain the html element", function () {
        expect(element.html()).toContain("Test a directive");
    });
});
