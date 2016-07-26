
function barChart(){
	var xmlhttp = new XMLHttpRequest();
	var url = "https://api.myjson.com/bins/2evff";

	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			drawChart1(xmlhttp.responseText);
		}
	}

	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function drawChart1(response) {
	var arr = JSON.parse(response);
	var data = google.visualization.arrayToDataTable([
		['Elements', 'Number of elements', { role: 'style' }, { role: 'annotation' } ],
		[arr[0].nume, arr[0].frecventa, '#b87333', 'Cu' ],
		[arr[1].nume, arr[1].frecventa, 'silver', 'Ag' ],
		[arr[2].nume, arr[2].frecventa, 'gold', 'Au' ],
		[arr[3].nume, arr[3].frecventa, 'color: #e5e4e2', 'Pt' ],
		[arr[4].nume, arr[4].frecventa, 'color: #e5e4e2', 'Pt' ]
		]);

	var options = {
		chart: {
			title: 'Products',
			subtitle: 'Frequency',
			
		},

		chartArea:{
     		backgroundColor: 'rgb(108, 103, 103)'
 		},

 		vAxis: {
 			textStyle: {
 				color: '#FFF', 
 			}

 		},

 		hAxis: {
 			textStyle: {
 				color: '#FFF', 
 			}

 		},

   		legend: { 
   			textStyle: {
 				color: '#FFF', 
 			}
 		},

   		titleTextStyle: { color: '#FFF' },

   		opacity: 0.8,
 		width:900,
        height:350,
        left:'auto',
        right:'auto',
		bars: 'horizontal' // Required for Material Bar Charts.
	};

	var chart = new google.charts.Bar(document.getElementById('chartdiv'));

	chart.draw(data, google.charts.Bar.convertOptions(options));
}


function drawChartDonut() {

	var data = google.visualization.arrayToDataTable([
		['Donut', 'Total' ],
		['Item 1', 300],
		['Item 2', 700 ]
		]);

	var options = {
		title: 'Donut Chart from Google Charts',
		pieHole: 0.5,
		colors: ['#4BB2E0', '#80D5FB'],


   		legend: { 
   			textStyle: {
 				color: '#FFF', 
 			}
 		},

   		titleTextStyle: { color: '#FFF' },

   		backgroundColor: 'rgb(108, 103, 103)',
 		width:400,
        height:400,
        left:'auto',
        top:-15,
        right:'auto'
	};

	var chart = new google.visualization.PieChart(document.getElementById('chartdiv'));
	
	chart.draw(data, google.charts.Bar.convertOptions(options));
}



 
