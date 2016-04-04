TimingSchema = new SimpleSchema({
  "resourceType": {
    type: String,
    defaultValue: "Timing"
  },
  "event": {
    optional: true,
    type: [ Date ]
  },
  "repeat.boundsQuantity": {
    optional: true,
    type: QuantitySchema
  },
  "repeat.boundsRange": {
    optional: true,
    type: RangeSchema
  },
  "repeat.boundsPeriod": {
    optional: true,
    type: PeriodSchema
  },
  "repeat.count": {
    optional: true,
    type: Number
  },
  "repeat.duration": {
    optional: true,
    type: Number
  },
  "repeat.durationMax": {
    optional: true,
    type: Number
  },
  "repeat.durationUnits": {
    optional: true,
    type: Code
  },
  "repeat.frequency": {
    optional: true,
    type: Number
  },
  "repeat.frequencyMax": {
    optional: true,
    type: Number
  },
  "repeat.period": {
    optional: true,
    type: Number
  },
  "repeat.periodMax": {
    optional: true,
    type: Number
  },
  "repeat.periodUnits": {
    optional: true,
    type: Code
  },
  "repeat.when": {
    optional: true,
    type: Code
  }
});
