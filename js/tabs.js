function initializeTabs() {
    const tabBtns = document.querySelectorAll("[data-tab-group].tab-btn");
    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => handleTabClick(btn));
    });
}

function handleTabClick(btn) {
    const group = btn.dataset.tabGroup;
    const target = btn.dataset.target;

    document.querySelectorAll(`[data-tab-group="${group}"].active`).forEach(el => el.classList.remove("active"));
    btn.classList.add("active");

    document.querySelectorAll(`[data-tab-group="${group}"].tab-content`).forEach(content => content.classList.add("d-none"));
    document.querySelector(`[data-tab-group="${group}"][data-tab-id="${target}"]`).classList.remove("d-none");
}

initializeTabs();
