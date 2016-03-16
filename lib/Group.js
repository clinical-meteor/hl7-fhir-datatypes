GroupSchema = new SimpleSchema({
  "linkId" : {
    type: String
    },
  "title" : {
    type: String
    },
  "concept" : {
    type: [ CodingSchema ]
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
    type: [ CodingSchema ]
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
    type: ReferenceSchema //(ValueSet)
    },
  "question.$.option" : {
    type: [ CodingSchema ]
    },
  "question.$.group" : {
    type: GroupSchema
    },
});
