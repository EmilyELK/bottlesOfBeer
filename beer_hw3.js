function bottlesOfBeer(i) {for(var i; i > 0; i--){
		if (i == 99) {
		  console.log(i + " bottles of beer on the wall, " + i + " bottles of beer, you take one down pass it around");
	  	} else if (i > 1) {
			console.log(i + " bottles of beer on the wall. " + i + " bottles of beer on the wall, " + i + " bottles of beer, you take one down pass it around");
		} else {
	      console.log(i + " bottle of beer on the wall. " + i + " bottle of beer on the wall, " + i + " bottle of beer, you take one down pass it around, no bottles of beer on the wall.");
	    }
	}
}

console.log(bottlesOfBeer(20));