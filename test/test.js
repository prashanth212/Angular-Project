'use strict';

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();


beforeEach(module('yashCRM'));

describe('LoginCtrl()', function () {
    it('should have a hello message', inject(function ($controller) {
        var scope = {};
        var myController = $controller('LoginCtrl', {
            $scope: scope
        });
        scope.message.should.equal('hello');
    }));
});
describe('value is true', function () {
    it('should have the same title', inject(function ($controller) {
        var scope = {};
        var myController = $controller('LoginCtrl', {
            $scope: scope
        });
        scope.title.should.equal('Welcome to Login Screen');
    }));
});

describe('Main Page', function () {
    it('should load the main page.', inject(function ($state) {
        var state = $state.get('main');
        assert.isDefined(state.templateUrl);
        expect(state.templateUrl).to.equal('main/main.tmpl.html');
    }));
});
