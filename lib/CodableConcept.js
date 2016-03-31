

CodeableConceptSchema = new SimpleSchema({
  "coding" : {
    type: [ CodingSchema ]
  },
  "text" : {
    type: String
    }
});
