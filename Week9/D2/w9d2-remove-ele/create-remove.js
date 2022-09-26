/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        let breed = url.split('/')[4];
        console.log(url);
        // let breed = split[4];
        console.log(breed);
        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        let newImage = `<li><figure><img src=\"${url}\"/><figcaption>${breed}</figcaption></figure></li>`;
        // let listItem = document.createElement("li");
        // let figure = document.createElement("figure");
        // let image =
        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here
        let listTag = document.querySelector('.gallery ul');
        listTag.innerHTML += newImage;

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    const firstDog = document.querySelector('.gallery ul').children[0];
    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
    firstDog.parentNode.removeChild(firstDog);
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    const dogsArray = document.querySelector('.gallery ul').children;
    const lastDog = dogsArray[dogsArray.length - 1];

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
    lastDog.parentNode.removeChild(lastDog);
});
