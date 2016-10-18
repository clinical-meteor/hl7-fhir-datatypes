
DomainResourceSchema = new SimpleSchema({
  "text" : {
    type: NarrativeSchema,
    optional: true
  },
  "contained" : {
    type: Object,
    optional: true
  },
  "extension" : {
    type: [Object],
    optional: true
  }
});
