

CodeableConceptSchema = new SimpleSchema({
  "coding" : {
    optional: true,
    type: [ CodingSchema ]
  },
  "text" : {
    type: String
  }
});


CodeableConcept = {
  create: function(text){
    var newCodeableConcept = {
      text: ''
    };

    if (text) {
      newCodeableConcept.text = text;
    }

    return newCodeableConcept;
  }
}
