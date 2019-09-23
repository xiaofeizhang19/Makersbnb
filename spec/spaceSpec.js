'use strict';

describe('Space', function() {
  var space;

  beforeEach(function() {
    space = new Space('House 1');
  });

  it('saves name of a space', function() {
    expect(space.name).toEqual('House 1');
  })

});