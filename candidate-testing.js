
// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
const input = require('readline-sync');
let candidateName = input.question("What is your name? ");
let info1 = input.question("1) Who was the first American woman in space? ");
let info2 = input.question("2) True or false: 5000 meters = 5 kilometers.");
let info3 = input.question("3) (5 + 3)/2 * 10 = ?");
let info4 = input.question("4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?");
let info5 = input.question("5) What is the minimum crew size for the ISS?");
console.log("\n");
console.log("Candidate Name:"+ candidateName);
console.log("1) Who was the first American woman in space?");
let correctanswer1= "Sally Ride"
console.log("Your Annswer: " + info1);
console.log("Correct Answer: " + correctanswer1);
console.log("\n");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
console.log("2) True or false: 5000 meters = 5 kilometers.");
console.log("Your Annswer: " + info2);
let correctanswer2 = "True"
console.log("Correct Answer: " + correctanswer2);
console.log("\n");
console.log("3) (5 + 3)/2 * 10 = ?");
console.log("Your Annswer: " + info3);
let correctanswer3 = "40";
console.log("Correct Answer: "+ correctanswer3);
console.log("\n");
console.log("4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?");
console.log("Your Annswer: " + info4);
let correctanswer4 = "Trajectory";
console.log("Correct Answer: "+ correctanswer4);
console.log("\n");
console.log("5) What is the minimum crew size for the ISS?");
console.log("Your Annswer: " + info5);
let correctanswer5 = "3";
console.log("Correct Answer: "+ correctanswer5);
console.log("\n");
let n = 0
if (info1 === correctanswer1) {
  n = n+1;
};
if (info2 === correctanswer2) {
  n = n+1;
};
if (info3 === correctanswer3) {
  n= n+1;
};
if (info4 === correctanswer4) {
  n= n+1;
};
if (info5 === correctanswer5) {
  n= n+1;
};

let overallGrade = (n/5)*100
console.log(">>> Overall Grade: "+ overallGrade + "% " + '(' + n + ' of 5 responses correct) <<<');
if (overallGrade >= 80) {
  console.log(">>> Status: PASSED <<<");
}
  else if (overallGrade < 80) {
  console.log(">>> Status: FAILED <<<"); 
  }
