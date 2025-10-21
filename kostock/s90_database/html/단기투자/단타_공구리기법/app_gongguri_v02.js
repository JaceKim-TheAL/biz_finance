// 1. 리스트 변수(배열) 선언
let images = [];
let imagesCount = 16;

// 2. for 반복문을 사용하여 1부터 imagesCount까지 숫자 추가
for (let i = 1; i <= imagesCount; i++) {
    // 배열의 마지막에 요소를 추가하는 push() 메서드를 사용합니다.
    
    strNumber = String(i).padStart(2, '0');
    // strNumber = (i < 10) ? '0' + i : String(i);
    imgFilename = "./img/공구리특강2_" + strNumber + ".png";
    images.push(imgFilename);
}

let 이미지폴더명 = "./img";    // 이미지 폴더명 설정
let 화면변경시간 = 1000; // 밀리초 단위로 설정 (예: 1000ms = 1초)

var currentIndex = 0;

function sleep(ms) {
    const start = new Date().getTime();
    while (new Date().getTime() < start + ms) {
    // 아무것도 하지 않고 대기
    }
}

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // 다음 이미지로 순환
    // document.getElementById("trgImg").src = 이미지폴더명 + "/" + images[currentIndex];
    document.getElementById("trgImg").src = images[currentIndex];
    console.log("currentIndex: " + currentIndex + "/" + images.length);

    if(currentIndex==1) {
    // setTimeout(alert("Start to display!!!"), 3000)
    console.log("Start to display!!!");
    sleep(3000)
    }
    if(currentIndex==images.length-1) {
    console.log("Finished!!!");
    sleep(1000)
    }
}

// 1초(1000ms) 후에 changeImage 함수 실행
setInterval(changeImage, 화면변경시간); 

