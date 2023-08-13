import hotTrendData from '../data/tiktok/hot-trend.js';
import educationData from '../data/tiktok/education.js';
import fashionStyleData from '../data/tiktok/fashion-style.js';
import beautyMakeupData from '../data/tiktok/beauty-makeup.js';
import travelAdventureData from '../data/tiktok/travel-adventure.js';
import foodCookingData from '../data/tiktok/food-cooking.js';
import fitnessHealthData from '../data/tiktok/fitness-health.js';
import comedyEntertainmentData from '../data/tiktok/comedy-entertainment.js';
import musicDanceData from '../data/tiktok/music-dance.js';
import petsAnimalsData from '../data/tiktok/pets-animals.js';
import artCreativityData from '../data/tiktok/art-creativity.js';
import diyCraftsData from '../data/tiktok/diy-crafts.js';
import parentingFamilyData from '../data/tiktok/parenting-family.js';
import inspirationMotivationData from '../data/tiktok/inspiration-motivation.js';
import technologyGadgetsData from '../data/tiktok/technology-gadgets.js';
import sportsAthleticsData from '../data/tiktok/sports-athletics.js';
import scienceEducationData from '../data/tiktok/science-education.js';
import relationshipsDatingData from '../data/tiktok/relationships-dating.js';
import lifestyleRoutineData from '../data/tiktok/lifestyle-routine.js';
import businessEntrepreneurshipData from '../data/tiktok/business-entrepreneurship.js';

const topicData =
{
    'hot-trend': hotTrendData,
    'education': educationData,
    'fashion-style': fashionStyleData,
    'beauty-makeup': beautyMakeupData,
    'travel-adventure': travelAdventureData,
    'food-cooking': foodCookingData,
    'fitness-health': fitnessHealthData,
    'comedy-entertainment': comedyEntertainmentData,
    'music-dance': musicDanceData,
    'pets-animals': petsAnimalsData,
    'art-creativity': artCreativityData,
    'diy-crafts': diyCraftsData,
    'parenting-family': parentingFamilyData,
    'inspiration-motivation': inspirationMotivationData,
    'technology-gadgets': technologyGadgetsData,
    'sports-athletics': sportsAthleticsData,
    'science-education': scienceEducationData,
    'relationships-dating': relationshipsDatingData,
    'lifestyle-routine': lifestyleRoutineData,
    'business-entrepreneurship': businessEntrepreneurshipData,
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

        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy All';
        copyButton.classList.add('btn_copy');
        copyButton.addEventListener('click', () => {

            // loại bỏ nút All copy ra khỏi bản sao của nó, k copy tên nút này
            const allContent = contentContainer.cloneNode(true);
            const copyButtonElements = allContent.querySelectorAll('.btn_copy');

            copyButtonElements.forEach(button => {
                button.remove();
            });

            copyToClipboard(allContent.textContent);
            copyButton.textContent = "Copied";
            copyButton.disabled = true;
            copyButton.classList.add('btn_copy_disabled');
        });

        contentContainer.appendChild(copyButton);
        contentContainer.style.visibility = 'visible';
    }

    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

});
