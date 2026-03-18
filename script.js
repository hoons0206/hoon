document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    const cursor = document.getElementById('custom-cursor');
    const heroText = document.querySelector('.hero-text');
    const headerTitle = document.querySelector('.site-header h1');

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

    // 4. 가변 서체(Variable Font) 실시간 제어 로직
    if (headerTitle) {
        const text = headerTitle.textContent;
        headerTitle.innerHTML = ''; // 기존 텍스트 비우기

        // 한 글자씩 쪼개서 span 태그로 감싸기 (개별 제어를 위해)
        for (let char of text) {
            if (char === ' ') {
                // 띄어쓰기는 그대로 유지
                headerTitle.appendChild(document.createTextNode(' '));
            } else {
                const span = document.createElement('span');
                span.textContent = char;
                span.className = 'var-char';
                headerTitle.appendChild(span);
            }
        }

        // 일정한 시간 간격으로 글자 굵기 무작위 변경
        // 200ms(0.2초) 간격으로 설정되어 있습니다. 숫자를 조절해 템포를 바꿀 수 있습니다.
        setInterval(() => {
            const chars = document.querySelectorAll('.var-char');
            const isDark = document.body.classList.contains('dark-mode');

            chars.forEach(char => {
                if (isDark) {
                    // Experiment 모드: 100 ~ 400 사이의 랜덤 정수 생성
                    const randomWeight = Math.floor(Math.random() * 301) + 100;
                    
                    // 가변 서체 축 제어 (호환성을 위해 fontVariationSettings와 fontWeight 동시 적용)
                    char.style.fontVariationSettings = `"wght" ${randomWeight}`;
                    char.style.fontWeight = randomWeight;
                } else {
                    // Conformity 모드: 굵기 300으로 고정
                    char.style.fontVariationSettings = `"wght" 300`;
                    char.style.fontWeight = 300;
                }
            });
        }, 200); 
    }
});
