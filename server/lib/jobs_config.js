Meteor.startup(function() {
    const initialJobs = [{
        "company": "LOOPA SAS",
        "createdAt": "2016-03-03T05:38:39.782Z",
        "jobtype": "Termino Fijo",
        "remote": true,
        "status": "active",
        "title": "React Developer",
        "category": "Desarrollo",
        "tags": [
            "frontend",
            "javascript",
            "react",
            "git",
            "meteor"
        ],
        "country": "Colombia",
        "city": "Cali",
        "description": "This is a tes!!!",
        "url": "http://loopa.io/trabajos",
        "contact": "andres@loopa.io",
        "userId": "s5Q25YQDLHMpQoEpi",
        "userName": "Andrés Alejandro García Hurtado",
        "htmlDescription": "This is a tes!!!"
    }, {
        "company": "LOOPA SAS",
        "createdAt": "2016-03-03T05:38:39.782Z",
        "jobtype": "Termino Fijo",
        "remote": true,
        "status": "active",
        "title": "Meteor Developer",
        "category": "Desarrollo",
        "tags": [
            "frontend",
            "javascript",
            "react",
            "git",
            "meteor"
        ],
        "country": "Colombia",
        "city": "Cali",
        "description": "This is a tes!!!",
        "url": "http://loopa.io/trabajos",
        "contact": "andres@loopa.io",
        "userId": "s5Q25YQDLHMpQoEpi",
        "userName": "Andrés Alejandro García Hurtado",
        "htmlDescription": "This is a tes!!!"
    }, {
        "company": "LOOPA SAS",
        "createdAt": "2016-03-03T05:38:39.782Z",
        "jobtype": "Termino Fijo",
        "remote": true,
        "status": "active",
        "title": "Ruby on Rails Engineer",
        "category": "Desarrollo",
        "tags": [
            "frontend",
            "javascript",
            "react",
            "git",
            "meteor"
        ],
        "country": "Colombia",
        "city": "Cali",
        "description": "This is a tes!!!",
        "url": "http://loopa.io/trabajos",
        "contact": "andres@loopa.io",
        "userId": "s5Q25YQDLHMpQoEpi",
        "userName": "Andrés Alejandro García Hurtado",
        "htmlDescription": "This is a tes!!!"
    }, {
        "company": "LOOPA SAS",
        "createdAt": "2016-03-03T05:38:39.782Z",
        "jobtype": "Termino Fijo",
        "remote": true,
        "status": "active",
        "title": "DB Analyst",
        "category": "Desarrollo",
        "tags": [
            "frontend",
            "javascript",
            "react",
            "git",
            "meteor"
        ],
        "country": "Colombia",
        "city": "Cali",
        "description": "This is a tes!!!",
        "url": "http://loopa.io/trabajos",
        "contact": "andres@loopa.io",
        "userId": "s5Q25YQDLHMpQoEpi",
        "userName": "Andrés Alejandro García Hurtado",
        "htmlDescription": "This is a tes!!!"
    }, {
        "company": "LOOPA SAS",
        "createdAt": "2016-03-03T05:38:39.782Z",
        "jobtype": "Termino Fijo",
        "remote": true,
        "status": "active",
        "title": "MongoDB Expert",
        "category": "Desarrollo",
        "tags": [
            "frontend",
            "javascript",
            "react",
            "git",
            "meteor"
        ],
        "country": "Colombia",
        "city": "Cali",
        "description": "This is a tes!!!",
        "url": "http://loopa.io/trabajos",
        "contact": "andres@loopa.io",
        "userId": "s5Q25YQDLHMpQoEpi",
        "userName": "Andrés Alejandro García Hurtado",
        "htmlDescription": "This is a tes!!!"
    }, {
        "company": "LOOPA SAS",
        "createdAt": "2016-03-03T05:38:39.782Z",
        "jobtype": "Termino Fijo",
        "remote": true,
        "status": "active",
        "title": "Elixir Ninja",
        "category": "Desarrollo",
        "tags": [
            "frontend",
            "javascript",
            "react",
            "git",
            "meteor"
        ],
        "country": "Colombia",
        "city": "Cali",
        "description": "This is a tes!!!",
        "url": "http://loopa.io/trabajos",
        "contact": "andres@loopa.io",
        "userId": "s5Q25YQDLHMpQoEpi",
        "userName": "Andrés Alejandro García Hurtado",
        "htmlDescription": "This is a tes!!!"
    }, {
        "company": "LOOPA SAS",
        "createdAt": "2016-03-03T05:38:39.782Z",
        "jobtype": "Termino Fijo",
        "remote": true,
        "status": "active",
        "title": "Web Designer",
        "category": "Desarrollo",
        "tags": [
            "frontend",
            "javascript",
            "react",
            "git",
            "meteor"
        ],
        "country": "Colombia",
        "city": "Cali",
        "description": "This is a tes!!!",
        "url": "http://loopa.io/trabajos",
        "contact": "andres@loopa.io",
        "userId": "s5Q25YQDLHMpQoEpi",
        "userName": "Andrés Alejandro García Hurtado",
        "htmlDescription": "This is a tes!!!"
    }];

    if (Jobs.find().count() === 0) {

        initialJobs.forEach((job, i) => {
            Jobs.insert(job);
        });
    }
});
