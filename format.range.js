const data = `TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
TRUE
FALSE
TRUE
TRUE
TRUE
FALSE
TRUE
FALSE
TRUE
FALSE`;

const items = data.split("\n");

// create counts
const countResult = {}
const counts = items.map(item => {
    countResult[item] = (countResult[item] || 0) + 1;
})

const values = Object.keys(countResult)
const final = [];
values.map(v => final.push({ text: v, percentage: (Number(countResult[v]) / Number(items.length) * 100).toFixed(2) + "%" }))
console.log("Counts: ", final, countResult, items.length)

// // organise into ranges
// // 
// const ranges = [[0, 0], [1,10000], [10001,50000], [50001,100000], [100001,200000], [200001,500000]];
// function between(x, min, max) {
//     return x >= min && x <= max;
// }

// const countRange = {}
// const values = Object.keys(countResult)
// values.map(x => {
//     ranges.map(([min, max]) => {
//         // console.log(between(Number(x.replace(",", "")), min, max), Number(x.replace(",", "")), min, max)
//         if(between(Number(x.replace(",", "")), min, max)) {
//             countRange[`${min} - ${max}`] = (countRange[`${min} - ${max}`] || 0) + Number(countResult[x]);
//         }
//     })
// })

// // turn into percentages
// const finalData = []
// const countKeys = Object.keys(countRange)
// for (let index = 0; index < countKeys.length; index++) {
//     let count = countRange[countKeys[index]];
//     let percent = ((count / items.length) * 100).toFixed(2) + "%";
//     // console.log(count, items.length, (count / items.length) * 100)
//     // format for graph { text: "", percentage: "%" },
//     finalData.push({ text: countKeys[index], percentage: percent })
// }


// console.log("Final: ", finalData)