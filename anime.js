$(document).ready(function () {
	
	$("#input-field").click(function(){
		$(this).val("");
	});
	
  $(".plus").click(function(){
	  var contentTF = $(this).parent().find('.inside').text();
	  var other = $(".prodR:contains(" + contentTF+ ")").parent().find('.amR');
	  var i = $(this).parent().find(".am").val();
	  i++;
	  $(this).parent().find(".am").val(i);
	  other.text(i);
  });
  
  $(".minus").click(function(){
	  var contentTF = $(this).parent().find('.inside').text();
	  var other = $(".prodR:contains(" + contentTF+ ")").parent().find('.amR');
	  var i = $(this).parent().find(".am").val();
	  if(i>1){
		  i--
		  $(this).parent().find(".am").val(i);
		  other.text(i);
	  }
	  else
		  alert("Кількість не може бути нульовою");
  });
  
  $(".bought").click(function(){
	 $(this).parent().find(".plus, .minus, .remove, .bought").css('visibility', 'hidden'); 
	 $(this).parent().find(".notBought").css('visibility', 'visible');
	 var contentTF = $(this).parent().find('.inside').text();
	 $(".prodR:contains(" + contentTF+ ")").parent().clone().appendTo('.whatBought');
	 $('.whatLeft').find(".prodR:contains(" + contentTF+ ")").parent().remove();
  });
  
  $(".notBought").click(function(){
	 $(this).parent().find(".plus, .minus, .remove, .bought").css('visibility', 'visible'); 
	 $(this).parent().find(".notBought").css('visibility', 'hidden');
	 var contentTF = $(this).parent().find('.inside').text();
	 $(".prodR:contains(" + contentTF+ ")").parent().clone().appendTo('.whatLeft');
	 $('.whatBought').find(".prodR:contains(" + contentTF+ ")").parent().remove();
  });
  
  $(".remove").click(function(){
	 var contentTF = $(this).parent().find('.inside').text();
	 $(".prodR:contains(" + contentTF+ ")").parent().remove();
	 $(this).parent().remove();
  });
  
  $(".inside").click(function(){
	 $(this).parent().find(".toChange").css('visibility', 'visible').val($(this).text()).focus(); 
	 $(this).css('visibility', 'hidden');
  });
  
  $(".toChange").blur(function(){
	 var contentTF = $(this).parent().find('.inside').text();
	 var other = $(".prodR:contains(" + contentTF+ ")");
	 $(this).parent().find(".inside").css('visibility', 'visible').text($(this).val());
	 $(this).css('visibility', 'hidden');
	 other.text($(this).val());
  });
	
  $("#add-button").click(function(){
	  var content = $("#input-field").val();
	  var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
	  $(cloned).css('position', 'relative');
	  $(cloned).find(".inside").text(content);
	  var clonedR = $("#toBeClonedd").clone(true).css('visibility', 'visible');
	  $(clonedR).css('position', 'relative');
	  $(clonedR).find('.prodR').text(content);
	  $(cloned).appendTo(".container1");
	  $(clonedR).appendTo('.whatLeft');
	  $("#input-field").val("").focus();
  });
  
});