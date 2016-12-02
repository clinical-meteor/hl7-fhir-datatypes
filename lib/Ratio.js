RatioSchema = new SimpleSchema({
  "numerator" : {
    type: QuantitySchema
    },
  "denominator" : {
    type: QuantitySchema
    }
});



Ratio = {
  create: function(){
    var newRatio = {

    };

    return newRatio;
  }
}
