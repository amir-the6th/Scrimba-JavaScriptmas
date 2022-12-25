/* Totally Not Another FizzBuzz 

Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers! 

Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is: 

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!

Hint: Remainder operator, modulo 
 */
const numOfEmployees = 100;
let jacpotCount = 0,
    vacationCount = 0,
    bonusCount = 0,
    sadCount = 0;
let awardsArray = new Array(100);

function awardBonuses(){
    for(let empId = 1; empId <= numOfEmployees; empId++) {
        if(empId % 15 === 0) {
            awardsArray.push("JACKPOT! 1 Million and a Yacht!");
            jacpotCount++;
        }
        else if(empId % 3 === 0) {
            awardsArray.push("Vacation!");
            vacationCount++;
        }
        else if(empId % 5 === 0) {
            awardsArray.push("$100,000 bonus!");
            bonusCount++;
        }
        else {
            awardsArray.push(":(");
            sadCount++;
        }
    }
    
    const summary = 
        `
        | Summary:
        | -------
        | Number of Yacht Winners: ${jacpotCount}
        | ---
        | Number of Vacation Winners: ${vacationCount}
        | ---
        | Number of Bonus Winners: ${bonusCount}
        | ---
        | Number of sad faces we are going to see in the office: ${sadCount}
        | -------
        | Please note that for the safety of the winners,
          We cannot announce their names. But the happiest
          of congratulations from the now broke CEO of Scrimba.
        -------------------------------------------------------
        `;
    
    console.log(summary);
    
    for(let i in awardsArray) console.log(awardsArray[i]);
}

awardBonuses();