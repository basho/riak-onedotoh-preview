(function ($) {
  window.notesWindow = null;

  function setNotes(slide){
    if(slide && notesWindow && !notesWindow.closed) {
      $(notesWindow.document.body).html ($(slide).find('.content').html());
      $(notesWindow.document.body).find('li').show();
    }
  }
  
  function openNotesWindow() {
    if (!notesWindow || notesWindow.closed)
      notesWindow = window.open("about:blank","showoff_notes","location=0,scrollbars=0,menubar=0,toolbar=0,width=600,height=400");
    notesWindow.document.title = "Slide Notes";
    $(notesWindow.document.body).css('font-family', 'Helvetica, Arial, sans-serif').
      css('line-height', '1.5em');
    setNotes(currentSlide);
  }

  function closeNotesWindow () {
    if (notesWindow && !notesWindow.closed)
      notesWindow.close();
  }

  $ (function () {
    $(".content").live('showoff:show', function () {
      if (notesMode) {
        openNotesWindow();
      } else {
        closeNotesWindow();
        notesWindow = null;
      }
    })
  });
})(jQuery);
