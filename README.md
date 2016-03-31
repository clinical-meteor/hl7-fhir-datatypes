##clinical:hl-7-resource-datatypes

HL7 FHIR DataTypes - Building blocks for FHIR Resources.

===============================
#### Installation  

````bash
meteor add cclinical:hl-7-resource-datatypes
````

===============================
#### DataTypes   

This package currently implements the following HL7 FHIR datatypes:

````bash
Code
HumanNameSchema
ReferenceSchema
PeriodSchema
CodingSchema
CodeableConceptSchema
Identifier
ContactPointSchema
AddressSchema
````
===============================
#### Usage   

This package is intended primarily to be used as a dependency in implementing other HL7 FHIR resource types within the Meteor ecosystem.  

===============================
#### Conformance Statement  

The datatype schemas in this package are intended to be implementations of the HL7 FHIR DataTypes provided at [https://www.hl7.org/fhir/datatypes.html](https://www.hl7.org/fhir/datatypes.html).  To the extent possible, all JSON schemas have been implemented as SimpleSchemas.  

===============================
#### Licensing  

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
