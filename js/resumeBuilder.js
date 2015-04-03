/*
bio contains

name : string
role : string
contacts : an object with
      mobile: string
      email: string
      github: string
      twitter: string
      location: string
welcomeMessage: string
skills: array of strings
biopic: url
display: function
*/

var bio = {
	"name" : "Brian Zuehlke (zell-key)",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "512-xxx-xxxx",
		"email" : "mxxxxxx@xx",
		"github" : "mrbrianz",
		"twitter" : "mrbrianz",
		"location" : "Austin, TX"
	},
	"welcomeMessage" : "Howdy Partners",
	"skills" : ["Awesomeness", "Programming", "Mobile Web", "JavaScript"],
	"bioPic": "images/me.jpg"
};

/*
education contains

schools: array of objects with
     name: string
     location: string
     degree: string
     majors: array of strings
     dates: integer (graduation date)
     url: string
onlineCourses: array with
     title: string
     school: string
     date: integer (date finished)
     url: string
display: function
*/

var education {
	"schools": [
		{
			"name" : "MCC",
			"location" : "Waco, TX",
			"degree" : "BBA",
			"majors" : ["n/a"],
			"dates" : 1997,
			"url" : "http://www.mclennan.edu"
		},
		{
			"name" : "Baylor",
			"location" : "Waco, TX",
			"degree" : "BBA",
			"majors" : ["Entrepreneurship","International Business"],
			"dates" : 1999,
			"url" : "http://www.baylor.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Frontend Web Developer Nanodegree",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "http://www.udacity.com"
		}
	]
};


/*
work contains

jobs: array of objects with
     employer: string
     title: string
     location: string
     dates: string (works with a hyphen between them)
     description: string
display: function
*/

var work {
	"jobs": [
	{
		"employer" : "Self-employed",
		"title" : "Website Developer",
		"location" : "Waco, TX",
		"dates" : "1999-2000",
		"description" : "Built websites for various companies who wished to have a web presence."
	},
	{
		"employer" : "AT&T",
		"title" : "Web Developer",
		"location" : "Austin, TX",
		"dates" : "2000-2015",
		"description" : "Build, maintain, and develope internal web systems for use by employees."

	}
	]
};

/*
projects contains

projects: array of objects with
      title: string
      dates: string (works with a hyphen between them)
      description: string
      images: array with string urls
display: function
*/

var projects {
	"projects": [
	{
		"title" : "Nexus",
		"dates" : "2002-2013",
		"description" : "Built series of progressive improvements to a system used for managing employees.",
		"images" : ["images/nexus1.jpg","images/nexus2.jpg"]
	},
	{
		"title" : "myWorkLife Mobile",
		"dates" : "2012-2015",
		"description" : "Managed and contributed to a mobile version of the Nexus project.",
		"images" : ["images/mwl1.jpg","images/mwl2.jpg"]
	}
	]

};