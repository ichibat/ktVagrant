"use strict";
const express = require("express");
const router = express.Router();

// var ctx = document.getElementById("myChart");
console.log("on ktgraph.js!");

// var myRadarChart = new Chart(ctx, {
//   type: "radar",
//   data: {
//     labels: [
//       "食べる意欲",
//       "全身状態",
//       "呼吸状態",
//       "口腔状態",
//       "認知機能（食事中)",
//       "咀嚼・送り込み",
//       "嚥下",
//       "姿勢・耐久性",
//       "食事動作",
//       "活動",
//       "背食状況レベル",
//       "食物形態",
//       "栄養"
//     ],
//     datasets: [
//       {
//         label: "2019年8月12日",
//         data: numbers,
//         backgroundColor: "RGBA(0,0,255,0)",
//         borderColor: "RGBA(225,95,150, 1)",
//         borderWidth: 2,
//         pointBackgroundColor: "RGB(46,106,177)"
//       },
//       {
//         label: "2019年8月21日",
//         data: [3, 4, 5, 4, 3, 5, 3, 4, 3, 2, 3, 4, 4],
//         backgroundColor: "RGBA(0,0,255,0)",
//         borderColor: "RGBA(115,255,25, 1)",
//         borderWidth: 2,
//         pointBackgroundColor: "RGB(46,106,177)"
//       }
//     ]
//   },
//   options: {
//     title: {
//       display: true,
//       text: "KTバランスチャート"
//     },
//     scale: {
//       ticks: {
//         suggestedMin: 0,
//         suggestedMax: 5,
//         stepSize: 1,
//         callback: function(value, index, values) {
//           return value + "点";
//         }
//       }
//     }
//   }
// });

module.exports = router;
