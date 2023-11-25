function filterResults () {
    var input, filter_text, results_view, filter_category;

    input = document.getElementById("search-text");
    filter_text = input.value.toUpperCase();

    filter_category = document.getElementById("search-options").value;

    results_view = document.getElementById("results");
    result_cards = results_view.getElementsByClassName("result-card");

    for (var i = 0; i < result_cards.length; i++) {
        const result = result_cards[i];
        const result_name = result.getElementsByClassName("result-heading")[0].innerText;
        const result_category = result.getElementsByClassName("result-category")[0].innerText;
        
        if (result_name.toUpperCase().indexOf(filter_text) > -1 && (result_category == filter_category || filter_category == "all")) {
            result.style.display = "flex";
        } else {
            result.style.display = "none";
        }
    }
}

function getCategories() {
    var results_view = document.getElementById("results");
    var result_cards = results_view.getElementsByClassName("result-card");

    var options = document.getElementById("search-options")

    var categories = [];

    for (var i = 0; i < result_cards.length; i++) {
        const result = result_cards[i];
        const result_name = result.getElementsByClassName("result-category")[0].innerText;
        
        if (categories.indexOf(result_name) === -1) {
            categories.push(result_name);
        }
    }

    categories.forEach(category => {
        options.append(new Option(category, category));
    });
}

getCategories();