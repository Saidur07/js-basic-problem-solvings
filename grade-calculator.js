// Grade Calculator

function gradeCalc(marks) {
  if (marks <= 100 && marks >= 80) {
    let grade = "Congratulations!!! You got an A+";
    return grade;
  } else if (marks < 80 && marks >= 70) {
    let grade = "Congrats!! You got an A";
    return grade;
  } else if (marks < 70 && marks >= 60) {
    let grade = "Congo! You got an A-";
    return grade;
  } else if (marks < 60 && marks >= 50) {
    let grade = "You got a B";
    return grade;
  } else if (marks < 50 && marks >= 33) {
    let grade = "Lol, You passed!";
    return grade;
  } else if (marks < 33 && marks >= 0) {
    let grade = "OOps! You Failed!!";
    return grade;
  } else {
    let grade = "Please Enter a valid mark";
    return grade;
  }
}

var myMark = gradeCalc(85);
var hisMark = gradeCalc(55);
var herMark = gradeCalc(25);
console.log(myMark);
console.log(hisMark);
console.log(herMark);
