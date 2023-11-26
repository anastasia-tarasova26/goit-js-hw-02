const banWord1 = "spam";
const banWord2 = "sale";

const message1 = "Latest technology news"; // false
const message2 = "JavaScript weekly newsletter"; // false
const message3 = "Get best sale offers now!"; // true
const message4 = "Amazing SalE, only tonight!"; // true
const message5 = "Trust me, this is not a spam message"; // true
const message6 = "Get rid of sPaM emails. Our book in on sale!"; // true
const message7 = "[SPAM] How to earn fast money?"; // true

function checkForSpam(message) {
  const hasSpam1 = message.toLowerCase().includes(banWord1);
  const hasSpam2 = message.toLowerCase().includes(banWord2);

  console.log(hasSpam1);
  console.log(hasSpam2);
}

checkForSpam(message1);
checkForSpam(message2);
checkForSpam(message3);
checkForSpam(message4);
checkForSpam(message5);
checkForSpam(message6);
checkForSpam(message7);
