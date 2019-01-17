class Window {
    constructor(left, top, width, height, margin, color) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.margin = margin;
        this.color = color;
    }
}

class ToolsWindow extends Window {
    constructor(left, top, width, height, margin, color, tools) {
        super(left, top, width, height, margin, color);
        this.tools = tools;
        this.toolsPerRow = Math.floor((this.width - margin.left - margin.right) / 75);
    }
}

class Splitter {
    constructor(leftWindow, rightWindow) {
        this.left = leftWindow.width - leftWindow.margin.right;
        this.right = rightWindow.left + rightWindow.margin.left;
        this.top = leftWindow.margin.top;
        this.bottom = leftWindow.height - leftWindow.margin.bottom;
        this.color = '#e5e5e5';
        this.onHoverColor = '#d5d5d5';
        this.hovering = false;
        this.dragging = false;
        this.firstLineLeft = leftWindow.width - 1;
        this.secondLineLeft = leftWindow.width + 1;
        this.linesTop = leftWindow.height / 2 - 4;
        this.linesWidth = 1;
        this.linesHeight = 8;
    }
}

const toolsWindow = new ToolsWindow(0, 0, 250, canvasHeight, {left: 15, top: 15, right: 7, bottom: 15}, '#fff', tools);

const chartWindow = new Window(toolsWindow.width, 0, canvasWidth - toolsWindow.width, canvasHeight, {left: 7, top: 15, right: 15, bottom: 15}, '#fff');

const splitter = new Splitter(toolsWindow, chartWindow);

const hoverables = [splitter, ...tools];
