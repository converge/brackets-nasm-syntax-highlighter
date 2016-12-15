define(function (require, exports, module) {

  "use strict";	

  require('./lib/nasm/nasm');

  var CodeMirror = brackets.getModule("thirdparty/CodeMirror2/lib/codemirror");
  CodeMirror.defineMIME("application/x-nasm", {name: "nasm", scriptingModeSpec:"nasm"});

	// define NASM language
  var LanguageManager = brackets.getModule("language/LanguageManager");

  LanguageManager.defineLanguage("nasm", {
    name: "NASM Asssembler",
    mode: "nasm",
    fileExtensions: ["asm"]
  });

});
