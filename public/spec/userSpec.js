describe('user', function() {
  it('has username, email and password attributes', function() {
    user = new User('user1', 'user1@mail.com', 'password123');
    expect(user.username).toEqual('user1');
    expect(user.email).toEqual('user1@mail.com');
    expect(user.password).toEqual('password123')
  })
})
