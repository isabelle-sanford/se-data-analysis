// ------------PLOT FUNCTIONS-------------------

// BAR
function drawBarPlot(x_value, y_value, labels, div, title) {
    let data_plot = [{
      x: x_value,
      y: y_value,
      type: 'bar',
      text: labels
    }];

    let layout = {
      title: title,
      xaxis: {title: "Game"},
      yaxis: {title: "# of players"}
    };

    Plotly.newPlot(div, data_plot, layout);
};

// STACKED BAR
function drawBars(x1, y1, x2, y2, labels1, labels2, div, title) {
    let trace1 = {
      x: x1,
      y: y1,
      type: 'bar',
      text: labels1
    };

    let trace2 = {
        x: x2,
        y: y2,
        type: 'bar',
        text: labels2
    };

    let data_plot = [trace1, trace2];

    let layout = {
      title: title,
      xaxis: {title: "Game"},
      yaxis: {title: "# of players"},
      barmode: 'stack'
    };

    Plotly.newPlot(div, data_plot, layout);
};


// LINE
function drawLine(x_value, y_value, labels, div, title) {
    let trace1 = {
        x: x_value,
        y: y_value,
        type: 'scatter',
        text: labels
    }

    let layout = {
        title: title,
        xaxis: {title: 'Game'},
        yaxis: {title: '# of players'}
    }

    let data = [trace1];

    Plotly.newPlot(div, data, layout);
}

// PIE
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



// -----------------OTHER FUNCTIONS-------------
function value_counts(myList) {
    uniques = [... new Set(myList)];

    outputVals = [];
    uniques.forEach(u => {
        let curr = myList.filter(m => m === u).length;
        outputVals.push(curr);
    })

    return [uniques, outputVals];

}

// {"_id": {"$oid": "5ffe9492a2561e6c522d15bd"}, "game_id": 0, "game_str": "LG1", "format": 
// "LG", "game_num": "1", "num_players": 16, "alignment_counts": {"G": 12.0, "E": 4.0}, "outcome_counts": {"L": 12.0, "W": 4.0}, 
// "status_counts": {"E_death": 5.0, "L_death": 4.0, "V": 1.0, "S_death": 6.0}, "inactives": 0.0, 
// "broken": 0.0, "mod": 0, "spec": [17, 18, 21], "gm": [31]}, 


// -----------------INIT------------------------

function init_games() {
    d3.json('https://isabelle-sanford.github.io/se-data-analysis/datajsons/gamedata.json').then(function(gamedata) {
        console.log(gamedata[0])

        var game_ids = gamedata.map(d => d.game_id);
        var game_names = gamedata.map(d => d.game_str);

        var n_players = gamedata.map(d => d.num_players);
        

        // SURVIVE PER GAME BAR
        var n_survive = gamedata.map(d => d.status_counts).map(e => e.S_death)
        drawBarPlot(game_ids, n_survive, game_names, 'bar-num-survive', '# Survived per Game');
        // var nVsurvive = gamedata.map(d => [d.game_id, d.alignment_counts.G, d.game_str])
        // need better data - pull players or flatten this one


        // AVERAGE OUTCOME LENGTH BAR
        var outcome_stuff = value_counts(gamedata.map(d => d.winner));
        var x_val = outcome_stuff[0];

        var y_val = [];
        x_val.forEach(x => {
            var outcome_data = gamedata.filter(d => d.winner === x);
            var totals = outcome_data.map(d => d.length);
            var result = d3.mean(totals);
            y_val.push(result);
        })

        // should really do color as dict but at moment ordering is: Elim, Village, Faction, FFA, Draw, Misc, No one
        outcome_colors = ['red', 'green', 'purple', 'yellow', 'gray', 'orange', 'black'];

        let my_data = [{
            x: x_val,
            y: y_val,
            marker: {
                color: outcome_colors
            },
            type: 'bar'
        }];
    
        let my_layout = {
            title: "Average Game Length by Outcome",
            xaxis: {title: "Outcome"},
            yaxis: {title: "Avg. Length (cycles)"}
        };
    
        Plotly.newPlot('outcomes-length', my_data, my_layout);
        
        pie_labels = outcome_stuff[0];
        pie_labels.pop();


        drawPiePlot(outcome_stuff[1], outcome_stuff[0], outcome_colors, 'outcome-pie', 'Breakdown of Winners');







    });
};





// -----------------FILTER----------------------









init_games();

// # OF PLAYERS PER GAME BAR
//drawBarPlot(game_ids, n_players, game_names, 'bar-num-players', '# of Players per Game');

// BUBBLE ATTEMPT FOR OUTCOMES VS LENGTH
        // var outcomes_with_length = value_counts(gamedata.map(d => [d.winner, d.length]));
        // // 0 is unique list of outcomes, 1 is count of each

        // var trace = [{
        //     x: outcomes_with_length[1][0],
        //     y: outcomes_with_length[1][1],

        //     mode: 'markers',
        //     marker: {
        //         size: 
        //     }
            
        // }];
        // var mylayout = {title: 'outcomes vs length'};

        // Plotly.newPlot('outcomes-length', trace, mylayout);