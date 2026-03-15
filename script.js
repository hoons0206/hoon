// script.js
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    const cursor = document.getElementById('custom-cursor');
    const heroText = document.querySelector('.hero-text');

    // 버튼이 존재하는지 확인 (방어적 코드)
    if (btn) {
        btn.addEventListener('click', function() {
            // body에 'dark-mode' 클래스를 토글
            const isDark = document.body.classList.toggle('dark-mode');

            if (isDark) {
                btn.textContent = 'Experiment';
            } else {
                btn.textContent = 'Conformity';
            }
            
            // 시각적 피드백: 콘솔 확인용 (브라우저 F12에서 확인 가능)
            console.log("Dark mode toggled: ", document.body.classList.contains('dark-mode'));
        });
    } else {
        console.error("버튼을 찾을 수 없습니다. ID가 'theme-toggle'인지 확인해주세요.");
    }
// 1. 커서 위치 추적
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // 2. 입력 영역 진입 시 'I' 모양으로 변경 (클래스 토글)
    if (heroText) {
        heroText.addEventListener('mouseenter', () => {
            document.body.classList.add('typing-mode');
        });
        heroText.addEventListener('mouseleave', () => {
            document.body.classList.remove('typing-mode');
        });
    }

    // --- 기존 테마 토글 코드 유지 ---
    const btn = document.getElementById('theme-toggle');
    if (btn) {
        btn.addEventListener('click', function() {
            const isDark = document.body.classList.toggle('dark-mode');
            btn.textContent = isDark ? 'Experiment' : 'Conformity';
            // ... (나머지 코드 유지)
        });
    }
});
