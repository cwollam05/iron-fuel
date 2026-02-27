const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');
const menuSections = document.querySelectorAll('.menu-section');
const contentSections = document.querySelectorAll('main .section');

function itemMatchesFilter(item, selected) {
  const category = item.dataset.category;
  return selected === 'all' || !category || category === selected;
}

function filterMenu(selected) {
  // Show/hide individual menu items
  menuItems.forEach((item) => {
    item.style.display = itemMatchesFilter(item, selected) ? '' : 'none';
  });

  // Hide .menu-section divs when all their items are hidden (orphaned h3 headers)
  menuSections.forEach((section) => {
    const items = section.querySelectorAll('.menu-item');
    const hasVisible = Array.from(items).some((item) => itemMatchesFilter(item, selected));
    section.style.display = hasVisible ? '' : 'none';
  });

  // Hide outer sections when all their items are hidden (orphaned h2 headers)
  contentSections.forEach((section) => {
    const items = section.querySelectorAll('.menu-item');
    if (items.length === 0) return; // no items (Meal Prep Services) — always show
    const hasVisible = Array.from(items).some((item) => itemMatchesFilter(item, selected));
    section.style.display = hasVisible ? '' : 'none';
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const selected = event.currentTarget.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    filterMenu(selected);
  });
});
