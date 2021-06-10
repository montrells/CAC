// JavaScript Document

// JavaScript Document

tinymce.init({
      selector: 'textarea',
      plugins: 'a11ychecker advcode casechange formatpainter linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tinycomments tinymcespellchecker',
      toolbar: 'a11ycheck addcomment showcomments casechange checklist code formatpainter pageembed permanentpen table',
      toolbar_mode: 'floating',
      tinycomments_mode: 'embedded',
      tinycomments_author: 'Author name',
   });
function sendForm() {
  console.log("in sendForm()");
  
  // SEND THE FORM USING AJAX
  
  // PERFORM CUSTOM VALIDATION
  
 
  return false;

var validate = $("#email").val();
	function(validate) {                           //email Method
	var valid = /[^@]+@[^@]+/.test(validate.value);  
	if(!valid){                                 //store test result in valid
		setErrorMessage(validateType, 'Please enter a valid email address');
	}
	return valid;
}
}


 