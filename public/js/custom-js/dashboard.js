/* eslint-disable no-undef */

function drawChart1() {
  const data1 = google.visualization.arrayToDataTable([
    [' ', 'Interns', 'Mentors'],
    ['Approved', 1000, 400],
    ['Pending', 1170, 460],
    ['Declined', 660, 1120]
  ]);

  const options1 = {
    chart: {
      title: 'Applications',
      color: '#573F7B'
    },
    titleTextStyle: {
      color: '#573F7B',
      fontName: 'poppins',
      fontSize: 16
    },
    colors: ['#7E5AE3', '#EEC5CD']
  };

  const chart1 = new google.charts.Bar(document.getElementById('bar-chart-1'));

  chart1.draw(data1, google.charts.Bar.convertOptions(options1));
}

google.charts.load('current', { packages: ['bar'] });
google.charts.setOnLoadCallback(drawChart1);

/*
      Chart 2
*/

function drawChart2() {
  const data2 = google.visualization.arrayToDataTable([
    [' ', 'Interns', 'Mentors'],
    ['FE', 1000, 400],
    ['BE', 1170, 460],
    ['UI/UX', 1170, 460],
    ['Mobile', 660, 1120]
  ]);

  const options2 = {
    chart: {
      title: 'Application by Expertise',
    },
    titleTextStyle: {
      color: '#573F7B',
      fontName: 'poppins',
      fontSize: 16
    },
    colors: ['#7E5AE3', '#EEC5CD']
  };

  const chart2 = new google.charts.Bar(document.getElementById('bar-chart-2'));

  chart2.draw(data2, google.charts.Bar.convertOptions(options2));
}

google.charts.load('current', { packages: ['bar'] });
google.charts.setOnLoadCallback(drawChart2);

/*
      Chart 3
*/

function drawChart3() {
  const data3 = google.visualization.arrayToDataTable([
    [' ', 'Interns'],
    ['Nigeria', 1000],
    ['Ethiopia', 1170],
    ['Kenya', 1170],
    ['India', 660],
    ['Ghana', 660],
    ['Canada', 660],
    ['Sri Lanka', 660],
    ['Egypt', 660],
    ['Cameroon', 660]
  ]);

  const options3 = {
    chart: {
      title: 'Application by Location'
    },
    titleTextStyle: {
      color: '#573F7B',
      fontName: 'poppins',
      fontSize: 16
    },
    colors: ['#7E5AE3', '#EEC5CD']
  };

  const chart3 = new google.charts.Bar(document.getElementById('bar-chart-3'));

  chart3.draw(data3, google.charts.Bar.convertOptions(options3));
}

google.charts.load('current', { packages: ['bar'] });
google.charts.setOnLoadCallback(drawChart3);

/* Render all charts on window resize */

$(window).resize(() => {
  drawChart1();
  drawChart2();
  drawChart3();
});
