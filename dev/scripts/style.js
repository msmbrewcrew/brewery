// Add blank google map on page (default location of Toronto)
	// Markers to be added after 'submit' of city

// Get results
	// User enters city, save 'val' in variable 
	// Use variable to make AJAX request to brewery API for all breweries in that city (using HackerYou Proxy)
	// Save the results in an array


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
