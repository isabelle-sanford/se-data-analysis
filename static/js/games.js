
// {"_id": {"$oid": "5ffe9492a2561e6c522d15bd"}, "game_id": 0, "game_str": "LG1", "format": 
// "LG", "game_num": "1", "num_players": 16, "alignment_counts": {"G": 12.0, "E": 4.0}, "outcome_counts": {"L": 12.0, "W": 4.0}, 
// "status_counts": {"E_death": 5.0, "L_death": 4.0, "V": 1.0, "S_death": 6.0}, "inactives": 0.0, 
// "broken": 0.0, "mod": 0, "spec": [17, 18, 21], "gm": [31]}, winner, complexity, setting, length

// OTHER PLOT IDEAS:
// Bar plot, stacked by alignment, colored different depending on who won
// Evil % vs outcome ?? - survival % vs evil %?



// FILTERS: Mod, GM, Complexity, Setting, Broken, Format, Time period



// -----------------INIT------------------------

function init_games() {
    // pull dropdown values
    
    // var inDate = d3.select("#datetime").property("value");
    var myFormat = d3.select('#selFormat').property('value');
    var myComplexity = d3.select('#selComplexity').property('value');
    var mySetting = d3.select('#selSetting').property('value');

    console.log(myFormat);
    console.log(myComplexity);


    // pull data and filter appropriately
    d3.json('https://isabelle-sanford.github.io/se-data-analysis/datajsons/gamedata.json').then(function(initdata) {
    
        var gamedata = initdata;
        if (myFormat !== 'All') {
            gamedata = gamedata.filter(d => d.format === myFormat);
        };
        if (myComplexity !== 'All') {
            gamedata = gamedata.filter(d => d.complexity === myComplexity);
        };
        if (mySetting !== 'All') {
            gamedata = gamedata.filter(d => d.setting === mySetting);
        };
        // other filters 


        // pull standard variables
        var game_ids = gamedata.map(d => d.game_id);
        var game_names = gamedata.map(d => d.game_str);
        var n_players = gamedata.map(d => d.num_players);
        

        // SURVIVE PER GAME BAR
        var n_survive = gamedata.map(d => d.status_counts).map(e => e.S_death)
        // drawBarPlot(game_ids, n_survive, game_names, 'bar-num-survive', '# Survived per Game');
        // var nVsurvive = gamedata.map(d => [d.game_id, d.alignment_counts.G, d.game_str])
        // need better data - pull players or flatten this one
        // maybe stacked, num survived per game and num played? 

        var n_dead = [];
        for(var i=0; i <= n_players.length; i++) {
            n_dead.push(n_players[i] - n_survive[i]);
        }


        drawBars(game_names, n_dead, game_names, n_survive, game_names, game_names, 'bar-num-survive', 'Players per Game, by survival');






        // ----------- OUTCOMES -----------------
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
        var outcome_colors = {'Eliminator': 'red', 'Village': 'green', 'Faction': 'purple', 'Free For All': 'yellow', 'Draw': 'gray', 'Misc': 'orange', 'No one': 'orange', undefined: 'blue'};


        let my_data = [{
            x: x_val,
            y: y_val,
            marker: {
                color: x_val.map(d => outcome_colors[d])
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
        // OUTCOME PIE
        drawPiePlot(outcome_stuff[1], outcome_stuff[0], outcome_colors, 'outcome-pie', 'Breakdown of Winners');

        // Scatter plot of games v length colored by outcome
        var game_lengths = gamedata.map(d => d.length);
        
       
        var game_stuffs = gamedata.map(d => d.winner);
        var my_colors = game_stuffs.map(d => outcome_colors2[d]);

        drawScatter(game_ids, 'game', game_lengths, '# of cycles', game_names, 'length-outcome-scatter', 'Game Outcomes by Game Length', my_colors)

        // Survival % vs evil %
        var survival_perc = gamedata.map(d => (d.status_counts.S_death / d.num_players)*100);
        var evil_perc = gamedata.map(d => (d.alignment_counts.E / d.num_players)*100);
        drawScatter(survival_perc, '% survived', evil_perc, '% evil', game_names, 'survival-evil-perc', 'survival percent vs evil percent', my_colors);


        // length vs evil %
        drawScatter(game_lengths, '# of cycles', evil_perc, '% evil', game_names, 'length-evil-perc', 'evil percent by length', my_colors)



        
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