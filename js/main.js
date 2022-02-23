var ticket = `${500 * 9433.34} so'm`;
var hotel = `${250 * 9433.34} so'm`;
var travel = `${120 * 10354.03} so'm`;
var userName = prompt("iltimos ismingizni kiriting");
var country = prompt(`${userName} qaysi davlatga sayohat qilmoqchisiz?`);
var userMoney = prompt(`${userName} sayohat uchun pulingizni kiriting`);

var result = 500 * 9433.34 + 250 * 9433.34 + 120 * 10354.03;
var mustMoney = result - userMoney;

if (userMoney >= result) {
  console.log(`Oq Yo'l ${userName} Sayohatingiz maroqli o'tsin.`);
} else {
  console.log(`Afsus ${userName}, Yana ${mustMoney} so'm pul to'plang.`);
}
