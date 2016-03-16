
QuantitySchema = new SimpleSchema({
  "value" : {
    type : Number // Decimal
    },
  "comparator": {
    type: Code
    },
  "unit" : {
    type : String
    },
  "system" : {
    type : String // Uri
    },
  "code" : {
    type : Code
    }
});
