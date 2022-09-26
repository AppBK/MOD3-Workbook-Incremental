const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    console.log('SEEDS: ', document.getElementsByClassName("seed"));

    // 2. Get all seedless fruit elements
    // Your code here
    console.log('SEEDLESS: ',document.getElementsByClassName("seedless"));

    // 3. Get first seedless fruit element
    // Your code here
    console.log('FIRST SEEDLESS: ', document.getElementsByClassName("seedless")[0]);

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    console.log('YOU: ', document.getElementsByTagName("span"));

    // 5. Get all children of element "wrapper"
    // Your code here
    console.log('CHILDREN OF WRAPPER: ',document.getElementById("wrapper").children);
    // 6. Get all odd number list items in the list
    // Your code here
    console.log(document.getElementsByClassName("odd"));
    // 7. Get all even number list items in the list
    // Your code here
    console.log(document.querySelectorAll('ol li:not(.odd)'))
    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    console.log(document.getElementById("three").querySelectorAll('a:not([class])'))

    // 9. Get "Amazon" list element
    // Your code here
    console.log(document.getElementsByClassName("shopping"));
    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    console.log(document.querySelectorAll('#three ul')[0].children)
}

window.onload = select;
