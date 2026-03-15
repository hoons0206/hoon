const btn = document.getElementById('theme-toggle');

    btn.addEventListener('click', function() {
        // body에 'dark-mode' 클래스를 토글
        document.body.classList.toggle('dark-mode');
        
        // 버튼 텍스트를 상태에 따라 변경하고 싶다면 (선택 사항)
        /*
        if (document.body.classList.contains('dark-mode')) {
            btn.textContent = 'normal';
        } else {
            btn.textContent = 'experiment';
        }
        */
    });

