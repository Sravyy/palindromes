//Frontend Logic
$(function(){
  $(".formOne").submit(function(event){
    event.preventDefault();
    var input = $("input#sent").val();

    $("#output").text(palindrome(input));
    $(".result").show();
  });


//Backend Logic

function palindrome(input) {
    var reg = /[\W_]/g;
    var smallString = input.toLowerCase().replace(reg, "");

    var reversed = smallString.split("").reverse().join("");
    if(reversed === smallString) return true;

    return false;
};
});
