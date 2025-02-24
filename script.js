console.clear();
//console.log("HELLO");
const oriImages = {
    1: {
        category: ["moon"],
        url: "Images/20221109_215055.jpg",
    },
    2: {
        category: ["special light"],
        url: "Images/20221122_155501.jpg",
    },
    3: {
        category: ["lamp"],
        url: "Images/20221124_202624.jpg",
    },
    4: {
        category: ["traffic"],
        url: "Images/20230214_084410.jpg",
    },
    5: {
        category: ["sunset"],
        url: "Images/20230220_181153.jpg",
    },
    6: {
        category: ["sunset"],
        url: "Images/20230307_064012.jpg",
    },
    7: {
        category: ["casual"],
        url: "Images/20230307_070157.jpg",
    },
    8: {
        category: ["moon"],
        url: "Images/20230307_215043.jpg",
    },
    9: {
        category: ["monument"],
        url: "Images/20230309_143234.jpg",
    },
    10: {
        category: ["lamp"],
        url: "Images/20230325_223427.jpg",
    },
    11: {
        category: ["traffic", "rain"],
        url: "Images/20230404_185950.jpg",
    },
    12: {
        category: ["sky"],
        url: "Images/20230406_174623.jpg",
    },
    13: {
        category: ["monument"],
        url: "Images/20230409_121303.jpg",
    },
    14: {
        category: ["monument"],
        url: "Images/20230409_123016.jpg",
    },
    15: {
        category: ["sky"],
        url: "Images/20230413_140553.jpg",
    },
    16: {
        category: ["sky"],
        url: "Images/20230413_142036.jpg",
    },
    17: {
        category: ["nature"],
        url: "Images/20230505_212349.jpg",
    },
    18: {
        category: ["nature"],
        url: "Images/20230506_204859.jpg",
    },
    19: {
        category: ["good view"],
        url: "Images/20230506_205601.jpg",
    },
    20: {
        category: ["sky"],
        url: "Images/20230514_154134.jpg",
    },
    21: {
        category: ["nature"],
        url: "Images/20230514_205309.jpg",
    },
    22: {
        category: ["nature"],
        url: "Images/20230515_202543.jpg",
    },
    23: {
        category: ["sky"],
        url: "Images/20230526_204219.jpg",
    },
    24: {
        category: ["nature"],
        url: "Images/20230527_151438.jpg",
    },
    25: {
        category: ["colorful"],
        url: "Images/20230601_150558.jpg",
    },
    26: {
        category: ["nature"],
        url: "Images/20230601_153745.jpg",
    },
    27: {
        category: ["love"],
        url: "Images/20230603_101411.jpg",
    },
    28: {
        category: ["love"],
        url: "Images/20230603_101437.jpg",
    },
    29: {
        category: ["sunrise"],
        url: "Images/20230622_064034.jpg",
    },
    30: {
        category: ["nature", "colorful"],
        url: "Images/20230628_202232.jpg",
    },
    31: {
        category: ["casual"],
        url: "Images/20230727_201136.jpg",
    },
    32: {
        category: ["good view"],
        url: "Images/20230730_200544.jpg",
    },
    33: {
        category: ["night light"],
        url: "Images/20230730_203124.jpg",
    },
    34: {
        category: ["night light"],
        url: "Images/20230730_203124_remastered.jpg",
    },
    35: {
        category: ["night light"],
        url: "Images/20230730_214605.jpg",
    },
    36: {
        category: ["sky"],
        url: "Images/20230731_112052.jpg",
    },
    37: {
        category: ["moon"],
        url: "Images/20230801_214152.jpg",
    },
    38: {
        category: ["sky"],
        url: "Images/20230810_113149.jpg",
    },
    39: {
        category: ["monument"],
        url: "Images/20230811_140302.jpg",
    },
    40: {
        category: ["sunset"],
        url: "Images/20230812_193938.jpg",
    },
    41: {
        category: ["traffic", "city"],
        url: "Images/20230907_193721.jpg",
    },
    42: {
        category: ["monument"],
        url: "Images/20230907_195802.jpg",
    },
    43: {
        category: ["monument"],
        url: "Images/20230907_195852.jpg",
    },
    44: {
        category: ["night light", "nature"],
        url: "Images/20230907_200928.jpg",
    },
    45: {
        category: ["monument", "sky"],
        url: "Images/20230921_125618.jpg",
    },
    46: {
        category: ["nature"],
        url: "Images/20231011_133040.jpg",
    },
    47: {
        category: ["traffic", "sunset"],
        url: "Images/20231019_172705.jpg",
    },
    48: {
        category: ["sky"],
        url: "Images/20231120_105258.jpg",
    },
    49: {
        category: ["sky", "traffic", "sunset"],
        url: "Images/20231123_155639.jpg",
    },
    50: {
        category: ["nature", "fall"],
        url: "Images/20231126_114316.jpg",
    },
    51: {
        category: ["nature"],
        url: "Images/20231126_114333.jpg",
    },
    52: {
        category: ["nature"],
        url: "Images/20231201_163458.jpg",
    },
    53: {
        category: ["traffic"],
        url: "Images/20231201_204914.jpg",
    },
    54: {
        category: ["monument", "snow"],
        url: "Images/20231207_125214.jpg",
    },
    55: {
        category: ["sky"],
        url: "Images/20231207_155657.jpg",
    },
    56: {
        category: ["sky", "city"],
        url: "Images/20231207_170734.jpg",
    },
    57: {
        category: ["traffic", "rain"],
        url: "Images/20231210_131242.jpg",
    },
    58: {
        category: ["sky", "sunset"],
        url: "Images/20240206_071427.jpg",
    },
    59: {
        category: ["city", "sky"],
        url: "Images/20240219_181213.jpg",
    },
    60: {
        category: ["coffee"],
        url: "Images/20240301_072329.jpg",
    },
};
function displayNavCategories(oriImages) {
    try {
        const navigation = document.querySelector("nav");
        const ul = document.createElement("ul");
        const categories = [];
        Object.values(oriImages).forEach((value) => {
            oriCategories = value["category"];
            for (let i = 0; i < oriCategories.length; i++) {
                if (!categories.includes(oriCategories[i])) {
                    categories.push(oriCategories[i]);
                }
            }
        });
        categories.sort();
        categories.unshift("all");
        for (let i = 0; i < categories.length; i++) {
            const li = document.createElement("li");
            li.textContent = categories[i].toUpperCase();
            li.addEventListener("click", filterImages);
            ul.appendChild(li);
        }
        navigation.appendChild(ul);
    } catch (error) {
        console.log("Navigation catch. " + error);
    } finally {
        try {
            const [categories, urls] = objToArr(oriImages);
            displayImages(categories, urls);
            activImg("undefined");
        } catch (error) {
            console.log("Images displaying catch. " + error);
        } finally {
            const buttons = document.querySelectorAll(".indication button");
            buttons.forEach((button) => {
                button.addEventListener("click", activImg);
            });
        }
    }
}
displayNavCategories(oriImages);

function filterImages(event) {
    category = event.target.textContent.toLowerCase();
    const [categories, urls] = objToArr(oriImages, category);
    displayImages(categories, urls);
    activImg("undefined");
    if (category !== "all") {
        const p = document.querySelectorAll(".image > p");
        for (let i = 0; i < p.length; i++) {
            p[i].style.display = "none";
        }
    }
}

function objToArr(object, category = "all") {
    const categories = [];
    const urls = [];
    Object.values(object).forEach((value) => {
        if (category === "all") {
            categories.push(value["category"]);
            urls.push(value["url"]);
        } else if (value["category"].includes(category)) {
            categories.push(value["category"]);
            urls.push(value["url"]);
        }
    });
    return [categories, urls];
}

async function displayImages(categories, urls) {
    const containerImg = document.querySelector(".container");
    let container = "";
    let nImg = 0;
    if ((categories.length = urls.length)) {
        nImg = categories.length;
        for (let i = 0; i < categories.length; i++) {
            container += createDivImg(urls[i], categories[i]);
        }
    }
    containerImg.innerHTML = container;
    sunriseSunset();
}

function createDivImg(url, category /*, containerImg*/) {
    let divImg = "";
    divImg += "<div class='image'>";
    divImg += createImg(url, category /*, div*/);
    divImg += createPar(category /*, div*/);
    divImg += "</div>";
    return divImg;
    /*const div = document.createElement("div");
    div.className = "image";
    createImg(url, category, div);
    createPar(category, div);
    div.addEventListener("click", function () {
        console.log(url);
    });
    containerImg.appendChild(div);*/
}

function createImg(url, category /*, div*/) {
    let image = "";
    image = `<img src="${url}" alt="${category}" loading="lazy">`;
    return image;
    /*const img = document.createElement("img");
    img.src = url;
    img.alt = category;
    img.loading = "lazy"; //imaginile se incarca doar cand utilizatorul ajunge la ele pe pagina
    div.appendChild(img);*/
}

function createPar(categories /*, div*/) {
    let par = "";
    par = "<p class='category'>";
    if (categories.length >= 2) {
        for (let i = 0; i < categories.length; i++) {
            //console.log(categories[i].toUpperCase());
            par += categories[i].toUpperCase();
            if (i < categories.length - 1) {
                par += ", ";
            }
        }
    } else {
        par += categories[0].toUpperCase();
    }
    return par;
    /*const p = document.createElement("p");
    p.className = "category";
    if (categories.length >= 2) {
        for (let i = 0; i < categories.length; i++) {
            p.textContent += categories[i].toUpperCase();
            if (i < categories.length - 1) {
                p.textContent += ", ";
            }
        }
    } else {
        p.textContent += categories[0].toUpperCase();
    }
    div.appendChild(p);*/
}

function activImg(event = "undefined") {
    //console.log("Control event " + event.target.id);
    if (event === "undefined") {
        console.log("undefined");
    } else if (event !== "undefined") {
        console.log("not undefined");
    }
    const [visualizedImg, visualizedImgLen] = cathcVis();
    console.log("Visualized images " + visualizedImgLen);
    const [min, step] = getMinStep(event, visualizedImgLen);
    console.log("MIN si step " + min + " " + step);
    activateImg(visualizedImg, visualizedImgLen, min, step);
    updateSelect(event);
}

function getMinStep(event, visualizedImgLen) {
    let select = document.querySelector(".indication select");
    let step = Number(select.options[select.options.selectedIndex].value);
    let min = 0;
    let label = document.querySelector(".indication label").textContent;
    let indexSlash = label.indexOf("/");
    let indexBar = label.indexOf("-");
    /*if (step >= visualizedImgLen) {
        console.log(step+max + " " + visualizedImgLen);
        Object.values(document.querySelectorAll(".indication button[value='+']")).forEach(element => {
            console.log("great " + true);
            element.disabled = true;
            element.style.backgroundColor = "red";
        });

    } else {
        Object.values(document.querySelectorAll(".indication button[value='+']")).forEach(element => {
            console.log("great " + false);
            element.disabled = false;
            element.style.backgroundColor = "green";
        });
    }*/

    if (event === "undefined" || event.target.id === "selection") {
        step = Number(select.options[select.options.selectedIndex].value);
        console.log("Selection " + min + " " + step);
        displayIndication(min, step, visualizedImgLen, event);
    } else if (event.target.value === "+") {
        console.log("plus");
        min = Number(label.slice(0, indexSlash)) + step;
        max = Number(label.slice(indexSlash + 1, indexBar));
        if (max == visualizedImgLen) {
            console.log("first if");
            min = Number(label.slice(0, indexSlash));
            step = max;
        } else if (max >= visualizedImgLen) {
            console.log("second if");
            min = visualizedImgLen + 1 - step;
            console.log("min " + min);
            step = visualizedImgLen;
        } else {
            console.log("lese");
            step += max;
        }
        displayIndication(min, step, visualizedImgLen, event);
    } /*else if (event !== "undefined" && event.target.value === "-") {
        console.log("minus");
        indexBar = indexBar - 1;
        step = Number(select.options[select.options.selectedIndex].value);
        min = Number(label.slice(0, indexSlash)) - step;
        max = min + step - 1;
        step = max;
        displayIndication(min, step, visualizedImgLen, event);
    }*/ else {
        displayIndication(min, step, visualizedImgLen, event);
    }
    /*console.log(min + " " + step);
        if (step >= visualizedImgLen) {
            console.log(true);
            Object.values(document.querySelectorAll(".indication button[value='+']")).forEach(element => {
                console.log("great " + true);
                element.disabled = true;
            });
        }*/

    return [min, step];
}

function displayIndication(min, max, total, event) {
    console.log("MIN si MAX si total " + min + " " + max + " " + total);
    Object.values(document.querySelectorAll(".indication label")).forEach(
        (element) => {
            if (total < max && min == 0) {
                console.log("total " + total);
                element.textContent = `${total}/${total}`;
            } else if (total < max) {
                element.textContent = `${min}/${total} - ${total}`;
            } else if (min == 0) {
                element.textContent = `${min + 1}/${max} - ${total}`;
            } else {
                element.textContent = `${min}/${max} - ${total}`;
            }
        }
    );
}

function cathcVis() {
    const visualizedImg = document.querySelectorAll(".image");
    const visualizedImgLen = Object.keys(visualizedImg).length;
    return [visualizedImg, visualizedImgLen];
}
function activateImg(visualizedImg, visualizedImgLen, min, max) {
    for (let i = 0; i < visualizedImgLen; i++) {
        if (i >= min - 1 && i < max) {
            visualizedImg[i].style.display = "inline-block";
        } else {
            visualizedImg[i].style.display = "none";
        }
    }
}
//doesnt work   well
function updateSelect(event) {
    try {
        if (typeof event !== "undefined" && event.target.id === "selection") {
            const selects = document.querySelectorAll("#selection");
            let step = Number(event.target.value);
            console.log("Select " + step);  
            Object.values(selects).forEach((element) => {
                element.selectedIndex.value = step;
                console.log("value " + event.target.value);
            });
        }
    }
    catch (error) {
        console.log("Select catch. " + error);
    }
}

/*function lessMoreImg(event) {}
 */
function sunriseSunset() {
    const hour = new Date().getHours();
    const isDay = hour >= 7 && hour < 19; // Ziua este între 6:00 și 19:00
    const body = document.querySelector("body");
    const nav1 = document.querySelector("nav");
    const lis1 = document.querySelectorAll("ul > li");
    //const hr1 = document.querySelector("hr");
    const images1 = document.querySelectorAll(".image");
    if (!isDay) {
        document
            .querySelectorAll("*")
            .forEach((el) => (el.style.color = "white"));
        body.classList.add("bodyDark");
        nav1.classList.add("navDark");
        lis1.forEach((li) => {
            li.classList.add("darkLi");
        });
        images1.forEach((image) => {
            image.classList.add("darkImage");
        });
    }
}
