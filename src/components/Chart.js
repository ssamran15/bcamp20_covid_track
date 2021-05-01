import React from 'react';
import { Pie } from 'react-chartjs-2';


function ChartCovid({rsp}) {
    
    const state = {
        labels: ['Confirmed', 'Recovered', 'Critical', 'Deaths'],
        datasets: [
            {
                label: 'Global Covid Stats',
                fill: false,
                lineTension: 0.5,
                backgroundColor: [
                    '#2196f3',
                    '#4caf50',
                    '#ffc107',
                    '#f50057',
                  ],
                  borderColor: [
                    '#2196f3',
                    '#4caf50',
                    '#ffc107',
                    '#f50057',
                  ],
                borderWidth: 1,
                data: [rsp.confirmed, rsp.recovered, rsp.critical, rsp.deaths]
            }
        ]
    }

    return (
        
            <Pie
                data={state}
                options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    title: {
                        display: true,
                        text: 'Global Covid Stats',
                        fontSize: 10
                    },
                    
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
        
    );
}

export default ChartCovid;