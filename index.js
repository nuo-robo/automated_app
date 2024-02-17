const dataURL = './store/controller.json';
fetch(dataURL)
  .then(response => response.json())
  .then(data => {
    const headerContent = data.header;
    const element = document.querySelector('.header');
    element.innerHTML = headerContent;
  })
  .catch(error => console.error('Error fetching data:', error));
