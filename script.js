document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    const cursor = document.getElementById('custom-cursor');
    const heroText = document.querySelector('.hero-text');

    // 1. 커서 위치 추적 (마우스가 움직일 때마다 실행)
    document.addEventListener('mousemove', (e) => {
        if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }
    });

    // 2. 테마 토글 버튼 로직
    if (btn) {
        btn.addEventListener('click', function() {
            const isDark = document.body.classList.toggle('dark-mode');
            
            // 텍스트 변경: 다크모드(Experiment) / 라이트모드(Conformity)
            btn.textContent = isDark ? 'Experiment' : 'Conformity';
            
            console.log("Dark mode toggled: ", isDark);
        });
    } else {
        console.error("버튼을 찾을 수 없습니다. ID가 'theme-toggle'인지 확인해주세요.");
    }

    // 3. 텍스트 입력 영역 진입 시 커서 모양 변경
    if (heroText && cursor) {
        heroText.addEventListener('mouseenter', () => {
            document.body.classList.add('typing-mode');
        });
        heroText.addEventListener('mouseleave', () => {
            document.body.classList.remove('typing-mode');
        });
    }
});
