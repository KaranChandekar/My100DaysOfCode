
console.log($("h1").css("background-color"))

$("h1").addClass("big-title")

$("button").text("Please click me")

$("a").attr("href", "https://www.yahoo.com")

$("body").keypress(function (event) {
    $("h1").text(event.key)
})

$("h1").on("mouseover", function () {
    $("h1").css("color", "purple")
})