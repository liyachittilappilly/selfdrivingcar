//road class constructor calculates boundry and create border lines for collision detection

class Road {
    constructor(x, width, laneCount = 3) {
        this.x = x; //center x position of road
        this.width = width;
        this.laneCount = laneCount;
        this.left = x - width / 2; //left boundry of road
        this.right = x + width / 2; //right
        const infinity = 1000000;
        this.top = -infinity; //top boundry
        this.bottom = infinity; //bttm

        //define corner
        const topLeft = { x: this.left, y: this.top };
        const topRight = { x: this.right, y: this.top };
        const bottomLeft = { x: this.left, y: this.bottom };
        const bottomRight = { x: this.right, y: this.bottom };

//create border

        this.borders = [
            [topLeft, bottomLeft],
            [topRight, bottomRight]
        ];
    }

    getLaneCenter(laneIndex) {
        const laneWidth = this.width / this.laneCount;
        return this.left + laneWidth / 2 +
            Math.min(laneIndex, this.laneCount - 1) * laneWidth; // ensure we dont go beyond last lane 
                                                                // if invalid indx is givn
    }

    draw(ctx) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";
        
        // Draw lane markings
        for (let i = 1; i <= this.laneCount - 1; i++) {
            const x = lerp(
                this.left,
                this.right,
                i / this.laneCount
            );
            
            ctx.setLineDash([20, 20]);
            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }
        
        // Draw road borders
        ctx.setLineDash([]);
        ctx.lineWidth = 8;
        this.borders.forEach(border => {
            ctx.beginPath();
            ctx.moveTo(border[0].x, border[0].y);
            ctx.lineTo(border[1].x, border[1].y);
            ctx.stroke();
        });
    }
}