##clinical:hl-7-resource-datatypes

HL7 FHIR DataTypes - Building blocks for FHIR Resources.

===============================
#### Installation  

````bash
meteor add cclinical:hl-7-resource-datatypes
````

===============================
#### Usage   

Import any of the following HL7 FHIR datatypes, using SimpleSchema:

````js
import SimpleSchema from 'simpl-schema';
import { PatientSchema, Observation } from 'meteor/clinical:hl7-fhir-data-infrastructure';

import {
    AddressSchema
    AnnotationSchema
    AttachmentSchema
    BaseSchema
    CodingSchema
    CodeableConceptSchema
    ContactPointSchema
    ConformanceSchema
    ContactPointSchema
    DomainResourceSchema
    GroupSchema
    HumanNameSchema
    IdentifierSchema
    MetaSchema
    MoneySchema
    NarrativeSchema
    OperationDefinitionSchema
    PeriodSchema
    QuantitySchema
    RangeSchema
    RatioSchema
    ReferenceSchema
    SampledDataSchema
    SignatureSchema
    StructureDefinitionSchema
    TimingSchema
    ValueSetSchema
} from 'clinical:hl7-resource-datatypes';

// new FHIR resource  
const fooResource = new SimpleSchema({
  name: String
});
fooResource.extend(BaseSchema);

// sharding example
const shardedObservationsSchema = new SimpleSchema({
  shardKey: String
});
shardedObservationsSchema.extend(ObservationSchema);
````
===============================
#### Usage   

This package is intended primarily to be used as a dependency in implementing other HL7 FHIR resource types within the Meteor ecosystem.  

You may wish to import the `simpl-schema` package via NPM, and/or the `meteor/clinical:hl7-fhir-data-infrastructure` if you are running on Meteor and using the Atmosphere package manager.

===============================
#### Conformance Statement  

The datatype schemas in this package are intended to be implementations of the HL7 FHIR DataTypes provided at [https://www.hl7.org/fhir/datatypes.html](https://www.hl7.org/fhir/datatypes.html).  To the extent possible, all JSON schemas have been implemented as SimpleSchemas.  The datatypes have been sort fairly stable since DSTU3 and should be mostly R4 compliant.  If there is something missing for R4 compliance, please feel free to submit an issue or pull request.  

===============================
#### Licensing  

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
