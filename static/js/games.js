// ------------PLOT FUNCTIONS-------------------

// BAR
function drawBarPlot(x_value, y_value, labels, div) {
    let data_plot = [{
      x: x_value,
      y: y_value,
      type: 'bar',
      text: labels
    }];

    let layout = {
      title: "# of Players Per Game",
      xaxis: {title: "Game"},
      yaxis: {title: "# of players"}
    };

    Plotly.newPlot(div, data_plot, layout);
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




// -----------------INIT------------------------

function init_games() {
    d3.json('https://isabelle-sanford.github.io/se-data-analysis/datajsons/playerdata.json').then(function(player_data) {
        game_ids = player_data.map(d => d.game_id);
        players_per_game = value_counts(game_ids);
        game_labels = [... new Set(player_data.map(d => d.game_str))];

        drawBarPlot(players_per_game[0], players_per_game[1], game_labels, 'bar-num-players')



    });
}





// -----------------FILTER----------------------









init_games();