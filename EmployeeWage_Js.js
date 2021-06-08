console.log("Welcome To EmployeeWage Program");

/**
 * @description //UC6: Store the Daily Wage along with the Total Wage
 * param: Here empCheck Generates Random Value 0 Or 1 Or 2
 *        if 0 - Employee Absent,  1 - Employee Part_Time, 2 - Employee Full_Time
 **/
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 100;

function getWorkingHours(empCheck) {
   switch (empCheck) {
       case IS_PART_TIME:
           return empHrs = PART_TIME_HOURS;
       case IS_FULL_TIME:
           return empHrs = FULL_TIME_HOURS;
       default:
           return empHrs = 0;                
   }
}

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}
  
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array; //Define Array of Dailywage
let empDailyWageMap = new Map(); //Define the Map function

while(totalEmpHrs < MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);  //Calling the Function
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs)); //calling the function
    empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs));
}

let empWage = calcDailyWage(totalEmpHrs); 
console.log("UC6 - Total Days: " +totalWorkingDays+ " Total Hours: " +totalEmpHrs+ " Employee Wage: " +empWage);

/**
 * @description UC7: Use the DailyWage Array Perform the Operations using Array Helper Functions
 **/
//UC7A - calculate totalWage using Array for Each traversal or reduce method
let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days : " +totalWorkingDays+ " Total Hours : " +totalEmpHrs+ " Emp Wage : " +totEmpWage);

function totalWages(totalWage,dailyWage) {
    return totalWage += dailyWage;
}
console.log("UC7A - Emp Wage with reduce : " +empDailyWageArr.reduce(totalWages,0));

//UC7B - Show the Day along with DailyWage Using Array map Helper function
let dailyCounter = 0;
function mapDayWithWage(dailyWage) {
    dailyCounter++;
    return dailyCounter + " = " +dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

//UC7C - Show Days when Full time Wage of 160 Earned
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7C - Daily Wage Filter When FullTime Wage Earned");
console.log(fullDayWageArr);

//UC7D - Find the first Occurence when full time Wage was earned Using find function
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7D - First Fulltime Wage Was Earned on Day : " +mapDayWithWageArr.find(findFullTimeWage));

//UC7E - Check if Every Element of full Time wage is truely holding Full Time wage
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 7E - Check All Element Have Full Time Wage : " +fullDayWageArr.every(isAllFullTimeWage));

//UC7F - Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC 7F - Check If Any Part Time Wage : " +mapDayWithWageArr.some(isAnyPartTimeWage));

//UC7G - Find the Number of Days the Employee Worked
function totalDaysWorked(numOfDays,dailyWage) {
    if(dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("UC 7G - Number of Days Employee Worked : " +empDailyWageArr.reduce(totalDaysWorked,0));

//UC8 - Map Functions
console.log("UC 8 - Employee Map totalHrs : " +Array.from(empDailyWageMap.values()).reduce(totalWages,0));