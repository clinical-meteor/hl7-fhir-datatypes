Package.describe({
  name: 'clinical:hl7-resource-datatypes',
  version: '3.0.0',
  summary: 'HL7 FHIR DataTypes - Building blocks for FHIR Resources.',
  git: 'https://github.com/clinical-meteor/hl7-resource-datatypes',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('aldeed:simple-schema@1.3.3');


  // ---------------------------------------------------------------------------
  // Base Resources

  api.addFiles('lib/Meta.js');
  api.addFiles('lib/Base.js');
  api.addFiles('lib/DomainResource.js');
  api.addFiles('lib/Narrative.js');

  api.export('MetaSchema');
  api.export('BaseSchema');
  api.export('DomainResourceSchema');
  api.export('NarrativeSchema');


  // ---------------------------------------------------------------------------
  // Data Types

  api.addFiles('lib/Address.js');
  api.addFiles('lib/Annotation.js');
  api.addFiles('lib/Attachment.js');
  api.addFiles('lib/Code.js');
  api.addFiles('lib/Coding.js');
  api.addFiles('lib/CodableConcept.js');
  api.addFiles('lib/ContactPoint.js');
  api.addFiles('lib/Conformance.js');
  api.addFiles('lib/Group.js');
  api.addFiles('lib/HumanName.js');
  api.addFiles('lib/Identifier.js');
  api.addFiles('lib/Period.js');
  api.addFiles('lib/Quantity.js');
  api.addFiles('lib/Range.js');
  api.addFiles('lib/Reference.js');
  api.addFiles('lib/Ratio.js');
  api.addFiles('lib/SampledData.js');
  api.addFiles('lib/Signature.js');
  api.addFiles('lib/Timing.js');

  api.export('AddressSchema');
  api.export('AnnotationSchema');
  api.export('AttachmentSchema');
  api.export('Code');
  api.export('QuantitySchema');
  api.export('HumanNameSchema');
  api.export('ReferenceSchema');
  api.export('PeriodSchema');
  api.export('CodingSchema');
  api.export('CodeableConceptSchema');
  api.export('IdentifierSchema');
  api.export('ContactPointSchema');
  api.export('GroupSchema');
  api.export('ConformanceSchema');
  api.export('RangeSchema');
  api.export('RatioSchema');
  api.export('SampledDataSchema');
  api.export('SignatureSchema');
  api.export('TimingSchema');

  api.export('Address');
  api.export('Annotation');
  api.export('Attachment');
  api.export('Code');
  api.export('Quantity');
  api.export('HumanName');
  api.export('Reference');
  api.export('Period');
  api.export('Coding');
  api.export('CodeableConcept');
  api.export('Identifier');
  api.export('ContactPoint');
  api.export('Group');
  api.export('Conformance');
  api.export('Range');
  api.export('Ratio');
  api.export('SampledData');
  api.export('Signature');
  api.export('Timing');

});

// Package.onTest(function (api) {
//   api.use('tinytest');
//   //api.use('clinical:hl7-resource-patient');
// });
