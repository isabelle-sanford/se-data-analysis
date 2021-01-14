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
      text: labels1,
      marker: {color: 'black'}
    };

    let trace2 = {
        x: x2,
        y: y2,
        type: 'bar',
        text: labels2,
        marker: {color: 'blue'}
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