function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
    const burger = document.querySelector('.burger');
    burger.classList.toggle('active');
}


function openPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    const ingredientItems = document.querySelectorAll(".ingredient-item");
    const ingredientImages = document.querySelectorAll(".ingredient-image");

    let currentIndex = 0;

    function showIngredient(index) {
        // Remove active class from all items and images
        ingredientItems.forEach(item => item.classList.remove("active"));
        ingredientImages.forEach(image => image.classList.remove("active"));

        // Add active class to the current item and image
        ingredientItems[index].classList.add("active");
        const currentIngredient = ingredientItems[index].getAttribute("data-ingredient");
        document.getElementById(`${currentIngredient}-image`).classList.add("active");
    }

    function cycleIngredients() {
        showIngredient(currentIndex);
        currentIndex = (currentIndex + 1) % ingredientItems.length;
    }

    // Start the animation cycle
    setInterval(cycleIngredients, 2000);

    // Initial call to show the first ingredient
    cycleIngredients();
});
