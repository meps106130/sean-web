function toggleNightMode() {
    // 切換夜間模式樣式
    document.body.classList.toggle('night-mode');

    // 根據當前模式更新按鈕文字
    const nightModeButton = document.getElementById('nightModeButton');
    const isNightMode = document.body.classList.contains('night-mode'); // 檢查是否為夜間模式

    if (isNightMode) {
        nightModeButton.innerText = 'Toggle technology Mode';
    } else {
        nightModeButton.innerText = 'Toggle night Mode';
    }

    // 將夜間模式的狀態儲存到 localStorage
    localStorage.setItem("nightMode", isNightMode);
}


document.addEventListener("DOMContentLoaded", function () {
    const nightModeButton = document.getElementById('nightModeButton');
    const isNightMode = localStorage.getItem("nightMode") === "true"; // 讀取 localStorage

    if (isNightMode) {
        document.body.classList.add("night-mode"); // 套用夜間模式
        nightModeButton.innerText = 'Toggle technology Mode'; // 更新按鈕文字
    } else {
        nightModeButton.innerText = 'Toggle night Mode';
    }
});

// 初始化時檢查模式並設定按鈕文字
window.onload = function() {
    const nightModeButton = document.getElementById('nightModeButton');
    if (document.body.classList.contains('night-mode')) {
        nightModeButton.innerText = '切換科幻模式';
    } else {
        nightModeButton.innerText = '切換夜間模式';
    }
};




// 初始化 EmailJS
(function() {
    emailjs.init('EKv9vDoRS816xS0Yb');
})();

// 按鈕觸發的表單提交處理
function sub(event) {
    event.preventDefault();  // 阻止表單的默認提交行為

    const form = document.getElementById('questionForm');
    const formStatus = document.getElementById('formStatus');
    formStatus.style.display = 'block';
    formStatus.innerHTML = '正在提交您的問題...';

    // 使用 emailjs 提交表單
    emailjs.sendForm('service_za8o36i', 'template_p22yav2', form)
        .then(function(response) {
            // 提交成功後跳轉
            window.location.href = '../thx.html';  // 跳轉到感謝頁面
        }, function(error) {
            formStatus.innerHTML = '提交時發生錯誤，請稍後再試！';
        });
}

// 綁定表單提交事件
document.getElementById('questionForm').addEventListener('submit', sub);



// 禁用右鍵和開發者工具
document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("keydown", (event) => {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
    }
});
