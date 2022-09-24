export function findElementById(id) {
    // Return the element in the DOM with corresponding `id`

    // Your code here
    return document.getElementById(id);
}

export function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`

    // Your code here
    return document.getElementsByTagName(tag)['0'];
}

export function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`

    // Your code here
    return document.getElementsByClassName(cls)['0'];
}

export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`

    // Your code here
    return document.getElementsByTagName(tag);
}

export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`

    // Your code here
    return document.getElementsByClassName(cls);
}


// You may find the .children, .tagName, and .classList properties of an HTML element to be useful.
