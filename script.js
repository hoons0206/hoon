document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    const cursor = document.getElementById('custom-cursor');
    const heroText = document.querySelector('.hero-text');

    // 1. 커서 위치 추적
    document.addEventListener('mousemove', (e) => {
        if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }
    });

    // 2. 텍스트를 span으로 쪼개주는 함수 (HTML 태그 보존형)
    const splitIntoSpans = (element) => {
        if (!element) return;
        
        // 요소 내부의 텍스트 노드만 찾아 쪼갭니다. (자식 버튼 등은 건드리지 않음)
        const nodes = Array.from(element.childNodes);
        element.innerHTML = ''; 

        nodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                const text = node.textContent;
                for (let char of text) {
                    if (char === ' ' || char === '\n') {
                        element.appendChild(document.createTextNode(char));
                    } else {
                        const span = document.createElement('span');
                        span.textContent = char;
                        span.className = 'var-char';
                        element.appendChild(span);
                    }
                }
            } else {
                // 이미 HTML 요소(button, br 등)라면 그대로 다시 붙입니다.
                element.appendChild(node);
            }
        });
    };

    // 3. 초기 타겟팅 및 쪼개기 실행
    const initAnimationTargets = () => {
        const targets = [
            document.querySelector('.site-header h1'),
            ...document.querySelectorAll('.sidebar p'),
            document.querySelector('.download-btn'),
            document.querySelector('.experiment-btn')
        ];
        
        targets.forEach(target => {
            if (target && !target.querySelector('.var-char')) {
                splitIntoSpans(target);
            }
        });
    };

    initAnimationTargets();

    // 4. 테마 토글 버튼 로직 (텍스트 변경 시 재실행)
    if (btn) {
        btn.addEventListener('click', function() {
            const isDark = document.body.classList.toggle('dark-mode');
            
            // 텍스트 변경
            btn.textContent = isDark ? 'Experiment' : 'Conformity';
            
            // 텍스트가 바뀌었으므로 다시 쪼개기 (매우 중요)
            splitIntoSpans(btn);
            
            console.log("Dark mode toggled: ", isDark);
        });
    }

    // 5. 텍스트 입력 영역 진입 시 커서 모양 변경
    if (heroText && cursor) {
        heroText.addEventListener('mouseenter', () => {
            document.body.classList.add('typing-mode');
        });
        heroText.addEventListener('mouseleave', () => {
            document.body.classList.remove('typing-mode');
        });
    }

    // 6. 실시간 굵기 랜덤 변경 (setInterval)
    setInterval(() => {
        const chars = document.querySelectorAll('.var-char');
        const isDark = document.body.classList.contains('dark-mode');

        chars.forEach(char => {
            if (isDark) {
                const randomWeight = Math.floor(Math.random() * 301) + 100;
                char.style.fontVariationSettings = `"wght" ${randomWeight}`;
                char.style.fontWeight = randomWeight;
            } else {
                char.style.fontVariationSettings = `"wght" 300`;
                char.style.fontWeight = 300;
            }
        });
    }, 200);
});
