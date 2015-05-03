describe("TruncateFilter", function () {
    var $filter, filter;

    beforeEach(module("testModule"));

    beforeEach(inject(function (_$filter_) {
        $filter = _$filter_;
    }));

    beforeEach(function () {
        filter = $filter("truncate");
    });

    describe("No length parameter", function () {
        it("should keep text for length equal to 4", function () {
            expect(filter("xxxx").length).toBe(4);
        });

        it("should keep text for length less than 4", function () {
            expect(filter("xxx").length).toBe(3);
        });

        it("should truncate text to 4 chars for length greather than 4", function () {
            expect(filter("xxxxxxxx").length).toBe(4);
        });
    });

    describe("Length parameter given", function () {
        it("should keep text for length equal to 6", function () {
            expect(filter("xxxxxx", 6).length).toBe(6);
        });

        it("should keep text for length less than 6", function () {
            expect(filter("xxx", 6).length).toBe(3);
        });

        it("should truncate text to 6 chars for length greather than 6", function () {
            expect(filter("xxxxxxxx", 6).length).toBe(6);
        });
    });
});
