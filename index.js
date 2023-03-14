// Write your solution in this file!
const employee = {
    name: "Sam"
}


function updateEmployeeWithKeyAndValue(employee, name, value) {
    const newEmployee = { ...employee };
    newEmployee[name] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value) {
    employee[name] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { employee };
    employee[key] = `Sam`;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}