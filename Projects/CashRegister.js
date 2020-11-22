/*
    Solution Written by Kyle Halek.

    JavaScript Algorithms and Data Structures Projects: Cash Register

    Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

    cid is a 2D array listing available currency.

    The checkCashRegister() function should always return an object with a status key and a change key.

    Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

    Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

    Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

    Currency Unit	Amount
    Penny	$0.01 (PENNY)
    Nickel	$0.05 (NICKEL)
    Dime	$0.1 (DIME)
    Quarter	$0.25 (QUARTER)
    Dollar	$1 (ONE)
    Five Dollars	$5 (FIVE)
    Ten Dollars	$10 (TEN)
    Twenty Dollars	$20 (TWENTY)
    One-hundred Dollars	$100 (ONE HUNDRED)
    See below for an example of a cash-in-drawer array:

    [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100]
    ]
    */

function checkCashRegister(price, cash, cid) {
  const lookups = [
    { name: "ONE HUNDRED", val: 100.0 },
    { name: "TWENTY", val: 20.0 },
    { name: "TEN", val: 10.0 },
    { name: "FIVE", val: 5.0 },
    { name: "ONE", val: 1.0 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 },
  ];

  var output = { status: null, change: [] };
  var change = cash - price;

  // Create register object from cid.
  var register = cid.reduce(
    (cash, context) => {
      cash.total += context[1];
      cash[context[0]] = context[1];
      return cash;
    },
    { total: 0 }
  );

  // Change is same as register total.
  if (register.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }

  // Not enough money for change.
  if (register.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // Calculate money
  var money = lookups.reduce((cash, context) => {
    var value = 0;

    while (register[context.name] > 0 && change >= context.val) {
      change -= context.val;
      register[context.name] -= context.val;
      value += context.val;
      change = Math.round(change * 100) / 100; // 1/100ths
    }

    if (value > 0) cash.push([context.name, value]);

    return cash;
  }, []);

  if (money.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // return change.
  output.status = "OPEN";
  output.change = money;
  return output;
}

// should return an object.
checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

// should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

// should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

// should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

// should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
