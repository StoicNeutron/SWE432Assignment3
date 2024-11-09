//import {DJ} from './Dj.js';

class DJ {
    constructor(name, experience, rated, schedule) {
        this.name = name;
        this.experience = experience;
        this.rated = rated;
        this.schedule = schedule;
    }
}

const name_list = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace", "Hank", "Ivy", "Jack"];
const exp_list = ["Beginner", "Intermediate", "Advanced", "Expert", "Master", "Proficient", "Skilled", "Novice", "Specialist", "Guru"];
const rated_list = [5, 4, 3, 5, 4, 2, 5, 3, 4, 5];
const schedule_list = ["Monday 9 AM", "Tuesday 10 AM", "Wednesday 11 AM", "Thursday 2 PM", "Friday 4 PM", "Saturday 1 PM", "Sunday 5 PM", "Monday 3 PM", "Wednesday 8 AM", "Friday 6 PM"];
let DJ_List = [];
for(let i = 0; i < 5; i++){
    const temp_DJ = new DJ(name_list[i], exp_list[i], rated_list[i], schedule_list[i]);
    DJ_List.push(temp_DJ);
}

const songsList = [
    'Driver’s License - Olivia Rodrigo',
    'Positions - Ariana Grande',
    'Super Natural - News Jean'
];

let isExpanded = false;

const button = document.getElementById('playButton');
const confirm_button = document.getElementById('confirm_button');
const sound_animated = document.getElementById('sound_animated');
const buttonImage = document.getElementById('buttonImage');
const audio = document.getElementById('audioPlayer');
const expandList = document.getElementById('expandList');
const songList = document.getElementById('songList');
const playImage = 'resources/pause.png';
const pauseImage = 'resources/play.png';
const p1_button = document.getElementById('p1');
const p2_button = document.getElementById('p2');
const p3_button = document.getElementById('p3');
const p4_button = document.getElementById('p4');
const p5_button = document.getElementById('p5');
const rp1_button = document.getElementById('RP1');
const rp2_button = document.getElementById('RP2');
const rp3_button = document.getElementById('RP3');
const rp4_button = document.getElementById('RP4');
const rp5_button = document.getElementById('RP5');
const DJ_name = document.getElementById('DJ_name');
const DJ_exp = document.getElementById('DJ_experience');
const DJ_rated = document.getElementById('DJ_rated');
const DJ_assigned_date = document.getElementById('DJ_assignedDate');

// Date Field Boolean
let dateIsPicked = false;

document.addEventListener('DOMContentLoaded', function () {

    button.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            buttonImage.src = playImage;
            sound_animated.src = 'resources/sound_wave.webp';
        } else {
            audio.pause();
            buttonImage.src = pauseImage;
            sound_animated.src = '';
        }
    });

    p1_button.addEventListener('click', function (){
        DJ_name.textContent = ": " + DJ_List[0].name;
        DJ_exp.textContent = ": " + DJ_List[0].experience;
        DJ_rated.textContent = ": " + DJ_List[0].rated;
        DJ_assigned_date.textContent = ": " + DJ_List[0].schedule;
    });

    p2_button.addEventListener('click', function (){
        DJ_name.textContent = ": " + DJ_List[1].name;
        DJ_exp.textContent = ": " + DJ_List[1].experience;
        DJ_rated.textContent = ": " + DJ_List[1].rated;
        DJ_assigned_date.textContent = ": " + DJ_List[1].schedule;
    });

    p3_button.addEventListener('click', function (){
        DJ_name.textContent = ": " + DJ_List[2].name;
        DJ_exp.textContent = ": " + DJ_List[2].experience;
        DJ_rated.textContent = ": " + DJ_List[2].rated;
        DJ_assigned_date.textContent = ": " + DJ_List[2].schedule;
    });

    p4_button.addEventListener('click', function (){
        DJ_name.textContent = ": " + DJ_List[3].name;
        DJ_exp.textContent = ": " + DJ_List[3].experience;
        DJ_rated.textContent = ": " + DJ_List[3].rated;
        DJ_assigned_date.textContent = ": " + DJ_List[3].schedule;
    });

    p5_button.addEventListener('click', function (){
        DJ_name.textContent = ": " + DJ_List[4].name;
        DJ_exp.textContent = ": " + DJ_List[4].experience;
        DJ_rated.textContent = ": " + DJ_List[4].rated;
        DJ_assigned_date.textContent = ": " + DJ_List[4].schedule;
    });

    button.addEventListener('mouseover', function () {
        buttonImage.style.transform = 'scale(1.1)'; // Zoom on hover
    });

    button.addEventListener('mouseout', function () {
        buttonImage.style.transform = 'scale(1)'; // Reset zoom when hover ends
    });

    function expand() {
        songsList.forEach(function (song) {
            const newLi = document.createElement('li');
            newLi.textContent = song;
            newLi.style.color = 'gray';
            newLi.classList.add('more-item');
            songList.insertBefore(newLi, expandList);
        });

        expandList.innerHTML = '<a href="javascript:void(0);">less...</a>';
        isExpanded = true;
    }

    function collapse() {
        document.querySelectorAll('.more-item').forEach(function (item) {
            item.remove();
        });

        expandList.innerHTML = '<a href="javascript:void(0);">more...</a>';
        isExpanded = false;
    }

    expandList.addEventListener('click', function () {
        if (isExpanded) {
            collapse();
        } else {
            expand();
        }
    });

    confirm_button.addEventListener('click', function validate() {
        if (dateIsPicked === false) {
            alert("Incomplete Form! Date must be pick in order to confirm.");
        }
    });    
});

// Validation Part
// Ensure DOM is loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Initialize Flatpickr
    flatpickr("#myCalendar", {
        enableTime: false,            // Date-only picker
        dateFormat: "Y-m-d",          // Date format as Year-Month-Day
        minDate: "today",             // Restrict past dates
        maxDate: "2024-12-31",        // Restrict future dates
        inline: true,                 // Display calendar inline (optional)
        onChange: handleDateChange    // Use the custom function defined below
    });
});

// Define the onChange callback function
function handleDateChange(selectedDates, dateStr) {
    dateIsPicked = true;
}

// End of Validation Part

// Data for each rp_button
const dataSets = {
    rp1: [10, 20, 30, 40, 50],
    rp2: [15, 25, 35, 45, 55],
    rp3: [20, 10, 15, 40, 30],
    rp4: [5, 15, 25, 35, 45],
    rp5: [25, 10, 20, 30, 40]
};

// Set up the SVG container
const svgWidth = 300;
const svgHeight = 300;
const radius = Math.min(svgWidth, svgHeight) / 2;

// Create SVG element
const svg = d3.select("#chart")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .append("g")
    .attr("transform", `translate(${svgWidth / 2}, ${svgHeight / 2})`);

// Create a color scale
const color = d3.scaleOrdinal(d3.schemeCategory10);

// Create the arc generator
const arc = d3.arc()
    .innerRadius(0)
    .outerRadius(radius);

const pie = d3.pie();

// Initialize the chart with the first data set
updateChart(dataSets.rp1);
function updateChart(newData) {
    const arcs = svg.selectAll(".arc")
        .data(pie(newData), d => d.data);

    const newArcs = arcs.enter()
        .append("g")
        .attr("class", "arc");

    newArcs.append("path")
        .attr("d", arc)
        .attr("fill", (d, i) => color(i))
        .each(function(d) { this._current = d; });

    newArcs.append("text")
        .attr("text-anchor", "middle")
        .attr("fill", "#fff")
        .attr("font-size", "12px")
        .attr("transform", d => `translate(${arc.centroid(d)})`)
        .text(d => d.data);

    // Update existing arcs
    arcs.select("path")
        .transition()
        .duration(750)
        .attrTween("d", function(d) {
            const interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return t => arc(interpolate(t));
        })
        .attr("fill", (d, i) => color(i));

    arcs.select("text")
        .transition()
        .duration(750)
        .attr("transform", d => `translate(${arc.centroid(d)})`)
        .text(d => d.data);
    arcs.exit().remove();
}

rp1_button.addEventListener('click', () => updateChart(dataSets.rp1));
rp2_button.addEventListener('click', () => updateChart(dataSets.rp2));
rp3_button.addEventListener('click', () => updateChart(dataSets.rp3));
rp4_button.addEventListener('click', () => updateChart(dataSets.rp4));
rp5_button.addEventListener('click', () => updateChart(dataSets.rp5));