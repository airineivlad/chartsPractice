function timeChart(){
	
	var info=[{
			"lineColor": "rgb(255, 0, 0)",
			"date": "2012-01-01",
			"duration": 408
		}, {
			"date": "2012-01-02",
			"duration": 482
		}, {
			"date": "2012-01-03",
			"duration": 562
		}, {
			"date": "2012-01-04",
			"duration": 379
		}, {
			"lineColor": "rgb(255, 252, 0)",
			"date": "2012-01-05",
			"duration": 501
		}, {
			"date": "2012-01-06",
			"duration": 443
		}, {
			"date": "2012-01-07",
			"duration": 405
		}, {
			"date": "2012-01-08",
			"duration": 309,
			"lineColor": "rgb(0, 165, 255)"
		}, {
			"date": "2012-01-09",
			"duration": 287
		}, {
			"date": "2012-01-10",
			"duration": 485
		}, {
			"date": "2012-01-11",
			"duration": 890
		}, {
			"date": "2012-01-12",
			"duration": 810
		}];
	var chart = AmCharts.makeChart("chartdiv", {
		"type": "serial",
		"theme": "chalk",
		"marginRight": 80,
		"dataProvider": info,
		"balloon": {
			"cornerRadius": 6,
			"horizontalPadding": 15,
			"verticalPadding": 10
		},
		"valueAxes": [{
			"duration": "mm",
			"durationUnits": {
				"hh": "h ",
				"mm": "min"
			},
			"axisAlpha": 0
		}],
		"graphs": [{
			"bullet": "square",
			"bulletBorderAlpha": 1,
			"bulletBorderThickness": 1,
			"fillAlphas": 0.3,
			"fillColorsField": "lineColor",
			"legendValueText": "[[value]]",
			"lineColorField": "lineColor",
			"title": "duration",
			"valueField": "duration"
		}],
		"chartScrollbar": {

		},
		"chartCursor": {
			"categoryBalloonDateFormat": "YYYY MMM DD",
			"cursorAlpha": 0,
			"fullWidth": true
		},
		"dataDateFormat": "YYYY-MM-DD",
		"categoryField": "date",
		"categoryAxis": {
			"dateFormats": [{
				"period": "DD",
				"format": "DD"
			}, {
				"period": "WW",
				"format": "MMM DD"
			}, {
				"period": "MM",
				"format": "MMM"
			}, {
				"period": "YYYY",
				"format": "YYYY"
			}],
			"parseDates": true,
			"autoGridCount": false,
			"axisColor": "#555555",
			"gridAlpha": 0,
			"gridCount": 50
		},
		"export": {
			"enabled": true        
		}
	});

	chart.addListener("dataUpdated", zoomChart);
}

function optionsPie(){
	var gaugeChart = AmCharts.makeChart("chartdiv", {
	  "type": "gauge",
	  "theme": "light",
	  "axes": [{
		"axisAlpha": 0,
		"tickAlpha": 0,
		"labelsEnabled": false,
		"startValue": 0,
		"endValue": 100,
		"startAngle": 0,
		"endAngle": 270,
		"bands": [{
		  "color": "#eee",
		  "startValue": 0,
		  "endValue": 100,
		  "radius": "100%",
		  "innerRadius": "85%"
		}, {
		  "color": "#84b761",
		  "startValue": 0,
		  "endValue": 80,
		  "radius": "100%",
		  "innerRadius": "85%",
		  "balloonText": "90%"
		}, {
		  "color": "#eee",
		  "startValue": 0,
		  "endValue": 100,
		  "radius": "80%",
		  "innerRadius": "65%"
		}, {
		  "color": "#fdd400",
		  "startValue": 0,
		  "endValue": 35,
		  "radius": "80%",
		  "innerRadius": "65%",
		  "balloonText": "35%"
		}, {
		  "color": "#eee",
		  "startValue": 0,
		  "endValue": 100,
		  "radius": "60%",
		  "innerRadius": "45%"
		}, {
		  "color": "#cc4748",
		  "startValue": 0,
		  "endValue": 99,
		  "radius": "60%",
		  "innerRadius": "45%",
		  "balloonText": "92%"
		}, {
		  "color": "#eee",
		  "startValue": 0,
		  "endValue": 100,
		  "radius": "40%",
		  "innerRadius": "25%"
		}, {
		  "color": "#67b7dc",
		  "startValue": 0,
		  "endValue": 68,
		  "radius": "40%",
		  "innerRadius": "25%",
		  "balloonText": "68%"
		}]
	  }],
	  "allLabels": [{
		"text": "JavaScript",
		"x": "49%",
		"y": "5%",
		"size": 15,
		"bold": true,
		"color": "#84b761",
		"align": "right"
	  }, {
		"text": "HTML/CSS",
		"x": "49%",
		"y": "15%",
		"size": 15,
		"bold": true,
		"color": "#fdd400",
		"align": "right"
	  }, {
		"text": "Java",
		"x": "49%",
		"y": "24%",
		"size": 15,
		"bold": true,
		"color": "#cc4748",
		"align": "right"
	  }, {
		"text": "C++",
		"x": "49%",
		"y": "33%",
		"size": 15,
		"bold": true,
		"color": "#67b7dc",
		"align": "right"
	  }],
	  "export": {
		"enabled": true
	  }
	});
}

function zoomChart() {
    chart.zoomToDates(new Date(2012, 0, 3), new Date(2012, 0, 11));
}