function updateDropdowns(criteriaInputs) {
  let bestCriteriaSelect = document.getElementById("best-criteria-select");
  let worstCriteriaSelect = document.getElementById("worst-criteria-select");

  // Clear the previous options
  bestCriteriaSelect.innerHTML = "";
  worstCriteriaSelect.innerHTML = "";

  // Create and append the placeholder options
  let bestPlaceholder = document.createElement("option");
  bestPlaceholder.value = "";
  bestPlaceholder.text = "Select Best Criterion";
  bestPlaceholder.disabled = true;
  bestPlaceholder.selected = true;
  bestCriteriaSelect.appendChild(bestPlaceholder);

  let worstPlaceholder = document.createElement("option");
  worstPlaceholder.value = "";
  worstPlaceholder.text = "Select Worst Criterion";
  worstPlaceholder.disabled = true;
  worstPlaceholder.selected = true;
  worstCriteriaSelect.appendChild(worstPlaceholder);
  
  // Repopulate the dropdowns
  criteriaInputs.forEach((input) => {
    let name = input.value;
    if (name) {
      let bestOption = document.createElement("option");
      bestOption.value = name;
      bestOption.innerText = name;
      bestCriteriaSelect.appendChild(bestOption);
  
      let worstOption = document.createElement("option");
      worstOption.value = name;
      worstOption.innerText = name;
      worstCriteriaSelect.appendChild(worstOption);
    }
  });
}
