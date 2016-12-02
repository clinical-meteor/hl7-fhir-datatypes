SignatureSchema = new SimpleSchema({
  "type" : {
    type: [ CodingSchema ]
    },
  "when" : {
    type: Date
    },
  "whoUri" : {
    type: String
    },
  "whoReference" : {
    type: ReferenceSchema
    },
  "contentType" : {
    type: String
    }
});


Signature = {
  create: function(){
    var newSignature = {

    };

    return newSignature;
  }
}
