// 1
let user = {
    name: "John",
    years: 30
};
  
let {name, years: age, isAdmin = false} = user;

// 2
function topSalary(salaries) {
    let max = 0;
    let top = null;
  
    for (const [name, salary] of Object.entries(salaries)) {
      if (max < salary) {
        max = salary;
        top = name;
      }
    }
  
    return top;
}