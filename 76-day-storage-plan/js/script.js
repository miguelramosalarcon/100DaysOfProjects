const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Used', 'Rest'],
        datasets: [{
            label: '',
            data: [10.0, 90.0],
            backgroundColor: [
                'rgb(67, 79, 192)',
                'rgb(160, 204, 226)'
            ],
            borderWidth: 0,
            hoverOffset: 4,
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                display: false, 
            },
            y: {
                display: false,
            }
        }
    }
});

