// ------------PLOT FUNCTIONS-------------------

// STACKED BAR
function SpGBars(x, y1, y2, labels, div) {
    let trace1 = {
      x: x,
      y: y1,
      type: 'bar',
      text: labels,
      marker: {color: 'black'},
      name: 'dead'
    };

    let trace2 = {
        x: x,
        y: y2,
        type: 'bar',
        text: labels,
        marker: {color: 'blue'},
        name: 'survived'
    };

    let data_plot = [trace1, trace2];

    let layout = {
      title: 'Survival/Death per Game',
      xaxis: {title: "Game"},
      yaxis: {title: "# of players"},
      barmode: 'stack'
    };

    Plotly.newPlot(div, data_plot, layout);
};


// Length - Outcome Bar 
function LVbar(x, y, colors, div){
    let my_data = [{
        x: x,
        y: y,
        marker: {
            color: colors
        },
        type: 'bar'
    }];

    let my_layout = {
        title: "Average Game Length by Outcome",
        xaxis: {title: "Outcome"},
        yaxis: {title: "Avg. Length (cycles)"},
        hovermode: 'closest'
    };

    Plotly.newPlot(div, my_data, my_layout);
};

// outcome pie
// PIE
function outcomePie(values, labels, colors, div, title) {
    let data = [{
        values: values,
        labels: labels,
        type: 'pie',
        marker: {colors: colors}
      }];
      

    let layout = {
      title: 'Games by Outcome'
    };

    Plotly.newPlot(div, data, layout);
};


// DOT PLOT - evil % for each outcome
function outcomeDot(evil_percs, outcomes, div, labels) {
    let trace1 = {
        x:  evil_percs,
        y: outcomes,

        type: 'scatter', 
        mode: 'markers',
        marker: {
            color: 'blue',
            symbol: 'circle',
            size: 16
        },
        text: labels
        // stuff
    };

    let data = [trace1];

    let layout = {
        title: "Evil Team Size by Outcome",
        xaxis: {
            showgrid: false,
            showline: true,
            
        }
    };

    Plotly.newPlot(div, data, layout);
}






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



// SCATTER
function drawScatter(x_value, xlabel, y_value, ylabel, labels, div, title, colors) {
    let trace1 = {
        x: x_value,
        y: y_value,
        type: 'scatter',
        text: labels,
        mode: 'markers',
        marker: {color: colors}
    }

    let layout = {
        title: title,
        xaxis: {title: xlabel},
        yaxis: {title: ylabel}
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
};