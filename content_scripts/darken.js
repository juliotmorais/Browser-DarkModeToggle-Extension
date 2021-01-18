/*jshint esversion: 6 */
(function() {
 /**
  * Check and set a global guard variable.
  * If this content script is injected into the same page again,
  * it will do nothing next time.
  */

 if (window.hasRun) {
   return;
 }
 window.hasRun = true;

 /**
  * Given a URL to a beast image, remove all existing beasts, then
  * create and style an IMG node pointing to
  * that image, then insert the node into the document.
  */
  var element = document.body;
  var child = document.body.firstElementChild;
  var s = document.getElementsByTagName('div');
  var a = document.getElementsByTagName('a');
  var h1col =document.getElementsByTagName("h1");
  var h2col =document.getElementsByTagName("h2");
  var h3col = document.getElementsByTagName("h3");
  var h4col =document.getElementsByTagName("h4");
  var h5col =document.getElementsByTagName("h5");
  var h6col =document.getElementsByTagName("h6");
  var pars = document.getElementsByTagName("p");
  var asi = document.getElementsByTagName("aside");
  var lab = document.getElementsByTagName("label");
  var spa = document.getElementsByTagName("span");
  var tableback=document.getElementsByTagName("table");
  var tabledata = document.getElementsByTagName("td");
  var codeblock = document.getElementsByTagName("code");
  var listitem = document.getElementsByTagName("li");

 function insertDark() {
   element.style.border = "5px solid red";
   element.style.backgroundColor="#5C5654";
   for (i = 0; i < s.length; i++) {
     s[i].setAttribute("style", "background-color: black;");
   }
   for (i = 0; i < a.length; i++) {
     a[i].setAttribute("style", "color: white;");
   }
   for (i = 0; i < h1col.length; i++) {
     h1col[i].setAttribute("style", "color: white;");
   }
   for (i = 0; i < h2col.length; i++) {
     h2col[i].setAttribute("style", "color: white;");
   }
   for (i = 0; i < h3col.length; i++) {
     h3col[i].setAttribute("style", "color: white;");
   }
   for (i = 0; i < h4col.length; i++) {
     h4col[i].setAttribute("style", "color: white;");
   }
   for (i = 0; i < h5col.length; i++) {
     h5col[i].setAttribute("style", "color: white;");
   }
   for (i = 0; i < h6col.length; i++) {
     h6col[i].setAttribute("style", "color: white;");
   }
   for (i = 0; i < pars.length; i++) {
     pars[i].setAttribute("style", "color: white;");
   }
   for (i = 0; i < asi.length; i++) {
     asi[i].setAttribute("style", "background-color: black;");
   }
   for (i = 0; i < lab.length; i++) {
     lab[i].setAttribute("style", "color: white;");
   }
   for (i = 0; i < spa.length; i++) {
     spa[i].setAttribute("style", "color: white;");
   }
   for (i = 0; i < tableback.length; i++) {
     tableback[i].setAttribute("style", "background-color: black;");
   }
   for (i = 0; i < tabledata.length; i++) {
     tabledata[i].setAttribute("style", "color: white;");
   }
   for (i = 0; i < codeblock.length; i++) {
     codeblock[i].setAttribute("style", "color: #3d3736;");
   }
   for (i = 0; i < listitem.length; i++) {
     listitem[i].setAttribute("style", "color: white;");
   }
 }
 function insertLight(){
   element.style.border = "";
   element.style.backgroundColor="";
   for (i = 0; i < s.length; i++) {
     s[i].setAttribute("style", "background-color: none;");
   }
   for (i = 0; i < a.length; i++) {
     a[i].setAttribute("style", "color: none;");
   }
   for (i = 0; i < h1col.length; i++) {
     h1col[i].setAttribute("style", "color: none;");
   }
   for (i = 0; i < h2col.length; i++) {
     h2col[i].setAttribute("style", "color: none;");
   }
   for (i = 0; i < h3col.length; i++) {
     h3col[i].setAttribute("style", "color: none;");
   }
   for (i = 0; i < h4col.length; i++) {
     h4col[i].setAttribute("style", "color: none;");
   }
   for (i = 0; i < h5col.length; i++) {
     h5col[i].setAttribute("style", "color: none;");
   }
   for (i = 0; i < h6col.length; i++) {
     h6col[i].setAttribute("style", "color: none;");
   }
   for (i = 0; i < pars.length; i++) {
     pars[i].setAttribute("style", "color: none;");
   }
   for (i = 0; i < asi.length; i++) {
     asi[i].setAttribute("style", "background-color: none;");
   }
   for (i = 0; i < lab.length; i++) {
     lab[i].setAttribute("style", "color: none;");
   }
   for (i = 0; i < spa.length; i++) {
     spa[i].setAttribute("style", "color: none;");
   }
   for (i = 0; i < tableback.length; i++) {
     tableback[i].setAttribute("style", "background-color: none;");
   }
   for (i = 0; i < tabledata.length; i++) {
     tabledata[i].setAttribute("style", "color: none;");
   }
   for (i = 0; i < codeblock.length; i++) {
     codeblock[i].setAttribute("style", "color: none;");
   }
   for (i = 0; i < listitem.length; i++) {
     listitem[i].setAttribute("style", "color: none;");
   }
 }



 /**
  * Listen for messages from the background script.
  * Call "darken()" or "lighten()".
 */
 browser.runtime.onMessage.addListener((message) => {
   if (message.command === "darken") {
     insertDark(message.beastURL);
   } else if (message.command === "lighten") {
     insertLight();
   }
 });

})();
