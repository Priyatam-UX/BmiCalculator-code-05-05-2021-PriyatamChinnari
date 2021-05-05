


let getRiskType = async (jsonObj,retType) => {    
    var bmi
    try {
   let heigh = parseFloat(jsonObj.HeightCm)/100;
   let weigh = parseFloat(jsonObj.WeightKg);
    bmi = weigh /heigh;
    } catch (error) {
        
    }   
    
  var precisedBmiVval = bmi.toFixed(1);
          
                if (precisedBmiVval <= 18.4) {
                  retType.Malnutritionrisk = (retType.Malnutritionrisk + 1) || 1;
                } else if (precisedBmiVval >= 18.5 && precisedBmiVval < 24.9) {
                    retType.Lowrisk = (retType.Lowrisk + 1) || 1;
                } else if (precisedBmiVval >= 25.0 && precisedBmiVval < 29.9) {
                    retType.Enhancedrisk = retType.Enhancedrisk + 1
                } else if (precisedBmiVval >= 30.0 && precisedBmiVval < 34.9) {
                    retType.Mediumrisk = (retType.Mediumrisk + 1) || 1;               
                } else if (precisedBmiVval >= 35.0 && precisedBmiVval < 39.9) {
                    retType.Highrisk = retType.Highrisk + 1
                } else if (precisedBmiVval >= 40.0) {
                    retType.Veryhighrisk = retType.Veryhighrisk + 1
                } else {
                    console.log("bmi", precisedBmiVval)
                    console.log(retType.Veryhighrisk)
                }
        
    return ;
    
  }

  module.exports = {
    getRiskType
  }