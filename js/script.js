$( "document" ).ready(function() {

    $("#button").click(function(){
    var inputValue = $('.input').val();
    var checkVowel = checkVowel(inputValue);
    $(".output").text(inputValue)
     console.log(checkVowel)



function checkVowel (str){

    var firstLetter= str [0];
    var vowels = ['a','e','i','o','u'];

    if (vowels.includes(firstLetter)){
        return (inputValue[0]+ "ay");

    }
    return (inputValue.slice(1)+inputValue[0]+"ay");
    }
    $(".output").text(checkVowel)
})

});
