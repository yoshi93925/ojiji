const toggleArea = document.querySelector('.image-toggle');

if (toggleArea) {
  toggleArea.addEventListener('click', () => {
    const img1 = toggleArea.querySelector('.img-1');
    const img2 = toggleArea.querySelector('.img-2');

    if (img1.style.display === 'none') {
      img1.style.display = 'block';
      img2.style.display = 'none';
    } else {
      img1.style.display = 'none';
      img2.style.display = 'block';
    }
  });
}

