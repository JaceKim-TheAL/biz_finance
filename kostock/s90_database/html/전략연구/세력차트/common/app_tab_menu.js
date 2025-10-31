tab_url_list = [
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/watest/자동재생/kpop_idol.html', 
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/watest/자동재생/kpop_idol1.html', 
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/watest/자동재생/kpop_idol2.html', 
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/watest/자동재생/kpop_idol3.html', 
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/watest/자동재생/kpop_idol4.html', 
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/watest/자동재생/kpop_idol5.html' 
];

tab_file_list = [
  './kpop_idol.html',
  './kpop_idol1.html',
  './kpop_idol2.html',
  './kpop_idol3.html',
  './kpop_idol4.html',
  './kpop_idol5.html'
];


  function navigateToTab(index) {
    // window.location.href = tab_url_list[index];
    window.location.href = tab_file_list[index];
  }

  function showChapter(index) {
    const contents = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-header button');

    contents.forEach((c, i) => {
      c.classList.toggle('active', i === index);
    });

    buttons.forEach((b, i) => {
      b.classList.toggle('active', i === index);
    });
  }

  
  