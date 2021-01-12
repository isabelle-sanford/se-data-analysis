// horizontal bar chart
function drawPiePlot(values, labels, colors, div) {
    let data = [{
        values: values,
        labels: labels,
        type: 'pie',
        marker: {colors: colors}
      }];
      

    let layout = {
      title: "Alignment Breakdown"
    };

    Plotly.newPlot(div, data, layout);
};

function init() {
    d3.json('https://isabelle-sanford.github.io/se-data-analysis/datajsons/playerdata.json').then(function(data) {



        alignment_list = data.map(d => d.alignment);
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

        console.log(align_cts.length);


        drawPiePlot(align_cts, align_labels, align_colors, 'alignment-pie');

    });

};

init();