describe('clinical:hl7-resource-datatypes', function () {
  var server = meteor();
  var client = browser(server);

  it('HL7 FHIR Datatypes should exist on the client', function () {
    return client.execute(function () {
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

  it('HL7 FHIR Datatypes should exist on the server', function () {
    return server.execute(function () {
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



});
