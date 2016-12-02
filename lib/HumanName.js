HumanNameSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "HumanName"
    },
  "use" : {
    optional: true,
    type: Code
    },
  "text" : {
    optional: true,
    type: String
    },
  "family" : {
    optional: true,
    type: [String]
    },
  "given" : {
    optional: true,
    type: [String]
    },
  "prefix" : {
    optional: true,
    type: [String]
    },
  "suffix" : {
    optional: true,
    type: [String]
    },
  "preferred" : {
    optional: true,
    type: [String]
    },
  "period" : {
    optional: true,
    type: PeriodSchema
    }
});




HumanName = {
  create: function(){
    var newHumanName = {

    };

    return newHumanName;
  }
}
