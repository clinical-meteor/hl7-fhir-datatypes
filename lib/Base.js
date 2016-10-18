
RatioSchema = new SimpleSchema({
  "id" : {
    type: String
  },
  "resourceType" : {
    type: String
  },
  "meta" : {
    type: MetaSchema,
    optional: true

  },
  "implicitRules" : {
    type: String,
    optional: true
  },
  "language" : {
    type: Code,
    optional: true
  }
});
