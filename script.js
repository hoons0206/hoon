document.addEventListener("mousemove", function(e) {
  // 좁은 영역 (중심에서 -0.2~0.2)
  const x = ((e.clientX / window.innerWidth - 0.5) * 2); // -1 ~ 1
  const y = ((e.clientY / window.innerHeight - 0.5) * 2);

  // 곱하는 수치를 키워서 더 강한 비틀림
  const distortionFactor = 100; // ⬅ 여기 숫자를 올리면 더 강해짐

  const moveX = x * distortionFactor;
  const moveY = y * distortionFactor;

  document.body.style.backgroundPosition = `${moveX}px ${moveY}px`;
});

document.addEventListener('DOMContentLoaded', () => {
  const images1 = [
    'images/1.png',
    'images/2.png',
    'images/3.png',
    'images/4.png',
    'images/5.png',
    'images/6.png',
    'images/7.png',
    'images/8.png',
    'images/9.png',
    'images/10.png'
  ];

  const images2 = [
    'images/11.png',
    'images/12.png',
    'images/13.png',
    'images/14.png',
    'images/15.png',
    'images/16.png',
    'images/17.png',
    'images/18.png',
    'images/19.png',
    'images/20.png'
  ];

  let index1 = 0;
  let index2 = 0;

  const img1 = document.getElementById('slideImage1');
  const img2 = document.getElementById('slideImage2');

  function changeImage1() {
    img1.style.opacity = 0;
    setTimeout(() => {
      index1 = (index1 + 1) % images1.length;
      img1.src = images1[index1];
      img1.style.opacity = 1;
    }, 500);
  }

  function changeImage2() {
    img2.style.opacity = 0;
    setTimeout(() => {
      index2 = (index2 + 1) % images2.length;
      img2.src = images2[index2];
      img2.style.opacity = 1;
    }, 500);
  }

  setInterval(changeImage1, 4000); // 슬라이더 1
  setInterval(changeImage2, 5000); // 슬라이더 2 (다르게 줘도 좋아)
});

