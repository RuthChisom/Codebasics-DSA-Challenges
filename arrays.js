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


// EXERCISE 2
// You have a list of your favourite marvel super heros.
heros=['spider man','thor','hulk','iron man','captain america'];
// Using this find out,
// 1. Length of the list
console.log(`The length of the list is: ${heros.length} `);
// 2. Add 'black panther' at the end of this list
heros.push('black panther ');
console.log(`Adding black panther at the end of this list, it becomes: ${heros} `);
// 3. You realize that you need to add 'black panther' after 'hulk', so remove it from the list first and then add it after 'hulk'
heros.pop(); //removes the last element
heros.splice(3,0,'black panther') //goes to element 3, removes 0 elements and adds black panther to that position
console.log(`Removing black panther and adding it after hulk, the list becomes: ${heros} `);
// 4. Now you don't like thor and hulk because they get angry easily. So you want to remove thor and hulk from list and replace them with doctor strange (because he is cool).
//    Do that with one line of code.
heros.splice(1,2,'doctor strange') //goes to element 1, removes 2 elements and adds doctor strange to that position
console.log(`Replacing thor and hulk with doctor strange, the list becomes: ${heros} `);
// 5. Sort the heros list in alphabetical order (Hint. Use dir() functions to list down all functions available in list)
heros.sort();
console.log(`Sorting the heros list in alphabetical order, it becomes: ${heros} `);
heros.reverse();
console.log(`Sorting the heros list in reverse alphabetical order, it becomes: ${heros} `);
// Note that you have to use sort, before reverse, to get the correct order