console.log("Welcome To EmployeeWage Program");

/**
 * @description //UC1: To Check Employee is Absent or Presnt
 * param: Here empCheck Generates Random Value 0 Or 1
 *        if 0 - Employee Absent,  1 - Employee Presnt
 **/
 const IS_ABSENT = 0
 let empCheck = Math.floor(Math.random() * 10) % 2;
 if (empCheck == IS_ABSENT) {
     console.log("Employee is Absent");
 } else {
     console.log("Employee is Present");
 }

 /**
 * @description UC2: To Calculate Daily Employee Wage Based on Part_Time or Full_Time Work
 * param: Here empCheck Generates random values 0, 1 or 2
 *        if 0 Employee Absent, 1 Employee Part_Time, 2 Employee Full_Time  
 **/
  const IS_PART_TIME = 1;
  const IS_FULL_TIME = 2;
  const PART_TIME_HOURS = 4;
  const FULL_TIME_HOURS = 8;
  const WAGE_PER_HOUR = 20;
  
  let empHrs = 0;
  empCheck = Math.floor(Math.random() * 10) % 3;
  switch (empCheck) {
      case IS_PART_TIME: 
              empHrs = PART_TIME_HOURS;
              break;
      case IS_FULL_TIME:
              empHrs = FULL_TIME_HOURS;
              break;
      default:
              empHrs = 0;                
  }
  
  let empWage = empHrs * WAGE_PER_HOUR; 
  console.log("Employee Wage: " +empWage);