Package.describe({
  name: 'clinical:hl7-resource-datatypes',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/clinical-meteor/hl7-resource-datatypes',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use('aldeed:simple-schema@1.3.3');

  api.addFiles('lib/Code.js');
  api.addFiles('lib/Period.js');
  api.addFiles('lib/Address.js');
  api.addFiles('lib/HumanName.js');
  api.addFiles('lib/ContactPoint.js');
  api.addFiles('lib/Reference.js');
  api.addFiles('lib/Coding.js');
  api.addFiles('lib/CodableConcept.js');
  api.addFiles('lib/Identifier.js');


  api.export('Code');
  api.export('HumanNameSchema');
  api.export('ReferenceSchema');
  api.export('PeriodSchema');
  api.export('CodingSchema');
  api.export('CodableConceptSchema');
  api.export('Identifier');
  api.export('ContactPointSchema');
  api.export('AddressSchema');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('clinical:hl7-resource-patient');
  api.addFiles('hl7-resource-patient-tests.js');
});
