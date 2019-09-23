'use strict';

describe('Space', function() {
  var space;

  beforeEach(function() {
    space = new Space('House 1', '2 Bed Flat', 'Mr. Smith', 'Bond Street', 200, 4);
  });

  it('saves name of a space', function() {
    expect(space.name).toEqual('House 1');
  })

  it('saves property type', function() {
    expect(space.type).toEqual('2 Bed Flat');
  })

  it('shows owner name', function() {
    expect(space.owner).toEqual('Mr. Smith');
  })

  it('shows the location', function() {
    expect(space.location).toEqual('Bond Street');
  })

  it('shows the price', function() {
    expect(space.price).toEqual(200);
  })

  it('shows the capacity', function() {
    expect(space.capacity).toEqual(4);
  })




});
