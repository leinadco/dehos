console.clear()
//console.log("HELLO");
const oriImages = {
  1: {
    category: "moon",
    url: "Images/20221109_215055.jpg",
  },
  2: {
    category: "special light",
    url: "Images/20221122_155501.jpg",
  },
  3: {
    category: "lamp",
    url: "Images/20221124_202624.jpg",
  },
  4: {
    category: "traffic",
    url: "Images/20230214_084410.jpg",
  },
  5: {
    category: "sunset",
    url: "Images/20230220_181153.jpg",
  },
  6: {
    category: "sunset",
    url: "Images/20230307_064012.jpg",
  },
  7: {
    category: "casual",
    url: "Images/20230307_070157.jpg",
  },
  8: {
    category: "moon",
    url: "Images/20230307_215043.jpg",
  },
  9: {
    category: "monuments",
    url: "Images/20230309_143234.jpg",
  },
  10: {
    category: "lamp",
    url: "Images/20230325_223427.jpg",
  },
  11: {
    category: "traffic",
    url: "Images/20230404_185950.jpg",
  },
  12: {
    category: "sky",
    url: "Images/20230406_174623.jpg",
  },
  13: {
    category: "monuments",
    url: "Images/20230409_121303.jpg",
  },
  14: {
    category: "monuments",
    url: "Images/20230409_123016.jpg",
  },
  15: {
    category: "sky",
    url: "Images/20230413_140553.jpg",
  },
  16: {
    category: "sky",
    url: "Images/20230413_142036.jpg",
  },
  17: {
    category: "nature",
    url: "Images/20230505_212349.jpg",
  },
  18: {
    category: "nature",
    url: "Images/20230506_204859.jpg",
  },
  19: {
    category: "good view",
    url: "Images/20230506_205601.jpg",
  },
  20: {
    category: "sky",
    url: "Images/20230514_154134.jpg",
  },
  21: {
    category: "nature",
    url: "Images/20230514_205309.jpg",
  },
  22: {
    category: "nature",
    url: "Images/20230515_202543.jpg",
  },
  23: {
    category: "sky",
    url: "Images/20230526_204219.jpg",
  },
  24: {
    category: "nature",
    url: "Images/20230527_151438.jpg",
  },
  25: {
    category: "colorful",
    url: "Images/20230601_150558.jpg",
  },
  26: {
    category: "nature",
    url: "Images/20230601_153745.jpg",
  },
  27: {
    category: "love",
    url: "Images/20230603_101411.jpg",
  },
  28: {
    category: "love",
    url: "Images/20230603_101437.jpg",
  },
  29: {
    category: "sunrise",
    url: "Images/20230622_064034.jpg",
  },
  30: {
    category: "nature",
    url: "Images/20230628_202232.jpg",
  },
  31: {
    category: "casual",
    url: "Images/20230727_201136.jpg",
  },
  32: {
    category: "good view",
    url: "Images/20230730_200544.jpg",
  },
  33: {
    category: "night light",
    url: "Images/20230730_203124.jpg",
  },
  34: {
    category: "night light",
    url: "Images/20230730_203124_remastered.jpg",
  },
  35: {
    category: "night light",
    url: "Images/20230730_214605.jpg",
  },
  36: {
    category: "sky",
    url: "Images/20230731_112052.jpg",
  },
  37: {
    category: "moon",
    url: "Images/20230801_214152.jpg",
  },
  38: {
    category: "sky",
    url: "Images/20230810_113149.jpg",
  },
  39: {
    category: "monuments",
    url: "Images/20230811_140302.jpg",
  },
  40: {
    category: "sunset",
    url: "Images/20230812_193938.jpg",
  },
};
//console.log(oriImages);

function displayNavCategories() {
    const navigation = document.querySelector("nav");
    const ul = document.createElement("ul");
    const categories = ["all"];
    Object.values(oriImages).forEach(value => {
        if (!categories.includes(value["category"])) {
            categories.push(value["category"]);
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
    displayImages();
}   displayNavCategories();

function filterImages(event) {
    category = event.target.textContent.toLowerCase();
    filtration = {};
    if (category === "all") {
        displayImages(oriImages);
    } else {
        Object.values(oriImages).forEach((value, index) => {
            if (value["category"] === category) {
                filtration[index] = {};
                filtration[index] = value;
            }
        });
        displayImages(filtration);
        const p = document.querySelectorAll(".container > div > p");
        for (let i = 0; i < p.length; i++) {
            p[i].style.display = "none";
        }
    }
} 

function renderImages(image, div) {
    const img = document.createElement("img");
    img.src = image["url"];
    img.alt = image["category"];
    div.appendChild(img);
} //renderImages();

function renderCategory(image, div) {
    const p = document.createElement("p");
    p.className = "category";
    p.textContent = image["category"].toUpperCase();
    div.appendChild(p);
} //renderCategory();

function displayImages(images = oriImages) {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    Object.values(images).forEach(value => {
        const div = document.createElement("div");
        div.className = "image";
        renderImages(value, div);
        renderCategory(value, div);
        container.appendChild(div);
    });
}   
