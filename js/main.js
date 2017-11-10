const chart1 = document.getElementById('gradChart');
const chart2 = document.getElementById('enrollChart');

let gradChart = new Chart(chart1, {
  type: 'bar',
  data: {
      labels: ["California Average", "SMART Scholars"],
      datasets: [{
          label: 'High School Graduation Rates',
          data: [78, 100],
          backgroundColor: [
              'lightgrey',
              'lightgreen'
          ],
          borderColor: [
              'grey',
              'green'
          ],
          borderWidth: 1
      }]
  },
  options: {
    maintainAspectRatio: false,
    hover: {
      animationDuration: 100,
    },
    legend: {
      display: false
    },
      scales: {
          yAxes: [{
              ticks: {
                  callback: function(value){return value+ " %"},
                  beginAtZero:true,
              }
          }]
      }
  }
});

let enrollChart = new Chart(chart2, {
  type: 'bar',
  data: {
      labels: ["National Average", "SMART Scholars"],
      datasets: [{
          label: 'College Enrollment Rates',
          data: [48, 100],
          backgroundColor: [
              'lightgrey',
              'lightgreen'
          ],
          borderColor: [
              'grey',
              'green'
          ],
          borderWidth: 1
      }]
  },
  options: {
    maintainAspectRatio: false,
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true,
              }
          }]
      }
  }
});
