// 切換夜間模式
function toggleNightMode() {
    document.body.classList.toggle('night-mode');
    const nightModeButton = document.getElementById('nightModeButton');
    nightModeButton.innerText = document.body.classList.contains('night-mode') 
        ? '切換科幻模式' 
        : '切換夜間模式';
}

// 初始化時檢查模式並設定按鈕文字
window.onload = function() {
    const nightModeButton = document.getElementById('nightModeButton');
    nightModeButton.innerText = document.body.classList.contains('night-mode') 
        ? '切換科幻模式' 
        : '切換夜間模式';
};

// 動態生成頁面內容
function generatePageContent(language, page) {
    const content = {
        home: {
            zh: `<h2>你好！</h2><p>我是 Sean，這是我的專屬網站，歡迎你來探索我的興趣與作品。</p>`,
            en: `<h2>Hello!</h2><p>I am Sean, welcome to my personal website.</p>`
        },
        about: {
            zh: `
                <h2>我的資訊</h2>
                <ul>
                    <li><strong>興趣：</strong>寫程式、看書、打遊戲</li>
                    <li><strong>生日：</strong>2011年2月23日</li>
                    <li><strong>星座：</strong>雙魚♓</li>
                    <li><strong>個性：</strong>不知道😗，我是社恐<del>(恐怖分子)</del></li>
                    <li><strong>會寫的程式語言：</strong>Python、C、C++、HTML、CSS、JavaScript（不太厲害）</li>
                </ul>
                <h2>檢定/競賽</h2>
                <ul>
                    <li>APCS : 4+3</li>
                    <li>2023: YTP 初賽第8</li>
                    <li>2024: YTP 決賽第14</li>
                    <li>MTA-微軟專業應用技術國際認證(python)</li>
                    <a href="https://apcs.csie.ntnu.edu.tw/">APCS</a>
                </ul>
                <h2>好友的網站</h2>
                <ul>
                    <li><a href="https://hung-liu.github.io/">hung's web</a></li>
                </ul>
                <h2>圖片</h2>
                <img src="MTA.png"/>
            `,
            en: `
                <h2>About Me</h2>
                <ul>
                    <li><strong>Interests:</strong> Programming, Reading, Gaming</li>
                    <li><strong>Birthday:</strong> February 23, 2011</li>
                    <li><strong>Star Sign:</strong> Pisces♓</li>
                    <li><strong>Personality:</strong> I don't know 😗</li>
                    <li><strong>Programming Languages:</strong> Python, C, C++, HTML, CSS, JavaScript (not very good)</li>
                </ul>
                <h2>Certifications/Competitions</h2>
                <ul>
                    <li>APCS : 4+3</li>
                    <li>2023: YTP Preliminary round NO.8</li>
                    <li>2024: YTP final NO.14</li>
                    <li>Microsoft Technology Associate (Python)</li>
                    <a href="https://apcs.csie.ntnu.edu.tw/">APCS</a>
                </ul>
                <h2>My Friend's Website</h2>
                <ul>
                    <li><a href="https://hung-liu.github.io/">hung's web</a></li>
                </ul>
                <h2>Image</h2>
                <img src="MTA.png"/>
            `
        },
        contact: {
            zh: `
                <h2>如何聯絡我</h2>
                <ul>
                    <li><strong>Gmail：</strong><a href="mailto:seanhsieh0223@gmail.com">seanhsieh0223@gmail.com</a></li>
                    <li><strong>Discord：</strong>seanhsieh0223@gmail.com</li>
                    <li><strong>Instagram：</strong><a href="https://www.instagram.com/seanh_code/?hl=zh-tw">seanh_code</a></li>
                </ul>
            `,
            en: `
                <h2>Contact Me</h2>
                <ul>
                    <li><strong>Gmail:</strong><a href="mailto:seanhsieh0223@gmail.com">seanhsieh0223@gmail.com</a></li>
                    <li><strong>Discord:</strong> seanhsieh0223@gmail.com</li>
                    <li><strong>Instagram:</strong><a href="https://www.instagram.com/seanh_code/?hl=zh-tw">seanh_code</a></li>
                </ul>
            `
        },
        question: {
            zh: `
                <h2>留下你的問題</h2>
                <form id="questionForm">
                    <label for="userName">你的名字：</label>
                    <input type="text" id="userName" name="from_name" required>

                    <label for="userEmail">你的電子郵件：</label>
                    <input type="email" id="userEmail" name="from_email" required>

                    <label for="userQuestion">你的提問：</label>
                    <textarea id="userQuestion" name="message" rows="5" required></textarea>

                    <button type="submit">送出提問</button>
                </form>
            `,
            en: `
                <h2>Ask a Question</h2>
                <form id="questionForm">
                    <label for="userName">Your Name:</label>
                    <input type="text" id="userName" name="from_name" required>

                    <label for="userEmail">Your Email:</label>
                    <input type="email" id="userEmail" name="from_email" required>

                    <label for="userQuestion">Your Question:</label>
                    <textarea id="userQuestion" name="message" rows="5" required></textarea>

                    <button type="submit">Submit Question</button>
                </form>
            `
        }
    };

    return content[page][language];
}

// 更改語言
function changeLanguage(selectElement) {
    const language = selectElement.value;

    // 更新按鈕文字
    const buttonTexts = {
        zh: {
            home: '首頁',
            about: '關於我',
            contact: '聯絡方式',
            question: '提問',
            nightMode: '切換夜間模式'
        },
        en: {
            home: 'Home',
            about: 'About Me',
            contact: 'Contact',
            question: 'Ask a Question',
            nightMode: 'Toggle Night Mode'
        }
    };

    document.getElementById('homeButton').innerText = buttonTexts[language].home;
    document.getElementById('aboutButton').innerText = buttonTexts[language].about;
    document.getElementById('contactButton').innerText = buttonTexts[language].contact;
    document.getElementById('questionButton').innerText = buttonTexts[language].question;
    document.getElementById('nightModeButton').innerText = buttonTexts[language].nightMode;

    // 更新頁面內容
    pages.home = generatePageContent(language, 'home');
    pages.about = generatePageContent(language, 'about');
    pages.contact = generatePageContent(language, 'contact');
    pages.question = generatePageContent(language, 'question');

    loadPage('home');
}

// 頁面內容
const pages = {
    home: '',
    about: '',
    contact: '',
    question: ''
};

// 初始化 EmailJS
(function() {
    emailjs.init('EKv9vDoRS816xS0Yb');
})();

// 根據按鈕切換頁面
function loadPage(page) {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = pages[page];

    if (page === 'question') {
        const form = document.getElementById('questionForm');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const formStatus = document.getElementById('formStatus');
            formStatus.style.display = 'block';
            formStatus.innerHTML = '正在提交您的問題...';

            emailjs.sendForm('service_za8o36i', 'template_p22yav2', form)
                .then(function(response) {
                    loadPage('thankYou');
                }, function(error) {
                    formStatus.innerHTML = '提交時發生錯誤，請稍後再試！';
                });
        });
    }
}

// 禁止右鍵和開發者工具
document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("keydown", (event) => {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
    }
});