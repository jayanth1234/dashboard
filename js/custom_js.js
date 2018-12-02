'use strict';

let cgpa_data = [
  {"count": 1, "cgpa": 1},
  {"count": 2, "cgpa": 2},
  {"count": 10, "cgpa": 3},
  {"count": 10, "cgpa": 4},
  {"count": 16, "cgpa": 5},
  {"count": 40, "cgpa": 6},
  {"count": 60, "cgpa": 7},
  {"count": 65, "cgpa": 8},
  {"count": 40, "cgpa": 9},
  {"count": 5, "cgpa": 10}
];

let top_schools_data = [
  {"school":"IIIT Bengaluru" , "applicant":52},
  {"school":"IIT Hyderabad","applicant":50},
  {"school":"IIIT Hyderabad","applicant":47},
  {"school":"IIT Chennai","applicant":46},
  {"school":"Harvard University","applicant":16},
  {"school":"MIT","applicant":12},
  {"school":"Carnegie Mellon","applicant":12},
  {"school":"LSE","applicant":11},
  {"school":"Columbia University","applicant":10}
];

var ctx = $("#bar-chartcanvas");

var options = {
    responsive: true,
    legend: {
        display: false
    },
    scales:
        {
            xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
            yAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                ticks: {
                    display: false
                }
            }],
        },
    tooltips: {
         enabled: false
    }
};

var data = {
        labels: [cgpa_data[0].cgpa, cgpa_data[1].cgpa, cgpa_data[2].cgpa, cgpa_data[3].cgpa, cgpa_data[4].cgpa,cgpa_data[5].cgpa, cgpa_data[6].cgpa, cgpa_data[7].cgpa, cgpa_data[8].cgpa, cgpa_data[9].cgpa],
        datasets: [
            {
                labels: "",
                data: [cgpa_data[0].count, cgpa_data[1].count, cgpa_data[2].count, cgpa_data[3].count, cgpa_data[4].count,cgpa_data[5].count, cgpa_data[6].count, cgpa_data[7].count, cgpa_data[8].count, cgpa_data[9].count],
                backgroundColor: [
                    "skyblue","skyblue",
                    "skyblue","skyblue",
                    "skyblue","skyblue",
                    "skyblue","skyblue",
                    "skyblue","skyblue"
                ],
                borderColor: [
                    "skyblue","skyblue",
                    "skyblue","skyblue",
                    "skyblue","skyblue",
                    "skyblue","skyblue",
                    "skyblue","skyblue"
                ],
                
            },
        ]
    };

var chart = new Chart(ctx, {
        type: "bar",
        data: data,
        options: options
    });



document.getElementById("one").innerHTML = top_schools_data[0].school;
document.getElementById("two").innerHTML = top_schools_data[1].school;
document.getElementById("three").innerHTML = top_schools_data[2].school;
document.getElementById("four").innerHTML = top_schools_data[3].school;
document.getElementById("five").innerHTML = top_schools_data[4].school;
document.getElementById("six").innerHTML = top_schools_data[5].school;
document.getElementById("seven").innerHTML = top_schools_data[6].school;
document.getElementById("eight").innerHTML = top_schools_data[7].school;
document.getElementById("nine").innerHTML = top_schools_data[8].school;

document.getElementById("one-app").innerHTML = top_schools_data[0].applicant;
document.getElementById("two-app").innerHTML = top_schools_data[1].applicant;
document.getElementById("three-app").innerHTML = top_schools_data[2].applicant;
document.getElementById("four-app").innerHTML = top_schools_data[3].applicant;
document.getElementById("five-app").innerHTML = top_schools_data[4].applicant;
document.getElementById("six-app").innerHTML = top_schools_data[5].applicant;
document.getElementById("seven-app").innerHTML = top_schools_data[6].applicant;
document.getElementById("eight-app").innerHTML = top_schools_data[7].applicant;
document.getElementById("nine-app").innerHTML = top_schools_data[8].applicant


$(".button-collapse").sideNav();