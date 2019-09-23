'use strict';

describe('Space', function() {
  var space;

  beforeEach(function() {
    space = new Space('House 1', '2 Bed Flat', 200, 4);
  });

  it('saves name of a space', function() {
    expect(space.name).toEqual('House 1');
  })


  it('shows the description', function() {
    expect(space.description).toEqual('2 Bed Flat');
  })

  it('shows the price', function() {
    expect(space.price).toEqual(200);
  })

  it('shows the capacity', function() {
    expect(space.capacity).toEqual(4);
  })




});
