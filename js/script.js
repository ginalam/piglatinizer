$( "document" ).ready(function() {

$("#button").click(function(){
    var inputValue = $('.input').val();
$(".output").text(inputValue)
    console.log(inputValue)


function checkVowel (str){
    var firstLetter= str [0];
    var vowels = ['a','e','i','o','u'];

    if (vowels.include(firstLetter)){
        return 'starts with vowel';
    }
    return 'starts with consonant';
    }
})

})


