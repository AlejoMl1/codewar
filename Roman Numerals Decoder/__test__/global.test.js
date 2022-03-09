const solution =require('../index')

test('XXI debe dar 21', function() {
    expect(solution('XXI')).toBe(21);
});

test('IV debe dar 4', function() {
    expect(solution('IV')).toBe(4);
});

test('I debe dar 1', function() {
    expect(solution('I')).toBe(1);
});


test('MCMXC debe dar 1990', function() {
    expect(solution('MCMXC')).toBe(1990);
});

test('MMVIII debe dar 2008', function() {
    expect(solution('MMVIII')).toBe(2008);
});


