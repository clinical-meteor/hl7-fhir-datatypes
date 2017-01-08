SignatureSchema = new SimpleSchema({
  "type" : {
    optional: true,
    type: [ CodingSchema ]
    },
  "when" : {
    optional: true,
    type: Date
    },
  "whoUri" : {
    optional: true,
    type: String
    },
  "whoReference" : {
    optional: true,
    type: ReferenceSchema
    },
  "contentType" : {
    optional: true,
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
