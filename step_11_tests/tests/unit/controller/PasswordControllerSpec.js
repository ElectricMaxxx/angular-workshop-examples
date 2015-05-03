describe("PasswordControllerSpec", function () {
    var $controller,
        controller = {}, scope = {};


    beforeEach(module("testModule"));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_; // service, der die Controller instanziert
    }));

    beforeEach(function () {
        controller = $controller("PasswordController", {$scope: scope});
    });


    describe("Grade a password", function () {


        it ("should set grade to strong for passwords longer then 8 chars", function () {
            controller.password = 'longpassword';
            controller.grade();
            expect(controller.strength).toBe('strong');
        });

        it("should set grad to middle for passwords with length equal to 4", function () {
            controller.password = 'xxxx';
            controller.grade();
            expect(controller.strength).toBe('middle');
        });

        it("should set grade to middle for passwords with length equal to 8", function () {
            controller.password = 'xxxxxxxx';
            controller.grade();
            expect(controller.strength).toBe('middle');
        });

        it("should set grade to weak for passwords with length less than 4", function () {
            controller.password = 'xxx';
            controller.grade();
            expect(controller.strength).toBe('weak');
        });
    });
});
