// Initialize AOS Animations
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true, // Whether animation should happen only once - while scrolling down
        offset: 100 // Offset (in px) from the original trigger point
    });

    // Initialize Chart.js
    const ctx = document.getElementById('budgetChart');
    
    if (ctx) {
        // Budget Data
        const data = {
            labels: [
                'Personel Giderleri',
                'Donanım Altyapısı',
                'Danışmanlık/Lisans',
                'Risk Payı'
            ],
            datasets: [{
                data: [58.2, 27.4, 6.8, 7.6],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.8)',   // accent (blue)
                    'rgba(34, 197, 94, 0.8)',   // green
                    'rgba(168, 85, 247, 0.8)',  // purple
                    'rgba(249, 115, 22, 0.8)'   // orange
                ],
                borderColor: [
                    'rgba(59, 130, 246, 1)',
                    'rgba(34, 197, 94, 1)',
                    'rgba(168, 85, 247, 1)',
                    'rgba(249, 115, 22, 1)'
                ],
                borderWidth: 1,
                hoverOffset: 10
            }]
        };

        const config = {
            type: 'doughnut',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#9ca3af', // text-gray-400
                            padding: 20,
                            font: {
                                family: 'Inter',
                                size: 12
                            },
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(10, 15, 24, 0.9)', // bg-dark
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        borderColor: '#1f2937', // border-gray-800
                        borderWidth: 1,
                        padding: 12,
                        displayColors: true,
                        callbacks: {
                            label: function(context) {
                                return ' ' + context.label + ': %' + context.parsed;
                            }
                        }
                    }
                }
            }
        };

        new Chart(ctx, config);
    }
});
