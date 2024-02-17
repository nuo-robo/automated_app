function fetchDataAndUpdate() {
  const dataURL = './store/controller.json';
  fetch(dataURL)
      .then(response => response.json())
      .then(data => {
          const headerContent = data.header;
          const contentData = data.body;

          // Select the elements to update
          const headerElement = document.querySelector('.header');
          const contentElement = document.querySelector('.content');

          // Set inner HTML of elements to data from JSON
          headerElement.innerHTML = headerContent;
          contentElement.innerHTML = contentData;
      })
      .catch(error => console.error('Error fetching data:', error));
}

fetchDataAndUpdate();
