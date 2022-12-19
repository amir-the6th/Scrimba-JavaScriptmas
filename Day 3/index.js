/* Challenge 1: Favorite Foods
- Topic: Object Destructuring
1. Edit the faveFoods object so that it contains 
your favorite foods.
2. Destructure the faveFoods object into three consts: 
breakfast, lunch, and supper.
3. Fetch the meals <section> from the DOM.
4. Set the innerHTML content of the meals <section> to a paragraph
that states what your favorite foods are for breakfast, lunch, and supper.
Use a template literal to construct the string.

E.g.
For breakfast, I only like croissants 🥐. For lunch, I love pasta 🍝, 
and for supper I want usually want pizza 🍕.
*/

const faveFoods = {
    breakfast: 'egg 🥚 & bacon 🥓',
    lunch: 'burrito 🌯',
    supper: 'steak 🥩'
}
const breakfast = faveFoods.breakfast;
const lunch = faveFoods.lunch;
const supper = faveFoods.supper;
let mealsSection = document.getElementById("meals");

mealsSection.innerHTML = `
<p>
    My favorite foods are as follows:<br>
    - For breakfast, I normally eat ${breakfast}.<br>
    - For lunch, I love ${lunch}.<br>
    - And for supper, I always go for ${supper}.<br>
</p`;

