import SimpleSchema from 'simpl-schema';
import Code from './Code';

AttachmentSchema = new SimpleSchema({
  "contentType" : {
    optional: true,
    type: Code
    },
  "language" : {
    optional: true,
    type: Code
    },
  "data" : {
    optional: true,
    type: String // Base64Binary
    },
  "url" : {
    optional: true,
    type: String // Uri
    },
  "size" : {
    optional: true,
    type: String // UnsignedInt
    },
  "hash" : {
    optional: true,
    type: String // Base64Binary
    },
  "title" : {
    optional: true,
    type: String
    },
  "creation" : {
    optional: true,
    type: Date
    }
});


Attachment = {
  create: function(title, url){
    var newAttachment = {
      title: '',
      url: ''
    };

    if (title) {
      newAttachment.title = title;
    }
    if (url) {
      newAttachment.url = url;
    }

    return newAttachment;
  }
}

export default AttachmentSchema;