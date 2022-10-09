// Digital Differential Analyzer Line Drawing Algorithm. 

import fs from 'fs';

const FORMAT: string = "P3";
const WIDTH: number = 256;
const HEIGHT: number = 256;
const MAX_COLOR: number = 255;

let DrawScript = `${FORMAT}\n${WIDTH} ${HEIGHT}\n${MAX_COLOR}\n`;

function draw(slope: number, intercept: number) {
	let expectedY = 0;
	let actualY;
	for(let y = 0; y < HEIGHT; y++) {
		for(let x = 0; x < WIDTH; x++) {
			if(y === Math.round(expectedY)) {
				DrawScript += `0 0 0\n`;
			} else {
				DrawScript += `255 255 255\n`;
			}
		}
		expectedY += slope;
	}
	return DrawScript;
}

export function generate() {
	fs.writeFileSync('./src/line_drawing/dda/dda.ppm', draw(0.8, 0));
}