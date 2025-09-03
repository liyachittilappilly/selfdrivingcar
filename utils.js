function lerp(A, B, t) {
    return A + (B - A) * t;
}

// Linear Interpolation
// calculates val btwn a ,b based on t (ranges from 0-1)
// When t=0, returns A; t=1, returns B; 
//      for values in between, returns proportional blend of a,b

function getIntersection(A, B, C, D) {
    const tTop = (D.x - C.x) * (A.y - C.y) - (D.y - C.y) * (A.x - C.x);
    const uTop = (C.y - A.y) * (A.x - B.x) - (C.x - A.x) * (A.y - B.y);
    const bottom = (D.y - C.y) * (B.x - A.x) - (D.x - C.x) * (B.y - A.y);

    if (bottom != 0) {
        const t = tTop / bottom;
        const u = uTop / bottom;
        if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
            return {
                x: lerp(A.x, B.x, t),
                y: lerp(A.y, B.y, t),
                offset: t
            }
        }
    }
    return null;
}

// Getintersection calculates intrsection pt btwn 2 line segment ab,cd
// If they intersect, return intrsection pt and offset(how far first line intersection occur)
// If not intersect, returns null

function polysIntersect(poly1, poly2) {
    for (let i = 0; i < poly1.length; i++) {
        for (let j = 0; j < poly2.length; j++) {
            const touch = getIntersection(
                poly1[i],
                poly1[(i + 1) % poly1.length],
                poly2[j],
                poly2[(j + 1) % poly2.length] //(i+1)%poly1.length ensure we wrap to first vertex when we reach last.
            );
            if (touch) {
                return true;
            }
        }
    }
    return false;
}

// Polyintersect check if 2 polygon intersect 
// by checking if their edges intersect

function getRGBA(value) {
    const alpha = Math.abs(value);
    const R = value < 0 ? 0 : 255;
    const G = R;
    const B = value > 0 ? 0 : 255;
    return "rgba(" + R + "," + G + "," + B + "," + alpha + ")";
}
//Function gnrat RGBA color string based on val
// Positive val in red,negative val in blue
//Abs val of input determine alpha(transparency)