const utilFunctions = require('./helpers/utils');




let calculateBmiBasedOnJson = async (bmiJsonArray) => {

    var retType = {
        Malnutritionrisk: 0,
        Lowrisk: 0,
        Enhancedrisk:0,
        Mediumrisk:0,
        Highrisk:0,
        Veryhighrisk:0,        
    }
    var jsonObject = JSON.parse(bmiJsonArray);
    //bmiJsonArray Conver To Json object for readable format 
    
        
    for(var bmiJson in jsonObject){
         await utilFunctions.getRiskType(jsonObject[bmiJson],retType)        
    }
    console.log(retType);

    return retType;
  
  }


  module.exports = {
    calculateBmiBasedOnJson,    
  }