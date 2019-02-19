var chart1 = document.querySelector('#chart1');
var chart2 = document.querySelector('#chart2');
var chart3 = document.querySelector('#chart3');

var chart1 = new Chart(chart1,{
  type: 'doughnut',
  data: {
    labels: ['Applicants'],
    datasets: [{
      data: [3154, 846],
      backgroundColor: ['#67B8BF', 'lightgray'],
      borderWidth: 0
    }],
  },
  options: {
    legend:{
      display: false,
    },
    responsive: false,
    cutoutPercentage: 85,
    rotation: .5 * Math.PI
  }
});

var chart2 = new Chart(chart2,{
  type: 'doughnut',
  data: {
    labels: ['Applicants'],
    datasets: [{
      data: [1546, 2454],
      backgroundColor: ['#48A3F3', 'lightgray'],
      borderWidth: 0
    }],
  },
  options: {
    legend:{
      display: false,
    },
    responsive: false,
    cutoutPercentage: 85,
    rotation: .5 * Math.PI
  }
});

var chart3 = new Chart(chart3,{
  type: 'doughnut',
  data: {
    labels: ['Applicants'],
    datasets: [{
      data: [912, 3088],
      backgroundColor: ['#A46DAB', 'lightgray'],
      borderWidth: 0
    }],
  },
  options: {
    legend:{
      display: false,
    },
    responsive: false,
    cutoutPercentage: 85,
    rotation: .5 * Math.PI
  }
});