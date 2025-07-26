// Inisialisasi Chart
document.addEventListener('DOMContentLoaded', function() {
    // Chart Harian
    const dailyCtx = document.getElementById('dailyUsageChart').getContext('2d');
    window.dailyChart = new Chart(dailyCtx, {
        type: 'line',
        data: {
            labels: Array.from({length: 24}, (_, i) => `${i}:00`),
            datasets: [{
                label: 'Traffic Internet Global (GB/detik)',
                data: [],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'GB/detik'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Waktu (24 jam)'
                    }
                }
            }
        }
    });

    // Chart Regional
    const regionalCtx = document.getElementById('regionalChart').getContext('2d');
    window.regionalChart = new Chart(regionalCtx, {
        type: 'doughnut',
        data: {
            labels: ['Asia', 'Eropa', 'Amerika Utara', 'Amerika Selatan', 'Afrika', 'Oseania'],
            datasets: [{
                data: [],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });
});
