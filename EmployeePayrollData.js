/**
 * @description Created Class for Employee PayRoll Data
 **/
class EmployeePayrollData {
    //Property
    gender;
    startDate;

    /**
     * @description Create Constructor for Initializing the Properties
     **/
    constructor(id,name,salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    /**
     * @description Created Getter and Setter Method
     **/
    get name() {
        return this._name;
    }
    set name(name) {
        console.log("Setting Name : " +name);
        this._name = name;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }

    //method
    toString() {
        return "id = " +this.id+ ", name = " +this.name+ ", salary = " +this.salary;
    }
}

/**
 * @description Calling the methods
 **/
let employeePayrollData = new EmployeePayrollData(1,"Mark",300000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "John";
employeePayrollData.id = 2;
employeePayrollData.salary = 400000;
console.log(employeePayrollData.toString());