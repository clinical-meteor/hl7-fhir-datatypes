ConformanceSchema = new SimpleSchema({
  "resourceType" : {
    type: "Conformance",
    // from Resource: id, meta, implicitRules, and language
    // from DomainResource: text, contained, extension, and modifierExtension
  },
  "url" : {
    type: String  // Logical uri to reference this statement
  },
  "version" : {
    type: String // Logical id for this version of the statement
  },
  "name" : {
    type: String // Informal name for this conformance statement
  },
  "status" : {
    type: Code // draft | active | retired
  },
  "experimental" : {
    type: Boolean // If for testing purposes, not real usage
  },
  "publisher" : {
    type: String // Name of the publisher (Organization or individual)
  },
  "contact.$.name" : {
    type: String // Name of a individual to contact
  },
  "contact.$.telecom" : {
    type: [ ContactPoint ] // Contact details for individual or publisher
  },
  "date" : {
    type: Date // R!  Publication Date(/time)
  },
  "description" : {
    type: String // C? Human description of the conformance statement
  },
  "requirements" : {
    type: String // Why is this needed?
  },
  "copyright" : {
    type: String // Use and/or publishing restrictions
  },
  "kind" : {
    type: Code // R!  instance | capability | requirements
  },
  "software.name" : {
    type: String // R!  A name the software is known by
  },
  "software.version" : {
    type: String // Version covered by this statement
  },
  "software.releaseDate" : {
    type: Date // Date this version released
  },
  "implementation.description" : {
    type: String // R!  Describes this specific instance
  },
  "implementation.url" : {
    type: String // Base URL for the installation
  },
  "fhirVersion" : {
    type: String // R!  FHIR Version the system uses
  },
  "acceptUnknown" : {
    type: Code // R!  no | extensions | elements | both
  },
  "format" : {
    type: [Code] // R!  formats supported (xml | json | mime type)
  },
  "profile" : {
    type: [ ReferenceSchema ] // (StructureDefinition) Profiles for use cases supported
  },
  "rest.$.mode" : {
    type: Code // R!  client | server
  },
  "rest.$.documentation" : {
    type: String // General description of implementation
  },
  "rest.$.security.cors" : {
    type:Boolean // Adds CORS Headers (http://enable-cors.org/)
  },
  "rest.$.security.service" : {
    type: [ CodeableConcept ] // OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates
  },
  "rest.$.security.description" : {
    type: String // General description of how security works
  },
  "rest.$.security.certificate.$.type" : {
    type: Code // Mime type for certificate
  },
  //"rest.$.security.certificate.$.blob" : "<base64Binary>" // Actual certificate
  "rest.$.resource.$.type" : {
    type: Code // R!  A resource type that is supported
  },
  "rest.$.resource.$.profile" : {
    type:  ReferenceSchema  // (StructureDefinition) Base System profile for all uses of resource
  },
  "rest.$.resource.$.interaction.$.code" : {
    type: Code // R!  read | vread | update | delete | history-instance | validate | history-type | create | search-type
  },
  "rest.$.resource.$.interaction.$.documentation" : {
    type: String // Anything special about operation behavior
  },
  "rest.$.resource.$.versioning" : {
    type: Code // no-version | versioned | versioned-update
  },
  "rest.$.resource.$.readHistory" : {
    type: Boolean // Whether vRead can return past versions
  },
  "rest.$.resource.$.updateCreate" : {
    type: Boolean // If update can commit to a new identity
  },
  "rest.$.resource.$.conditionalCreate" : {
    type: Boolean // If allows/uses conditional create
  },
  "rest.$.resource.$.conditionalUpdate" : {
    type: Boolean // If allows/uses conditional update
  },
  "rest.$.resource.$.conditionalDelete" : {
    type: Code // not-supported | single | multiple - how conditional delete is supported
  },
  "rest.$.resource.$.searchInclude" : {
    type: [String] // _include values supported by the server
  },
  "rest.$.resource.$.searchRevInclude" : {
    type: [String] // _revinclude values supported by the server
  },
  "rest.$.resource.$.searchParam.$.name" : {
    type:  String // R!  Name of search parameter
  },
  "rest.$.resource.$.searchParam.$.definition" : {
    type: String // Source of definition for parameter
  },
  "rest.$.resource.$.searchParam.$.type" : {
    type: Code // R!  number | date | string | token | reference | composite | quantity | uri
  },
  "rest.$.resource.$.searchParam.$.documentation" : {
    type: String // Server-specific usage
  },
  "rest.$.resource.$.searchParam.$.target" : {
    type: [Code] // Types of resource (if a resource reference)
  },
  "rest.$.resource.$.searchParam.$.modifier" : {
    type: [Code] // missing | exact | contains | not | text | in | not-in | below | above | type
  },
  "rest.$.resource.$.searchParam.$.chain" : {
    type: [String] // Chained names supported
  },
  "rest.$.code" : {
    type: Code // R!  transaction | search-system | history-system
  },
  "rest.$.documentation" : {
    type: String // Anything special about operation behavior
  },
  "rest.transactionMode" : {
    type: Code // not-supported | batch | transaction | both
  },
  "rest.searchParam" : {
    type: [ Content ] // Search params for searching all resources
  },
  "rest.operation.$.name" : {
    type: String // R!  Name by which the operation/query is invoked
  },
  "rest.operation.$.definition" : {
    type: ReferenceSchema  // (OperationDefinition) R!  The defined operation/query
  },
  "rest.compartment" : {
    type: [String] // Compartments served/used by system
  },
  "messaging.$.endpoint.$.protocol" : {
    type: Coding  // R!  http | ftp | mllp +
  },
  "messaging.$.endpoint.$.address" : {
    type: String // R!  Address of end-point
  //"messaging.$.reliableCache" : "<unsignedInt>" // Reliable Message Cache Length (min)
  },
  "messaging.$.documentation" : {
    type: String // Messaging interface behavior details
  },
  "messaging.$.event.$.code" : {
    type: Coding  // R!  Event type
  },
  "messaging.$.event.$.category" : {
    type: Code // Consequence | Currency | Notification
  },
  "messaging.$.event.$.mode" : {
    type: Code // R!  sender | receiver
  },
  "messaging.$.event.$.focus" : {
    type: Code // R!  Resource that's focus of message
  },
  "messaging.$.event.$.request" : {
    type: ReferenceSchema  // (StructureDefinition) R!  Profile that describes the request
  },
  "messaging.$.event.$.response" : {
    type: ReferenceSchema  // (StructureDefinition) R!  Profile that describes the response
  },
  "messaging.$.event.$.documentation" : {
    type:  String // Endpoint-specific event documentation
  },
  "document.$.mode" : {
    type: Code // R!  producer | consumer
  },
  "document.$.documentation" : {
    type: String // Description of document support
  },
  "document.$.profile" : {
    type: ReferenceSchema  // (StructureDefinition) R!  Constraint on a resource used in the document
  }
});
