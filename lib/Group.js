GroupSchema = new SimpleSchema({
  "linkId" : {
    type: String
    },
  "title" : {
    type: String
    },
  "concept" : {
    type: [{ Coding }]
    },
  "text" : {
    type: String
    },
  "required" : {
    type: Boolean
    },
  "repeats" : {
    type: Boolean
    },
  "group" : {
    type: GroupSchema
    },
  "question.$.linkId" : {
    type: String
    },
  "question.$.concept" : {
    type: [{ Coding }]
    },
  "question.$.text" : {
    type: String
    },
  "question.$.type" : {
    type: String
    },
  "question.$.required" : {
    type: Boolean
    },
  "question.$.repeats" : {
    type: Boolean
    },
  "question.$.options" : {
    type: Reference(ValueSet)
    },
  "question.$.option" : {
    type: [{ Coding }]
    },
  "question.$.group" : {
    type: GroupSchema
    },
});
