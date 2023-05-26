(function ($) {
    const newFormHandler = async function (event) {
     event.preventDefault();
     event.stopPropagation();
     console.log("submitting form")
     console.log($('#post-title').val())
     console.log($('#post-body').val())
     await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
       title: $('#post-title').val(),
       body: $('#post-body').val(),
      }),
      headers: { 'Content-Type': 'application/json' },
     });
    };
    

    $('#new_post').on('submit', newFormHandler);
   })(jQuery);