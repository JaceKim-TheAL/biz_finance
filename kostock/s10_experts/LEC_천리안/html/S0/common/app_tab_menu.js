tab_url_list = [
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s10_experts/LEC_천리안/html/S0/천리안주식특강.html',
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s10_experts/LEC_천리안/html/S0/N04_낙폭과대매매.html',
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s10_experts/LEC_천리안/html/S0/N05_추세추종눌림.html',
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s10_experts/LEC_천리안/html/S0/N06_추세추종단스.html',
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s10_experts/LEC_천리안/html/S0/N07_리뉴얼매매법.html',
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s10_experts/LEC_천리안/html/S0/N01_시장먼저읽기.html',
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s10_experts/LEC_천리안/html/S0/N02_시소타기장세.html',
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s10_experts/LEC_천리안/html/S0/N03_종목선정실전.html',
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/전략연구/캔들차트/마지막노트.html'
];

tab_file_list = [
  './천리안주식특강.html',
  './N04_낙폭과대매매.html',
  './N05_추세추종눌림.html',
  './N06_추세추종단스.html',
  './N07_리뉴얼매매법.html',
  './N01_시장먼저읽기.html',
  './N02_시소타기장세.html',
  './N03_종목선정실전.html',
  './마지막노트.html'
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

  
  