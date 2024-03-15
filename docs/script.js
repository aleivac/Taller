const container = document.querySelector('.container');

container.addEventListener('scroll', () => {
    if (container.scrollTop > 0) {
        container.classList.add('scroll-shadow');
    } else {
        container.classList.remove('scroll-shadow');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const dataTable = document.getElementById("dataTable");
    const rows = dataTable.getElementsByTagName("tr");

    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase();

        for (let i = 0; i < rows.length; i++) {
            const rowData = rows[i].textContent.toLowerCase();
            if (rowData.includes(searchTerm)) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    });
});
