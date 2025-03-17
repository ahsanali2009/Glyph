google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

let occurrences = document.getElementById("emoji-data").value

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Occurences', 'Positive','Neutral','Negative' ],
    ['0',0,0,0],
    ['1462.2',684.5,361.4,416.3],
    ['2924.4',1369,722.8,832.6],
    ['4386.6',2053.5,1084.2,1248.9],
    ['5848.8',2738,1445.6,1665.2],
    ['7311',3422.5,1807,2081.5],
    ['8773.2',4107,2168.4,2497.8],
    ['10235.4',4791.5,2530.8,2914.1],
    ['11697.6',5476,2892.2,3330.4],
    ['13159.8',6160.5,3253.6,3746.7],
    ['14622	',6845,3614,4163],

  ]);

  var options = {
    title: 'Sentiment',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('display_chart'));

  chart.draw(data, options);
}