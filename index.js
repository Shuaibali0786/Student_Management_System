import inquirer from "inquirer";
class student {
    static counter = 10000;
    id;
    name;
    courses;
    balance;
    constructor(name) {
        this.id = student.counter++;
        this.name = name;
        this.courses = []; // Initialize an empty array for courses 
        this.balance = 100;
    }
    // Mehthod to enrol a student in a course tabanin test |explain|document|ask
    enroll_course(course) {
        this.courses.push(course);
    }
    // Method to view a student balance tabanine: test |explain |document|ask 
    view_balance() {
        console.log(`balance for ${this.name} : ${this.balance}`);
    }
    // Method to pay student fees tabnine:test|explain|document|ask
    pay_fees(amount) {
        this.balance -= amount;
        console.log(`${amount} Fees paid successfully for ${this.name}`);
    }
    // Method to display student status tabnine: test|explain|document|ask
    show_status() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Courses: ${this.courses}`);
        console.log(`Balance: ${this.balance}`);
    }
}
// Deffine a Student_Manager class to manage students
class Student_Manager {
    students;
    constructor() {
        this.students = [];
    }
    // Method to add a new Student tabnine: test|explain|document|ask
    add_student(name) {
        let Student = new student(name);
        this.students.push(Student);
        console.log(`student: ${name} add successfully, Student ID: ${Student.id}`);
    }
    // Method to enroll a student, in a course
    enroll_student(student_id, course) {
        let student = this.students.find(std => std.id === student_id);
        if (student) {
            student.enroll_course(course);
            console.log(`${student.name} enrolled in ${course} successfully`);
        }
    }
    // Method to view a student balance tabnine:test |explain |document|ask
    view_student_balance(student_id) {
        let student = this.find_student(student_id);
        if (student) {
            student.view_balance();
        }
        else {
            console.log("Student not found. please enter a correct student ID");
        }
    }
    // Method to pay student fees
    pay_student_fees(student_id, amount) {
        let student = this.find_student(student_id);
        if (student) {
            student.pay_fees(amount);
        }
        else {
            console.log("student not dound. please enter a correct student ID");
        }
    }
    // Method to display student stattus tabnine: test|explain|docoument|ask
    show_student_status(student_id) {
        let student = this.find_student(student_id);
        if (student) {
            student.show_status();
        }
    }
    // Mehtod to find a student by student_id tabnine: test\explain|document|ask
    find_student(student_id) {
        return this.students.find(std => std.id === student_id);
    }
}
// Main Function to run programe
async function Main() {
    console.log("Welcome to 'Shuaib' - Student Managment System");
    console.log("_".repeat(50));
    let student_manager = new Student_Manager();
    // while loop to  keep progam runing
    while (true) {
        let choice = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "select an option",
                choices: [
                    "Add Student",
                    "Enroll Student",
                    "View Student Balance",
                    "Pay Fees",
                    "Show Status",
                    "Exit"
                ]
            }
        ]);
        // Using Switch case to handle user choice
        switch (choice.choice) {
            case "Add Student":
                let name_input = await inquirer.prompt([
                    {
                        name: "name",
                        type: "input",
                        message: "Enter a Student Name",
                    }
                ]);
                student_manager.add_student(name_input.name);
                break;
            case "Enroll Student":
                let course_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a Student ID",
                    },
                    {
                        name: "cource",
                        type: "input",
                        message: "Enter a Cource Name",
                    }
                ]);
                student_manager.enroll_student(course_input.student_id, course_input.course);
                break;
            case "View Student Balance":
                let balance_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a Student Id",
                    }
                ]);
                student_manager.view_student_balance(balance_input.student_id);
                break;
            case "Pay Fees":
                let fees_input = await inquirer.prompt([
                    {
                        name: "amount",
                        type: "number",
                        message: "Enter the amount to pay",
                    }
                ]);
                student_manager.pay_student_fees(fees_input.student_id, fees_input.amount);
                break;
            case "Show status":
                let stattus_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a Student ID"
                    }
                ]);
                student_manager.show_student_status(stattus_input.student_id);
                break;
            case "Exit":
                console.log("Exiting...");
        }
    }
}
// Calling a main function 
Main();
