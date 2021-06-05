console.log("Welcome To EmployeeWage Program");

/**
 * @description //UC3: Calculating wages for a Month assuming 20 Working Days in a Month
 * param: Here empCheck Generates Random Value 0 Or 1 Or 2
 *        if 0 - Employee Absent,  1 - Employee Part_Time, 2 - Employee Full_Time
 **/
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

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
  
let totalEmpHrs = 0;
for(let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);  //Calling the Function

}
let empWage = totalEmpHrs * WAGE_PER_HOUR; 
console.log("Hours: " +totalEmpHrs+ " Employee Wage: " +empWage);