
Annotation = {
  create: function(authorString, text){
    var newAnnotation = {
      authorString: '',
      time: new Date(),
      text: ''
    };

    if (authorString) {
      newAnnotation.authorString = authorString;
    }
    if (text) {
      newAnnotation.text = text;
    }

    return newAnnotation;
  }
}


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
