$(document).ready(function() {
  $("#personAddress").submit(function(event) {
    var personNameInput = $("input#personName").val();
    var address1Input = $("input#address1").val();
    var address2Input = $("input#address2").val();
    var cityInput = $("input#city").val();
    var stateAndZipcodeInput = $("input#stateAndZipcode").val();
    $(".personName").append(personNameInput);
    $(".address1").append(address1Input);
    $(".address2").append(address2Input);
    $(".city").append(cityInput);
    $(".stateAndZipcode").append(stateAndZipcodeInput);

    $("#formLetter").show();
    event.preventDefault();
  });
});
