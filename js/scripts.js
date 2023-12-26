// Ваш массив со ссылками
const linksArray = [
  'https://fonts.gstatic.com/s/robotocondensed/v25/ieVl2ZhZI2eCN5jzbjEETS9weq8-19-7DRs5.woff2',
  'https://fonts.gstatic.com/s/robotocondensed/v25/ieVl2ZhZI2eCN5jzbjEETS9weq8-19a7DRs5.woff2',
  'https://fonts.gstatic.com/s/robotocondensed/v25/ieVl2ZhZI2eCN5jzbjEETS9weq8-1967DRs5.woff2',
  'https://fonts.gstatic.com/s/robotocondensed/v25/ieVl2ZhZI2eCN5jzbjEETS9weq8-19G7DRs5.woff2',
  'https://fonts.gstatic.com/s/robotocondensed/v25/ieVl2ZhZI2eCN5jzbjEETS9weq8-1927DRs5.woff2',
  'https://fonts.gstatic.com/s/robotocondensed/v25/ieVl2ZhZI2eCN5jzbjEETS9weq8-19y7DRs5.woff2',
  'https://fonts.gstatic.com/s/robotocondensed/v25/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7DQ.woff2',
  // Добавьте остальные ссылки в этот массив
];

// Функция для открытия ссылок
function openLinksFromArray() {
  if (linksArray.length === 0) {
    console.log("Массив ссылок пуст.");
    clearInterval(intervalId);
    return;
  }

  const link = linksArray.shift();
  window.open(link, '_blank');
}

// Запуск функции каждые 500 миллисекунд
const intervalId = setInterval(openLinksFromArray, 500);
