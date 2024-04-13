const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', () => {

  setTimeout(() => {

    const changeText = document.getElementById('text');

  changeText.textContent = 'ボタンをクリックしました';
  
  },2000);
  
});