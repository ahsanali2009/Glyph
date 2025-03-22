google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

let emojiPropertiesData = document.getElementById("emoji-data").innerText
let emojiPropertiesData_clean_1 = emojiPropertiesData.replace("(","")
let emojiPropertiesData_clean_2 = emojiPropertiesData_clean_1.replace(")","")
let emojiPropertiesData_toArray = emojiPropertiesData_clean_2.split(",")


function drawChart() {

// Assign Values...  
let occurences_value = (emojiPropertiesData_toArray[0].replace(/'/g,""))
let positive_value = (emojiPropertiesData_toArray[1].replace(/'/g,"")) 
let negative_value = (emojiPropertiesData_toArray[2].replace(/'/g,"")) 
let neutral_value = (emojiPropertiesData_toArray[3].replace(/'/g,"")) 


  // Function to calculate percentage of the 'valueType'...
  function percentageRatioCalc(valueType, percentage){
    return ((percentage/100) * valueType).toFixed(0)
  }

  let perCalc = percentageRatioCalc;

  var data = google.visualization.arrayToDataTable([
    ['Occurences', 'Positive','Neutral','Negative' ],
    ['0',0,0,0],
    [perCalc(occurences_value, 10),perCalc(positive_value,10),perCalc(negative_value,10),perCalc(neutral_value,10)],
    [perCalc(occurences_value, 20),perCalc(positive_value,20),perCalc(negative_value,20),perCalc(neutral_value,20)],
    [perCalc(occurences_value, 30),perCalc(positive_value,30),perCalc(negative_value,30),perCalc(neutral_value,30)],
    [perCalc(occurences_value, 40),perCalc(positive_value,40),perCalc(negative_value,40),perCalc(neutral_value,40)],
    [perCalc(occurences_value, 50),perCalc(positive_value,50),perCalc(negative_value,50),perCalc(neutral_value,50)],
    [perCalc(occurences_value, 60),perCalc(positive_value,60),perCalc(negative_value,60),perCalc(neutral_value,60)],
    [perCalc(occurences_value, 70),perCalc(positive_value,70),perCalc(negative_value,70),perCalc(neutral_value,70)],
    [perCalc(occurences_value, 80),perCalc(positive_value,80),perCalc(negative_value,80),perCalc(neutral_value,80)],
    [perCalc(occurences_value, 90),perCalc(positive_value,90),perCalc(negative_value,90),perCalc(neutral_value,90)],
    [perCalc(occurences_value, 100),perCalc(positive_value,100),perCalc(negative_value,100),perCalc(neutral_value,100)],

  ]);

  var options = {
    title: 'Sentiment',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('display_chart'));

  chart.draw(data, options);
}