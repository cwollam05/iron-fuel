Step 1 — Tag the HTML (data attributes only)
    Add data-category="bulking" or data-category="cutting" to the right elements in menu.html. No visual change yet, just
    wiring up the data structure the JS will read later.
    - Outer sections get tagged (Bulking Meals, Cutting Meals)
    - Inner menu-section divs inside Smoothies get tagged (Bulking Shakes, Cutting Shakes)

Step 2 — Add filter button HTML
    Add a <div class="filter-bar"> with three <button> elements (All, Bulking, Cutting) to menu.html, placed after the
    kitchen image. Buttons will appear on the page but do nothing yet.

Step 3 — Style the filter buttons
    Add .filter-bar and .filter-btn CSS to styles.css, including an .active state so the selected button looks
    highlighted. Buttons will look polished but still non-functional.

Step 4 — Write the JavaScript filter logic
    Add a <script> block to menu.html that:
    - Listens for button clicks
    - Toggles the .active class on buttons
    - Shows/hides elements based on their data-category vs. the selected filter
    - Handles "All" by showing everything