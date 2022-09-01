// function calculateMonthlyPayment(values) {
//   const monthlyRate = (values.rate/100/12);
//   const n = Math.floor(values.years * 12);
//   return (
//     (monthlyRate * values.amount)/(1 - Math.pow((1 + monthlyRate), -n))
//     ).toFixed(2);
// }


it('should calculate the monthly rate correctly', function () {
  const values =  {
    amount: 200000, 
    years: 15, 
    rate: 6.0
  };
  expect(calculateMonthlyPayment(values)).toEqual('1687.71');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 200000, 
    years:30, 
    rate:7.2
  };
  expect(calculateMonthlyPayment(values)).toEqual('1357.58');
});

it("should calculate the monthly payment of a loan amount of zero correctly", function () {
  const values = {
    amount: 0, 
    years: 10, 
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('0.00');
});

it("should calculate the monthly payment of a loan with a ridiculously high interest rate", function () {
  const values = {
    amount: 250000, 
    years: 20, 
    rate: 99.99 
  };
  expect(calculateMonthlyPayment(values)).toEqual('20831.25');
})
/// etc
