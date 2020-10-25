var m = moment();

$("#currentDay").text(m.format("LLL"));

// 9 Am button
$("#nine").click(function (event) {
    event.preventDefault(); 
    var button = $(this).attr("id"); 
    $(".description").each(function (i, element) {
        if (button === $(element).attr("data-hour")) {
            var key = $(element).attr("data-hour");

            var value = $(element).val();

            localStorage.setItem(key, value);
        }
    });
});
$("#nineInputDisplay").val(localStorage.getItem("nine"))

// 10 AM button
$("#ten").click(function (event) {
    event.preventDefault(); 
    var button = $(this).attr("id"); 
    $(".description").each(function (i, element) {
        if (button === $(element).attr("data-hour")) {
            var key = $(element).attr("data-hour");

            var value = $(element).val();

            localStorage.setItem(key, value);
        }
    });
});
$("#tenInputDisplay").val(localStorage.getItem("ten"))

// 11 AM button
$("#eleven").click(function (event) {
    event.preventDefault(); 
    var button = $(this).attr("id"); 
    $(".description").each(function (i, element) {
        if (button === $(element).attr("data-hour")) {
            var key = $(element).attr("data-hour");

            var value = $(element).val();

            localStorage.setItem(key, value);
        }
    });
});
$("#elevenInputDisplay").val(localStorage.getItem("eleven"))

// 12 PM button
$("#twelve").click(function (event) {
    event.preventDefault(); 
    var button = $(this).attr("id"); 
    $(".description").each(function (i, element) {
        if (button === $(element).attr("data-hour")) {
            var key = $(element).attr("data-hour");

            var value = $(element).val();

            localStorage.setItem(key, value);
        }
    });
});
$("#twelveInputDisplay").val(localStorage.getItem("twelve"))

// 1 PM button
$("#one").click(function (event) {
    event.preventDefault(); 
    var button = $(this).attr("id"); 
    $(".description").each(function (i, element) {
        if (button === $(element).attr("data-hour")) {
            var key = $(element).attr("data-hour");

            var value = $(element).val();

            localStorage.setItem(key, value);
        }
    });
});
$("#oneInputDisplay").val(localStorage.getItem("one"))

// 2 PM button
$("#two").click(function (event) {
    event.preventDefault(); 
    var button = $(this).attr("id"); 
    $(".description").each(function (i, element) {
        if (button === $(element).attr("data-hour")) {
            var key = $(element).attr("data-hour");

            var value = $(element).val();

            localStorage.setItem(key, value);
        }
    });
});
$("#twoInputDisplay").val(localStorage.getItem("two"))

// 3 PM button
$("#three").click(function (event) {
    event.preventDefault(); 
    var button = $(this).attr("id"); 
    $(".description").each(function (i, element) {
        if (button === $(element).attr("data-hour")) {
            var key = $(element).attr("data-hour");

            var value = $(element).val();

            localStorage.setItem(key, value);
        }
    });
});
$("#threeInputDisplay").val(localStorage.getItem("three"))

// 4 PM button
$("#four").click(function (event) {
    event.preventDefault(); 
    var button = $(this).attr("id"); 
    $(".description").each(function (i, element) {
        if (button === $(element).attr("data-hour")) {
            var key = $(element).attr("data-hour");

            var value = $(element).val();

            localStorage.setItem(key, value);
        }
    });
});
$("#fourInputDisplay").val(localStorage.getItem("four"))

// 4 PM button
$("#five").click(function (event) {
    event.preventDefault(); 
    var button = $(this).attr("id"); 
    $(".description").each(function (i, element) {
        if (button === $(element).attr("data-hour")) {
            var key = $(element).attr("data-hour");

            var value = $(element).val();

            localStorage.setItem(key, value);
        }
    });
});
$("#fiveInputDisplay").val(localStorage.getItem("five"))

