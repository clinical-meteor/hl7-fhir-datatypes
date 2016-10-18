
MetaSchema = new SimpleSchema({
  "versionId" : {
    type: String,
    optional: true
  },
  "lastUpdated" : {
    type: Date
  },
  "profile" : {
    type: String,
    optional: true
  },
  "security" : {
    type: [CodingSchema],
    optional: true
  },
  "tag" : {
    type: [CodingSchema],
    optional: true
  }
});
