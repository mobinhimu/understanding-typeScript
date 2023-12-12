"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserInformation = (function () {
    function UserInformation(name, age, hobbies) {
        if (hobbies === void 0) { hobbies = []; }
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    UserInformation.prototype.addHobbies = function (hobbies) {
        var _a;
        console.log(hobbies);
        (_a = this.hobbies).push.apply(_a, hobbies);
    };
    UserInformation.prototype.showHobbies = function () {
        console.log(this.hobbies.length, this.hobbies, this.age);
    };
    UserInformation.myName = "Rayhan Uddin Mobin";
    return UserInformation;
}());
var ListOfGirlFriends = (function (_super) {
    __extends(ListOfGirlFriends, _super);
    function ListOfGirlFriends(girlsFriends) {
        if (girlsFriends === void 0) { girlsFriends = []; }
        var _this = _super.call(this, "Mobin", 19, []) || this;
        _this.girlsFriends = girlsFriends;
        _this.girlsFriends = girlsFriends;
        return _this;
    }
    Object.defineProperty(ListOfGirlFriends.prototype, "getFirstHobby", {
        get: function () {
            if (!this.hobbies.length)
                throw new Error("Please Write Your Hobby First");
            return this.hobbies[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListOfGirlFriends.prototype, "mostRecentHobbies", {
        set: function (hobbies) {
            if (!hobbies.length)
                throw new Error("Please Add Some Hobbies First");
            this.addHobbies(hobbies);
        },
        enumerable: false,
        configurable: true
    });
    ListOfGirlFriends.getInstance = function (girlsFriends) {
        if (ListOfGirlFriends.instance)
            return this.instance;
        return (this.instance = new ListOfGirlFriends(girlsFriends));
    };
    ListOfGirlFriends.prototype.showNameWithGreetings = function () {
        console.log("".concat(this.name, ", is a bad boy. cz im now ").concat(this.age));
    };
    ListOfGirlFriends.prototype.howManyGF = function () {
        var numberOfGf = this.girlsFriends.length;
        console.log("I Have ".concat(numberOfGf, " Girlfriend").concat(numberOfGf > 1 ? "s" : ""));
    };
    return ListOfGirlFriends;
}(UserInformation));
var mobin = ListOfGirlFriends.getInstance(["Sadia", "Sumiya", "Rabia"]);
var mobinx = ListOfGirlFriends.getInstance(["Rabia"]);
console.log(mobin, mobinx);
//# sourceMappingURL=classes.js.map