class Tool {
    constructor(x, y, drawFunction) {
        this.left = 0;
        this.top = 0;
        this.right = 0;
        this.bottom = 0;

        this.hovering = false;

        this.drawFunction = drawFunction;

        moveTo(x, y);
    }

    moveTo(x, y) {
        this.x = x;
        this.y = y;

        this.left = x - 10;
        this.top = y - 10;
        this.right = x + 60;
        this.bottom = y + 60;
    }

    draw(context) {
        this.drawFunction(this.x, this.y, context);
    }
}

const tools = [
    new Tool(0, 0, (x, y, context) => {
        context.strokeStyle = '#000';
        context.lineWidth = 2;
        context.strokeRect(x + 3, y + 3, 44, 44);
    }),
    new Tool(0, 0, (x, y, context) => {
        context.strokeStyle = '#000';
        context.lineWidth = 2;
        context.strokeRect(x + 3, y + 13, 44, 24);
    }),
    new Tool(0, 0, (x, y, context) => {
        context.strokeStyle = '#000';
        context.lineWidth = 2;
        context.beginPath();
        context.arc(x + 25, y + 25, 23, 0, Math.PI * 2);
        context.closePath();
        context.stroke();
    }),
    new Tool(0, 0, (x, y, context) => {
        context.strokeStyle = '#000';
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(x + 3, y + 3);
        context.lineTo(x + 47, y + 25);
        context.lineTo(x + 3, y + 47);
        context.closePath();
        context.stroke();
    }),
    new Tool(0, 0, (x, y, context) => {
        context.strokeStyle = '#000';
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(x + 25, y + 3);
        context.lineTo(x + 47, y + 25);
        context.lineTo(x + 25, y + 47);
        context.lineTo(x + 3, y + 25);
        context.closePath();
        context.stroke();
    }),
    new Tool(0, 0, (x, y, context) => {
        context.strokeStyle = '#000';
        context.lineWidth = 2;
        context.beginPath();
        context.arc(x + 25, y + 10, 7, 0, Math.PI * 2);
        context.closePath();
        context.stroke();

        context.beginPath();
        context.moveTo(x + 25, y + 17);
        context.lineTo(x + 25, y + 34);

        context.lineTo(x + 16, y + 47);
        context.moveTo(x + 25, y + 34);
        context.lineTo(x + 34, y + 47);

        context.moveTo(x + 15, y + 24);
        context.lineTo(x + 35, y + 24);

        context.closePath();
        context.stroke();
    }),
    new Tool(0, 0, (x, y, context) => {
        context.fillStyle = '#000';
        context.font = '25px Calibri';
        context.fillText("Text", x + 3, y + 30);
    })
];
