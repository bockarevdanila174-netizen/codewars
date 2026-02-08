
// 2 test Return Negative

// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12


// В этом простом задании вам дано число, и вы должны сделать его отрицательным. Но может быть, это число уже отрицательное?





function makeNegative(num) {
    return num === 0 ? 0 : -Math.abs(num);
  // Code?
}



console.log(makeNegative(3))