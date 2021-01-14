// pie chart
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

// horizontal bar chart
function drawBarPlot(x_value, y_value, div) {
    let data_plot = [{
      x: x_value,
      y: y_value,
      type: 'bar' //,
    //   text: labels
    }];

    let layout = {
      title: "# of Players Joining Over Time",
      xaxis: {title: "Game"},
      yaxis: {title: "# of players joined"}
    };

    Plotly.newPlot(div, data_plot, layout);
};

// histogram
function drawHist(x_value, div) {
    let data_plot = [{
      x: x_value,
      type: 'histogram', 
      xbins: {size: 5}, 
      marker: {line: {
          width: 5, 
          color: 'white'}
      }
    }];

    let layout = {
      title: "# of Players Joining Over Time",
      xaxis: {title: "Game"},
      yaxis: {title: "# of players joined"}
    };

    Plotly.newPlot(div, data_plot, layout);
};


function drawLine(x_value, y_value, labels, div) {
    var data = [{
        x: x_value,
        y: y_value,
        mode: 'markers', 
        type:'scatter', 
        text: labels,
        // line: {shape: 'spline'}
    }];

    let layout = {
        title: "# of Players Joining Over Time",
        xaxis: {title: "Game"},
        yaxis: {title: "# of players joined"}
      };

    Plotly.newPlot(div, data, layout);
}

// count uniques
function value_counts(myList, uniques) {
    uniques = uniques || [... new Set(myList)];

    outputVals = [];
    uniques.forEach(u => {
        let curr = myList.filter(m => m === u).length;
        outputVals.push(curr);
    })

    return [uniques, outputVals];

}

function init() {
    d3.json('https://isabelle-sanford.github.io/se-data-analysis/datajsons/playerdata.json').then(function(data) {


    // ALIGNMENT PIE - refactor for value_counts
        var alignment_list = data.map(d => d.alignment);
        var unique_aligns = ["G", 'E', 'M', 'N', 'F', 'S', 'T', 'B', 'D', 'C'];
        var align_labels = ['Good', 'Evil', 'SK', 'Neutral', 'Faction', 'Other Evil']
        var align_colors = ['green', 'red', 'orange', 'gray', 'purple', 'pink']

        var align_cts = []

        unique_aligns.forEach(a => {
            var currcount = alignment_list.filter(p => p === a).length;
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

    // SURVIVAL PIE - refactor w value_counts
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

    // JOINING TIME BAR
        var player_list = [... new Set(data.map(d => d.player_id))];
        console.log(`num players: ${player_list.length}, data len: ${data.length}`)
        var joined_list = data.map(d => [d.player_id, d.game_id, d.game_str]);

        start_game = [];
        start_game_label = [];
        for (let i=0; i < player_list.length; i++) {
            let found = false;
            let curr_player = player_list[i];

            let j = 0
            while (!found) {
                if (joined_list[j][0] == curr_player) {
                    start_game.push(joined_list[j][1]);
                    start_game_label.push(joined_list[j][2]);
                    found = true;
                } else if (j > data.length) {
                    console.log("BROKEN");
                    break;
                } else { 
                    j++;
                };

            }

        }


        var start_game_ids = [... new Set(start_game.map(d => d))];
        var start_game_names = [... new Set(start_game_label.map(d => d))]
        
        start_game_cts = [];
        // let currsum = 0;
        // for (i=0; i < start_game_ids.length; i++) {
        //     let curr = start_game.filter(m => m === start_game_ids[i]).length;
        //     currsum += curr;
        //     start_game_cts.push(currsum);
        // }
        start_game_ids.forEach(u => {
            let curr = start_game.filter(m => m === u).length;
            start_game_cts.push(curr);
        })
    


        // drawHist(start_game, 'join-game-bar');
        drawLine(start_game_ids, start_game_cts, start_game_names, 'join-game-bar');
        

    });

};

init();