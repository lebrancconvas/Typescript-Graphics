import fs from 'fs';

const FORMAT: string = "P3";
const WIDTH: number = 256;
const HEIGHT: number = 256;
const MAX_COLOR: number = 255;

let DrawScript = `${FORMAT}\n${WIDTH} ${HEIGHT}\n${MAX_COLOR}\n`;

function draw(slope: number, intercept: number) {
	for(let y = 0; y < HEIGHT; y++) {
		for(let x = 0; x < WIDTH; x++) {
			if(y = Math.floor(slope * x + intercept)) {
				DrawScript += `0 0 0\n`;
			} else {
				DrawScript += `255 255 255\n`;
			}
		}
	}
	return DrawScript;
}

export function generate() {
	fs.writeFileSync('./src/line_drawing/naive.ppm', draw(1, 0));
}