tab_url_list = [
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/전략연구/캔들차트/candle_chart.html',
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/전략연구/캔들차트/candle_pattern1.html',
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/전략연구/캔들차트/candle_pattern2.html',
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/전략연구/캔들차트/candle_pattern3.html',
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/전략연구/캔들차트/candle_pattern4.html',
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/전략연구/캔들차트/candle_pattern5.html',
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/전략연구/캔들차트/candle_pattern6.html',
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/전략연구/캔들차트/candle_pattern7.html',
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/전략연구/캔들차트/candle_usage.html'
];

tab_file_list = [
  './candle_chart.html',
  './candle_pattern1.html',
  './candle_pattern2.html',
  './candle_pattern3.html',
  './candle_pattern4.html',
  './candle_pattern5.html',
  './candle_pattern6.html',
  './candle_pattern7.html',
  './candle_usage.html'
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

  
  