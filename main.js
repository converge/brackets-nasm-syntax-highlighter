define(function (require, exports, module) {

		"use strict";	
		
		require('./lib/nasm');
		
		var codemirror = brackets.getModule("thirdparty/CodeMirror2/lib/codemirror");
    codemirror.defineMIME("application/x-nasm", {name: "nasm", scriptingModeSpec:"nasm"});
		
    var LanguageManager = brackets.getModule("language/LanguageManager");

    LanguageManager.defineLanguage("nasm", {
        name: "NASM Asssembler",
        mode: "nasm",
        fileExtensions: ["asm"]
    });
    
});
