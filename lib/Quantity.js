

// EXAMPLE
// whenRange: {
//   "low": {
//     "value": 40,
//     "unit": "years",
//     "system": "http://unitsofmeasure.org",
//     "code": "a"
//   },
//   "high": {
//     "value": 90,
//     "unit": "years",
//     "system": "http://unitsofmeasure.org",
//     "code": "a"
//   }
// }

QuantitySchema = new SimpleSchema({
  "value" : {
    type : Number // Decimal
    },
  "comparator": {
    optional: true,
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
