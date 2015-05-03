describe("UserProviderSpec", function () {
    var service, truncate;

    // lade das Module, welches den Service beinhaltet
    beforeEach(module("testModule"));

    beforeEach(function () {
        module(function ($provide) {
            truncate = jasmine.createSpy('truncate');
            $provide.value("truncate", truncate);
        });

        inject(function ($injector) {
            service = $injector.get("UserService");
        });
    });

    describe("Creating the object", function () {
        it("should keep the default name 'Max'", function () {
            var object;
            object = service.createObject()
            expect(object.name).toBe("Max");
        });

        it("should set the url", function () {
            var object;
            service.setUrl('some-url');
            object = service.createObject()
            expect(object.url).toBe("some-url");
        });

        it ("should call truncate filter", function () {
            service.setDescription("Longer text then 10 chars long.");
            expect(truncate).toHaveBeenCalled();
        });
    });

});
