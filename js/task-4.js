function getShippingCost(country) {
  let prise;
  let result;

  switch (country) {
    case "Australia":
      prise = 170;
      result = `Shipping to ${country} will cost ${prise} credits`;
      break;
    case "China":
      prise = 100;
      result = `Shipping to ${country} will cost ${prise} credits`;
      break;
    case "Chile":
      prise = 250;
      result = `Shipping to ${country} will cost ${prise} credits`;
      break;
    case "Jamaica":
      prise = 120;
      result = `Shipping to ${country} will cost ${prise} credits`;
      break;

    default:
      result = `Sorry, there is no delivery to your country`;
      break;
  }
  return result;
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
