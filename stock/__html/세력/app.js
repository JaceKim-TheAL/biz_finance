// 1. 리스트 변수(배열) 선언
let images = [];


// 2. for 반복문을 사용하여 1부터 10까지 숫자 추가
for (let i = 1; i <= 39; i++) {
    // 배열의 마지막에 요소를 추가하는 push() 메서드를 사용합니다.
    
    strNumber = String(i).padStart(2, '0');
    // strNumber = (i < 10) ? '0' + i : String(i);
    imgFilename = "./img/유아세력_" + strNumber + ".png";
    images.push(imgFilename);
}

// 결과 확인
console.log('이미지갯수: ' + images.length); 
console.log('images = [ ' +  images + ' ]'); 
// const images = [
//     '유아세력_01.png',
//     '유아세력_02.png',
//     '유아세력_03.png',
//     '.............',
//     '.............'
// ];

let currentImageIndex = 0; // 현재 이미지 인덱스
let intervalId = null;     // setInterval ID를 저장하여 중지할 때 사용
const intervalTime = 3000; // 3초 (3000 밀리초) 간격

// DOM 요소 가져오기
const imageDisplay = document.getElementById('imageDisplay');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const toggleAutoButton = document.getElementById('toggleAutoButton');


/**
 * 다음 이미지로 변경하는 핵심 함수
 */
function changeToNextImage() {
    // 인덱스를 1 증가시키고, 이미지 배열의 길이를 넘으면 0으로 초기화하여 순환합니다.
    currentImageIndex = (currentImageIndex + 1) % images.length;
    console.log('currentImageIndex : ' + currentImageIndex + '/' + images.length); 
    imageDisplay.src = images[currentImageIndex];
    console.log(`이미지 변경됨: ${images[currentImageIndex]}`);
}


function changeToPrevImage() {
    // 인덱스를 1 증가시키고, 이미지 배열의 길이를 넘으면 0으로 초기화하여 순환합니다.
    currentImageIndex = (currentImageIndex - 1) % images.length;
    console.log('currentImageIndex : ' + currentImageIndex + '/' + images.length); 
    imageDisplay.src = images[currentImageIndex];
    console.log(`이미지 변경됨: ${images[currentImageIndex]}`);
}


/**
 * 자동 이미지 변경을 시작하거나 중지하는 함수
 */
function toggleAutoChange() {
    if (intervalId) {
        // 이미 자동 변경이 실행 중이면 (ID가 있으면) 중지합니다.
        clearInterval(intervalId);
        intervalId = null;
        toggleAutoButton.textContent = '자동 변경 시작';
        console.log('자동 변경이 중지되었습니다.');
    } else {
        // 자동 변경이 중지 상태이면 (ID가 없으면) 시작합니다.
        // changeToNextImage 함수를 지정된 시간 간격마다 실행합니다.
        intervalId = setInterval(changeToNextImage, intervalTime);
        toggleAutoButton.textContent = '자동 변경 중지';
        console.log(`자동 변경이 ${intervalTime / 1000}초 간격으로 시작되었습니다.`);
    }
}

// --------------------
// 이벤트 리스너 등록
// --------------------

// 1. '다음 이미지' 버튼 클릭 시
nextButton.addEventListener('click', () => {
    // 수동 변경 시에는 자동 변경을 일시적으로 중지하는 것이 일반적입니다. (선택 사항)
    if (intervalId) {
        toggleAutoChange(); // 자동 변경 중지
        // 주석 처리하면 수동 변경과 자동 변경이 동시에 작동합니다.
    }
    changeToNextImage();
});

prevButton.addEventListener('click', () => {
    // 수동 변경 시에는 자동 변경을 일시적으로 중지하는 것이 일반적입니다. (선택 사항)
    if (intervalId) {
        toggleAutoChange(); // 자동 변경 중지
        // 주석 처리하면 수동 변경과 자동 변경이 동시에 작동합니다.
    }
    changeToPrevImage();
});


// 2. '자동 변경 시작/중지' 버튼 클릭 시
toggleAutoButton.addEventListener('click', toggleAutoChange);

// 페이지 로드 시 초기 상태 설정
toggleAutoButton.textContent = '자동 변경 시작';
imageDisplay.src = images[currentImageIndex]; // 초기 이미지 설정
