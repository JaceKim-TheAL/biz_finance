### 세력의 유동성사냥
https://www.youtube.com/watch?v=pGg_JBGLbdI



### 페이지 작업
1. 파일구성
<script src="./common/app_tab_menu.js"></script>
tab_url_list, tab_file_list 에서 파일이름 변경

2. URL로 호출할지, FILE로 호출할지 정의
  function navigateToTab(index) {
    // URL호출
    window.location.href = tab_url_list[index];
    // FILE호출
    // window.location.href = tab_file_list[index];
  }

