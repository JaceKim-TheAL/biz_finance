// 1. 리스트 변수(배열) 선언
let images = [];
let imagesCount = 20;

// 2. for 반복문을 사용하여 1부터 imagesCount까지 숫자 추가
for (let i = 1; i <= imagesCount; i++) {
    // 배열의 마지막에 요소를 추가하는 push() 메서드를 사용합니다.
    
    strNumber = String(i).padStart(2, '0');
    // strNumber = (i < 10) ? '0' + i : String(i);
    imgFilename = "./img/단테_손절특강_" + strNumber + ".png";
    images.push(imgFilename);
}

let currentIndex = 0; // 현재 이미지 인덱스 (0부터 시작)

// DOM 요소 가져오기
const photoDisplay = document.getElementById('photoDisplay');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const counter = document.getElementById('counter');

/**
 * 앨범 상태를 업데이트합니다.
 */
function updateAlbum() {
    // 1. 이미지 소스(src) 업데이트
    photoDisplay.src = images[currentIndex];
    
    // 2. 카운터 텍스트 업데이트 (사용자에게는 1부터 보이도록 +1)
    counter.textContent = `${currentIndex + 1} / ${images.length}`;
}

/**
 * 다음 이미지로 이동합니다.
 */
function showNext() {
    // 인덱스를 1 증가시키고, 배열의 마지막을 넘으면 0으로 돌아가 순환합니다.
    currentIndex = (currentIndex + 1) % images.length;
    updateAlbum();
}

/**
 * 이전 이미지로 이동합니다.
 */
function showPrevious() {
    // 인덱스를 1 감소시키고, 0보다 작아지면 배열의 마지막 인덱스로 돌아가 순환합니다.
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateAlbum();
}


// --------------------
// 이벤트 리스너 등록
// --------------------

// 1. '다음' 버튼 클릭 시
nextBtn.addEventListener('click', showNext);

// 2. '이전' 버튼 클릭 시
prevBtn.addEventListener('click', showPrevious);

// 페이지 로드 시 초기 이미지와 카운터 설정
updateAlbum();