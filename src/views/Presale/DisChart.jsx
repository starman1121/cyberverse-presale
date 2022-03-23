import ReactApexChart from 'react-apexcharts';

function DisChart() {

    const options = {
        chart: {
          width: 450,
          type: 'pie',
          foreColor: '#fff',
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '75%'
                },
                expandOnClick: false,
            }
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        dataLabels: {
            enabled: false,
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        stroke: {
            show: false,
        },
        tooltip:{
            enabled: false
        }
      };

    const series = [44, 55, 13, 43, 22];

    return ( 
        <ReactApexChart 
            type = "donut"
            options = {options}
            series = {series}
            height = {350}
            style = {{color:'#fff'}}
        />
        );
};

export default DisChart;