document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    const form = document.getElementById('analyze-form');
    const input = document.getElementById('product-input');
    const btn = document.getElementById('analyze-btn');
    const btnIcon = document.getElementById('btn-icon');
    const btnText = document.getElementById('btn-text');
    const resultsContainer = document.getElementById('results-container');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const productName = input.value.trim();
        if (!productName) return;

        // Reset state
        resultsContainer.classList.add('hidden');
        btn.disabled = true;
        
        // Show loading state
        btnIcon.textContent = 'autorenew';
        btnIcon.classList.add('spin');
        btnText.textContent = 'Analyzing...';

        // Simulate API call/processing time
        setTimeout(() => {
            // Restore button
            btnIcon.classList.remove('spin');
            btnIcon.textContent = 'smart_toy';
            btnText.textContent = 'Check Product';
            btn.disabled = false;

            // Show results
            resultsContainer.classList.remove('hidden');
            
            // Scroll to results slightly
            resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 2000);
    });
});
