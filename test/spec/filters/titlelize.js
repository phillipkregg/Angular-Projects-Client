'use strict';

describe('Filter: titlelize', function () {

  // load the filter's module
  beforeEach(module('projectStandaloneApp'));

  // initialize a new instance of the filter before each test
  var titlelize;
  beforeEach(inject(function ($filter) {
    titlelize = $filter('titlelize');
  }));

  it('should return the input prefixed with "titlelize filter:"', function () {
    var text = 'angularjs';
    expect(titlelize(text)).toBe('titlelize filter: ' + text);
  });

});
