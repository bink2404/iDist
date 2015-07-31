/**
 * Notification that the UI is about to transition to a new page.
 * Perform custom prepage-transition logic here.
 * @param {String} currentPageId 
 * @param {String} targetPageId 
 * @returns {boolean} true to continue transtion; false to halt transition
 */
phoneui.prePageTransition = function(currentPageId,targetPageId) {
  // add custom pre-transition code here
  // return false to terminate transition
  return true;
}

/**
 * Notification that the UI has transition to a new page.
 * 
 * @param {String} newPageId 
 */
phoneui.postPageTransition = function(newPageId) {
  
}

/**
 * Notification that device orientation has changed. 
 * 
 * @param {String} newOrientation 
 */
phoneui.postOrientationChange = function(newOrientation) {
  
}

/**
 * Called when document is loaded.
 */
phoneui.documentReadyHandler = function() {
}

/**
 * Perform custom preprocessing or actions before submitting form. 
 * Common presubmission tasks include form validation and 
 * preprocessing of form data.
 * 
 * @param {boolean} true if all OK to proceed with form submission; 
 *                  false implies terminate form submission process
 * @param {Object} data results of form processing; error message if isSuccess == false
 * @return {boolean} true if OK; otherwise false
 */
phoneui.preSubmitForm_m1_test = function(form) {
  // add custom presubmission code here, e.g., form validation & error handling
  // return false to terminate form submission
  return true;
}

/**
 * Perform custom actions upon return from form submission.
 * 
 * @param {boolean} isSuccess true if all OK; otherwise false
 * @param {Object} data results of form processing; error message if isSuccess == false
 * @return {boolean} true if OK; otherwise false
 */
phoneui.postSubmitForm_m1_test = function(isSuccess, data) {
  // add custom postubmission processing code here,
  // e.g., parse and process results & update UI controls with data as needed
  // return false to terminate form processing
  var result = true;
  if (isSuccess) {
    // process data
    result = true;
  } else {
    // submit failed
    // data = error msg
    result = false;
  }
  return result;
}

    function displayDialog(d)
    {
      if (dialogDisplayed == 1)
      {
        return ;
      }

      dialogDisplayed = 1 ;

      document.getElementById(d).style.display='block' ;
    }

    function BlockMove(event) 
    {
      // Don't move the window.
      event.preventDefault() ;
    }

    function showInfo()
    {
      document.getElementById('gameover').innerHTML = "" ;

      if (browserType == 'M')
      {
        document.getElementById('info').innerHTML = "<center><img style=\"zIndex:2; position=absolute\" src=\"images/info_img.jpg\"></center>" ;
      }
      else
      {
        document.getElementById('info').innerHTML = "<center><img style=\"zIndex:2; position=absolute; margin-top: -50px;\" src=\"images/info_img.jpg\"></center>" ;
      }
    }

    function checkOrientation()
    {
      switch(window.orientation)
      {
           case 0:
             // Display message to rotate device
             document.getElementById('rotate2').style.display='block' ;
             break;

		   default :
             document.getElementById('rotate').style.display='none' ;
             document.getElementById('rotate2').style.display='none' ;
             break;
      }
    }

	// Code for mouse dragging 
    var dragobject=
	{ 
        z: 0, x: 0, y: 0, offsetx : null, offsety : null, targetobj : null, dragapproved : 0, 
        initialize:function()
		{ 
			document.ondragstart=this.drag 
			document.onmouseup=function(){this.dragapproved=0;} 
		}, 
		drag:function(e) 
		{ 
            var evtobj=window.event? window.event : e 
            this.targetobj=window.event? event.srcElement : e.target 
            if (this.targetobj.className=="drag") 
            { 
                    this.dragapproved=1 
                    if (isNaN(parseInt(this.targetobj.style.left))) 
                    { 
                            this.targetobj.style.left=0 
                    } 
                    if (isNaN(parseInt(this.targetobj.style.top))) 
                    { 
                            this.targetobj.style.top=0 
                    } 
                    this.offsetx=parseInt(this.targetobj.style.left) 
                    this.offsety=parseInt(this.targetobj.style.top) 
                    this.x=evtobj.clientX 
                    this.y=evtobj.clientY 
                    if (evtobj.preventDefault) 
                            evtobj.preventDefault() 
                    document.onmousemove=dragobject.moveit 
            } 
		}, 
		moveit:function(e) 
		{ 
            var evtobj=window.event? window.event : e 
            if ((this.dragapproved==1) && (dialogDisplayed != 1))
            { 
				var left = this.targetobj.style.left ; 
                var top = this.targetobj.style.top ; 

				// Check boundaries for player
                if ((this.offsetx+evtobj.clientX-this.x < (((imageSize * 16) / 2) - 9)) && 
                    (this.offsetx+evtobj.clientX-this.x > -(((imageSize * 16) / 2) - 9))) 
                { 
                        this.targetobj.style.left=this.offsetx+evtobj.clientX-this.x+"px" 
                } 

                if ((this.offsety+evtobj.clientY-this.y > -((imageSize * 9.4)) + 24) && 
                    (this.offsety+evtobj.clientY-this.y < 6)) 
                { 
                        this.targetobj.style.top=this.offsety+evtobj.clientY-this.y+"px" 
                } 

				// Calculate the distance moved in proportion to the field size
				var x = ((parseFloat(left) -  parseFloat(this.targetobj.style.left)) * flength) / (imageSize * 16) ;
				var y = ((parseFloat(top) -  parseFloat(this.targetobj.style.top)) * fwidth) / (imageSize * 9.4) ;

				var d = Math.sqrt(Math.pow(parseFloat(x), 2) + Math.pow(parseFloat(y), 2)) ; 

				if (!isNaN(parseInt(d)))
				{
					distance += parseFloat(d) ;
					document.getElementById('distance').innerHTML = distance.toFixed(1) ; 
				}

                return false 
            } 
		} 
	} 

	dragobject.initialize() 

	

