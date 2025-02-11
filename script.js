
console.clear()
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
    category: ["monuments"],
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
    category: ["monuments"],
    url: "Images/20230409_121303.jpg",
  },
  14: {
    category: ["monuments"],
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
    category: ["monuments"],
    url: "Images/20230811_140302.jpg",
  },
  40: {
    category: ["sunset"],
    url: "Images/20230812_193938.jpg",
  },
};
//console.log(oriImages);
let nVis = 10;
function displayNavCategories(oriImages, nVis) {
    try {
        const navigation = document.querySelector("nav");
        const ul = document.createElement("ul");
        const categories = ["all"];
        Object.values(oriImages).forEach(value => {
            oriCategories = value["category"];
            for (let i = 0; i < oriCategories.length; i++) {
                if (!categories.includes(oriCategories[i])) {
                    categories.push(oriCategories[i]);
                }
            }
        });
        categories.sort();
        for (let i = 0; i < categories.length; i++) {
            const li = document.createElement("li");
            li.textContent = categories[i].toUpperCase();
            li.addEventListener("click", filterImages);
            ul.appendChild(li);
        }
        navigation.appendChild(ul);
        //displayIndication();
        displayImages(oriImages, nVis);
    } catch {
        //displayIndication();
        displayImages(oriImages, nVis);
    }
}   displayNavCategories(oriImages, nVis);

function filterImages(event) {
    category = event.target.textContent.toLowerCase();
    filtration = {};
    if (category === "all") {
        //displayIndication(oriImages);
        displayImages(oriImages, nVis);
    } else {
        Object.values(oriImages).forEach((value, index) => {
            oriCategories = value["category"];
            for (let i = 0; i < oriCategories.length; i++) {
                if (oriCategories[i] === category) {
                    filtration[index] = {};
                    filtration[index] = value;
                }
            }
        });
        //displayIndication(filtration);
        displayImages(filtration, nVis);
        const p = document.querySelectorAll(".image > p");
        const images = document.querySelectorAll(".image");
        console.log(images);
        for (let i = 0; i < p.length; i++) {
            p[i].style.display = "none";
            //images[i].style.backgroundColor = "";
            //console.log(images[i].innerHTML);           
        }
    }
} 

function displayIndication(nImg, nVis /*images = oriImages*/) {
    const number = document.querySelectorAll("button.number");
    /*let nImg = 0;
    Object.keys(images).forEach(key => {
        nImg = nImg + 1;
    });*/
    number.forEach(num => {
        if (nImg <= nVis) {
            num.textContent = nImg;
        } else {
            num.textContent = nVis + "/"+ nImg;
        }
    });
}

function lessImg() {
    const button = querySelectorAll(".indication > .less");

}


async function renderImages(url, category, div) {
    const img = document.createElement("img");
    img.src = url;//image["url"];
    img.alt = category; //["category"];
    div.appendChild(img);
} //renderImages();

async function renderCategory(category, div) {
    const p = document.createElement("p");
    p.className = "category";
    //oriCategories = category;
    
    for (let i = 0; i < category.length; i++) {
        p.textContent += category[i].toUpperCase();
        if (i < category.length - 1) {
            p.textContent += ", ";
        }
    }    
    div.appendChild(p);
} //renderCategory();

function displayImages(images = oriImages, nVis) {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    const categories = [];
    const urls = [];
    let nImg = 0;
    Object.values(images).forEach(value => {
        categories.push(value["category"]);
        urls.push(value["url"]);
        nImg += 1;
        /*const div = document.createElement("div");
        div.className = "image";
        renderImages(value, div, nImg);
        renderCategory(value, div, nImg);
        div.addEventListener("click", function() {
            console.log(value["url"]);
        });*/
        //container.appendChild(div);
    });

    if (categories.length == urls.length) {
        for (let i = 0; i < categories.length; i++) {
            displayIndication(nImg, nVis);
            if (i <= nVis) {
                const div = document.createElement("div")
                div.className = "image";
                renderImages(urls[i], categories[i], div, nVis);
                renderCategory(categories[i], div, nVis);
                div.addEventListener("click", function() {
                    console.log(urls[i]);//value["url"]);
                })
                container.appendChild(div);
            } else {
                break;
            }
        }
    }
}





/*function adjustparagraph() {
    const p = document.querySelectorAll(".image > p");
    let length = 0;
    for (let i = 0; i < p.length; i++) {
        length += p[i].textContent.length;
    }
    const med = length/p.length;
    for (let i = 0; i < p.length; i++) {
        let size = window.getComputedStyle(p[i]).fontSize;
        if (p[i].textContent.length > med) {
            let pSize = parseInt(size.slice(0,size.indexOf(".")));
            console.log(pSize);
            p[i].style.fontSize = (pSize-1) + "px";
            console.log(window.getComputedStyle(p[i]).fontSize);
        }
    }
}   //adjustparagraph();

function adjustWidth() {
    let imagCont = document.querySelectorAll(".image");
    let heights = [];
    for (let i = 0; i < imagCont.length; i++) {
        let height1 = window.getComputedStyle(imagCont[i]).height;
        height1 = parseInt(height1.slice(0,height1.indexOf(".")+2))
        heights.push(height1);
    }
    let max = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] > max) {
            max = heights[i];
        }
    }
    for (let i = 0; i < imagCont.length; i++) {
        console.log(imagCont[i].innerHTML)
        imagCont[i].style.height = max + "px";
    }
}   //adjustWidth();*/

function sunriseSunset() {
    const hour = new Date().getHours();
    const isDay = hour >= 6 && hour < 18; // Ziua este între 6:00 și 18:00
    const body = document.getElementsByTagName("body");
    if (isDay) {
        body[0].style.backgroundColor = "white";
    } else {
        body[0].style.backgroundColor = "black";
        //body[0].style.color = "black";
    }
}   sunriseSunset();