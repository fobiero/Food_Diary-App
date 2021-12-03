$(document).ready(() => {
    $('#addFoods').click((e) => {
        e.preventDefault();
        const day = $('#day').val();
        const type = $('#foodOption').val();
        const menu = $('#menu').val();

        // alert(menu);

        const loadData = `<tr> <td>${day}</td> <td>${type}</td> <td>${menu}</td> </tr>`;
        $('tbody').append(loadData);
    });

    $('#diet-value').click(() => {
        $('#data_view').show();
        $('#tabular').hide();
        $('#exc').hide();
    });

    $('#stats').click(() => {
        $('#data_view').hide();
        $('#tabular').show();
        $('#exc').hide();
    });
    $('#excer').click(() => {
        $('#data_view').hide();
        $('#tabular').hide();
        $('#exc').show();
    });

});

const ctx = document.getElementById('chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
            label: '% Weekly Veges Intage',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});