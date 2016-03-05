Template.jobSmall.helpers({
   alertMessage: function(){
      return this.status === "active" ? "success" : "warning"
   },

   jobTags: function () {
      return _.take(this.tags, 3);
   },

   slicedDescription: function (desc, len) {
      return desc.length < len ? desc : `${desc.substring(0, len)}...`
   }
});

