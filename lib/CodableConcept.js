

CodeableConceptSchema = new SimpleSchema({
  "coding" : {
    optional: true,
    type: [ CodingSchema ]
  },
  "text" : {
    type: String
  }
});
