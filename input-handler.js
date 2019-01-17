function squareContainsPosition(squareLeft, squareRight, squareTop, squareBottom, posX, posY) {
    return posX > squareLeft && posX < squareRight && posY > squareTop && posY < squareBottom;
}

document.onmousemove = event => {

    if (!draggingAnything) {
        document.body.style.cursor = 'default';
    }

    hoverables.forEach(hoverable => {
        hoverable.hovering = squareContainsPosition(hoverable.left, hoverable.right, hoverable.top, hoverable.bottom, event.clientX, event.clientY);

        if (hoverable.hovering) {
            if (hoverable === splitter) {
                document.body.style.cursor = 'col-resize';
            } else if (tools.indexOf(hoverable) !== -1) {
                document.body.style.cursor = 'grab';
            }
        }
    });

    if (splitter.dragging) {
        toolsWindow.width = Math.min(Math.max(115, event.clientX), 750);
        chartWindow.left = toolsWindow.width;
        chartWindow.width = canvasWidth - toolsWindow.width;

        splitter.left = toolsWindow.width - toolsWindow.margin.right;
        splitter.right = chartWindow.left + chartWindow.margin.left;
        splitter.firstLineLeft = toolsWindow.width - 1;
        splitter.secondLineLeft = toolsWindow.width + 1;

        toolsWindow.toolsPerRow = Math.max(1, Math.floor((toolsWindow.width - toolsWindow.margin.left - toolsWindow.margin.right) / 75));
    }
};

let draggingAnything = false;
document.onmousedown = event => {
    if (squareContainsPosition(splitter.left, splitter.right, splitter.top, splitter.bottom, event.clientX, event.clientY)) {
        splitter.dragging = true;
        document.body.style.cursor = 'col-resize';
        draggingAnything = true;
    }
};

document.onmouseup = event => {
    splitter.dragging = false;
    draggingAnything = false;
};
