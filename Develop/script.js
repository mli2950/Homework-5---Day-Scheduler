var m = moment();

$("#currentDay").text(m.format("LLL"));

// On click event listeners for each button

// 9 Am button
$("#9").click(function (event) {
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
$("#nineInputDisplay").val(localStorage.getItem("9"))

// 10 AM button
$("#10").click(function (event) {
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
$("#tenInputDisplay").val(localStorage.getItem("10"))

// 11 AM button
$("#11").click(function (event) {
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
$("#elevenInputDisplay").val(localStorage.getItem("11"))

// 12 PM button
$("#12").click(function (event) {
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
$("#twelveInputDisplay").val(localStorage.getItem("12"))

// 1 PM button
$("#13").click(function (event) {
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
$("#oneInputDisplay").val(localStorage.getItem("13"))

// 2 PM button
$("#14").click(function (event) {
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
$("#twoInputDisplay").val(localStorage.getItem("14"))

// 3 PM button
$("#15").click(function (event) {
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
$("#threeInputDisplay").val(localStorage.getItem("15"))

// 4 PM button
$("#16").click(function (event) {
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
$("#fourInputDisplay").val(localStorage.getItem("16"))

// 5 PM button
$("#17").click(function (event) {
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
$("#fiveInputDisplay").val(localStorage.getItem("17"))



// Code to change each time block to the proper color for past, present, and future
$(".description").each(function (index, value) {
    
    var thisHour = $(this).attr("data-hour");
    
    if (thisHour < moment().hour()) {
        $(this).addClass("past");
    } else if (thisHour == moment().hour()) {
        $(this).addClass("present");
    } else if (thisHour > moment().hour()) {
        $(this).addClass("future");
    }
})
