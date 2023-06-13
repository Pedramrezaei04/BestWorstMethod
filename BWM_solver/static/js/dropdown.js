const dropdowns = document.querySelectorAll('.criteria-dropdown');

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('change', function() {
        const selectedOption = this.options[this.selectedIndex];
        if (selectedOption.value !== "Select Number Of Criteria") {
            this.classList.add('shrink');
        } else {
            this.classList.remove('shrink');
        }
    });
});
