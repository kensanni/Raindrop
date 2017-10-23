export default {
  rainDrops: (value) => {
    if (!value){
        return ("Input must be a number");
    }
    if (value <= 0){
    return ("Input should not be a negative number")
  } else if(typeof value === "number"){
  	var remainder = value;
  	var result = "";
      var factors = [], i;
          
      for (i = 2; i <= remainder; i++) {
          while ((remainder % i) === 0) {
              factors.push(i);
              remainder /= i;
          }
      }
    //   console.log(factors);
      let is3 = false;
      let is5 = false;
      let is7 = false;
      for(let i = 0; i < factors.length; i++) {
        if(factors[i] == 3){
            is3 = true;
        }
        if(factors[i] == 5){
            is5 = true;
        }
        if(factors[i] == 7){
            is7 = true;
        }
      }
        if(is3){
            result +="Pling";
        }
        if(is5){
           result +="Plang";
        }
        if(is7){
            result += "Plong";
        }
        if(result === "") {
          return value;
        }
        else {
          return result;
        }
  }else {
    return ("Input a Positive number")
  } 
  }
}