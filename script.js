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
            displayIndication();
        } catch (error) {
            console.log("Images displaying catch. " + error);
        } finally {
            const buttons = document.querySelectorAll(".indication button");
            buttons.forEach((button) => {
                //button.addEventListener("click", lessMoreImg);
            });
        }
    }
}   displayNavCategories(oriImages);

function filterImages(event) {
    category = event.target.textContent.toLowerCase();
    const [categories, urls] = objToArr(oriImages, category);
    displayImages(categories, urls);
    displayIndication();
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

function displayImages(categories, urls, nVis) {
    const containerImg = document.querySelector(".container");
    containerImg.innerHTML = "";
    let nImg = 0;
    if ((categories.length = urls.length)) {
        nImg = categories.length;
        for (let i = 0; i < categories.length; i++) {
            createDivImg(urls[i], categories[i], containerImg);
        }
    }
    sunriseSunset();
}

async function createDivImg(url, category, containerImg) {
    const div = document.createElement("div");
    div.className = "image";
    createImg(url, category, div);
    createPar(category, div);
    div.addEventListener("click", function () {
        console.log(url);
    });
    containerImg.appendChild(div);
}

async function createImg(url, category, div) {
    const img = document.createElement("img");
    img.src = url;
    img.alt = category;
    img.loading = "lazy"; //imaginile se incarca doar cand utilizatorul ajunge la ele pe pagina
    div.appendChild(img);
}

async function createPar(categories, div) {
    const p = document.createElement("p");
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
    div.appendChild(p);
}

function displayIndication(element = "undefined") {
    let imgPag = 0;
    let imgVis = 0;
    if (element === "undefined") {
        imgPag = Number(document.getElementById("selection").value);
    } else {
        imgPag = Number(element.value)
    }
    
    console.log(element.value);
    const visualizedImg = document.querySelectorAll(".image");
    console.log(Object.keys(visualizedImg).length);
    const visualizedImgLen = Object.keys(visualizedImg).length;
    for (let i = 0; i < visualizedImgLen; i++) {
        console.log(true + " undefined");
        if (i > imgPag-1) {
            visualizedImg[i].style.display = "none";
        } else {
            visualizedImg[i].style.display = "inline-block";
            imgVis += 1;
        }
    }
    Object.values(document.querySelectorAll("select")).forEach(element => {
        element.value = imgPag;
    });
    updateNumVis(imgVis, visualizedImgLen);
    //lessMoreImg();
}

function updateNumVis(imgVis, visualizedImgLen) {
    console.log(imgVis);
    console.log(visualizedImgLen);
    const numVis = document.querySelectorAll("label");
    Object.values(numVis).forEach(element => {
        element.textContent = imgVis + "/" + visualizedImgLen;
    });
}

function lessMoreImg(event) {
    const visualized = Number(document.querySelectorAll("button.number")[0].value);
    const visualizedImg = document.querySelectorAll(".image");
    console.log(Object.keys(visualizedImg).length);
    const visualizedImgLen = Object.keys(visualizedImg).length;
    if (typeof event === "undefined") {
        for (let i = 0; i < visualizedImgLen; i++) {
            console.log(true + " undefined");
            if (i > visualized-1) {
            visualizedImg[i].style.display = "none";
            }
        }
    } else {
        if (event.target.title === "+") {
            for (let i = 0; i < visualizedImgLen; i++) {
                console.log(true + " +");
                if (i > visualized+1 && i < visualized+visualized-1) {
                    console.log(i);
                    visualizedImg[i].style.display = "inline-block";
                } else {
                    visualizedImg[i].style.display = "none"
                }
            }
            displayIndication(visMin = 0, visMax = 0, categories.length)
        } else if (event.target.title === "-") {
            for (let i = 0; i < visualizedImgLen; i++) {
                console.log(true + " -");
                if (i < visualized && i > visualized-visualized-1) {
                    console.log(i);
                    visualizedImg[i].style.display = "inline-block";
                } else {
                    visualizedImg[i].style.display = "none"
                }
            }
        }
        
    
    console.log(visualized);
    }
}

function sunriseSunset() {
    const hour = new Date().getHours();
    const isDay = hour >= 7 && hour < 19; // Ziua este între 6:00 și 18:00
    const body1 = document.querySelector("body");
    const nav1 = document.querySelector("nav");
    const lis1 = document.querySelectorAll("ul li");
    const hr1 = document.querySelector("hr");
    const images1 = document.querySelectorAll(".image");
    if (!isDay) {
        body1.style.backgroundColor = "black";
        body1.classList.add("bodyDark");
        nav1.classList.add("navDark");
        lis1.forEach((li) => {
            li.classList.add("darkLi");
        });
        images1.forEach((image) => {
            image.classList.add("darkImage");
        });
        body1.style.color = "white";
    }
}
