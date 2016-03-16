AttachmentSchema = new SimpleSchema({
  "contentType" : {
    type: Code
    },
  "language" : {
    type: Code
    },
  "data" : {
    type: String // Base64Binary
    },
  "url" : {
    type: String // Uri
    },
  "size" : {
    type: String // UnsignedInt
    },
  "hash" : {
    type: String // Base64Binary
    },
  "title" : {
    type: String
    },
  "creation" : {
    type: Date
    }
});
