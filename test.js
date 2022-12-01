function createParagraph(){
    var line1= document.getElementById('line1').value;
    var line2 = document.getElementById('line2').value;
    var line3= document.getElementById('line3').value;
    var line4 = document.getElementById('line4').value;
    var line5 = document.getElementById('line5').value;
    var line6 = document.getElementById('line6').value;
    var line7 = document.getElementById('line7').value;
    var line8 = document.getElementById('line8').value;
  
    
    var paragraph = "Once, there was a " + line1  + line2 + "named Luna Amor and her" + line3 + 'Cat Mom, Hana.' +'Hana'+'thought' + 'Luna was very' + line4 +"." + "Luna" + line5 + "Luna said I am very charismatic and cute to her Mom" + "Hana" + line6 + "she had no idea Luna could speak!" + "She rubbed Lunas head out of amazement!" + "Yeah, I can" + line7 + "said Luna" + "Wow said Hana, in disbelief."+"You sound just like" + line8 + "!"
        document.getElementById('answer').innerHTML= paragraph;
    }