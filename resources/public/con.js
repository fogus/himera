/*
function compile_cljs(code) {
    var data;
    $.ajax({
               url: "/compile",
               data: "{:expr " + code + "}",
               contentType: 'application/clojure',
	       async: false,
	       type: 'POST',
	       dataType: 'json',
	       success: function(res) { data = res; }
	   });
    return data;
}

function onValidate(input) {
    return (input != "");
}

function onHandle(line, report) {
    
    var input = $.trim(line);

    // perform compilation
    var compiled = compile_cljs(input);

    // handle compilation error
    if (compiled.error) {
        return [{msg: "Compilation error: " + compiled.error,
                 className: "jquery-console-message-error"}];
    }

    // evaluate
    var result;
    try {
        result = eval(compiled.js);
    } catch (e) {
	
        return [{msg: "Evaluation error: " + e,
                 className: "jquery-console-message-error"}];
    }

    // print output
    var output = "" + result; // TODO: format back as cljs

    // display expr results
    return [{msg: output, 
	     className: "jquery-console-message-value"}];
}
*/

var controller;

/*
$(document).ready(function() {
		      controller = $("#console").console({
							     welcomeMessage:'Enter some Clojure code to be evaluated.',
							     promptLabel: 'himera> ',
							     commandValidate: onValidate,
							     commandHandle: onHandle,
							     autofocus:true,
							     animateScroll:true,
							     promptHistory:true
							 });
		  });

*/