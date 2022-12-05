function createParagraph(){
    var line1= document.getElementById('line1').value;
    var line2 = document.getElementById('line2').value;
    var line3= document.getElementById('line3').value;
    var line4 = document.getElementById('line4').value;
    var line5 = document.getElementById('line5').value;
    var line6 = document.getElementById('line6').value;
    var line7 = document.getElementById('line7').value;
    var line8 = document.getElementById('line8').value;
  
    
    var paragraph = "Once, there was a \n" +  line1 +"\n"+ line2 + " \n named Luna Amor and her \n"+ line3 + ' \n Cat Mom, Hana. \n' +'Hana thought' + '\n Luna was very \n' + line4 +"." + "\n Luna \n" + line5 + "." + "\n Luna said, I am very charismatic and cute. \n" + "\n Hana \n" + line6 + "\n she had no idea Luna could speak! \n" +  " \n She picked Luna up in amazement! \n" + "\n Yeah, I can \n" + line7 +"," + "\n said Luna." + "\n Wow! exclaimed Hana, in disbelief, you sound like\n" + line8 + "!"
        document.getElementById('answer').innerHTML= paragraph;
    }