;
(function (global) {

    var jInit = function (text) {
        if (text == undefined) {
            throw "Please include a valid parameter inside parenthesis.";
        }
        this.text = text;
        this.val = text;
    }

    var jIn = function (text) {
        return new jInit(text);
    }

    var jStringy = jStringy || jIn;

    jInit.prototype.valueOf = function () {
        return this.val;
    }
    jInit.prototype.toString = function () {
        return this.val;
    }


    jInit.prototype.value = function () {
        return this.val;
    }

    jInit.prototype.left = function (num_char) {
        if (num_char == undefined) {
            throw "Number of characters is required!";
        }
        this.val = this.val.substring(0, num_char);
        return this;
    }

    jInit.prototype.right = function (numchar) {
        if (numchar == undefined) {
            throw "Number of characters is required!";
        }
        this.val = this.val.substring(this.val.length - numchar, this.val.length);
        return this;
    }

    jInit.prototype.midd = function (startchar, endchar) {
        this.val = this.val.substring(startchar - 1, endchar);
        return this;
    }

    jInit.prototype.mid = function (startchar, numchar) {
        this.val = this.val.substring(startchar - 1, startchar - 1 + numchar);
        return this;
    }

    jInit.prototype.BeforeAfter = function (character, return_type, adjust) {
        adjust = adjust == undefined ? 0 : adjust;
        return_type = return_type == undefined ? 0 : return_type;
        var len = character.length;
        var pos = this.val.indexOf(character) + len + 1 + adjust;

        // 0 for Before
        if (return_type == 0) {
            this.val = jStringy(this.val).midd(1, pos - len - 1).val;
        } else {
            var len = this.val.length;
            this.val = jStringy(this.val).midd(pos, len).val;
        }
        return this;
    }



    // private reverse function
    // by Mathias Bynens <https://mathiasbynens.be/>
    // https://github.com/mathiasbynens/esrever
    var reverse = function (string) {

        var regexSymbolWithCombiningMarks = /([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g;
        var regexSurrogatePair = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;
        // Step 1: deal with combining marks and astral symbols (surrogate pairs)
        // Swap symbols with their combining marks so the combining marks go first
        string = string.replace(regexSymbolWithCombiningMarks, function ($0, $1, $2) {
                // Reverse the combining marks so they will end up in the same order
                // later on (after another round of reversing)
                return reverse($2) + $1;
            })
            // Swap high and low surrogates so the low surrogates go first
            .replace(regexSurrogatePair, '$2$1');
        // Step 2: reverse the code units in the string
        var result = '';
        var index = string.length;
        while (index--) {
            result += string.charAt(index);
        }
        return result;
    };

    // END private reverse function


    jInit.prototype.reversed = function () {
        this.val = reverse(this.val);
        return this;
    }

    jInit.prototype.wordCount = function () {
        var newtxt = this.val.replace(/,|\.|\:|\;|\?|\!|\(|\)/g, " ");
        newtxt = jStringy(newtxt).trimed().val;
        newtxt = newtxt.split(" ");
        this.val = newtxt.length;
        return this;
    }

    jInit.prototype.trimed = function () {
        this.val = this.val.replace(/ +/g, " ").trim();
        return this;
    }


    jInit.prototype.proper = function (type) {
        // based on David Gouch's code
        var txt = this.val;
        var web = /[A-Z]|\../;
        if (type == 1) {
            var t = /^(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|vs?\.?|via)$/i;
        } else if (type == 2) {
            var t = /^(a|an|the|to|for|on|of|in)$/i;
        } else if (type == 3) {
            var t = /^(a|an|the)$/i;
        } else {
            var t = /^()$/i;
            web = "Abs&&$$olper&&*%jhghjfddsg45654737egffdgd@hgfh";
        }
        this.val = txt.replace(/([^\W_]+[^\s-]*) */g, function (txt, n, r, i) {
            return r > 0 && r + n.length !== i.length && n.search(t) > -1 && i.charAt(r - 2) !== ":" && i.charAt(r - 1).search(/[^\s-]/) < 0 ? txt.toLowerCase() : n.substr(1).search(web) > -1 ? txt : txt.charAt(0).toUpperCase() + txt.substr(1)
        })
        return this;
    };


    jInit.prototype.getWordByNum = function (word_number, type) {
        var text = jStringy(this.val).trimed().val;
        var dateArr = text.split(" ");
        // 0 to count from the right end
        if (type == 0) {
            this.val = dateArr[dateArr.length - word_number];
        } else {
            this.val = dateArr[word_number - 1];
        }
        return this;
    }

    jInit.prototype.getWords = function (start_word_number, end_word_number) {
        var text = jStringy(this.val).trimed().val;
        var strArray = text.split(" ");
        var nArr = [];
        var n = 0;
        for (i = start_word_number - 1; i < end_word_number; i++) {
            nArr[n] = strArray[i];
            n++;
        }
        this.val = jStringy(nArr.join(" ")).trimed().val;
        return this;
    }

    jInit.prototype.containsWord = function (wordtofind) {
        var nwheretofind = (" " + this.val + " ").toLowerCase();
        var nwordtofind = (" " + wordtofind + " ").toLowerCase();
        nwheretofind = nwheretofind.replace(/,|\.|\:|\;|\?|\!|\(|\)/g, " ");
        if (nwheretofind.indexOf(nwordtofind) >= 0) {
            this.val = true;
        } else {
            this.val = false;
        }
        return this;
    }

    jInit.prototype.repeat = function (numtimes) {
        var ttxt = this.val;
        for (i = 1; i < numtimes; i++) {
            this.val += ttxt
        }
        return this;
    }


    // Main private number format function
    var formatMain = function (num, cur, c, d, t, endstr) {
            var n = num,
                c = isNaN(c = Math.abs(c)) ? 2 : c,
                d = d == undefined ? "." : d,
                t = t == undefined ? "," : t,
                s = n < 0 ? "-" : "",
                i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
                j = (j = i.length) > 3 ? j % 3 : 0;
            return cur + s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "") + endstr;
        }
        // END Main private number format function

    jInit.prototype.formatCurrency = function (cur, c, d, t) {
        this.val = formatMain(this.val, cur, c, d, t, "");
        return this;
    }

    jInit.prototype.formatPercent = function (c, d, t) {
        this.val = formatMain(this.val * 100, "", c, d, t, "%");
        return this;
    }

    jInit.prototype.formatNumber = function (c, d, t) {
        this.val = formatMain(this.val, "", c, d, t, "");
        return this;
    }

    jInit.prototype.formatDollar = function (c, d, t) {
        this.val = formatMain(this.val, "$", c, d, t, "");
        return this;
    }

    jInit.prototype.toDouble = function (decimal) {
        decimal = decimal == undefined ? "." : decimal;

        // from accounting.js
        // https://raw.githubusercontent.com/openexchangerates/accounting.js/master/accounting.js

        var regex = new RegExp("[^0-9-" + decimal + "]", ["g"]),
            unformatted = parseFloat(
                ("" + this.val)
                .replace(/\((.*)\)/, "-$1") // replace bracketed values with negatives
                .replace(regex, '') // strip out any cruft
                .replace(decimal, '.') // make sure decimal point is standard
            );
        this.val = unformatted;
        return this;
    }





    /*
    Levenshtein Distance
    Based on Andrei Mackenzie's Code
    */
    jInit.prototype.levenshteinDistance = function (b) {
            var a = this.val;
            if (a.length == 0) return b.length;
            if (b.length == 0) return a.length;

            var matrix = [];

            // increment along the first column of each row
            var i;
            for (i = 0; i <= b.length; i++) {
                matrix[i] = [i];
            }

            // increment each column in the first row
            var j;
            for (j = 0; j <= a.length; j++) {
                matrix[0][j] = j;
            }

            // Fill in the rest of the matrix
            for (i = 1; i <= b.length; i++) {
                for (j = 1; j <= a.length; j++) {
                    if (b.charAt(i - 1) == a.charAt(j - 1)) {
                        matrix[i][j] = matrix[i - 1][j - 1];
                    } else {
                        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // substitution
                            Math.min(matrix[i][j - 1] + 1, // insertion
                                matrix[i - 1][j] + 1)); // deletion
                    }
                }
            }

            this.val = matrix[b.length][a.length];
            return this;
        }
        // END levenshteinDistance





    /*
    Gets the best match string or index based on Levenshtein Distance. This function returns an array, due to possibility of having multiple best matches.
    */
    jInit.prototype.bestMatch = function (lookup_array, results_type) {
            var txt = this.val;
            var arrmatch = [lookup_array[0]];
            var arrindex = ["N/A"];
            var matchnum = jStringy(txt).levenshteinDistance(lookup_array[0]).val;
            results_type = results_type == undefined ? 0 : results_type;

            for (var i = 0; i < lookup_array.length; i++) {
                if (jStringy(txt).levenshteinDistance(lookup_array[i]).val < matchnum) {
                    matchnum = jStringy(txt).levenshteinDistance(lookup_array[i]).val;
                    arrmatch = [];
                    arrindex = [];
                    arrmatch[0] = lookup_array[i];
                    arrindex[0] = i;
                } else if (jStringy(txt).levenshteinDistance(lookup_array[i]).val == matchnum) {
                    arrmatch[arrmatch.length] = lookup_array[i];
                    arrindex[arrindex.length] = i;
                }
            }
            if (results_type == 0) {
                this.val = arrmatch;
            } else {
                this.val = arrindex;
            }
            return this;
        }
        // END bestMatch


    // convert to Object

    jInit.prototype.bestMatchObject = function (lookup_array) {

            this.lookup_array = lookup_array;
            this.lookup_value = this.val;
            this.array = jStringy(this.lookup_value).bestMatch(this.lookup_array).val;
            this.arrayIndex = jStringy(this.lookup_value).bestMatch(this.lookup_array, 1).val;
            this.first = this.array[0];
            this.firstIndex = this.arrayIndex[0];
            this.len = this.array.length;
            this.last = this.array[this.array.length - 1];
            this.lastIndex = this.arrayIndex[this.array.length - 1];
            return this;

        }
        // END bestMatchObject



    var popula = function (texto, ind, filter_array, override, type) {
        type = type == undefined ? 0 : type;
        override = override == undefined ? 0 : override;
        var str = texto.replace(/,|\.|\:|\;|\?|\!|\(|\)/g, " ");
        str = str.toLowerCase();
        var cominwords = ['of', 'the', 'in', 'on', 'at', 'to', 'a', 'is', 'an', 'for', 'and', 'or', 'as', 'are', 'am'];
        var comwords = [];

        if (filter_array != undefined && override == 0) {
            comwords = cominwords.concat(filter_array);
        } else if (filter_array != undefined) {
            comwords = filter_array;
        } else if (override == 0) {
            comwords = cominwords;
        }

        var re = new RegExp('\\b(' + comwords.join('|') + ')\\b', 'g');
        str = (str || '').replace(re, '').replace(/[ ]{2,}/, ' ');
        str = jStringy(str).trimed().val;

        var arr = str.split(" ").sort();
        var resarr = [[1, arr[0]]];
        var n = 0;
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] == resarr[n][1]) {
                resarr[n][0]++;
            } else {
                var nxt = arr[i];
                resarr.push([1, nxt]);
                n++;
            }
        }
        // sort decending by column 2. Switch 1 and -1 for asc.

        function dsd(a, b) {
            if (a[1] === b[1]) {
                return 0;
            } else {
                return (a[1] < b[1]) ? 1 : -1;
            }
        }

        function dsdF(a, b) {
            if (a[0] === b[0]) {
                return 0;
            } else {
                return (a[0] < b[0]) ? 1 : -1;
            }
        }

        // resarr is now an array with all words with their counts.
        // resarr[0][0] holds the count, resarr[0][1] holds the word.
        resarr.sort(dsdF);

        //remove text column from the array and assign to a new variable
        var uresarr = resarr.map(function (val) {
            return val.slice(0, -1);
        });

        uresarr.sort();

        var newarr = [uresarr[0][0]];

        for (var i = 1; i < uresarr.length; i++) {

            if (uresarr[i][0] !== uresarr[i - 1][0]) {
                newarr.push(uresarr[i][0]);
            }

        }

        // newarr is now a list of counts in descending order.
        newarr.sort(function (a, b) {
            return b - a
        });

        var methodarr = [];

        for (var i = 0; i < resarr.length; i++) {
            if (resarr[i][0] == newarr[ind - 1]) {
                methodarr.push(resarr[i][1]);
            }
        }
        methodarr.sort();

        if (type == 0) {
            return methodarr;
        } else {
            return newarr[ind - 1];
        }

    }

    // convert popular to Object

    jInit.prototype.popular = function (ind, filter_array, override) {
            this.array = popula(this.val, ind, filter_array, override, 0);
            this.count = popula(this.val, ind, filter_array, override, 1);
            this.first = this.array[0];
            this.len = this.array.length;
            this.last = this.array[this.array.length - 1];
            return this;
        }
        // END popular Object


    global.jStringy = global.S$ = jStringy;

    return this;

}(window));
