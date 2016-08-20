jQuery(document).ready(function(){
  function get_it(){jQuery('#2').load('txt.html');};
  setInterval(get_it, 1000);
  var name=prompt('Nickname');
  while(name==null){
    var name=prompt('Are U kiddin\' me? WRITE UR NICK!');
  };

    $("#1").click(function(){
      var data='name=' + name + '&' + $('#FORM').serialize();
      alert(data);
      $.ajax({
        url:'sub.php',
        type:"POST",
        data:data
      });
      get_it();
    });
});
