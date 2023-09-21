// EXERCISE 1
// Let us say your expense for every month are listed below,
// January - 2200
// February - 2350
// March - 2600
// April - 2130
// May - 2190
// Create a list to store these monthly expenses and using that find out,
const monthlyExpenses = [2200, 2350, 2600, 2130, 2190];

// 1. In Feb, how many dollars you spent extra compare to January?
console.log(`In February, ${monthlyExpenses[1] - monthlyExpenses[0]} dollars was spent extra compared to January`);
// 2. Find out your total expense in first quarter (first three months) of the year.
console.log(`The total expense in first quarter (first three months) of the year is, ${monthlyExpenses[0] + monthlyExpenses[1] + monthlyExpenses[2]} dollars`);
// 3. Find out if you spent exactly 2000 dollars in any month
console.log(`Did I spend exactly 2000 dollars in any month? ${monthlyExpenses.includes(2000)} `);
// 4. June month just finished and your expense is 1980 dollar. Add this item to our monthly expense list
monthlyExpenses.push(1980);
console.log(`Adding June expense, the expense list becomes: ${monthlyExpenses} `);
// 5. You returned an item that you bought in a month of April and got a refund of 200$.
monthlyExpenses[3] = monthlyExpenses[3] - 200;
// Make a correction to your monthly expense list based on this
console.log(`After returning an item that I bought in a month of April and got a refund of 200$, the expense list becomes: ${monthlyExpenses} `);