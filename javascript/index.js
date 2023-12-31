const titleElement = document.querySelector('.title');

function toggleBlink() {
    titleElement.classList.toggle('blinking');
}

setInterval(toggleBlink, 600);



const buttons = document.querySelectorAll('.hashtag-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Nếu button chưa có class 'click-button', thêm nó vào và chờ cho đến khi chuyển đổi hoàn tất
        if (!button.classList.contains('click-button')) {
            button.classList.add('click-button');
            button.addEventListener('transitionend', function transitionEnd() {
                // Khi chuyển đổi kết thúc, xóa class 'click-button' và loại bỏ sự kiện transitionend
                button.classList.remove('click-button');
                button.removeEventListener('transitionend', transitionEnd);
            });
        } else {
            button.classList.remove('click-button');
        }
    });
});

// Thêm sự kiện click ra ngoài để remove class click-button
document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('hashtag-button')) {
        buttons.forEach(btn => btn.classList.remove('click-button'));
    }
});



// HANDLE BUTTON WHEN HOVER
var descriptionText = document.getElementById("description-text");

// Button Tiktok
var tiktokButton = document.getElementById("tiktok");
tiktokButton.addEventListener("mouseover", function () {
    descriptionText.textContent = "Hashtag TikTok - công cụ đơn giản nhưng phá cách, nâng cao vị thế của bạn trên nền tảng video hot nhất. Với hashtag tinh tế và linh hoạt, bạn sẽ chạm tới khán giả mục tiêu, thu hút sự quan tâm và tạo nên tương tác đầy ấn tượng. Hãy khám phá cách truyền đi thông điệp và mở ra cơ hội mới từ hashtag trên TikTok";
});
tiktokButton.addEventListener("mouseout", function () {
    descriptionText.textContent = "Vui lòng chọn một lĩnh vực để xem lợi ích và nội dung liên quan";
});

// Button Reels
var reelsButton = document.getElementById("reels");
reelsButton.addEventListener("mouseover", function () {
    descriptionText.textContent = "Hashtag Reels - tối ưu hóa sáng tạo của bạn trên nền tảng video ngắn phổ biến. Với hashtag chính xác, bạn sẽ kết nối và tương tác với triệu khán giả toàn cầu. Sử dụng hashtag Reels để phô diễn ý tưởng, chia sẻ đam mê và mở ra cơ hội từ thế giới video ngắn";
});
reelsButton.addEventListener("mouseout", function () {
    descriptionText.textContent = "Vui lòng chọn một lĩnh vực để xem lợi ích và nội dung liên quan";
});

// Button Youtube
var youtubeButton = document.getElementById("youtube");
youtubeButton.addEventListener("mouseover", function () {
    descriptionText.textContent = "Hashtag Youtube - tối ưu hóa nội dung video của bạn trong thế giới chia sẻ video. Sử dụng hashtag khéo léo giúp video tiếp cận khán giả mục tiêu và tạo tương tác, giao lưu trong cộng đồng. Khám phá sức mạnh của hashtag Youtube để biến nội dung của bạn thành cuộc trò chuyện mở với người xem trên toàn cầu";
});
youtubeButton.addEventListener("mouseout", function () {
    descriptionText.textContent = "Vui lòng chọn một lĩnh vực để xem lợi ích và nội dung liên quan";
});


// HANDLE BUTTON WHEN CLICK
// Button Tiktok
var tiktokButton = document.getElementById("tiktok");
tiktokButton.addEventListener("click", function () {
    window.location.href = "tiktok/";
});

// Button Reels
var reelsButton = document.getElementById("reels");
reelsButton.addEventListener("click", function () {
    window.location.href = "reels/";
});

// Button Youtube
var youtubeButton = document.getElementById("youtube");
youtubeButton.addEventListener("click", function () {
    window.location.href = "youtube/";
});


// AUTO HOVER ON MOBILE
if (window.innerWidth <= 820) {
    var descriptionText = document.getElementById("description-text");
    var allButton = document.querySelectorAll('.hashtag-button');
    var logo = document.querySelectorAll('.logo');

    var currentIndex = 0;
    var interval = setInterval(function () {
        // Hiển thị đoạn text tương ứng và scale logo
        descriptionText.textContent = getDescriptionText(currentIndex);
        scaleLogo(logo[currentIndex]);

        currentIndex = (currentIndex + 1) % allButton.length;
    }, 5000)


    // fuction getText
    function getDescriptionText(index) {
        switch (index) {
            case 0:
                return "Hashtag TikTok - công cụ đơn giản nhưng phá cách, nâng cao vị thế trên nền tảng video phổ biến. Sử dụng hashtag tinh tế và linh hoạt để tiếp cận khán giả mục tiêu và tạo tương tác ấn tượng.";
            case 1:
                return "Hashtag Reels - tối ưu hóa sáng tạo trên video ngắn. Kết nối và tương tác toàn cầu bằng hashtag chính xác. Sử dụng Reels để phô diễn ý tưởng, chia sẻ đam mê và mở ra cơ hội từ thế giới video ngắn.";
            case 2:
                return "Hashtag Youtube - tối ưu hóa nội dung video, kết nối và tương tác với khán giả mục tiêu. Khám phá sức mạnh của hashtag để biến nội dung thành cuộc trò chuyện toàn cầu.";
            default:
                return "";
        }
    }

    // function scale logo
    function scaleLogo(logo) {
        logo.style.transform = "scale(1.5)";
        setTimeout(() => {
            logo.style.transform = "scale(1)"
        }, 5000);
    }
}


