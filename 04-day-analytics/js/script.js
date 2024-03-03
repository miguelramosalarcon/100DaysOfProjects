const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Channel pages', 'Direct or unknown', 'Search', 'External'],
        datasets: [{
            label: '',
            data: [37.5, 33.6, 11.0, 6.0],
            borderWidth: 1,
            backgroundColor: [
                'rgb(150, 179, 255)',
                'rgb(26, 82, 225)',
                'rgb(68, 115, 234)',
                'rgb(103, 146, 255)'
            ]
        }]
    },
    options: {
        cutout: '70%',
        responsive: false, 
        maintainAspectRatio: false, 
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: true 
            }
        },
        elements: {
            line: {
                tension: 0,
            }
        }
    }
});
