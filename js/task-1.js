let liElements = document.querySelectorAll(".item");
console.log(`Number of categories: ${liElements.length}`);


liElements.forEach(element => {
    const Title = element.querySelector('h2').textContent;
    const ElemCategory = element.querySelectorAll('li').length;

    console.log(`Category: ${Title}`);
    console.log(`Elements: ${ElemCategory}`);
});


