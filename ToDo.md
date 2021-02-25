# To Do

### File Structure / cross-files tasks
- Change paths for all analysis outputs (done in to_mongo, tbd in ETL one) to account for moving them into Cleaning
- Move cleaning/dataX into resources folder? 
- Change Games & Player folder names to be more clear about what they do?
- Divide static folder into one for each page? 
- Comment code ala CS246 (esp header comment)

### ????
- what is the sqlite file here for
- why are there 2 ToMongos
- am I gonna need a key for colors somewhere? esp specific evil colors

### All-pages html stuff
- Footer? 
- way to pull navbar html automatically? (is it flask (sigh))
    * Navbar has to be changed by folder for links to work

## About Page
- about page - Format tabs & fill with content; add how-to above
- Diagram of how mafia works? 

### README page
- add links to various libraries used

## Games

### All Games page
* Filters - make some checkboxes instead of dropdowns? 
* Tabs to show specific things? (Outcomes, Broken, Inactivity, format? )
* Fiddle with outcome/elim % dot plot
#### plot ideas
* Bar plot: # surviving players vs game; color indicates what amount of each alignment was left alive (and colored by win?)
* Maybe initial bar plot is scatter & by outcome instead? Survival/death distracts a lot from the point
    - Consider lines of best fit
* Bubble plot: outcomes vs length
* Modified sunburst diagram - pie chart that you can click to see the extent of one piece broken down
* Maybe whole inactivity tab/page?  
* Evil % vs outcome ?? - dot plot?
// # of inactives over time scatter

### Specific games page
* Players buttons - color=alignment, outline shows win/loss, strikethrough shows death, mouseover for kill type

## Players

### All players page
* at least make interactive

## Other

### Other page ideas
- Inactivity
- Broken

**game variables**
filters: format, broken, mod, gm, winner, complexity, setting, length
non-filters: game, # of players, alignments, outcomes, inactives, winner, length

__ __ __

**Data collection stuff**
- Lot of Broken isn't filled in
- scrape start and end dates from 17S
- eventually also scrape votes, quicklinks, etc
- figure out how to pull from stats sheet automatically - *once sheet is rearranged properly*

***Stats Sheet To Do***
* Combine GM/Spec/Mod columns
* transpose game sheet and fill out last half
* add validation e v e r y w h e r e
* mark broken (and how?) in gamedata sheet, not player data

___ 

**Bugs**
- For conversion games, only first elim is counting


**Transforms**
* rename S_death so it's not directly unintuitive

- move `datacsvs` and `datajsons` into a `resources` folder and update references appropriately
- possibly - create folder for all html pages? (except index)
- move ToMongo.ipynb to Cleaning folder and update references (unless can't for some reason? pretty sure it was just convenience, though)
- split ETL into three files or have all in one; ET and separate L is weird
- Consistent code formatting by language: take out camelCase in Python and snake_case in JS