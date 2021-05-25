;
(function (global) {

    var jStringy = jStringy || {
        version: "0.1.0",
        library: "jStringy - JavaScript Library for Text Manipulation"
    };

    jStringy.left = function (text, num_char) {
        if (num_char == undefined) {
            throw "Number of characters is required!";
        }
        return text.substring(0, num_char);
    }

    jStringy.right = function (txt, numchar) {
        var c = txt.substring(txt.length - numchar, txt.length);
        return c;
    }

    jStringy.midd = function (txt, startchar, endchar) {
        var c = txt.substring(startchar - 1, endchar);
        return c;
    }

    jStringy.mid = function (txt, startchar, numchar) {
        var c = txt.substring(startchar - 1, startchar - 1 + numchar);
        return c;
    }

    jStringy.reversed = function (s) {
        for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) {}
        return o;
    }

    jStringy.wordcount = function (txt) {
        var newtxt = txt.replace(/,|\.|\:|\;|\?|\!|\(|\)/g, " ");
        newtxt = newtxt.replace(/ +/g, " ");
        newtxt = newtxt.trim();
        newtxt = newtxt.split(" ");
        return newtxt.length;
    }

    jStringy.trimed = function (txt) {
        return txt.replace(/ +/g, " ").trim();
    }




    jStringy.getWordByNum = function (txt, word_number) {
        var text = jStringy.trimed(txt);
        var dateArr = text.split(" ");
        return dateArr[word_number - 1];
    }

    jStringy.getLastWordByNum = function (txt, word_number) {
        var text = jStringy.trimed(txt);
        var dateArr = text.split(" ");
        return dateArr[dateArr.length - word_number];
    }

    jStringy.getWords = function (txt, start_word_number, end_word_number) {
        var text = jStringy.trimed(txt);
        var strArray = txt.split(" ");
        var nArr = [];
        var n = 0;
        for (i = start_word_number - 1; i < end_word_number; i++) {
            nArr[n] = strArray[i];
            n++;
        }
        return jStringy.trimed(nArr.join(" "));
    }



    jStringy.containsword = function (wordtofind, wheretofind) {
        var nwheretofind = (" " + wheretofind + " ").toLowerCase();
        var nwordtofind = (" " + wordtofind + " ").toLowerCase();
        nwheretofind = nwheretofind.replace(/,|\.|\:|\;|\?|\!|\(|\)/g, " ");
        if (nwheretofind.indexOf(nwordtofind) >= 0) {
            return true;
        } else {
            return false;
        }
    }


    jStringy.repeat = function (txt, numtimes) {
        var ttxt = txt;
        for (i = 1; i < numtimes; i++) {
            txt += ttxt
        }
        return txt;
    }


    jStringy.formatMain = function (num, cur, c, d, t, endstr) {
        var n = num,
            c = isNaN(c = Math.abs(c)) ? 2 : c,
            d = d == undefined ? "." : d,
            t = t == undefined ? "," : t,
            s = n < 0 ? "-" : "",
            i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;
        return cur + s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "") + endstr;
    }


    jStringy.formatCurrency = function (num, cur, c, d, t) {
        return jStringy.formatMain(num, cur, c, d, t, "");
    }

    jStringy.formatPercent = function (num, c, d, t) {
        return jStringy.formatMain(num * 100, "", c, d, t, "%");
    }

    jStringy.formatNumber = function (num, c, d, t) {
        return jStringy.formatMain(num, "", c, d, t, "");
    }

    jStringy.formatDollar = function (num, c, d, t) {
        return jStringy.formatMain(num, "$", c, d, t, "");
    }
    
    
    jStringy.toDouble = function (txt, decimal) {
        decimal = decimal == undefined ? "." : decimal;

        // from accounting.js
        // https://raw.githubusercontent.com/openexchangerates/accounting.js/master/accounting.js

        var regex = new RegExp("[^0-9-" + decimal + "]", ["g"]),
        unformatted = parseFloat(
            ("" + txt)
            .replace(/\((.*)\)/, "-$1") // replace bracketed values with negatives
            .replace(regex, '') // strip out any cruft
            .replace(decimal, '.') // make sure decimal point is standard
        );
        return unformatted;
    }
    
    
        /*
    Levenshtein Distance
    Based on Andrei Mackenzie's Code
    */
    jStringy.levenshteinDistance = function (a, b) {
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
    
        return matrix[b.length][a.length];
    }
    // END levenshteinDistance



    /*
    Gets the best match string or index based on Levenshtein Distance. This function returns an array, due to possibility of having multiple best matches.
    */
    jStringy.bestMatch = function (txt, lookup_array, results_type) {
        var arrmatch = [lookup_array[0]];
        var arrindex = ["N/A"];
        var matchnum = jStringy.levenshteinDistance(txt, lookup_array[0]);
        results_type = results_type == undefined ? 0 : results_type;
    
        for (var i = 0; i < lookup_array.length; i++) {
            if (jStringy.levenshteinDistance(txt, lookup_array[i]) < matchnum) {
                matchnum = jStringy.levenshteinDistance(txt, lookup_array[i]);
                arrmatch = [];
                arrindex = [];
                arrmatch[0] = lookup_array[i];
                arrindex[0] = i;
            } else if (jStringy.levenshteinDistance(txt, lookup_array[i]) == matchnum) {
                arrmatch[arrmatch.length] = lookup_array[i];
                arrindex[arrindex.length] = i;
            }
        }
        if (results_type == 0) {
            return arrmatch;
        } else {
            return arrindex;
        }
    }
    // END bestMatch


    // convert to Object

    jStringy.bestMatchObject = function (lookup_value, lookup_array) {
    
        this.lookup_array = lookup_array;
        this.lookup_value = lookup_value;
        this.array = jStringy.bestMatch(this.lookup_value,this.lookup_array);
        this.arrayIndex = jStringy.bestMatch(this.lookup_value,this.lookup_array,1);
        this.first = this.array[0];
        this.firstIndex = this.arrayIndex[0];
        this.len = this.array.length;
        this.last = this.array[this.array.length-1];
        this.lastIndex = this.arrayIndex[this.array.length-1];    
    
    }
    // END bestMatchObject


    global.jStringy = global.S$ = jStringy;

}(window));
