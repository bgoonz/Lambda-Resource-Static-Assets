# jStringy - JavaScript Library for Text Manipulation
Free Open-Source JavaScript Library for commonly used text functions.<br /><br />
Most functions are chainable.

Use S$ or jStringy to access the available functions. Selectors work similar to jQuuery syntax. Keep in mind that this is a string manipulation library, so we select a string or number variable, NOT a DOM element.<br /><br />
S$("My Text Goes Here") or S$(my_var_that_holds_the_value)

Ex.
```javascript
var mytext = "Text that we would like to use, and then more.";

// jStringy left
S$(mytext).left(3).value() //Returns Tex

// jStringy getWordByNum
S$(mytext).getWordByNum(4).value() // Returns would

// jStringy getWords
S$(mytext).getWords(2,5).value() // Returns that we would like

// jStringy Chained Example
S$(mytext).getWordByNum(4).left(3).right(2).value() // Returns ou

// jStringy proper
S$(mytext).proper().value()
// Returns "Text That We Would Like To Use, And Then More."

S$(mytext).proper(1).value()
// Returns "Text That We Would Like to Use, and Then More."
```


##Setup:

Include jstringy.js file in your project.
Ex.

```html
<script src="jstringy.js"></script>
```
---
---
---

##Usage:
---
**left Function Syntax**

Returns specified number of characters from the left of a text string.

>left([Number of Characters])

```javascript
var mytext = "Text that we would like to use, and then more.";

S$(mytext).left(3).value()
// Returns Tex
```

---

**right Function Syntax**

Returns specified number of characters from the right of a text string.

>**right([Number of Characters])**

```javascript
var mytext = "Text that we would like to use, and then more.";

S$(mytext).right(4).value()
// Returns ore.
```


---

**mid Function Syntax**

Returns specified number of characters from the starting point defined in the middle of a text string.

>**mid([Starting Character],[Number of Characters])**

```javascript
var mytext = "Text that we would like to use, and then more.";

S$(mytext).mid(6,4).value()
// Returns that
```


---

**midd Function Syntax**

Returns characters from the middle of a text string using start and end character number.

>**midd([Start Character],[End Character])**

```javascript
var mytext = "Text that we would like to use, and then more.";

S$(mytext).mid(11,12).value()
// Returns we
```


---

**reversed Function Syntax**

Flips (reverses) the text string.

>**reversed()**

```javascript
var mytext = "Text that we would like to use, and then more.";

S$(mytext).reversed().value()
// Returns .erom neht dna ,esu ot ekil dluow ew taht txeT
```


---

**wordCount Function Syntax**

Gets the wordcount from a string.

>**wordCount()**

```javascript
var mytext = "Text that we would like to use, and then more.";

S$(mytext).wordCount().value()
// Returns 10
```


---

**getWordByNum Function Syntax**

Gets the Nth word from the left by number.

>**getWordByNum([word_number],[type] optional)**

```javascript
var mytext = "Text that we would like to use, and then more.";

S$(mytext).getWordByNum(4).value()
// Returns would

// use 0 for type to flip the count from the right side of the string.
S$(mytext).getWordByNum(2,0).value()
// Returns then

// get the first character of last word
S$(mytext).getWordByNum(1,0).left(1).value()
// Returns then
```


---

**getWords Function Syntax**

Gets a part of initial string by first and last word position.

>**getWords([start_word_number],[end_word_number])**

```javascript
var mytext = "Text that we would like to use, and then more.";

S$(mytext).getWords(2,5).value()
// Returns that we would like
```


---

**BeforeAfter Function Syntax**

Gets a part of initial string before or after the first occurance of a given string.

>**BeforeAfter([character], [return_type] optional, [adjust] optional)**

```javascript
var mytext = "Text that we would like to use, and then more.";


S$(mytext).BeforeAfter(",").value()
// Returns "Text that we would like to use"

S$(mytext).BeforeAfter(",",0).value()
// Returns "Text that we would like to use"

S$(mytext).BeforeAfter(",",1).value()
// Returns " and then more."

S$(mytext).BeforeAfter(", ",1).value()
// Returns "and then more."

S$(mytext).BeforeAfter(",",0,-2).value()
// Returns "Text that we would like to u"

S$(mytext).BeforeAfter(",",1,-1).value()
// Returns ", and then more."

```





---

**trimed Function Syntax**

Removes extra white spaces in the middle, before and after.

>**trimed()**

```javascript
var mytext = " Text that we,  would like to  use, and   then  more.   ";

S$(mytext).trimed().value()
// Returns Text that we, would like to use, and then more.
```


---

**formatDollar Function Syntax**

Converts a number to Dollar currency formatted string.

>**formatDollar([number_of_digits_after_delimiter] optional, [delimiter_string] optional, [thousand_separator_string] optional)**

```javascript
var mynumber = 19654.13;

S$(mynumber).formatDollar().value()
// Returns $19,654.13

S$(mynumber).formatDollar(0).value()
// Returns $19,654

S$(mynumber).formatDollar(2,",",".").value()
// Returns $19.654,13
```




---

**formatNumber Function Syntax**

Converts a number to a formatted string with thousand separator.

>**formatNumber([number_of_digits_after_delimiter] optional, [delimiter_string] optional, [thousand_separator_string] optional)**

```javascript
var mynumber = 19654.13;

S$(mynumber).formatNumber().value()
// Returns 19,654.13

S$(mynumber).formatNumber(0).value()
// Returns 19,654

S$(mynumber).formatNumber(2,",",".").value()
// Returns 19.654,13
```


---

**formatCurrency Function Syntax**

Converts a number to a currency string.

>**formatCurrency([currency_string], [number_of_digits_after_delimiter] optional, [delimiter_string] optional, [thousand_separator_string] optional)**

```javascript
var mynumber = 19654.13;

S$(mynumber).formatCurrency("£").value()
// Returns £19,654.13

S$(mynumber).formatCurrency("USD ").value()
// Returns USD 19,654.13

S$(mynumber).formatCurrency("£", 0).value()
// Returns £19,654

S$(mynumber).formatCurrency("£",2,",",".").value()
// Returns £19.654,13
```



---

**formatPercent Function Syntax**

Converts a fraction number to a formatted percentage string.

>**formatPercent([number_of_digits_after_delimiter] optional, [delimiter_string] optional, [thousand_separator_string] optional)**

```javascript
var mynumber = 0.13214;

S$(mynumber).formatPercent().value()
// Returns 13.21%

S$(mynumber).formatPercent(3).value()
// Returns 13.214%

S$(mynumber).formatPercent(2,"'",".").value()
// Returns 13'21%
```



---

**toDouble Function Syntax**

Converts a currency string or other number formatted string to double.

>**toDouble([decimal_separator] optional)**

```javascript
var mytext = "$15,159.79 USD";

S$(mytext).toDouble().value()
// Returns 15159.79

S$(mytext).toDouble(",").value()
// Returns 15.15979
```





---

**levenshteinDistance Function Syntax**

Caculates Levenshtein Distance between 2 strings.

>**levenshteinDistance([Text_to_Compare as String])**

```javascript
var initialtext = "My New Car";

S$(initialtext).levenshteinDistance("My car new").value()
// Returns 6

S$(initialtext).levenshteinDistance("My Toyota car").value()
// Returns 7

S$(initialtext).levenshteinDistance("My New Car").value()
// Returns 0

S$(initialtext).levenshteinDistance("My Nw Car").value()
// Returns 1

S$(initialtext).levenshteinDistance("Bar Car").value()
// Returns 6

S$(initialtext).levenshteinDistance("your Nw car").value()
// Returns 6
```




---

**bestMatch Function Syntax**

Gets the best match string or index based on Levenshtein Distance.
This function returns an array, due to possibility of having multiple best matches.

>**bestMatch([Array_of_Strings_to_Check],[results_type] optional)**

```javascript
var initialtext = "My New Car";
var myarr = ["My car new", "My Toyota car", "My Nw Car", "Bar Car", "your Nw car", "My Ne Car", "yet one other thing"];

S$(initialtext).bestMatch(myarr).value()
// Returns ["My Nw Car", "My Ne Car"]

// get the first best match
S$(initialtext).bestMatch(myarr).value()[0]
// Returns My Nw Car

// get the index of matches, instead of values.
S$(initialtext).bestMatch(myarr,1).value()
// Returns [2, 5]

////////////////////////////////////////////////
////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

var mymatchArray = S$(initialtext).bestMatch(myarr).value();

// get the first best match
mymatchArray[0] // Returns My Nw Car

// get the next best match
mymatchArray[1] // Returns My Ne Car

// you can find out how many best matches are available
mymatchArray.length //Returns 2


// iterate through all matches
for(var i = 0; i < mymatchArray.length; i++) {
  console.log(mymatchArray[i]);
}
// Returns
//    My Nw Car
//    My Ne Car
```



---

**bestMatchObject Function Syntax**

Creates an Object that contains the best match string or index based on Levenshtein Distance.
This function returns an array, due to possibility of having multiple best matches.

>**bestMatchObject([lookup_array])**

>***Properties:***

> .lookup_array

> .lookup_value

> .array [returns array]

> .arrayIndex [returns array]

> .first

> .firstIndex

> .last

> .lastIndex

> .len

```javascript
var initialtext = "My New Car";
var myarr = ["My car new", "My Toyota car", "My Nw Car", "Bar Car", "your Nw car", "My Ne Car", "yet one other thing"];

var b = S$(initialtext).bestMatchObject(myarr);
// Creates an Object and stores in variable b

//get an array of best matches
b.array
//Returns ["My Nw Car", "My Ne Car"]

//get an array of best matche indexes
b.arrayIndex
//Returns [2, 5]

// get the first best match
b.first
//Returns My Nw Car

// get the first best match index
b.firstIndex
//Returns 2

// get the last best match
b.last
//Returns My Ne Car

// get the last best match index
b.lastIndex
//Returns 5

//get how many best matches are available
b.len
//Returns 2

b.lookup_array
//Returns ["My car new", "My Toyota car", "My Nw Car", "Bar Car", "your Nw car", "My Ne Car", "yet one other thing"]


// iterate through all matches
for(var i = 0; i < b.len; i++) {
  console.log(b.array[i]);
}
// Returns
//    My Nw Car
//    My Ne Car

```
