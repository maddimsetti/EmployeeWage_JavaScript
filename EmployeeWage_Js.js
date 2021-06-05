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