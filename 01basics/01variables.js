const accountId = 2847;
let accountEmail = "mansi@google.com";
var accountPassword = "1387";
accountCity = "Bareilly"; /*it reserves var memory without even mentioning var, but it's not a good way of doing things */

let accountState /* here output is undefined bcz memory is saved but there's nothing inside it */

// accountId = 2 // not allowed

accountEmail = "mg@mg.com";
accountPassword = "128e6";
accountCity = "Bengalure";

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]);

/*
Prefer not to use var
bcz of issue in Block scope and functional scope
instead use let
*/ 