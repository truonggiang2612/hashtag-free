import gamingData from '../data/youtube/gaming.js';
import makeupTutorialsData from '../data/youtube/makeup-tutorials.js';
import cookingRecipesData from '../data/youtube/cooking-recipes.js';
import travelVlogsData from '../data/youtube/travel-vlogs.js';
import diyCraftsData from '../data/youtube/diy-crafts.js';
import fitnessWorkoutData from '../data/youtube/fitness-workout.js';
import technologyReviewsData from '../data/youtube/technology-reviews.js';
import comedySketchesData from '../data/youtube/comedy-sketches.js';
import educationalContentData from '../data/youtube/educational-content.js';
import musicCoversData from '../data/youtube/music-covers.js';
import fashionStyleData from '../data/youtube/fashion-style.js';
import beautySkincareData from '../data/youtube/beauty-skincare.js';
import lifeHacksData from '../data/youtube/life-hacks.js';
import bookReviewsData from '../data/youtube/book-reviews.js';
import productUnboxingData from '../data/youtube/product-unboxing.js';
import parentingTipsData from '../data/youtube/parenting-tips.js';
import motivationalTalksData from '../data/youtube/motivational-talks.js';
import carReviewsData from '../data/youtube/car-reviews.js';
import healthNutritionData from '../data/youtube/health-nutrition.js';
import homeImprovementData from '../data/youtube/home-improvement.js';



const topicData =
{
    'gaming': gamingData,
    'makeup-tutorials': makeupTutorialsData,
    'cooking-recipes': cookingRecipesData,
    'travel-vlogs': travelVlogsData,
    'diy-crafts': diyCraftsData,
    'fitness-workout': fitnessWorkoutData,
    'technology-reviews': technologyReviewsData,
    'comedy-sketches': comedySketchesData,
    'educational-content': educationalContentData,
    'music-covers': musicCoversData,
    'fashion-style': fashionStyleData,
    'beauty-skincare': beautySkincareData,
    'life-hacks': lifeHacksData,
    'book-reviews': bookReviewsData,
    'product-unboxing': productUnboxingData,
    'parenting-tips': parentingTipsData,
    'motivational-talks': motivationalTalksData,
    'car-reviews': carReviewsData,
    'health-nutrition': healthNutritionData,
    'home-improvement': homeImprovementData,

}

document.addEventListener('DOMContentLoaded', function () {
    const topicButtons = document.querySelectorAll('.topic-buttons button');
    const contentContainer = document.querySelector('.content');

    topicButtons.forEach(button => {
        button.addEventListener('click', () => {
            const topic = button.id;
            const data = topicData[topic];
            displayData(data);
        });
    });

    // Hàm để hiển thị dữ liệu lên trang web
    function displayData(data) {
        contentContainer.innerHTML = '';
        data.forEach(item => {
            const name = document.createElement('div');
            name.textContent = `#${item.name}`;
            contentContainer.appendChild(name);
        });

        contentContainer.style.visibility = 'visible';
    }
});
