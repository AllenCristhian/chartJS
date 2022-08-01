const Chart = require('chart.js');
// const myChart = new Chart(ctx, {...});

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];

const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 0],
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {}
};