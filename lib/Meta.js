
MetaSchema = new SimpleSchema({
  "versionId" : {
    type: String,
    optional: true,
    defaultValue: "1"
  },
  "createdAt" : {
    type: Date,
    defaultValue: new Date()
  },
  "lastUpdated" : {
    type: Date,
    defaultValue: new Date()
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
