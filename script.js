jQuery(document).ready(function(){
  //load chat.html to the chat field every 1 sec.
  function get_it(){jQuery('#chatField').load('chat.html');};
  setInterval(get_it, 1000);

  //Asking for nickname
  var name=prompt('Nickname');
  while(name==null||name==''){var name=prompt('Please write your nickname, sir.');};

  $("#sendButton").click(function(){
    //Configuring what data is coming to server and sending it by POST
    var data='name=' + name + '&' + $('#textField').serialize();
    alert(data);
    $.ajax({
      url:'server.php',
      type:"POST",
      data:data
    });
    get_it();
  });
});
