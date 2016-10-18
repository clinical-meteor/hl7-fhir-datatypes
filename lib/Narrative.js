
NarrativeSchema = new SimpleSchema({
  "status" : {
    type: Code,
    optional: true,
    defaultValue: 'additional'
  },
  "div" : {
    type: String,
    optional: true
  }
});
