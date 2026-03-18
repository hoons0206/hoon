document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    const cursor = document.getElementById('custom-cursor');
    const heroText = document.querySelector('.hero-text');
    const headerTitle = document.querySelector('.site-header h1');
    const sidebarP = document.querySelector('.sidebar p'); // 정보란의 문단 선택

    // 1. 커서 위치 추적
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
            btn.textContent = isDark ? 'Experiment' : 'Conformity';
        });
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

    // --- 4. 가변 서체 애니메이션 준비 로직 ---

    // 텍스트를 span으로 쪼개주는 재사용 함수
    const splitIntoSpans = (element) => {
        if (!element) return;
        const text = element.textContent;
        element.innerHTML = '';
        for (let char of text) {
            if (char === ' ') {
                element.appendChild(document.createTextNode(' '));
            } else {
                const span = document.createElement('span');
                span.textContent = char;
                span.className = 'var-char';
                element.appendChild(span);
            }
        }
    };

    // 이름(h1)과 정보란(p) 모두 쪼개기 실행
    splitIntoSpans(headerTitle);
    splitIntoSpans(sidebarP);

    // 5. 실시간 굵기 랜덤 변경 (setInterval)
    setInterval(() => {
        const chars = document.querySelectorAll('.var-char');
        const isDark = document.body.classList.contains('dark-mode');

        chars.forEach(char => {
            if (isDark) {
                // Experiment 모드: 100 ~ 400 랜덤
                const randomWeight = Math.floor(Math.random() * 301) + 100;
                char.style.fontVariationSettings = `"wght" ${randomWeight}`;
                char.style.fontWeight = randomWeight;
            } else {
                // Conformity 모드: 300 고정
                char.style.fontVariationSettings = `"wght" 300`;
                char.style.fontWeight = 300;
            }
        });
    }, 200); // 0.2초 간격
});
