import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { chai } from 'meteor/practicalmeteor:chai';
import { expect } from 'meteor/practicalmeteor:chai';

describe('clinical:hl7-resource-condition', function () {
  beforeEach(function () {
    //console.log('beforeEach');
  });
  afterEach(function () {
    //console.log('afterEach');
  });
  it('HL7 FHIR Datatypes should exist globally', function () {
    expect(AddressSchema).to.exist;
    expect(AnnotationSchema).to.exist;
    expect(AttachmentSchema).to.exist;
    expect(Code).to.exist;
    expect(CodingSchema).to.exist;
    expect(ConformanceSchema).to.exist;
    expect(ContactPointSchema).to.exist;
    expect(GroupSchema).to.exist;
    expect(HumanNameSchema).to.exist;
    expect(IdentifierSchema).to.exist;
    expect(PeriodSchema).to.exist;
    expect(QuantitySchema).to.exist;
    expect(RangeSchema).to.exist;
    expect(RatioSchema).to.exist;
    expect(ReferenceSchema).to.exist;
    expect(SampledDataSchema).to.exist;
    expect(SignatureSchema).to.exist;
    expect(TimingSchema).to.exist;
  });
});