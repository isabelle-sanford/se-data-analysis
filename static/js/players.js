// horizontal bar chart
function drawPiePlot(values, labels, div) {
    let data = [{
        values: values,
        labels: labels,
        type: 'pie'
      }];
      

    let layout = {
      title: "Alignment Breakdown"
    };

    Plotly.newPlot(div, data, layout);
};

function init() {
    d3.json('./datajsons/playerdata.json').then(function(data) {

        var players = data[0];

        alignment_list = players.map(d => d.alignment);
        var unique_aligns = [... new Set(alignment_list)];

        var align_cts = []

        unique_aligns.forEach(a => {
            var currcount = alignment_list.filter(p => p === a).length
            align_cts.push(currcount);

        })



        drawPiePlot(align_cts, unique_aligns, 'alignment-pie');

    });

};

init();