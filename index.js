Chart.defaults.font.size = 10;

const contentGL = document.getElementById('GridL');
const GL = new Chart (contentGL, {
  type: 'line',
  data: {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    datasets: [
      {
        label: 'Dev FullStack - Junior',
        backgroundColor: '#ff0000',
        borderColor: '#ff4d5b',
        data: [2.875, 3.550, 5.734, 4.874, 7.231, 6.856, 5.586, 3.665, 2.524, 4.876, 3.987, 2.462]
      },
      {
        label: 'Dev FullStack - Pleno',
        backgroundColor: '#00A80E',
        borderColor: '#4dff5b',
        data: [6.875, 4.550, 5.734, 6.874, 8.231, 11.856, 9.586, 7.665, 10.524, 9.876, 8.987, 5.462]
      },
      {
        label: 'Dev FullStack - Sênior',
        backgroundColor: '#0115A8',
        borderColor: '#6778fe',
        data: [7.875, 7.550, 9.734, 11.874, 12.231, 16.856, 14.586, 11.665, 13.524, 13.876, 12.987, 9.462]
      },
    ]
  },
  options: {
    animations: {
      duration: 3000
    },
    plugins: {
      title: {
        display: true,
        text: 'Developers Month Salary',
        font: {
          size: 14
        }
      },
      legend: {
        position: 'bottom'
      }
    }
  }
});

const contentGP = document.getElementById('GridP');
const GP =  new Chart (contentGP, {
  type: 'pie',
  data: {
    labels: [
      'Dev FullStack - Junior',
      'Dev FullStack - Pleno',
      'Dev FullStack - Sênior'
    ],
    datasets: [{
      label: 'Média Salárial Mensal',
      data: [4.518, 8.018, 11.852],
      backgroundColor: [
        '#ff0000',
        '#00A80E',
        '#0115A8'
      ],
  }]
  },
  options: {
    animations: {
      duration: 8000
    },
    plugins: {
      title: {
        display: true,
        text: 'Average Month Salary in the Year of Developers',
        font: {
          size: 14
        }
      },
      legend: {
        position: 'bottom'
      }
    }
  }
});

const contentGC = document.getElementById('GridC');
const GC = new Chart (contentGC, {
  type: 'bar',
  data: {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    datasets: [
      {
        label: 'Dev FullStack - Junior',
        backgroundColor: '#ff0000',
        borderColor: '#ff4d5b',
        data: [2.875, 3.550, 5.734, 4.874, 7.231, 6.856, 5.586, 3.665, 2.524, 4.876, 3.987, 2.462]
      },
      {
        label: 'Dev FullStack - Pleno',
        backgroundColor: '#00A80E',
        borderColor: '#4dff5b',
        data: [6.875, 4.550, 5.734, 6.874, 8.231, 11.856, 9.586, 7.665, 10.524, 9.876, 8.987, 5.462]
      },
      {
        label: 'Dev FullStack - Sênior',
        backgroundColor: '#0115A8',
        borderColor: '#6778fe',
        data: [7.875, 7.550, 9.734, 11.874, 12.231, 16.856, 14.586, 11.665, 13.524, 13.876, 12.987, 9.462]
      },
    ]
  },
  options: {
    animations: {
      duration: 3000
    },
    plugins: {
      title: {
        display: true,
        text: 'Developers Month Salary',
        font: {
          size: 14
        }
      },
      legend: {
        position: 'bottom'
      }
    }
  }
});