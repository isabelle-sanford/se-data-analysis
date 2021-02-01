# se-data-analysis
Analysis of Sanderson Elimination statistics 


TO DO:
- Change paths for all analysis outputs (done in to_mongo, tbd in ETL one) to account for moving them into Cleaning
- Move cleaning/dataX into resources folder? 
- Change Games & Player folders to be more clear about what they do?
- Divide static folder into one for each page? 
- what is the sqlite file here for
- why are there 2 ToMongos
- put this somewhere else and make a good readme file
- about page
- Footer? 
- way to pull navbar html automatically? (is it flask (sigh))

__ __ __ 

- Filters - Checkboxes instead of dropdowns? 
- Tabs? 

- Bar plot: # surviving players vs game; color indicates what amount of each alignment was left alive
- Fiddle with outcome/elim % dot plot
- Maybe initial bar plot is scatter & by outcome instead? Survival/death distracts a lot from the point
    - Consider lines of best fit
- Bubble plot: outcomes vs length
- Modified sunburst diagram - pie chart that you can click to see the extent of one piece broken down
- Maybe whole inactivity tab? 

__ __ __ 

Tab options: Outcomes, Broken, Inactivity, format? 

filters: format, broken, mod, gm, winner, complexity, setting, length
non-filters: game, # of players, alignments, outcomes, inactives, winner, length

__ __ __

Data collection stuff
- Lot of Broken isn't filled in
- scrape start and end dates from 17S
- eventually also scrape votes, quicklinks, etc


- Broken things: for conversion games, only first elim is counting