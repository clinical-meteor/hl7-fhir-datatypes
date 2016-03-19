IdentifierSchema = new SimpleSchema({
  "use" : {
    type: String
    },
  "type" : {
    type: CodableConceptSchema
    },
  "system" : {
    type: String
    },
  "value" : {
    type: String
    },
  "period" : {
    type: PeriodSchema
    },
  "assigner" : {
    type: ReferenceSchema
    }
});
