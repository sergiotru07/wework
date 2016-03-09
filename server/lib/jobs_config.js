Meteor.startup(function() {
    const initialJobs = [{
        "_id": "DffJzNL5opqAL9JLN",
        "category": "Desarrollo Web",
        "city": "Cali",
        "company": "LOOPA SAS",
        "companyImageUrl": "https://ucarecdn.com/afcfbc35-62ae-47cb-9688-73914fe39358/-/crop/714x715/90,0/-/preview/",
        "createdAt": "2016-03-07T23:52:26.512Z",
        "description": "Brief description for the job!",
        "featuredThrough": "2016-04-30T00:00:00.000Z",
        "jobtype": "Prestación de Servicios",
        "remote": true,
        "status": "active",
        "tags": [
            "meteor",
            "react",
            "mongo"
        ],
        "title": "Meteor Developer",
        "country": "Colombia",
        "url": "http://loopa.io/trabajos",
        "contact": "andres@loopa.io",
        "userId": "Q2STZwiiBHtYXWink",
        "userName": "Andrés García",
        "htmlDescription": "Brief description for the job!"
    }, {
        "_id": "t4Eht6LssJ2jrK7xy",
        "category": "Desarrollo Móvil",
        "city": "Cali",
        "company": "WE WORK METEOR",
        "companyImageUrl": "https://ucarecdn.com/41b84f5a-a0d1-42eb-906c-ae975e81fde0/-/crop/679x678/73,37/-/preview/",
        "createdAt": "2016-03-06T20:34:33.017Z",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        "jobtype": "Termino Indefinido",
        "remote": true,
        "status": "active",
        "tags": [
            "movil",
            "git",
            "css"
        ],
        "title": "Swift Engineer",
        "country": "Colombia",
        "url": "http://loopa.io/trabajos",
        "contact": "andresa.garciah621@gmail.com",
        "userId": "fuLwuMvFYBAJwP8v9",
        "userName": "Andrés Alejandro García Hurtado",
        "htmlDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    }, {
        "_id": "ibSziMZcxbYKvZaPS",
        "category": "Desarrollo Web",
        "city": "Cali",
        "company": "LOOPA SAS",
        "companyImageUrl": "https://ucarecdn.com/04c10de9-9f03-4a80-b57d-827dd7beadff/",
        "createdAt": "2016-03-06T12:07:14.854Z",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        "jobtype": "Termino Indefinido",
        "remote": true,
        "status": "active",
        "tags": [
            "ror",
            "angular",
            "mysql",
            "git"
        ],
        "title": "Fullstack Developer",
        "country": "Colombia",
        "url": "http://loopa.io/trabajos",
        "contact": "info@loopa.io",
        "userId": "GGoJgEmC8FrcD8aXX",
        "userName": "andres@loopa.io",
        "htmlDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    }, {
        "_id": "76o2ThRz5k9hrxMZ9",
        "category": "Marketing",
        "city": "Bogotá",
        "company": "LOOPA SAS",
        "companyImageUrl": "https://ucarecdn.com/04c10de9-9f03-4a80-b57d-827dd7beadff/",
        "createdAt": "2016-03-06T12:07:13.331Z",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        "jobtype": "Termino Fijo",
        "remote": true,
        "status": "active",
        "tags": [],
        "title": "Community Manager",
        "country": "Colombia",
        "url": "http://loopa.io/trabajos",
        "contact": "info@loopa.io",
        "userId": "GGoJgEmC8FrcD8aXX",
        "userName": "andres@loopa.io",
        "htmlDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    }, {
        "_id": "E7ANegnhpZSKjX4mv",
        "category": "Diseño",
        "city": "Medellín",
        "company": "GOOGLE",
        "companyImageUrl": "https://ucarecdn.com/41b84f5a-a0d1-42eb-906c-ae975e81fde0/-/crop/679x678/73,37/-/preview/",
        "createdAt": "2016-03-06T12:07:14.042Z",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        "jobtype": "Prestación de Servicios",
        "remote": true,
        "status": "active",
        "tags": [
            "html",
            "css",
            "bootstrap"
        ],
        "title": "Web Designer",
        "country": "Colombia",
        "url": "http://loopa.io/trabajos",
        "contact": "info@facebook.io",
        "userId": "GGoJgEmC8FrcD8aXX",
        "userName": "andres@loopa.com",
        "htmlDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    }, {
        "_id": "xHf6SdFQv7ifdCCgH",
        "category": "Desarrollo Web",
        "city": "Bogotá",
        "company": "FACEBOOK",
        "companyImageUrl": "https://ucarecdn.com/04c10de9-9f03-4a80-b57d-827dd7beadff/",
        "createdAt": "2016-03-06T12:07:12.601Z",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        "jobtype": "Termino Fijo",
        "remote": true,
        "status": "active",
        "tags": [
            "sql",
            "mysql",
            "linux"
        ],
        "title": "DB Analyst",
        "country": "Colombia",
        "url": "http://loopa.io/trabajos",
        "contact": "info@google.com",
        "userId": "GGoJgEmC8FrcD8aXX",
        "userName": "andres@loopa.io",
        "htmlDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    }, {

        "_id": "w7oJaCyNGFkJhZ4KW",
        "category": "Desarrollo Móvil",
        "city": "Cali",
        "company": "LOOPA SAS",
        "companyImageUrl": "https://ucarecdn.com/04c10de9-9f03-4a80-b57d-827dd7beadff/",
        "createdAt": "2016-03-06T12:07:09.812Z",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        "jobtype": "Termino Fijo",
        "remote": true,
        "status": "active",
        "tags": [
            "movil",
            "android",
            "java"
        ],
        "title": "Android Developer",
        "country": "Colombia",
        "url": "http://loopa.io/trabajos",
        "contact": "info@loopa.io",
        "userId": "GGoJgEmC8FrcD8aXX",
        "userName": "andres@loopa.io",
        "htmlDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    }];

    if (Jobs.find().count() === 0) {

        initialJobs.forEach((job, i) => {
            Jobs.insert(job);
        });
    }
});
