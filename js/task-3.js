const banWord1 = spam;
const banWord2 = sale;

const sentens1 = "Latest technology news"; // false
const sentens2 = "JavaScript weekly newsletter"; // false
const sentens3 = "Get best sale offers now!"; // true
const sentens4 = "Amazing SalE, only tonight!"; // true
const sentens5 = "Trust me, this is not a spam message"; // true
const sentens6 = "Get rid of sPaM emails. Our book in on sale!"; // true
const sentens7 = "[SPAM] How to earn fast money?"; // true

function checkForSpam(message) {
  console.log(checkForSpam("Latest technology news")); // false
  console.log(checkForSpam("JavaScript weekly newsletter")); // false
  console.log(checkForSpam("Get best sale offers now!")); // true
  console.log(checkForSpam("Amazing SalE, only tonight!")); // true
  console.log(checkForSpam("Trust me, this is not a spam message")); // true
  console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
  console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
}
