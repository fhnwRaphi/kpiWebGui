const CHART=document.getElementById("lineChart");
console.log(CHART);

Chart.defaults.global.animation.onComplete=()=> {
	console.log('finished');
}
let lineChart = new Chart(CHART, {
	type:'line',
	data: {
		labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
		datasets: [
		{
		label: "My First dataset",
		fill: false,
		lineTension:0.1,
		backgroundColor: "rgba(75,192,192,0.4)",
		borderCapStyle: 'butt',
		boderDash: [],
		borderDashOffset: 0.0,
		borderJointStyle: 'miter',
		pointerBorderColor: "rgba(75,192,192,1)",
		pointBackgroundColor: "#fff",
		pointBorderWidth: 1,
		pointHoverRadius: 5,
		pointHoverBackgroundColor: "rgba(75,192,192,1)",
		pointHoverBorderColor: "rgba(220,220,220,1",
		pointHoverBorderWidth: 2,
		pointRadius: 1,
		data: [65,59,80,81,56,55,40,60],
		},

				{
		label: "My Second dataset",
		fill: true,
		lineTension:0,
		backgroundColor: "rgba(75,75,192,0.4)",
		borderCapStyle: 'butt',
		boderDash: [],
		borderDashOffset: 0.0,
		borderJointStyle: 'miter',
		pointerBorderColor: "rgba(75,72,192,1)",
		pointBackgroundColor: "#fff",
		pointBorderWidth: 1,
		pointHoverRadius: 5,
		pointHoverBackgroundColor: "rgba(75,72,192,1)",
		pointHoverBorderColor: "rgba(220,220,220,1",
		pointHoverBorderWidth: 2,
		pointRadius: 1,
		data: [100,9,84,51,66,75,40],
		}
		]
	},
	options: {
		scales:{
			yAxes: [{
				ticks: {
					reverse: true,
					beginAtZero: true
				}
			}]
		}
	}
});
