describe("Test example", function () {
    var example = {};

    beforeEach(function () {
        example = new ExampleService();
    });
    it("should add 0 and 5 to 5", function () {
        expect(example.add(0, 5)).toBe(5);
    });

    it("should add 5 and 0 to 5", function () {
        expect(example.add(5, 0)).toBe(5);
    });

    it("should add 5 and 5 to 10", function () {
        expect(example.add(5, 5)).toBe(10);
    });

});
