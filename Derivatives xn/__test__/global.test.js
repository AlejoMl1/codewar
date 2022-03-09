const differentiate =require('../index')



test('"3x^2" debe dar "6x"', function() {
    expect(differentiate('3x^2')).toBe('6x');
});

test('"-5x^3" debe dar "-15x^2"', function() {
    expect(differentiate('-5x^3')).toBe('-15x^2');
});

test('"6x^-2" debe dar "-12"', function() {
    expect(differentiate('6x^-2')).toBe('-12x^-3');
});

test('"-1x^0" debe dar "-1"', function() {
    expect(differentiate('-1x^0')).toBe('-1');
});

test('"8" debe dar "0"', function() {
    expect(differentiate('8')).toBe('0');
});

test('6x debe dar 6', function() {
    expect(differentiate('6x')).toBe('6');
});

test('x^2 debe dar 2x', function() {
    expect(differentiate('x^2')).toBe('2x');
});

test('x debe dar 1', function() {
    expect(differentiate('x')).toBe('1');
});

test('-x debe dar -1', function() {
    expect(differentiate('-x')).toBe('-1');
});

test('-x^2 debe dar -2x', function() {
    expect(differentiate('-x^2')).toBe('-2x');
});

test('-x^-2 debe dar 2x^-3', function() {
    expect(differentiate('-x^-2')).toBe('2x^-3');
});

test('x^-1 debe dar -x^-2', function() {
    expect(differentiate('x^-1')).toBe('-x^-2');
});

test('x^-10 debe dar -10x^-11', function() {
    expect(differentiate('x^-10')).toBe('-10x^-11');
});



// "3x^2"  => "6x"
// "-5x^3" => "-15x^2"
// "6x^-2" => "-12x^-3"
// "5x"    => "5"
// "-x"    => "-1"
// "42"    => "0"








































