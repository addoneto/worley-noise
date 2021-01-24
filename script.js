let POINTS_NUM = 50;

window.onload = function () {
    const canvas = document.getElementsByTagName('canvas')[0];
    const context = canvas.getContext('2d');

    canvas.width = 950;
    canvas.height = 950;

    context.fillStyle = 'rgb(50, 50, 50)';
    context.fillRect(0,0, canvas.width, canvas.height);

    context.fillStyle = 'rgb(200, 20, 80)';

    let points = [];

    for (let i = 0; i < POINTS_NUM; i++){
        const pos = {
            x: Math.floor(Math.random() *  canvas.width + 1),
            y: Math.floor(Math.random() * canvas.height + 1),
        }

        points.push( pos );
    }

    let canvasImage = context.getImageData(0, 0, canvas.width, canvas.height);
    let pixels = canvasImage.data;

    for(let x = 0; x < canvas.width; x++){
        for(let y = 0; y < canvas.height; y++){
            let pixelIndex = (x + y * canvas.width) * 4;
            
            let closestDist = dist(x,y,points[0].x,points[0].y);

            for(let i = 1; i < POINTS_NUM; i++){
                let newDist = dist(x, y, points[i].x, points[i].y);

                if(newDist < closestDist){
                    closestDist = newDist;
                }
            }

            let finalColor = map(closestDist, 0, canvas.width / 4, 255, 0);

            pixels[pixelIndex    ] = finalColor;
            pixels[pixelIndex + 1] = finalColor;
            pixels[pixelIndex + 2] = finalColor;
        }
    }

    context.putImageData(canvasImage, 0, 0);

    // for(point of points){
    //     context.beginPath();
    //     context.arc(point.x, point.y, 4, 0, Math.PI * 2, false);
    //     context.closePath();
    //     context.fill();
    // }
}

function dist(x1, y1, x2, y2){
    return Math.sqrt( (x1 - x2) ** 2 + (y1 - y2) ** 2);
}

function map(value, start1, stop1, start2, stop2) {
    return (value - start1) / (stop1 - start1) * (stop2 - start2) + start2;
}