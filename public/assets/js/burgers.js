$(function() {
    $(".devour-it").on("click", function(e) {
        console.log("devoured hit")
        let id = $(this).data("id");

        let newDevoured = {
            devoured: true
        }

        $.ajax("api/burgers" + id, {
            type: "PUT",
            data: newDevoured
        }).then(function() {
            console.log("changed to devoured")
            location.reload();
        });
    });


    $(".create-form").on("submit", function(e) {
        e.preventDefault();
        console.log("new hit")


        let newBurger = {
            burger_name: $("#ca").val().trim(),
            devoured: false
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Burger added: " + newBurger);
            location.reload();
        });
    });
});