# se-data-analysis
Analysis of Sanderson Elimination statistics 

Site can be found here: https://isabelle-sanford.github.io/se-data-analysis/Games/allgames.html



## Pages:

`index.html` - about page. Contains information about me, SE, etc. Possibly a better resource than this README at the moment. 

### Games

`allgames.html` - most fleshed-out page currently. Contains various visualizations, with six filters that allow you to look a slice of the games that have happened. 

`specific_games.html` - WIP. Will contain options to look at the stats of any particular game, and possibly compare two side-by-side.


### Players

`allplayers.html` - WIP. Currently contains a few graphs and a non-functioning filter. 

`specific_players.html` - WIP. Will contain options to look at the stats of any particular player, and possibly compare two side-by-side.


All graphs pull from functions in `plots.js`, but are filled in by JavaScript files specific to each page. (e.g. the All Games page pulls from `games.js`.) Data comes from the Sanderson Elimination stats sheet (LINK), imported as a csv, cleaned in the Cleaning folder, and then put into the `datajsons` folder as jsons. 


## Languages & Libraries
* Python (pandas, pymongo, bson.json_util)
* Mongo DB
* JavaScript (D3, Plotly), CSS (Bootstrap), HTML
