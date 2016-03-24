IdentifierSchema = new SimpleSchema({
  "use" : {
    optional: true,
    type: String
    },
  "type" : {
    optional: true,
    type: CodableConceptSchema
    },
  "system" : {
    optional: true,
    type: String
    },
  "value" : {
    optional: true,
    type: String
    },
  "period" : {
    optional: true,
    type: PeriodSchema
    },
  "assigner" : {
    optional: true,
    type: ReferenceSchema
    }
});
