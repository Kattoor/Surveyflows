function draw() {
    clear();
    drawToolsWindow();
    drawChartWindow();
    drawSplitter();
}

function clear() {
    context.fillStyle = '#e5e5e5';
    context.fillRect(0, 0, canvasWidth, canvasHeight);
}

function drawToolsWindow() {
    context.fillStyle = toolsWindow.color;
    context.fillRect(toolsWindow.margin.left, toolsWindow.margin.top, toolsWindow.width - toolsWindow.margin.left - toolsWindow.margin.right, toolsWindow.height - toolsWindow.margin.top - toolsWindow.margin.bottom);

    drawTools();
}

function drawTools() {
    toolsWindow.tools.forEach((tool, index) => {
        const x = 20 + toolsWindow.margin.left + (index % toolsWindow.toolsPerRow) * 70;
        const y = 20 + toolsWindow.margin.top + Math.floor(index / toolsWindow.toolsPerRow) * 70;
        tool.moveTo(x, y);
        tool.draw(context);
        if (tool.hovering) {
            context.strokeStyle = '#000';
            context.lineWidth = 1;
            context.strokeRect(x - 10 + .5, y - 10 + .5, 70, 70);
        }
    });
}

function drawChartWindow() {
    context.fillStyle = chartWindow.color;
    context.fillRect(chartWindow.margin.left + chartWindow.left, chartWindow.margin.top, chartWindow.width - chartWindow.margin.left - chartWindow.margin.right, chartWindow.height - chartWindow.margin.top - chartWindow.margin.bottom);
}

function drawSplitter() {
    context.fillStyle = splitter.hovering || splitter.dragging ? splitter.onHoverColor : splitter.color;
    context.fillRect(splitter.left, splitter.top, splitter.right - splitter.left, splitter.bottom - splitter.top);

    context.fillStyle = '#000';
    context.fillRect(splitter.firstLineLeft, splitter.linesTop, splitter.linesWidth, splitter.linesHeight);
    context.fillRect(splitter.secondLineLeft, splitter.linesTop, splitter.linesWidth, splitter.linesHeight);
}

setInterval(() => {
    draw();
}, 1000 / 60);
