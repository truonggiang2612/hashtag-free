import danceMovesData from '../data/reels/dance-moves.js';
import fashionInspirationData from '../data/reels/fashion-inspiration.js';
import beautyTipsData from '../data/reels/beauty-tips.js';
import foodieLifeData from '../data/reels/foodie-life.js';
import fitnessJourneyData from '../data/reels/fitness-journey.js';
import travelAdventuresData from '../data/reels/travel-adventures.js';
import diyCraftsData from '../data/reels/diy-crafts.js';
import comedySkitsData from '../data/reels/comedy-skits.js';
import musicCoversData from '../data/reels/music-covers.js';
import petLoveData from '../data/reels/pet-love.js';
import parentingHacksData from '../data/reels/parenting-hacks.js';
import motivationMondayData from '../data/reels/motivation-monday.js';
import techInnovationData from '../data/reels/tech-innovation.js';
import outdoorActivitiesData from '../data/reels/outdoor-activities.js';
import relationshipAdviceData from '../data/reels/relationship-advice.js';
import dailyVlogsData from '../data/reels/daily-vlogs.js';
import businessTipsData from '../data/reels/business-tips.js';
import educationalContentData from '../data/reels/educational-content.js';
import artisticExpressionData from '../data/reels/artistic-expression.js';
import lifeHacksData from '../data/reels/life-hacks.js';


const topicData =
{
    'dance-moves': danceMovesData,
    'fashion-inspiration': fashionInspirationData,
    'beauty-tips': beautyTipsData,
    'foodie-life': foodieLifeData,
    'fitness-journey': fitnessJourneyData,
    'travel-adventures': travelAdventuresData,
    'diy-crafts': diyCraftsData,
    'comedy-skits': comedySkitsData,
    'music-covers': musicCoversData,
    'pet-love': petLoveData,
    'parenting-hacks': parentingHacksData,
    'motivation-monday': motivationMondayData,
    'tech-innovation': techInnovationData,
    'outdoor-activities': outdoorActivitiesData,
    'relationship-advice': relationshipAdviceData,
    'daily-vlogs': dailyVlogsData,
    'business-tips': businessTipsData,
    'educational-content': educationalContentData,
    'artistic-expression': artisticExpressionData,
    'life-hacks': lifeHacksData,
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
