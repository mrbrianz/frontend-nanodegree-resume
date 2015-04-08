// bio object
var bio = {
	// bio info
	"name" : "Brian Zuehlke",
	// I added pronounce, because I like for my name to be pronounced correctly :)
	// I understand the instructions said 'follow the names within the schema below exactly'
	// but those with hard-to-pronounce names will understand
	"pronounce" : "zell-key",
	"role" : "Web Developer, Extraordinaire",
	"contacts" : {
		"mobile" : "512-765-4321",
		"email" : "mxxxxxx@yyy.com",
		"github" : "mrbrianz",
		"twitter" : "@mrbrianz",
		"blog" : "mrbrianz.com", // blog was available in helper.js, so I included it
		"location" : "Austin, TX"
	},
	"welcomeMessage" : "Building & Developing meaningful web products for use in Business and Customer Services.",
	"skills" : ["Programming ✔︎", "Coldfusion ✔︎", "Mobile Web ✔︎", "CSS ✔︎", "JavaScript ✔︎"],
	"bioPic": "images/me.jpg",
	// bio display function
	display : function() {

		// set formatted vars
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedPronounce = HTMLheaderNamePronunciation.replace("%data%", bio.pronounce);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedblog = HTMLblog.replace("%data%", bio.contacts.blog);
		var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);

		// prepend formatted vars
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedPronounce);
		$("#header").prepend(formattedName);
		// append the rest
		$("#header").append(formattedBioPic);
		$("#header").append(formattedwelcomeMsg);
		// contacts append
		$("#topContacts").append(formattedmobile,formattedemail,formattedgithub,formattedblog/*,formattedlocation *//* location not desired here, just personal preference */);
		$("#footerContacts").append(formattedmobile,formattedemail,formattedgithub,formattedblog,formattedlocation);

		// USING for IN loops
		// append to header
		$("#header").append(HTMLskillsStart);

		for(nextSkillItem in bio.skills) {
				// set formatted var
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[nextSkillItem]);
				// append to skills
				$("#skills").append(formattedSkill);
		};
	}
};
// bio object end

// education object
var education = {
	"schools": [
		{
			"name" : "Baylor University",
			"location" : "Waco, TX",
			"degree" : "Bachelors of Business Administration (BBA)",
			"majors" : ["Entrepreneurship"," International Business"],
			"dates" : "1997-1999",
			"url" : "http://www.baylor.edu"
		},
		{
			"name" : "McLennan Community College",
			"location" : "Waco, TX",
			"degree" : "Bachelors of Business Administration (BBA) - Transfer",
			"majors" : "Transferred to Baylor University",
			"dates" : "1995-1997",
			"url" : "http://www.mclennan.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Frontend Web Developer Nanodegree",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "http://www.udacity.com"
		}
	],
	// education display function
	display : function() {
		for (schoolitem in education.schools) {
			// append start to education
			$("#education").append(HTMLschoolStart);

			// set formatted vars
			var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[schoolitem].name);
			var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[schoolitem].degree);
			var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[schoolitem].date);
			var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schoolitem].location);
			var formattedschoolMajor = HTMLschoolMajor.replace('%data%', education.schools[schoolitem].majors);

			// append vars to last education entry
			$(".education-entry:last").append(formattedschoolName,formattedschoolDegree,formattedschoolDates,formattedschoolLocation,formattedschoolMajor);
		};

		// append online courses to last education entry
		$(".education-entry:last").append(HTMLonlineClasses);

		for (onlineItem in education.onlineCourses) {
			// set formatted vars
			var formattedonlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[onlineItem].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineItem].school);
			var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineItem].dates);
			var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineItem].url);

			// append vars to last education entry
			$(".education-entry:last").append(formattedonlineTitle,formattedonlineDates,formattedonlineURL);
		};
	}
};
// education object end

// work object
var work = {
	"jobs": [
	{
		"employer" : "AT&T Mobility, LLC",
		"title" : "Web Developer/Centers Tech Support Manager",
		"location" : "Austin, TX",
		"dates" : "2009-Present",
		"description" : "Responsible for design, development, testing and documentation of the coding and jobs necessary to support management initiatives. Understands computer center infrastructure and environments, tools, and processes; assists with production including loads, source, job scheduling data sets and scripts. Works on several or all technical phases of operations. Ability to employ production system utilities and produce software in one or more programming languages. Directs compilation of records and reports concerning production, machine malfunctioning and maintenance. Possesses and applies a broad knowledge of principles, practices, and procedures to the completion of assignments. Works with minimum supervision. May advise on organizational, procedural, and work flow plans, methods, and procedures analysis. Analyzes the results of monitoring the operating systems and recommends changes to improve processing and utilization. "

	},
	{
		"employer" : "AT&T Inc",
		"title" : "Workforce Systems Manager",
		"location" : "Austin, TX",
		"dates" : "2000-2009",
		"description" : "Provided management of scheduling systems and progressively grew the systems into a Web Application for the benefit of the Austin Call Center, and later to the larger overall company."
	},
	{
		"employer" : "Self-Employed",
		"title" : "Web Developer",
		"location" : "Waco, TX",
		"dates" : "1999-2000",
		"description" : "Created, developed, and maintained business websites for local businesses. Self-employment involved compliance with all laws, ordinances, and taxes necessary for the operation of a business."
	},
	{
		"employer" : "Madagascar United",
		"title" : "Wildlife Documentary Filmmaker (Just kidding!)",
		"location" : "Fianarantsoa, Madagascar",
		"dates" : "1997-1999",
		"description" : "Directed and Produced several extraordinary films which were never released.  This work experience expands the Google Map so that it looks like I have traveled the world!"
	}
	],
	// work display function
	display : function() {
		for (jobItemNumber in work.jobs ) {

			// append start to work experience section
		 	$("#workExperience").append(HTMLworkStart);

		 	// set formatted vars
		 	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobItemNumber].employer);
		 	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobItemNumber].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[jobItemNumber].dates);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[jobItemNumber].location);
			var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[jobItemNumber].description);

			// append vars to last work entry
			$(".work-entry:last").append(formattedEmployerTitle,formattedWorkLocation,formattedWorkDates,formattedDescription);
		};
	}
};
// work object end

// projects object
var projects = {
	"projects": [
	{
		"title" : "myWorkLife Mobile",
		"dates" : "2012-Present",
		"description" : "Managed and contributed to a mobile version of the Nexus project.",
		"images" : ["images/mwl1.jpg","images/mwl2.jpg"]
	},
	{
		"title" : "Nexus",
		"dates" : "2002-2013",
		"description" : "Built series of progressive improvements to a system used for managing employees.",
		"images" : ["images/nexus1.jpg","images/nexus2.jpg"]
	}
	],
	// projects display function
	display : function() {
		for (projectItemNumber in projects.projects) {
		// append start to projects section
		$("#projects").append(HTMLprojectStart);

		// set formatted vars
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[projectItemNumber].title);
		// append formatted var to last project entry
		$(".project-entry:last").append(formattedProjectTitle);

		// repeat for dates
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[projectItemNumber].dates);
		$(".project-entry:last").append(formattedProjectDates);

		// repeat for description
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[projectItemNumber].description);
		$(".project-entry:last").append(formattedProjectDescription);

		// the images are in an array
		// check if there are images
			// normal loop checking for images having length
			if (projects.projects[projectItemNumber].images.length > 0) {
				// use 'for in' loop for all images in this projects projects itemNumber images
				for (imageItemNumber in projects.projects[projectItemNumber].images) {
					var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[projectItemNumber].images[imageItemNumber]);
					$(".project-entry:last").append(formattedProjectImage);
				};
			};
		};
	}
};
// projects object end


/*	===================
	Capture page clicks
	===================  */

$(document).click(function(loc) {
	// set vars from loc properties
	var x = loc.pageX;
	var y = loc.pageY;
	// var myType = loc.type; //'type' is another one

	// log the clicks to the console
	logClicks(x,y);
});


/*	============
	Locationizer
	============  */

function locationizer(work) { // can also be 'work_obj'
    // create empty array
    var locationArray = [];

    // 'for in' loop
    // for each work_obj.jobs there is an index of jobItem
    for (jobItem in work.jobs) {
    	// set newlocation equal to the index of work_obj for location
    	var newLocation = work.jobs[jobItem].location;
    	// then push this to the locationArray
    	locationArray.push(newLocation);
    };

    // return the locationArray
    return locationArray;
};

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));


/*	=========================
	Internationalize Function
	=========================  */

// function to use the internationalize button option, if pressed will send call to this function
function inName(theIncomingName) {
	// set var name based on the incoming name trimmed and split at the spaces
	// This puts the name into an array
	var nameArray = theIncomingName.trim().split(" ");
    // console.log(nameArray);

    // take 2nd item equal to itself capitalized
    nameArray[1] = nameArray[1].toUpperCase();
    // take 1st item eaual to first letter capitalized by taking slice of first letter (0) until second letter (1), and concatenate to it the second letter (1) until the end (no arg needed) all lower cased
    nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();

    // return the first item of the array plus space plus the second item of the array
    return nameArray[0] +" "+nameArray[1];
};


/*  ====================
	Call to Display Page
	====================  */

displayBrianResume = function() {
	// invoke bio display
	bio.display();
	// invoke work display
	work.display();
	// invoke projects display
	projects.display();
	// invoke education display
	education.display();

	// append InternationalizeButton to main
	$('#main').append(internationalizeButton);
	// append googleMap to the page
	$("#mapDiv").append(googleMap);

	// using jquery.corner.js
	// gives us rounded rectangles
	$('#map').corner('10px');
	$('.biopic,.imgProject,#header,#workExperience,#projects,#education,#letsConnect').corner('20px');
};

// invoke the display of this resume by invoking the displayBrianResume function
displayBrianResume();
