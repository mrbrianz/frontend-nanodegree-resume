var bio = {
	"name" : "Brian Zuehlke",
	"role" : "Web Developer, Extraordinaire",
	"contacts" : {
		"mobile" : "512-xxx-xxxx",
		"email" : "mxxxxxx@xx",
		"github" : "mrbrianz",
		"blog" : "mrbrianz.com",
		"location" : "Austin, TX"
	},
	"welcomeMessage" : "The one you really want to hire.  Today!",
	"skills" : ["Awesomeness", "Programming", "Mobile Web", "JavaScript"],
	"bioPic": "images/me.jpg",
	display : function() {

		// set formatted vars using helper.js pre-fabbed elements, but replace %data% with the vars
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedblog = HTMLblog.replace("%data%", bio.contacts.blog);
		var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);

		// prepend formatted vars to header id
		// We back in the header info, because we want it to prepend to the other tags in the id header (before the unordered list 'ul')
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedwelcomeMsg);


		$("#topContacts").append(formattedmobile,formattedemail,formattedgithub,formattedblog,formattedlocation);
		$("#footerContacts").append(formattedmobile,formattedemail,formattedgithub,formattedblog,formattedlocation);

		/* ------------------------------------------
			Display Skills on page, in unordered list
			-----------------------------------------  */

		// USING for IN loops (method 3)
		// example: for(*index* in object/array) {dosomething()};

		// grab header id, append the variable HTMLskillsStart from helper.js
		$("#header").append(HTMLskillsStart);

		for(nextSkillItem in bio.skills) {
				// set the var formatted skill to HTMLskills from helper.js, but replace %data% with skills item X (x = nextSkillItem variable)
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[nextSkillItem]);
				// grab skills id, append the formattedSkill variable to it
				$("#skills").append(formattedSkill);
		};

	}
};

var education = {
	"schools": [
		{
			"name" : "McLennan Community College (yes, just like the tv show 'Community' except funnier)",
			"location" : "Waco, TX",
			"degree" : "BBA Transfer",
			"majors" : "n/a",
			"dates" : "1995-1997",
			"url" : "http://www.mclennan.edu"
		},
		{
			"name" : "Baylor University",
			"location" : "Waco, TX",
			"degree" : "BBA",
			"majors" : ["Entrepreneurship","International Business"],
			"dates" : "1997-1999",
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
	],
	display : function() {
		for (schoolitem in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[schoolitem].name);
			var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[schoolitem].degree);
			var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[schoolitem].dates);
			var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schoolitem].location);
			var formattedschoolMajor = HTMLschoolMajor.replace('%data%', education.schools[schoolitem].majors);

			$(".education-entry:last").append(formattedschoolName,formattedschoolDegree,formattedschoolDates,formattedschoolLocation,formattedschoolMajor);
		};

		$(".education-entry:last").append(HTMLonlineClasses);

		for (onlineItem in education.onlineCourses) {
			var formattedonlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[onlineItem].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineItem].school);
			var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineItem].dates);
			var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineItem].url);

			$(".education-entry:last").append(formattedonlineTitle,formattedonlineDates,formattedonlineURL);
		};
	}
};

var work = {
	"jobs": [
	{
		"employer" : "AT&T",
		"title" : "Web Developer",
		"location" : "Austin, TX",
		"dates" : "2000-Present",
		"description" : "Build, maintain, and develope internal web systems for use by employees."

	},
	{
		"employer" : "Self-employed",
		"title" : "Website Developer",
		"location" : "Waco, TX",
		"dates" : "1999-2000",
		"description" : "Built websites for various companies who wished to have a web presence."
	},
	{
		"employer" : "Madagascar United",
		"title" : "Wildlife Documentary Filmmaker",
		"location" : "Fianarantsoa, Madagascar",
		"dates" : "1997-1999",
		"description" : "Filmed several extraordinary films which were never released.  Also this expands the Google Map so that it looks like I have traveled the world!"
	}
	],
	// create displayWork function containing our 'for in' loop which displays our work section
	display : function() {
		for (jobItemNumber in work.jobs ) {

			// grab workExperience and append HTMLworkstart to it from helper.js
		 	$("#workExperience").append(HTMLworkStart);

		 	// set var formattedEmployer as HTMLworkEmployer from helper.js but replace %data% with work job x, x being the jobItemNumber index being used in this 'for in loop' and use the employee value
		 	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobItemNumber].employer);
		 	// do same, but for Title
		 	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobItemNumber].title);
		 	// Concatenate the two vars into one new var
			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[jobItemNumber].dates);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[jobItemNumber].location);
			var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[jobItemNumber].description);

			// grabbing all class work-entry, grabbing the last one, and appending the concatenated var
			$(".work-entry:last").append(formattedEmployerTitle);
			// same for location
			$(".work-entry:last").append(formattedWorkLocation);
			// same for dates
			$(".work-entry:last").append(formattedWorkDates);
			// same for descriptions
			$(".work-entry:last").append(formattedDescription);
		};
	}
};


/* 	=============================================
	Projects Object, containing display function
	=============================================  */

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
	// create a function encapsulated in projects.display
	display : function() {
		// use 'for in' loop for all "projects" in the projects object
		// loop for all projects.projects, using projectItemNumber as the index
		for (projectItemNumber in projects.projects) {
		// append HTMLprojectStart from helper.js to to add project-entry class div
		$("#projects").append(HTMLprojectStart);

		// set formatted var by taking HTMLprojectTitle from helper.js and replacing %data% with the projects projects itemNumber title
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[projectItemNumber].title);
		// append this formatted var to the project-entry class, last element
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


/*	===================
	Capture page clicks
	===================  */

// grab document, and on click run function loc, which is an event object and has various properties we can set as variables and then pass those to the console
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
	// invoke work display
	work.display();
	// invoke education display
	education.display();
	// invoke projects display
	projects.display();
	// invoke bio display
	bio.display();
	// append InternationalizeButton to main
	$('#main').append(internationalizeButton);
	// append googleMap to the page
	$("#mapDiv").append(googleMap);
};

// invoke the display of this resume
displayBrianResume();
