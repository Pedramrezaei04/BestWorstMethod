// Handle form submission using AJAX

document.getElementById('bwm-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const form = event.target;
    const formData = new FormData(form);
  
    fetch("{% url 'calculate' %}", {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      const weightsList = document.getElementById('weights-list');
      const consistencyRatio = document.getElementById('consistency-ratio');
  
      weightsList.innerHTML = '';
  
      for (const [key, value] of Object.entries(data.weights)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${key}: ${value}`;
        weightsList.appendChild(listItem);
      }
  
      consistencyRatio.textContent = data.consistency_ratio;
  
      const resultsContainer = document.getElementById('results-container');
      resultsContainer.style.display = 'block';
    })
    .catch(error => console.error(error));
  });
  