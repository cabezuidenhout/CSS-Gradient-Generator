const previewArea = document.querySelector(".preview");
const randColorsButton = document.querySelector("#randomColorsButton");
const randButton = document.querySelector("#randomButton");
const randDirButton = document.querySelector('#randomDirButton');
const cssField = document.querySelector("#cssGenerated");

const getColorVal = () => Math.floor(Math.random()*256);
const getRandomColor = () => `rgb(${getColorVal()},${getColorVal()},${getColorVal()})`;
const getColorsFromGradient = (gradient) =>  gradient.colors.reduce( (a,c) => {
    return a += `,${c}`;
},"");

const gradient = {
    direction: "to bottom",
    colors: [getRandomColor(),getRandomColor()]
};

const setGradient = (element, gradient) => {
    element.style.background = `linear-gradient(${gradient.direction}${getColorsFromGradient(gradient)})`;
    cssField.value = element.style.background;
};

const randomizeColors = (colors) => {
    return colors.map( (c) => {
        return getRandomColor();
    });
};

const randomDirection = () => `${Math.floor(Math.random()*360)-180}deg`;

randColorsButton.addEventListener("click", () => {
    gradient.colors = randomizeColors( gradient.colors);
    setGradient( previewArea, gradient);
});

randButton.addEventListener("click", () => {
    gradient.colors = randomizeColors( gradient.colors);
    gradient.direction = randomDirection();
    setGradient( previewArea, gradient);
});

randDirButton.addEventListener("click", () => {
    gradient.direction = randomDirection();
    setGradient( previewArea, gradient);
});

document.onreadystatechange = () => {
    if( document.readyState === 'complete') {
        gradient.colors = randomizeColors( gradient.colors );
        gradient.direction = randomDirection();
        setGradient(previewArea, gradient)
    }
};