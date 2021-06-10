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
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    /**
     * @description Created Getter and Setter Method
     **/
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if (nameRegex.test(name)){
            this._name = name;
        } else {
            throw "Name is Incorrect";

        }
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
        const options = { year: "numeric", month: "long", day: "numeric" };
        const empDate = !this.startDate ? "undefined" :
                        this.startDate.toLocaleDateString("en-US",options);
        return "id = " +this.id+ ", name = " +this.name+ ", salary = " +this.salary+ 
                         ", gender = " +this.gender+ ", Start Date = " +empDate;
    }
}

/**
 * @description Calling the methods
 **/
let employeePayrollData = new EmployeePayrollData(1,"Mark",300000);
console.log(employeePayrollData.toString());

try {
    employeePayrollData.name = "john";
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}

let newEmployeePayrollData = new EmployeePayrollData(1,"Terrisa", 500000, "F",new Date());
console.log(newEmployeePayrollData.toString());