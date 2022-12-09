const dailyManufacture = [
  {name: "pesek zman", type: "chocolate", value: 5000},
  {name: "mekupelet", type: "chocolate", value: 650},
  {name: "tofee", type: "candy", value: 10},
  {name: "cookie", type: "choolate chip", value: 1200},
  {name: "taami", type: "chocolate", value: 77}
]

//total value of the chocolate manufactured per day

let dailyTotal = dailyManufacture.filter(item => item.type === "chocolate").map
(item => item.value).reduce((total, value) => total + value);

/* your code here
let dailyTotal =  ?
*/

console.log(dailyTotal);