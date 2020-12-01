$(function(){
  
    if (inIframe()) {
      $("#notframe").remove()
    }else{
      $("#inframe").remove()
    
      $( "#iframeview" ).on('load',function() {
        document.title = $("#iframeview")[0].contentDocument.title;
        let url = $("#iframeview")[0].contentWindow.location.href;
        history.replaceState(null,document.title,url);
      });
    }
  })

    function inIframe () {
  try {
      return window.self !== window.top;
  } catch (e) {
      return true;
  }
  }