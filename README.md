# Closest Date - Timeline
 
This is a feature to select the closest date slide from your Knightlab Timeline.

Requirements:

- Google Apps Script: probably you will have a SpreadSheet for your timeline, then, you only have to create a new script inside it.

# Install

1. Create a new google apps script inside your Spreadsheet
1. Copy the script
1. Create a new file and copy the gscache utility script from https://github.com/davidayalas/gscache
1. Create a trigger to execute the functcion "closest_date_slide" each day, for example
1. Publish your script as web app and get the url of the service (https://script.google.com/macros/s/[your id]/exec)

# HTML Timeline

To use this service you need to use the javascript version of Knightlab Timeline: https://timeline.knightlab.com/docs/instantiate-a-timeline.html

With the url of the script that exposes the closest slide to date, is easy to setup the timeline:

		<script type="text/javascript">


			   $.getJSON("https://script.google.com/macros/s/[your script id]/exec?callback=?", null, function(results){
			   			
						var additionalOptions = {
					    	start_at_slide: results.slide,
					        timenav_height: 200,
					        height : 650,
					        initial_zoom: 2
					    }	   			

					  	timeline = new TL.Timeline('timeline-embed', 'https://docs.google.com/spreadsheets/d/[your spreadsheet id]/pubhtml', additionalOptions);
			   });



		</script>
