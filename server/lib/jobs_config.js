Meteor.startup(function() {
    const initialJobs = [{
        "company": "LOOPA SAS",
        "createdAt": "2016-03-03T05:38:39.782Z",
        "jobtype": "Termino Fijo",
        "remote": true,
        "status": "active",
        "title": "React Developer",
        "category": "Desarrollo Web",
        "tags": [
            "frontend",
            "javascript",
            "react",
            "git"
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
        "category": "Desarrollo Móvil",
        "tags": [
            "frontend",
            "javascript",
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
        "category": "Desarrollo Web",
        "tags": [
            "ruby",
            "ruby-on-rails",
            "javascript"
        ],
        "country": "Colombia",
        "city": "Bogotá",
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
        "category": "Desarrollo Web",
        "tags": [
            "sql",
            "mysql"
        ],
        "country": "Colombia",
        "city": "Bogotá",
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
        "title": "Community Manager",
        "category": "Marketing",
        "tags": [
            "html",
            "photoshop"
        ],
        "country": "Colombia",
        "city": "Medellín",
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
        "category": "Diseño",
        "tags": [
            "html",
            "javascript",
            "css",
            "git"
        ],
        "country": "Colombia",
        "city": "Barranquilla",
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
