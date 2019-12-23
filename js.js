class Options {
    constructor (height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let div = document.createElement('div');
            div.textContent = 'привет';
            div.style.cssText = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}`;
        return div;
    }
}

const newDiv = new Options(200, 300, 'lightblue', 25, 'left');


let div = newDiv.createDiv();
document.body.appendChild(div);
console.log(div);





