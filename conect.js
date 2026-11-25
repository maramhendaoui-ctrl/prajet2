let currentPage = 0;

let pages = document.querySelectorAll("section");

function showPage() {

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    pages[currentPage].classList.add("active");

    document.getElementById("pageNumber").textContent =
        (currentPage + 1) + " / " + pages.length;
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
    } else {
        currentPage = 0;
    }

    showPage();
}

function previousPage() {
    if (currentPage > 0) {
        currentPage--;
    }

    showPage();
}