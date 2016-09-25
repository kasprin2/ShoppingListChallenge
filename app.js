$(document).ready(function() {
  console.log('test');

  $('#js-shopping-list-form').submit(function(e) {
    e.preventDefault();
    console.log('submittest');

    var input = $('#shopping-list-entry').val();
    console.log(input);

    $('#shopping-list-entry').val('');

    var output = '<li>';

    output += '<span class="shopping-item">';
    output += input;
    output += '</span>';

    output += '<div class="shopping-item-controls">';

    output += '<button class="shopping-item-toggle">';
    output += '<span class="button-label">';
    output += 'check';
    output += '</span>';
    output += '</button>';

    output += ' ';

    output += '<button class="shopping-item-delete">';
    output += '<span class="button-label">';
    output += 'delete';
    output += '</span>';
    output += '</button>';

    output += '</div>';

    output += '</li>';
    

    $('ul.shopping-list').append(output);
  });


  $('.shopping-list').on('click', '.shopping-item-delete', function(e) {
    $(this).closest('li').remove(); 
  });


  $('.shopping-list').on('click','.shopping-item-toggle', function(e) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });


});
