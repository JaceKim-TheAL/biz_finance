tab_url_list = [
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/전략연구/세력매매/bigplayer_trading.html', 
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/전략연구/세력매매/bigplayer_trading1.html', 
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/전략연구/세력매매/bigplayer_trading2.html', 
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/전략연구/세력매매/bigplayer_trading3.html', 
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/전략연구/세력매매/bigplayer_trading4.html', 
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/전략연구/세력매매/bigplayer_trading5.html' 
];

tab_file_list = [
  './bigplayer_trading.html',
  './bigplayer_trading1.html',
  './bigplayer_trading2.html',
  './bigplayer_trading3.html',
  './bigplayer_trading4.html',
  './bigplayer_trading5.html'
];

  function navigateToTab(index) {
    window.location.href = tab_url_list[index];
    // window.location.href = tab_file_list[index];
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

  
  