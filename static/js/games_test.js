

// {"_id": {"$oid": "5ffe9492a2561e6c522d15bd"}, "game_id": 0, "game_str": "LG1", "format": 
// "LG", "game_num": "1", "num_players": 16, "alignment_counts": {"G": 12.0, "E": 4.0}, "outcome_counts": {"L": 12.0, "W": 4.0}, 
// "status_counts": {"E_death": 5.0, "L_death": 4.0, "V": 1.0, "S_death": 6.0}, "inactives": 0.0, 
// "broken": 0.0, "mod": 0, "spec": [17, 18, 21], "gm": [31]}, 


// -----------------INIT------------------------

function init_games() {
    d3.json('https://isabelle-sanford.github.io/se-data-analysis/datajsons/gamedata.json').then(function(gamedata) {
        console.log(gamedata[0]) 

    });
};





init_games();