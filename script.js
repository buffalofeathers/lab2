var friends = ['Thomas','Jeff','Daniel','Steven','Tyler'];
    for (var i = 0; i < friends.length; i++) {
        console.log(friends[i]);


        for (var j = 99; j > 0; j--) {
            var jline = 'lines';
            if (j == 1) {
               console.log(j + " line of code in the file," + j + " line of code," + (friends[i]) + " strikes one out, clears it all, no more lines of code in the file"); 
            } else { 
            console.log(j + " lines of code in the file," + j + " lines of code," + (friends[i]) + " strikes one out, clears it all, " + (j - 1) + " lines of code in the file,");
        }
     }
}




 