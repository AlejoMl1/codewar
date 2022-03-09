const numeralMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  
  function solution(roman){
    const arrNums = roman.split('').map((el) => numeralMap[el]);
    return arrNums.reduce((sum, cur, i, a) => {
      if (cur < a[i+1]) return sum - cur;
      return sum + cur;
    }, 0)
  }

  solution('XXI')