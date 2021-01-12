// horizontal bar chart
function drawPiePlot(values, labels, colors, div, title) {
    let data = [{
        values: values,
        labels: labels,
        type: 'pie',
        marker: {colors: colors}
      }];
      

    let layout = {
      title: title
    };

    Plotly.newPlot(div, data, layout);
};

function init() {
    d3.json('https://isabelle-sanford.github.io/se-data-analysis/datajsons/playerdata.json').then(function(data) {


    // ALIGNMENT PIE
        var alignment_list = data.map(d => d.alignment);
        var unique_aligns = ["G", 'E', 'M', 'N', 'F', 'S', 'T', 'B', 'D', 'C'];
        var align_labels = ['Good', 'Evil', 'SK', 'Neutral', 'Faction', 'Other Evil']
        var align_colors = ['green', 'red', 'orange', 'gray', 'purple', 'pink']

        var align_cts = []

        unique_aligns.forEach(a => {
            var currcount = alignment_list.filter(p => p === a).length
            align_cts.push(currcount);

        })

        var c_ct = align_cts.pop();
        var d_ct = align_cts.pop();
        var b_ct = align_cts.pop();
        var t_ct = align_cts.pop();
        var s_ct = align_cts.pop();

        var other_evils = c_ct + d_ct + b_ct + t_ct + s_ct;
        align_cts.push(other_evils);

        drawPiePlot(align_cts, align_labels, align_colors, 'alignment-pie', 'Alignment Breakdown');

    // SURVIVAL PIE
        var survival_list = data.map(d => d.death);
        var unique_deaths = ['S', 'E', 'L', 'V', 'F', 'M', 'N', 'I', 'O', 'D'];
        var death_labels = ['Survived', 'Elim-killed', 'Voted out', 'Friendly fire', 'SK', 'Neutral', 'Dropped'];
        var death_colors = ['green', 'red', 'orange', 'blue', 'pink', 'lightblue', 'gray'];

        var death_cts = [];
        unique_deaths.forEach(d => {
            var deathcount = survival_list.filter(s => s === d).length;
            death_cts.push(deathcount);
        });

        var dDct = death_cts.pop();
        var dOct = death_cts.pop();
        var dIct = death_cts.pop();
        var dropped = dDct + dIct + dOct;
        death_cts.push(dropped);

        console.log(death_cts);

        drawPiePlot(death_cts, death_labels, death_colors, 'survival-pie', 'Survival Breakdown');


    });

};

init();