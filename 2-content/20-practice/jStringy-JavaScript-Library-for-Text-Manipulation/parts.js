var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\.\/:;<=>?@\[\]^_`{|}~]|(-\s)|(\s-)|(-[^a-zA-Z\d].)|([^a-zA-Z\d].-)/g;
var spaceRE = /\s+/g;
var str = "This - is- #! an $ % ^ & * -example ;: {} of a = -_ string- with `~)() -ddd punctu-ation re-enter";
str.replace(punctRE, ' ').replace(spaceRE, ' ');
"This is an example of a string with ddd punctu-ation re-enter"


var lower = new RegExp(/--RegexCode--/);
var upper = new RegExp(/--RegexCode--/);

\\hence, regex can be dynamically created. After creation:
"sampleString".replace(/--whatever it should do--/);

var finalRe = new RegExp(lower.source + "|" + upper.source);



var a = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\.\/:;<=>?@\[\]^_`{|}~]/g;
var b = /(-\s)|(\s-)/g;
var g = /(-[^a-zA-Z\d].)|([^a-zA-Z\d].-)/g;

var finalRe = new RegExp(a.source + "|" + g.source,"g");
var str = "This - is- #! an $ % ^ & * -example ;: {} of a = -_ string- with `~)() -ddd punctu-ation re-enter";
str.replace(finalRe, ' ');
