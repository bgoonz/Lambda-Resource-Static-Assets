/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Ajax.org Code Editor (ACE).
 *
 * The Initial Developer of the Original Code is
 * Ajax.org B.V.
 * Portions created by the Initial Developer are Copyright (C) 2010
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *      Fabian Jakobs <fabian AT ajax DOT org>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

if (typeof process !== "undefined") {
  require("amd-loader");
}

define(function (require, exports, module) {
  "use strict";

  var XmlMode = require("./xml").Mode;
  var assert = require("../test/assertions");

  module.exports = {
    name: "XML Tokenizer",

    setUp: function () {
      this.tokenizer = new XmlMode().getTokenizer();
    },

    "test: tokenize1": function () {
      var line = "<Juhu>//Juhu Kinners</Kinners>";
      var tokens = this.tokenizer.getLineTokens(line, "start").tokens;

      assert.equal(3, tokens.length);
      assert.equal("meta.tag", tokens[0].type);
      assert.equal("text", tokens[1].type);
      assert.equal("meta.tag", tokens[2].type);
    },

    "test: two tags in the same lines should be in separate tokens":
      function () {
        var line = "<Juhu><Kinners>";
        var tokens = this.tokenizer.getLineTokens(line, "start").tokens;

        assert.equal(2, tokens.length);
        assert.equal("meta.tag", tokens[0].type);
        assert.equal("meta.tag", tokens[1].type);

        assert.equal("<Juhu>", tokens[0].value);
        assert.equal("<Kinners>", tokens[1].value);
      },

    "test: multiline attributes": function () {
      var multiLine = ['<copy set="{', '}" undo="{', '}"/>'];

      var state = "start";
      var multiLineTokens = multiLine.map(function (line) {
        var tokens = this.tokenizer.getLineTokens(line, state);
        state = tokens.state;
        return tokens.tokens;
      }, this);

      assert.equal(multiLineTokens[0].length, 5);
      assert.equal(multiLineTokens[1].length, 5);
      assert.equal(multiLineTokens[2].length, 2);

      assert.equal(multiLineTokens[0][4].type, "string");
      assert.equal(multiLineTokens[1][0].type, "string");
      assert.equal(multiLineTokens[1][4].type, "string");
      assert.equal(multiLineTokens[2][0].type, "string");
    },
  };
});

if (typeof module !== "undefined" && module === require.main) {
  require("asyncjs").test.testcase(module.exports).exec();
}
