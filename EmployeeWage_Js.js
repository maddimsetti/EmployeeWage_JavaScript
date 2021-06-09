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
let empDailyHrsAndWageArr = new Array();
while(totalEmpHrs < MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);  //Calling the Function
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push(  
    {
        dayNum:totalWorkingDays,
        dailyHours:empHrs,
        dailyWage:calcDailyWage(empHrs),
        toString() {
            return "\nDay" + this.dayNum + " => Working Hours is " + this.dailyHours + " And Wage Earned = " +this.dailyWage
        },
    });
}

//UC10 - Objects
console.log("Showing Daily Hours and Wage Earned = " +empDailyHrsAndWageArr);