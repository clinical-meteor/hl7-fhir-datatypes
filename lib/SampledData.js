SampledDataSchema = new SimpleSchema({
  "origin" : {
    type: Quantity
    },
  "period" : {
    type: Decimal
    },
  "factor" : {
    type: Decimal
    },
  "lowerLimit" : {
    type: Decimal
    },
  "upperLimit" : {
    type: Decimal
    },
  "dimensions" : {
    type: PositiveInt
    },
  "data" : {
    type: String
    }
});
