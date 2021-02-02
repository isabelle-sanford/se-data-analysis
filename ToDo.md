# To Do

### File Structure
- Change paths for all analysis outputs (done in to_mongo, tbd in ETL one) to account for moving them into Cleaning
- Move cleaning/dataX into resources folder? 
- Change Games & Player folder names to be more clear about what they do?
- Divide static folder into one for each page? 

### ????
- what is the sqlite file here for
- why are there 2 ToMongos

### All-pages stuff
- Footer? 
- way to pull navbar html automatically? (is it flask (sigh))
    * Navbar has to be changed by folder for links to work

## About Page
- about page - Format tabs & fill with content; add how-to above

## Games

### All Games page
* Filters - make some checkboxes instead of dropdowns? 
* Tabs to show specific things? (Outcomes, Broken, Inactivity, format? )
* Fiddle with outcome/elim % dot plot
#### plot ideas
* Bar plot: # surviving players vs game; color indicates what amount of each alignment was left alive
* Maybe initial bar plot is scatter & by outcome instead? Survival/death distracts a lot from the point
    - Consider lines of best fit
* Bubble plot: outcomes vs length
* Modified sunburst diagram - pie chart that you can click to see the extent of one piece broken down
* Maybe whole inactivity tab? 

## Other

**game variables**
filters: format, broken, mod, gm, winner, complexity, setting, length
non-filters: game, # of players, alignments, outcomes, inactives, winner, length

__ __ __

**Data collection stuff**
- Lot of Broken isn't filled in
- scrape start and end dates from 17S
- eventually also scrape votes, quicklinks, etc
- figure out how to pull from stats sheet automatically - *once sheet is rearranged properly*

___ 

**Bugs**
- For conversion games, only first elim is counting