Meteor.methods({
    deactivateJob: function(jobId, filled) {
        check(jobId, String);
        check(filled, Boolean);

        var job = Jobs.findOne({
            _id: jobId
        });
        if (!job)
            throw new Meteor.Error("Could not find job.");

        if (this.userId !== job.userId)
            throw new Meteor.Error("You can only deactivate your own job.");

		if (job.status !== "active")
            throw new Meteor.Error("You can only deactivate an active job.");

      
        
        Jobs.update({
            _id: jobId
        }, {
            $set: {
            	status:(filled ? "filled" : "inactive")
            }
        });

    },
    adminSetJobStatus: function(jobId, status) {
        check(jobId, String);
        check(status, String);

        var job = Jobs.findOne({
            _id: jobId
        });
        if (!job)
            throw new Meteor.Error("Could not find job.");

        if (!Roles.userIsInRole(this.userId, ['admin']))
            throw new Meteor.Error("Only admins can set job status");

        var setObject = {
            status: status
        };
        
        if (Meteor.isServer && status === "active" && job.featured())
            setObject.featuredThrough = moment().add(30,"days").toDate();

        Jobs.update({
            _id: jobId
        }, {
            $set: setObject
        });

    },
    createFeaturedJobCharge: function(tokenId, jobId) {
        check(tokenId, String);
        check(jobId, String);

        var job = Jobs.findOne({_id:jobId});
        if(!job)
        	throw new Meteor.Error("Could not find job.");

        if(job.userId !== this.userId)
        	throw new Meteor.Error("You can only pay for you own job post.");


        if(Meteor.isServer){
        	var result = Stripe.charges.create({
	        	source:tokenId,
	        	amount:10000,
	        	currency:"usd",
	        	description:"We Work Meteor - Featured Job Post - 30 Days"
	        });

	        if(result && result.status === "succeeded"){
	        	Jobs.update({_id:job._id},{
	        		$set:{
	        			featuredThrough:moment().add(30,"days").toDate()
	        		},
	        		$push:{
	        			featuredChargeHistory:result.id
	        		}
	        	});
	        }else{
	        	throw new Meteor.Error("Payment Failed!");
	        }
        }else{
        	Jobs.update({
	            _id: jobId
	        }, {
	            $set: {
	                featuredThrough: moment().add(30, "days").toDate()
	            }
	        });
        }
    }
});
