import React from 'react';
import styled from 'styled-components';
import {Line, Pie} from 'react-chartjs-2';

const data2 = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'BPI Savings',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'COOP Savings',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgb(253, 93, 81)',
        borderColor: 'rgb(253, 93, 81)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgb(253, 93, 81)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(253, 93, 81)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [20, 80, 34, 10, 59, 55, 7]
      }
    ]
  };

  const GraphRow1Container = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 1em;
  `;

  export const GraphRow1 = (props) => (
        <GraphRow1Container>
            <br />
            <div>
                <h2>Savings Progress for the past 12 months</h2>
                <Line data={data} />
            </div>
            <div>
                <h2>Pie Example</h2>
                <Pie data={data2} />
            </div>
        </GraphRow1Container>
  );