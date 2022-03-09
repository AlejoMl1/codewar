//this one seems interesting but there was not a bestpractice
function differentiate(f) {
    let [base, power] = f.split('^');
    if (base == '-x') base = '-1x';
    if (base == 'x') base = '1x';
    if (power) {
     base = (parseInt(base) * +power).toString()+'x';
     power--;
     } else {
       if (!base.includes('x')) return 0;
  
       return parseInt(base);
     }
    if (base == '-1x') base = '-x';
    if (base == '1x') base = 'x';
  
    if (power == 1) return base.toString();
    return base.toString() +'^'+power.toString();
  }