// script.js
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');

    // 버튼이 존재하는지 확인 (방어적 코드)
    if (btn) {
        btn.addEventListener('click', function() {
            // body에 'dark-mode' 클래스를 토글
            document.body.classList.toggle('dark-mode');
            
            // 시각적 피드백: 콘솔 확인용 (브라우저 F12에서 확인 가능)
            console.log("Dark mode toggled: ", document.body.classList.contains('dark-mode'));
        });
    } else {
        console.error("버튼을 찾을 수 없습니다. ID가 'theme-toggle'인지 확인해주세요.");
    }
});
