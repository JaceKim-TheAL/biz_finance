tab_url_list = [
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/전략연구/유동성사냥/hunter_main.html',
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/전략연구/유동성사냥/hunter_tab1.html',
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/전략연구/유동성사냥/hunter_tab2.html',
  'https://htmlpreview.github.io/?https://raw.githubusercontent.com/JaceKim-TheAL/biz_finance/master/kostock/s90_database/html/전략연구/유동성사냥/hunter_usage.html'
];

tab_file_list = [
  './hunter_main.html',
  './hunter_tab1.html',
  './hunter_tab2.html',
  './hunter_usage.html'
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

  
  