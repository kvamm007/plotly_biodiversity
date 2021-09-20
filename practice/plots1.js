// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// };

// var layout = {
//     title: "Luncheon Survey",
//     xaxis: { title: "Food Option" },
//     yaxis: { title: "Number of Respondents" }
// };

// Plotly.newPlot("plotArea", [trace], layout);

// var trace = {
//     labels: ["nonalcoholic beer" , "nonalcoholic wine" , "nonalcoholic martini" , "nonalcoholic margarita" , "ice tea" , "nonalcoholic rum & coke" , "nonalcoholic mai tai" , "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6, 4.6],
//     type: "pie"
// }; 

// var layout = {
//     title: "'Pie' Chart",
//   };

// Plotly.newPlot("plotArea" , [trace] , layout);

// function init() {
//   data = [{
//     x: [1,2,3,4,5],
//     y: [1,2,4,8,16]  }];
//   Plotly.newPlot("plot",data);
// };

// d3.selectAll("#dropdownMenu").on("change",updatePlotly);

// function updatePlotly() {
//   var dropdownMenu = d3.select("#dropdownMenu");
//   var dataset=dropdownMenu.property("value");

//   var xData = [1,2,3,4,5];
//   var yData = [];

//   if (dataset === 'dataset1') {
//     yData= [1,2,4,8,16];
//   }
  
//   if (dataset=== 'dataset2') {
//     yData=[1,10,100,10000,10000];
//   };

//   var trace = {
//     x: [xData],
//     y: [yData],
//   };
//   Plotly.restyle("plot", trace);
// };

// init();


