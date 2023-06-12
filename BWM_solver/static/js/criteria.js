// Handle changing the number of criteria
const numCriteriaSelect = document.getElementById('id_num_criteria');
const criteriaLabelsContainer = document.getElementById('criteria-labels-container');
const comparedBestValuesContainer = document.getElementById('compared-best-values');
const comparedWorstValuesContainer = document.getElementById('compared-worst-values');
const calculateButton = document.getElementById('calculate-button');

numCriteriaSelect.addEventListener('change', function() {
  const numCriteria = parseInt(this.value);
  criteriaLabelsContainer.innerHTML = '';
  comparedBestValuesContainer.innerHTML = '';
  comparedWorstValuesContainer.innerHTML = '';

  if (numCriteria > 0) {
    const labelsHeading = document.createElement('h3');
    labelsHeading.textContent = 'Names of Criteria:';
    criteriaLabelsContainer.appendChild(labelsHeading);

    for (let i = 0; i < numCriteria; i++) {
      const input = document.createElement('input');
      input.type = 'text';
      input.name = `criteria_${i}`;
      input.id = `criteria_${i}`;
      input.required = true;

      const br = document.createElement('br');

      criteriaLabelsContainer.appendChild(input);
      criteriaLabelsContainer.appendChild(br);
    }

    const comparedBestHeading = document.createElement('h3');
    comparedBestHeading.textContent = 'Best compared to others:';
    comparedBestValuesContainer.appendChild(comparedBestHeading);

    const comparedWorstHeading = document.createElement('h3');
    comparedWorstHeading.textContent = 'Others compared to worst:';
    comparedWorstValuesContainer.appendChild(comparedWorstHeading);

    for (let i = 0; i < numCriteria; i++) {
      const comparedBestInput = document.createElement('input');
      comparedBestInput.type = 'text';
      comparedBestInput.name = `compared2best_${i}`;
      comparedBestInput.id = `compared2best_${i}`;
      comparedBestInput.required = true;

      const comparedWorstInput = document.createElement('input');
      comparedWorstInput.type = 'text';
      comparedWorstInput.name = `compared2worst_${i}`;
      comparedWorstInput.id = `compared2worst_${i}`;
      comparedWorstInput.required = true;

      const br = document.createElement('br');

      comparedBestValuesContainer.appendChild(comparedBestInput);
      comparedBestValuesContainer.appendChild(br);

      comparedWorstValuesContainer.appendChild(comparedWorstInput);
      comparedWorstValuesContainer.appendChild(br);
    }

    calculateButton.classList.remove('hidden');
  } else {
    calculateButton.classList.add('hidden');
  }
});
