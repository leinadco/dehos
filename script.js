//defining the original images
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
//defining function to display the navigation categories
function displayNavCategories(oriImages) {
    //takes original images ai parameter
    //using try-catch-finally to catch errors
    const header = document.querySelector("header"); //selecting the navigation element
    try {
        let nav = "<nav><ul>"; //creating an empty string to store the categories
        //creating an empty array to store the categories
        const categories = []; //iterating through the original images
        Object.values(oriImages).forEach((value) => {
            oriCategories = value.category; //getting the categories from the original images
            // iterating through the categories
            for (let i = 0; i < oriCategories.length; i++) {
                if (!categories.includes(oriCategories[i])) {
                    categories.push(oriCategories[i]);
                }
            }
        });
        categories.sort(); //sorting categories
        categories.unshift("all"); //adding "all" to the categories
        for (let i = 0; i < categories.length; i++) {
            nav += `<li>${categories[i].toUpperCase()}</li>`; //adding the categories to the unordered list
        }
        nav += "</ul></nav><hr />"; //closing the unordered list
        header.innerHTML = nav; //adding the unordered list to the navigation
        // adding event listener to the list items
        const li = document.querySelectorAll("li");
        for (let i = 0; i < li.length; i++) {
            li[i].addEventListener("click", filterImages);
        }
    } catch (error) {
        navigation.innerHTML = `<h1 style="padding:10px;">Navigation add error: ${error}</h1>`; //displaying the error
    } finally {
        // finally block to display the indications / images / footer / day-night mode
        try {
            renderIndication(); //calling the function to display navigation indication
        } catch (error) {
            const indication = document.querySelectorAll(".indication"); //selecting the indication div
            indication.forEach((element) => {
                element.innerHTML = `<h1 style="padding:10px;">Indication add error: ${error}</h1>`; //displaying the error
            });
        } finally {
            // finally block to display the images / footer / day-night mode
            try {
                const [categories, urls] = objToArr(oriImages); //converting the original images to array
                displayImages(categories, urls); //displaying the images with function
                activImg("undefined"); //activating all the images at first load
            } catch (error) {
                const container = document.querySelector(".container"); //selecting the container div
                container.innerHTML = `<h1 style="padding:10px;">Images add error: ${error}</h1>`; //displaying the error
            } finally {
                // finally block footer / day-night mode
                try {
                    const footer = document.querySelector("footer"); //selecting the footer element
                    let presentation = "<hr><h1>All rights reserved &copy; 2022</h1>";
                    footer.innerHTML = presentation;
                } catch (error) {
                    const footer = document.querySelector("footer"); //selecting the footer element
                    footer.innerHTML = `<h1 style="padding:10px;">Footer add error: ${error}</h1>` //displaying the error
                } finally {
                    // finally block day-night mode
                    try {
                        sunriseSunset(); //calling the function to chang day/night mode
                    } catch (error) {
                        console.log("Footer error: " + error); //displaying the error
                    }
                }
            }
        }
    }
}
displayNavCategories(oriImages); //first load of the page

//defining the function to filter the images
function filterImages(event) { //takes event paramenter
    const category = event.target.textContent.toLowerCase();    //getting the category clicked
    const [categories, urls] = objToArr(oriImages, category);   //converting the original immaeges to filtered arrays
    displayImages(categories, urls);    //displaying the filtered images
    activImg("undefined");  //activating the filtered images

    //deactivating the paragraphs if the category is not "all", just for design
    if (category !== "all") {
        const p = document.querySelectorAll(".image > p");
        p.forEach((element) => {
            element.style.display = "none";
        });
    }
}

//defining the function to render the navigation indication
function renderIndication() {
    const indicationCont = document.querySelectorAll(".indication");    //selecting the indication divs

    //defining the indication buttons and select like strings
    let indication =
        '<button class="less indi" value="-">Less</button><label for="selection" class="indi"></label>';
    indication +=
        '<select id="selection" class="indi" onchange="activImg(event)"><option value="5">5</option><option selected value="10">10</option>';
    indication +=
        '<option value="20">20</option><option value="40">40</option><option value="80">80</option><option value="160">160</option>';
    indication +=
        '<option value="320">320</option></select><button class="more indi" value="+">More</button>';

    //adding the indication to the divs
    indicationCont.forEach((element) => {
        element.innerHTML = indication;
    });

    //adding event listeners to the buttons, this beceause the events are ignored with the innerHTML
    const buttons = document.querySelectorAll(".indication button");
    buttons.forEach((button) => {
        button.addEventListener("click", activImg);
    });
}

//defining the function to convert the original images to arrays
function objToArr(object, category = "all") {   //takes object, the image array, and category to filter, as parameters
    const categories = [];  //creating an empty array to store the categories
    const urls = [];    //creating an empty array to store the urls

    //iterating through the original images
    Object.values(object).forEach((value) => {
        if (category === "all") {   //if the category is "all", all the array is converted in arrays
            categories.push(value["category"]);
            urls.push(value["url"]);
        } else if (value["category"].includes(category)) {    //if the category is not "all", only the filtered category is converted in arrays
            categories.push(value["category"]);
            urls.push(value["url"]);
        }
    });
    return [categories, urls];  //returning the categories and urls arrays
}

//defining the function to display the images, as async function 
function displayImages(categories, urls) {  //takes categories and urls as parameters, both arrays
    const containerImg = document.querySelector(".container");    //selecting the container div
    let container = ""; //creating an empty string to store the images

    //iterating through the categories and urls to render
    if ((categories.length === urls.length)) {
        for (let i = 0; i < categories.length; i++) {
            container += createDivImg(urls[i], categories[i]);  //creating the divs with images
        }
    }
    containerImg.innerHTML = container;   //adding the images to the container
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
    const [visualizedImg, visualizedImgLen] = cathcVis();
    const [min, step] = getMinStep(event, visualizedImgLen);
    activateImg(visualizedImg, visualizedImgLen, min, step);
    updateSelect(event);
}

function getMinStep(event, visualizedImgLen) {
    let step = 0;
    let select = "";
    if (event !== "undefined" && event.target.id === "selection") {
        step = Number(event.target.value); // Obține valoarea selectată
    } else {
        select = document.querySelector(".indication select");
        step = Number(select.options[select.options.selectedIndex].value);
    }
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
        if (event === "undefined") {
            step = Number(select.options[select.options.selectedIndex].value);
        } else {
            step = Number(event.target.value);
        }
        displayIndication(min, step, visualizedImgLen, event);
    } else if (event.target.value === "+") {
        min = Number(label.slice(0, indexSlash));
        max = Number(label.slice(indexSlash + 1, indexBar));
        if (max == visualizedImgLen) {
            min = Number(label.slice(0, indexSlash));
            step = max;
        } else if (min == visualizedImgLen) {
            min = visualizedImgLen - visualizedImgLen;
            step = visualizedImgLen;
        } /*else if (max >= visualizedImgLen) {
            console.log("third + if");
            min = visualizedImgLen + 1 - step;
            step = visualizedImgLen;
        } */ else {
            min = Number(label.slice(0, indexSlash)) + step;
            console.log("else +");
            step += max;
        }
        displayIndication(min, step, visualizedImgLen, event);
    } else if (event.target.value === "-") {
        min = Number(label.slice(0, indexSlash));
        max = Number(label.slice(indexSlash + 1, indexBar));
        if (min <= 1 && min == visualizedImgLen) {
            min = 0;
            step = visualizedImgLen;
        } else if (max == visualizedImgLen && min < max) {
            min = min - step;
            step += min - 1;
        } else if (max == visualizedImgLen || step >= visualizedImgLen) {
            min = 0;
            step = visualizedImgLen;
        } else if (max > min && min > 1) {
            min = min - step;
            step += min - 1;
        } /* else {
            min = Number(label.slice(0, indexSlash)) + step;
            console.log("else");
            step += max;
        }*/
        displayIndication(min, step, visualizedImgLen, event);
    } else {
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
    //console.log("MIN si MAX si total " + min + " " + max + " " + total);
    document.querySelectorAll(".indication label").forEach((element) => {
        if (min == 0 && max == total) {
            element.textContent = `${total}/${total}`;
        } else if (min == total && max == total) {
            element.textContent = `${total}/${total}`;
        } else if (total < max && min == 0) {
            element.textContent = `${total}/${total}`;
        } else if (total < max) {
            element.textContent = `${min}/${total} - ${total}`;
        } else if (min == 0) {
            element.textContent = `${min + 1}/${max} - ${total}`;
        } else {
            element.textContent = `${min}/${max} - ${total}`;
        }
    });
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
function updateSelect(event) {
    if (event !== "undefined" && event.target.id === "selection") {
        let step = Number(event.target.value); // Obține valoarea selectată
        const selects = document.querySelectorAll(".indication select"); // Selectează toate <select>
        try {
            selects.forEach((element) => {
                element.value = step; // Setează aceeași valoare pentru toate <select>
            });
        } catch (error) {
            console.log("Select catch: " + error);
        }
    }
}

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
