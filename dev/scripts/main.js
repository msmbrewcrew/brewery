'use strict'

const brewApp = {};
const brewAppApi = 'http://api.brewerydb.com/v2/';
const brewAppKey = 'c0470cea063039b23d49457fc0120cf0';

// Add blank google map on page (default location of Toronto)
	// Markers to be added after 'submit' of city

// Enable auto-complete for cities on text box

// Get results
	// User enters city, save 'val' in variable 
	brewApp.init = function() {
		$('#userLocation').on('submit', function(event) {
			event.preventDefault();
			var userInput = $('#location').val();
			console.log(userInput);
			brewApp.separateVal(userInput);
		});
	};

	// A function to split the string into city and country (check for commas)
	brewApp.separateVal = function(data) {
		var separatedUserInput = [];
		if (data.indexOf(',') !== -1) {
			separatedUserInput = data.split(", ")
		} else {
			separatedUserInput = data.split(" ")
		}
		var userCity = separatedUserInput[0];
		var userCountry = separatedUserInput[1];
		brewApp.countryCodes(userCity, userCountry);
	};

	// A function to change countries into country codes
	brewApp.countryCodes = function(inputCity, inputCountry) {
		var country = [];
		// could be changed to regex statement
		if (inputCountry === 'Canada' || inputCountry === 'canada' || inputCountry === 'ca' || inputCountry === 'CA' || inputCountry === 'Ca' || inputCountry === 'Up North') {
			country = 'CA'
		} else if (inputCountry === 'United States' || inputCountry === 'United States of America' || inputCountry === 'united states' || inputCountry === 'USA' || inputCountry === 'usa' || inputCountry === 'US' || inputCountry === 'us' || inputCountry === 'U.S.A.' || inputCountry === 'u.s.a.' || inputCountry === 'Giddy\' Up') {
			country = 'US'
		}
		var city = inputCity;
		console.log(city);
		console.log(country);

		brewApp.getInfo(city, country);
	};

	// Use variable to make AJAX request to brewery API for all breweries in that city (using HackerYou Proxy)


	brewApp.getInfo = function(userCity, userCountry) {
		$.ajax({
			url: 'http://proxy.hackeryou.com',
			   dataType: 'json',
			   method:'GET',
			   data: {
			   	reqUrl: brewAppApi + 'locations',
			   	params: {
			   		key: brewAppKey,
			   		locality: userCity,
			   		countryIsoCode: userCountry
			   	},
			}
		}).then(function(data) {
			// Save the results in an array
			console.log(data);
			var userResults = data;
		});
		// Add in a message if no results
	};


// Add locations to google Maps
	// Filter the array of results into a new array with just Name, Lat & Lon
	// Using a each or for loop, plot a marker on the map for each location
	// Add a label to each Marker with the name of the brewery


// Add listing of breweries on left side
	// 	Shuffle the array of results
	// Add the first 3 results to featured
		// Build a handlebar template in our HTML
			// Some information should be 'IF' in case note each brewery has that information available (ex. logo, established date)
		// Using a for loop, run the first 3 results through the handlebar templates
	// Add the remaining results to the list on the left side of the screen
		// Build a handlebar template in our HTML
		// Using a for loop (starting at i = 3), run the results through the handlebar templates

// Using jquery add slideToggle functionality to each result
	// When slideToggle is down, add a class to make beer bottle tip over

// Add a button to refresh the results (below search bar)

$(function() {
	brewApp.init();
});