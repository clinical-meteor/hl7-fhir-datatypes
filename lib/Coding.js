

CodingSchema = new SimpleSchema({
  "system" : {
    type: String
    },
  "code" : {
    type: String
    },
  "version" : {
    optional: true,
    type: String
    },
  "display" : {
    optional: true,
    type: String
    },
  "userSelected" : {
    optional: true,
    type: Boolean
    }
});



Coding = {
  create: function(){
    var newCoding = {

    };

    return newCoding;
  }
}
