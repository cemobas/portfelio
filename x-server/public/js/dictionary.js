$(document).ready(function () {
    $.getJSON('/shopping-api', printItems);
    $('form').submit(function (e) {
        e.preventDefault();
        $.post('/shopping-api', {item: $('#item').val(), amount: $('#amount').val()}, printItems);
        this.reset();
    });
});

function printItems(items) {
    $('body>dl').empty();
    $.each(items, function () {
        $('<dt>').text(this.item).appendTo('body>dl');
        $('<dd>').text(this.amount).appendTo('body>dl');
    });
    $('dt').off('dblclick').dblclick(function() {
        $.ajax({
            url: '/shopping-api/' + $(this).text(),
            type: 'DELETE',
            success: printItems
        });
    });
}
