Jobs = new Mongo.Collection("jobs");

Jobs.attachSchema(
  new SimpleSchema({
    title: {
      type: String,
      label: "Job Title",
      max: 128
    },
    category: {
      type: String,
      label: "Categoría",
      allowedValues: JOB_CATEGORIES.map(category => category.category)
    },
    company: {
      type: String,
      label: "Company",
      max: 128,
      optional: true
    },
    tags: {
        type: [String],
        label: 'Tags',
        autoform: {
            type: 'tagsTypeahead',
        },
    },
    country: {
      type: String,
      label: "País",
      max: 128,
    },
    city: {
      type: String,
      label: "Ciudad",
      max: 128,
    },
    url: {
      type: String,
      label: "URL",
      max: 256,
      optional: true,
      regEx: SimpleSchema.RegEx.Url
    },
    contact: {
      type: String,
      label: "Contact Info",
      max: 128
    },
    jobtype: {
      type: String,
      label: "Job Type",
      allowedValues: JOB_TYPES
    },
    remote: {
      type: Boolean,
      label: "This is a remote position."
    },
    userId: {
      type: String,
      label: "User Id",
      autoValue: function() {
        if (this.isInsert) {
          return Meteor.userId();
        } else if (this.isUpsert) {
          return {
            $setOnInsert: Meteor.userId()
          };
        } else {
          this.unset();
        }
      },
      denyUpdate: true
    },
    userName: {
      type: String,
      label: "User Name",
      autoValue: function() {
        if (this.isInsert) {
          return getUserName(Meteor.user());
        } else if (this.isUpsert) {
          return {
            $setOnInsert: getUserName(Meteor.user())
          };
        } else {
          this.unset();
        }
      }
    },
    description: {
      type: String,
      label: "Job Description",
      max: 20000,
      autoform: {
        afFieldInput: SUMMERNOTE_OPTIONS
      }
    },
    status: {
      type: String,
      allowedValues: STATUSES,
      autoValue: function() {
        if (this.isInsert) {
          return 'pending';
        } else if (this.isUpsert) {
          return {
            $setOnInsert: 'pending'
          };
        }
      },
    },
    companyImageUrl: {
      type: String,
      optional: true,
      autoValue: function() {
        if (this.isInsert && Meteor.isClient) {
          return Profiles.findOne({userId: Meteor.userId()}).customImageUrl;
        }
      }
    },
    featuredThrough: {
      type: Date,
      optional: true
    },
    featuredChargeHistory: {
      type: [String],
      optional: true
    },
    // Automatically set HTML content based on markdown content
    // whenever the markdown content is set.
    htmlDescription: {
      type: String,
      optional: true,
      autoValue: function(doc) {
        var htmlContent = this.field("description");
        if (Meteor.isServer && htmlContent.isSet) {
          return cleanHtml(htmlContent.value);
        }
      }
    },
    // Force value to be current date (on server) upon insert
    // and prevent updates thereafter.
    createdAt: {
      type: Date,
      autoValue: function() {
        if (this.isInsert) {
          return new Date();
        } else if (this.isUpsert) {
          return {
            $setOnInsert: new Date()
          };
        } else {
          this.unset();
        }
      },
      denyUpdate: true
    },
    // Force value to be current date (on server) upon update
    // and don't allow it to be set upon insert.
    updatedAt: {
      type: Date,
      autoValue: function() {
        if (this.isUpdate) {
          return new Date();
        }
      },
      denyInsert: true,
      optional: true
    }
  })
);

Jobs.helpers({
  path: function() {
    return 'jobs/' + this._id + '/' + this.slug();
  },
  slug: function() {
    return getSlug(this.title);
  },
  featured: function() {
    return this.featuredThrough && moment().isBefore(this.featuredThrough);
  }
});

Jobs.allow({
  insert: function(userId, doc) {
    return userId && doc && userId === doc.userId;
  },
  update: function(userId, doc, fieldNames, modifier) {
    return Roles.userIsInRole(userId, ['admin']) || 
    (!_.contains(fieldNames, 'htmlDescription') 
      && !_.contains(fieldNames, 'status') 
        && !_.contains(fieldNames, 'featuredThrough') 
          && !_.contains(fieldNames, 'featuredChargeHistory') 
          && userId && doc && userId === doc.userId);
  },
  remove: function(userId, doc) {
    return false;
  },
  fetch: ['userId']
});
