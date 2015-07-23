# austin_beer
Match good beer and food choices

The main goal of the app was to be a user-generated list good beers to pair with food.  I had planned on implementing the API from BreweryDB.com, but I discovered late into development that the API didn't support JS/AJAX and the only way to access it was through a wrapper created and last updated 4 years ago.  Bonus- the documentation was terrible, so I couldn't even try to piece it together with the current Ruby/Rails syntax.

After that hiccup, there was only really one function that I had planned that was a step past a basic CRUD app.  I planned on using a dropdown menu on the main page to allow users to filter the list of foods based on the types of beer.  For instance, I would search based on porters and stouts.  I could care less about what IPA's go with food since I'm never going to order them.  I puzzled with that for a while before thinking that this could actually work as a Backbone App.  So, since I had not delved into that technology yet, I decided to give it a shot.  I got this version deployed and then pivoted to try to make the Backbone version.  
