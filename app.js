angular.module('productivityDashboard', [])
.controller('DashboardController', function($scope, $timeout) {
    // Initialize current view
    $scope.currentView = 'dashboard';
    $scope.changeView = function(view) {
        $scope.currentView = view;
        // Initialize charts when view changes
        $timeout(function() {
            initCharts();
        }, 100);
    };
    
    $scope.getViewTitle = function() {
        const titles = {
            'dashboard': 'Dashboard Overview',
            'tasks': 'Task Manager',
            'goals': 'Goal Tracker',
            'analytics': 'Productivity Analytics'
        };
        return titles[$scope.currentView] || 'Dashboard';
    };
    
    // Current date
    $scope.currentDate = new Date();
    
    // User data
    $scope.user = {
        name: 'Alex Johnson',
        role: 'Product Manager',
        initials: 'AJ',
        avatarColor: '#6c5ce7, #a29bfe'
    };
    
    // Stats data
    $scope.stats = [
        { icon: 'fas fa-tasks', label: 'Total Tasks', value: 42, trend: 8, color: '#6c5ce7' },
        { icon: 'fas fa-check-circle', label: 'Completed Tasks', value: 28, trend: 12, color: '#00b894' },
        { icon: 'fas fa-clock', label: 'Focus Time', value: '18.5h', trend: -3, color: '#0984e3' },
        { icon: 'fas fa-chart-line', label: 'Productivity Score', value: 87, trend: 5, color: '#a29bfe' }
    ];
    
    // Productivity metrics
    $scope.productivityScore = 87;
    $scope.productivityChange = 5;
    $scope.productivityMetrics = [
        { label: 'Task Completion', value: 82, color: '#6c5ce7' },
        { label: 'Goal Progress', value: 65, color: '#00cec9' },
        { label: 'Focus Time', value: 74, color: '#0984e3' },
        { label: 'Team Collaboration', value: 91, color: '#a29bfe' }
    ];
    
    // Recent activities
    $scope.recentActivities = [
        { icon: 'fas fa-check', message: 'Completed task "Update project documentation"', time: '25 min ago', color: '#00b894' },
        { icon: 'fas fa-bullseye', message: 'Reached 65% of "Q2 Sales Target" goal', time: '2 hours ago', color: '#6c5ce7' },
        { icon: 'fas fa-tasks', message: 'Added new task "Prepare client presentation"', time: '4 hours ago', color: '#0984e3' },
        { icon: 'fas fa-chart-line', message: 'Productivity score increased by 5%', time: '1 day ago', color: '#a29bfe' }
    ];
    
    // Upcoming deadlines
    $scope.upcomingDeadlines = [
        { title: 'Project Alpha Deadline', date: new Date('2023-06-15'), progress: 75, priority: 'high' },
        { title: 'Quarterly Review Meeting', date: new Date('2023-06-20'), progress: 30, priority: 'medium' },
        { title: 'Team Building Workshop', date: new Date('2023-06-25'), progress: 90, priority: 'low' }
    ];

    // Initialize charts
    function initCharts() {
        // Performance Chart
        const performanceCtx = document.getElementById('performanceChart').getContext('2d');
        new Chart(performanceCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Productivity',
                    data: [65, 59, 80, 81, 76, 72, 87],
                    borderColor: '#6c5ce7',
                    backgroundColor: 'rgba(108, 92, 231, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)'
                        },
                        ticks: {
                            color: '#b2bec3'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)'
                        },
                        ticks: {
                            color: '#b2bec3'
                        }
                    }
                }
            }
        });

        // Task Distribution Chart
        const taskCtx = document.getElementById('taskChart').getContext('2d');
        new Chart(taskCtx, {
            type: 'doughnut',
            data: {
                labels: ['Completed', 'In Progress', 'Pending', 'Overdue'],
                datasets: [{
                    data: [28, 8, 4, 2],
                    backgroundColor: [
                        '#00b894',
                        '#0984e3',
                        '#fdcb6e',
                        '#ff7675'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            color: '#dfe6e9',
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    }
                }
            }
        });
    }

    // Initialize charts on page load
    $timeout(function() {
        initCharts();
    }, 500);
});