const { repair, succeed } = require('./enhancer.js');

describe('enhancer.js', () => {
  
  it('should run tests without errors', () => {
    expect(true).toBe(true);
  })

  it('should return an object', () => {
    expect(repair({"durability": 1 })).toEqual({ "durability": 100 });
  })

  it('should return size=5', () => {
    expect(succeed({"size": 1}, 5)).toEqual({ "size": 5});
  })

  

})