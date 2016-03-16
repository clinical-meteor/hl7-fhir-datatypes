

AnnotationSchema = new SimpleSchema({
  "authorReference" : {
    type: ReferenceSchema
    },
  "authorString" : {
    type: String
    },
  "time" : {
    type: Date
    },
  "text" : {
    type: String
    }
});
