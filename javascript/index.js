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
    descriptionText.textContent = "Vui lòng chọn một lĩnh vực để xem lợi ích và nội dung liên quan.";
});

// Button Reels
var reelsButton = document.getElementById("reels");
reelsButton.addEventListener("mouseover", function () {
    descriptionText.textContent = "Hashtag Reels - tối ưu hóa sáng tạo của bạn trên nền tảng video ngắn phổ biến. Với hashtag chính xác, bạn sẽ kết nối và tương tác với triệu khán giả toàn cầu. Sử dụng hashtag Reels để phô diễn ý tưởng, chia sẻ đam mê và mở ra cơ hội từ thế giới video ngắn";
});
reelsButton.addEventListener("mouseout", function () {
    descriptionText.textContent = "Vui lòng chọn một lĩnh vực để xem lợi ích và nội dung liên quan.";
});

// Button Youtube
var youtubeButton = document.getElementById("youtube");
youtubeButton.addEventListener("mouseover", function () {
    descriptionText.textContent = "Hashtag Youtube - tối ưu hóa nội dung video của bạn trong thế giới chia sẻ video. Sử dụng hashtag khéo léo giúp video tiếp cận khán giả mục tiêu và tạo tương tác, giao lưu trong cộng đồng. Khám phá sức mạnh của hashtag Youtube để biến nội dung của bạn thành cuộc trò chuyện mở với người xem trên toàn cầu";
});
youtubeButton.addEventListener("mouseout", function () {
    descriptionText.textContent = "Vui lòng chọn một lĩnh vực để xem lợi ích và nội dung liên quan.";
});


// HANDLE BUTTON WHEN CLICK
// Button Tiktok
var tiktokButton = document.getElementById("tiktok");
tiktokButton.addEventListener("click", function () {
    window.location.href = "tiktok.html";
});

// Button Reels
var reelsButton = document.getElementById("reels");
reelsButton.addEventListener("click", function () {
    window.location.href = "reels.html";
});

// Button Youtube
var youtubeButton = document.getElementById("youtube");
youtubeButton.addEventListener("click", function () {
    window.location.href = "youtube.html";
});

