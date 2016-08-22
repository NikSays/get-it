jQuery(document).ready(function(){
  // Disable caching of AJAX responses
  $.ajaxSetup ({
      cache: false
    });
  //load chat.html to the chat field every 1 sec.
  function get_it(){
    $.ajax({
      url:"chat.html",
      type:"GET",
      ifModified:true,
      success:function( data ) {
        $("#chatMsg").replaceWith($("#chatMsg").html(data));
        $("#chatField").scrollTop($("#chatField")[0].scrollHeight)
      }
    });
  };


  setInterval(get_it, 2500);
  function load(){$("#chatField").scrollTop($("#chatField")[0].scrollHeight);};
  //Asking for nickname
  var name=prompt("Nickname");
  while(name==null||name==""){var name=prompt("Please write your nickname, sir.");};
  $("#sendButton").click(function(){
    //Configuring what data is coming to server and sending it by POST
    var data="name=" + name + "&" + $("#textField").serialize();
    $.ajax({
      url:"server.php",
      type:"POST",
      data:data
    });
    get_it();
  });
});
