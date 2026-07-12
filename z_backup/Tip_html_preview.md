🏠 > Tips > `github에서 html 파일 미리보기`

### Index

- [github에서 html 파일 미리보기](./Tip_html_preview.md)

---
# github에서 html 파일 미리보기

GitHub에서 HTML 파일을 미리보는 가장 일반적인 방법은 GitHub Pages를 활용하는 것입니다. 이 외에도 외부 도구나 브라우저 확장 프로그램을 사용하는 방법이 있습니다. 

## 방법 1: GitHub Pages 사용 (가장 일반적) 
GitHub Pages는 저장소에 있는 HTML, CSS, JavaScript 파일을 웹사이트로 만들어 배포하는 기능입니다. 

### 1. 저장소 설정
- HTML 파일이 있는 GitHub 저장소로 이동합니다.
- Settings 탭을 클릭합니다.
- 왼쪽 사이드바에서 Pages를 선택합니다.

### 2. 소스 설정
- Build and deployment 섹션의 Source 드롭다운 메뉴에서 Deploy from a branch를 선택합니다.
- Branch 메뉴에서 웹사이트로 게시할 브랜치(일반적으로 main 또는 gh-pages)와 폴더(/(root) 또는 /docs)를 선택하고 Save를 클릭합니다.

### 3. 사이트 배포
- 설정을 저장하면 GitHub가 사이트를 배포하기 시작합니다.
- 배포가 완료되면 페이지 상단에 웹사이트 URL(예: 사용자이름.github.io/저장소이름)이 표시됩니다.
- 이 URL을 방문하여 HTML 파일의 미리보기를 확인할 수 있습니다. 

<br/>

[[TOP]](#index)

---
## 방법 2: htmlpreview.github.io 사용 
`htmlpreview.github.io`는 저장소를 클론하거나 다운로드하지 않고 HTML 파일을 렌더링하는 클라이언트 측 도구입니다. 

### 1. HTML 파일 URL 복사
- GitHub 저장소에서 미리보기하려는 HTML 파일로 이동합니다.
- 파일 상단의 ... 버튼을 클릭하고 Copy permalink를 선택하여 영구 링크를 복사합니다.
- 또는 Raw 버튼을 눌러 나오는 원시(Raw) 파일의 URL을 복사해도 됩니다.

### 2. URL 형식 변환
- 복사한 URL을 https://htmlpreview.github.io/? 뒤에 붙여 넣습니다.
- 예시:
  - https://github.com/사용자이름/저장소이름/blob/main/index.html (일반 URL)
  - https://htmlpreview.github.io/?https://github.com/사용자이름/저장소이름/blob/main/index.html (변환된 URL)

### 3. 미리보기
- 변환된 URL에 접속하면 HTML 파일이 렌더링되어 표시됩니다. 


[[TOP]](#index)

---
## 방법 3: Chrome 확장 프로그램 사용
**Github Html Preview**와 같은 Chrome 확장 프로그램을 설치하면 GitHub에서 HTML 파일을 열었을 때 미리보기 버튼이 생겨 편리하게 볼 수 있습니다. 

### 1. 확장 프로그램 설치
- Chrome 웹 스토어에서 "Github Html Preview"를 검색하여 설치합니다.

### 2. 미리보기
- GitHub에서 HTML 파일을 열면 확장 프로그램이 제공하는 미리보기 버튼을 클릭하여 렌더링된 결과를 새 탭에서 확인합니다. 


[[TOP]](#index)

---
## 방법 4: CDN 서비스 이용
jsDelivr 같은 CDN(콘텐츠 전송 네트워크)을 활용하면 GitHub의 원시 파일을 직접 렌더링할 수 있습니다. 

### 1. 파일 URL 변환
- https://github.com/사용자이름/저장소이름/blob/main/index.html 같은 GitHub 파일 URL을 다음과 같이 변경합니다.
- https://cdn.jsdelivr.net/gh/사용자이름/저장소이름/index.html

### 2. 미리보기
- 변환된 CDN URL에 접속하면 HTML 파일이 렌더링됩니다. 

### 어떤 방법을 선택해야 할까요?
- **지속적인 배포가 필요하다면:** `GitHub Pages` 가 가장 좋습니다. 웹사이트 주소가 고정되어 다른 사람들과 공유하기 용이합니다.
- **간단한 파일 미리보기만 필요하다면:** `htmlpreview.github.io` 또는 `Chrome 확장 프로그램`이 편리합니다. 저장소 설정을 변경할 필요가 없습니다.
- **파일 로딩 속도를 최적화하고 싶다면:** `CDN 서비스`를 고려해 볼 수 있습니다.


[[TOP]](#index)

---