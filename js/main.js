$(document).ready(function () {

    

    $('body').on('click','#nav li a',function(e){
		
		
		console.log("Nav button touched");
		console.log(e.target)
		
		
		
        if (e.target.id == "gitHub") {
        	console.log("GitHub button clicked");
        	window.open("http://www.github.com/theronpatrick", '_blank');
  			
  			return false;
  			
        }
        
        
		
        var toLoad = $(this).attr('href') + ' #icons';
        var contentToLoad = $(this).attr('href') + ' #content';


        $('#content').hide('fast', hideIcons());

        function hideIcons() {
            $('#icons').hide('fast', loadContentInfo);
        }

        function loadContentInfo() {
            $('#content').load(contentToLoad, "", loadIconInfo);
        }

        function loadIconInfo() {
            $('#icons').load(toLoad, '', showNewIconContent);
        }

        function showNewIconContent() {
            $('#icons').show("fast", showContent);
        }

        function showContent() {
            $('#content').show("fast");
        }



        return false;

    });
    
    // same thing for icons
     $('body').on('click','#icons li a',function(){
     	
     	console.log("Icon touched");

        // do same for icons
		
        var toLoad = $(this).attr('href') + ' #icons';
        var contentToLoad = $(this).attr('href') + ' #content';


        $('#content').hide('fast', hideIcons());

        function hideIcons() {
            $('#icons').hide('fast', loadContentInfo);
        }

        function loadContentInfo() {
            $('#content').load(contentToLoad, "", loadIconInfo);
        }

        function loadIconInfo() {
            $('#icons').load(toLoad, '', showNewIconContent);
        }

        function showNewIconContent() {
            $('#icons').show("fast", showContent);
        }

        function showContent() {
            $('#content').show("fast");
        }



        return false;

    });
    
        $('body').on('click','#gitHub',function(){

      	var win=window.open(github.com/theronpatrick, '_blank');
  		win.focus();



        return true;

    });
    
	$('body').on('click','#show_resume_button',function(){

      	
      	
      
       $('#iframecontainer').toggle("blind", {}, 1000);
        
		console.log($('#iframecontainer').is(":visible"));
		

        return true;

    });



    $('div:empty').remove();


});