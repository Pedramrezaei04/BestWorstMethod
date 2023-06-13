let numCriteriaSelect = document.getElementById("id_num_criteria");
let criteriaLabelsContainer = document.getElementById("criteria-labels-container");
let bestCriteriaSelect = document.getElementById("best-criteria-select");
let worstCriteriaSelect = document.getElementById("worst-criteria-select");
let comparedBestValuesContainer = document.getElementById("compared-best-values");
let comparedWorstValuesContainer = document.getElementById("compared-worst-values");
let calculateButton = document.getElementById("calculate-button");

let criteriaInputs = [];

numCriteriaSelect.addEventListener("change", function () {
  let numCriteria = parseInt(this.value);
  criteriaLabelsContainer.innerHTML = "";
  comparedBestValuesContainer.innerHTML = "";
  comparedWorstValuesContainer.innerHTML = "";
  criteriaInputs = [];

  if (numCriteria > 0) {
    let labelsHeading = document.createElement("h3");
    labelsHeading.textContent = "Names of Criteria:";
    criteriaLabelsContainer.appendChild(labelsHeading);

    for (let i = 0; i < numCriteria; i++) {
      let input = document.createElement("input");
      input.type = "text";
      input.name = `criteria_${i}`;
      input.id = `criteria_${i}`;
      input.required = true;

      input.addEventListener("input", function () {
        updateDropdowns(criteriaInputs);
        updateComparedValuesContainers(criteriaInputs);
      });

      let br = document.createElement("br");

      criteriaLabelsContainer.appendChild(input);
      criteriaLabelsContainer.appendChild(br);

      criteriaInputs.push(input);
    }

    updateDropdowns(criteriaInputs);
    updateComparedValuesContainers(criteriaInputs);

    calculateButton.classList.remove("hidden");
  } else {
    calculateButton.classList.add("hidden");
  }
});

function updateComparedValuesContainers(criteriaInputs) {
  comparedBestValuesContainer.innerHTML = "";
  comparedWorstValuesContainer.innerHTML = "";

  // Get the selected values from the dropdowns, or default to "Best" and "Worst"
  let selectedBest = bestCriteriaSelect.value || "Best";
  let selectedWorst = worstCriteriaSelect.value || "Worst";

  let bestHeading = document.createElement("h3");
  bestHeading.textContent = `${selectedBest} compared to others:`;
  comparedBestValuesContainer.appendChild(bestHeading);

  let worstHeading = document.createElement("h3");
  worstHeading.textContent = `Others compared to ${selectedWorst}:`;
  comparedWorstValuesContainer.appendChild(worstHeading);

  criteriaInputs.forEach((input, i) => {
    let bestLabel = document.createElement("label");
    let bestInput = document.createElement("input");
    bestInput.type = "text";
    bestInput.name = `compared2best_${i}`;
    bestInput.id = `compared2best_${i}`;
    bestInput.required = true;

    let worstLabel = document.createElement("label");
    let worstInput = document.createElement("input");
    worstInput.type = "text";
    worstInput.name = `compared2worst_${i}`;
    worstInput.id = `compared2worst_${i}`;
    worstInput.required = true;

    if (input.value.length > 0) {
      bestLabel.textContent = input.value + ': ';
      worstLabel.textContent = input.value + ': ';
    } else {
      bestLabel.textContent = '';
      worstLabel.textContent = '';
    }

    comparedBestValuesContainer.appendChild(bestLabel);
    comparedBestValuesContainer.appendChild(bestInput);
    comparedBestValuesContainer.appendChild(document.createElement("br"));

    comparedWorstValuesContainer.appendChild(worstLabel);
    comparedWorstValuesContainer.appendChild(worstInput);
    comparedWorstValuesContainer.appendChild(document.createElement("br"));

    // If the current criteria is the selected best or worst, make its compared value 1
    if (input.value === selectedBest) {
      bestInput.value = 1;
      bestInput.readOnly = true;
    }
    if (input.value === selectedWorst) {
      worstInput.value = 1;
      worstInput.readOnly = true;
    }
  });
}

bestCriteriaSelect.addEventListener("change", function () {
  updateComparedValuesContainers(criteriaInputs);
});

worstCriteriaSelect.addEventListener("change", function () {
  updateComparedValuesContainers(criteriaInputs);
});
