if (ttt.mode === 'PRO') {
    var modal = document.getElementById("notificationModal");
    var closeBtn = document.querySelector(".ttt-close-btn");

    if (modal) {
        // Hiển thị modal khi trang web tải lên
        window.onload = function () {
            document.getElementById("notiContent").innerHTML = detectLinks(document.getElementById("notiContent").innerText);
            modal.style.display = "block";
        };

        // Nếu nút đóng tồn tại, thêm sự kiện click để đóng modal
        if (closeBtn) {
            closeBtn.onclick = function () {
                modal.style.display = "none";
            };
        }

        // Đóng modal khi click bên ngoài modal
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }
}
function detectLinks(text) {
    // Biểu thức chính quy để tìm URL
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    // Thay thế các URL bằng thẻ <a>
    return text.replace(urlRegex, '<a href="$1" target="_blank">$1</a>');
}
