/*
 * Copyright 2005, 2006, 2007 Florian Schmitz
 *
 * This file is part of CSSTidy.
 *
 *  CSSTidy is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation; either version 2.1 of the License, or
 *   (at your option) any later version.
 *
 *   CSSTidy is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Lesser General Public License for more details.
 * 
 *   You should have received a copy of the GNU Lesser General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

#include "csspp_globals.hpp"

map<string,bool> settings;
map< string, vector<string> > shorthands;
map<string,string> background_prop_default,replace_colors,all_properties;
vector<string> unit_values,color_values;
map<string,parse_status> at_rules;

void prepare()
{
    unit_values.push_back("background");
    unit_values.push_back("background-position");
    unit_values.push_back("border");
    unit_values.push_back("border-top");
    unit_values.push_back("border-right");
    unit_values.push_back("border-bottom");
    unit_values.push_back("border-left");
    unit_values.push_back("border-width");
    unit_values.push_back("border-top-width");
    unit_values.push_back("border-right-width");
    unit_values.push_back("border-left-width");
    unit_values.push_back("border-bottom-width");
    unit_values.push_back("bottom");
    unit_values.push_back("border-spacing");
    unit_values.push_back("font-size");
    unit_values.push_back("height");
    unit_values.push_back("left");
    unit_values.push_back("margin");
    unit_values.push_back("margin-top");
    unit_values.push_back("margin-right");
    unit_values.push_back("margin-bottom");
    unit_values.push_back("margin-left");
    unit_values.push_back("max-height");
    unit_values.push_back("max-width");
    unit_values.push_back("min-height");
    unit_values.push_back("min-width");
    unit_values.push_back("outline-width");
    unit_values.push_back("padding");
    unit_values.push_back("padding-top");
    unit_values.push_back("padding-right");
    unit_values.push_back("padding-bottom");
    unit_values.push_back("padding-left");
    unit_values.push_back("position");
    unit_values.push_back("right");
    unit_values.push_back("top");
    unit_values.push_back("text-indent");
    unit_values.push_back("letter-spacing");
    unit_values.push_back("word-spacing");
    unit_values.push_back("width");

	color_values.push_back("color");
	color_values.push_back("background-color");
	color_values.push_back("border-color");
	color_values.push_back("border-top-color");
	color_values.push_back("border-right-color");
	color_values.push_back("border-bottom-color");
	color_values.push_back("border-left-color");
	color_values.push_back("border-color");
	color_values.push_back("color");
	color_values.push_back("outline-color");

	replace_colors["aliceblue"] = "#F0F8FF";
	replace_colors["antiquewhite"] = "#FAEBD7";
	replace_colors["aquamarine"] = "#7FFFD4";
	replace_colors["azure"] = "#F0FFFF";
	replace_colors["beige"] = "#F5F5DC";
	replace_colors["bisque"] = "#FFE4C4";
	replace_colors["blanchedalmond"] = "#FFEBCD";
	replace_colors["blueviolet"] = "#8A2BE2";
	replace_colors["brown"] = "#A52A2A";
	replace_colors["burlywood"] = "#DEB887";
	replace_colors["cadetblue"] = "#5F9EA0";
	replace_colors["chartreuse"] = "#7FFF00";
	replace_colors["chocolate"] = "#D2691E";
	replace_colors["coral"] = "#FF7F50";
	replace_colors["cornflowerblue"] = "#6495ED";
	replace_colors["cornsilk"] = "#FFF8DC";
	replace_colors["crimson"] = "#DC143C";
	replace_colors["cyan"] = "#00FFFF";
	replace_colors["darkblue"] = "#00008B";
	replace_colors["darkcyan"] = "#008B8B";
	replace_colors["darkgoldenrod"] = "#B8860B";
	replace_colors["darkgray"] = "#A9A9A9";
	replace_colors["darkgreen"] = "#006400";
	replace_colors["darkkhaki"] = "#BDB76B";
	replace_colors["darkmagenta"] = "#8B008B";
	replace_colors["darkolivegreen"] = "#556B2F";
	replace_colors["darkorange"] = "#FF8C00";
	replace_colors["darkorchid"] = "#9932CC";
	replace_colors["darkred"] = "#8B0000";
	replace_colors["darksalmon"] = "#E9967A";
	replace_colors["darkseagreen"] = "#8FBC8F";
	replace_colors["darkslateblue"] = "#483D8B";
	replace_colors["darkslategray"] = "#2F4F4F";
	replace_colors["darkturquoise"] = "#00CED1";
	replace_colors["darkviolet"] = "#9400D3";
	replace_colors["deeppink"] = "#FF1493";
	replace_colors["deepskyblue"] = "#00BFFF";
	replace_colors["dimgray"] = "#696969";
	replace_colors["dodgerblue"] = "#1E90FF";
	replace_colors["feldspar"] = "#D19275";
	replace_colors["firebrick"] = "#B22222";
	replace_colors["floralwhite"] = "#FFFAF0";
	replace_colors["forestgreen"] = "#228B22";
	replace_colors["gainsboro"] = "#DCDCDC";
	replace_colors["ghostwhite"] = "#F8F8FF";
	replace_colors["gold"] = "#FFD700";
	replace_colors["goldenrod"] = "#DAA520";
	replace_colors["greenyellow"] = "#ADFF2F";
	replace_colors["honeydew"] = "#F0FFF0";
	replace_colors["hotpink"] = "#FF69B4";
	replace_colors["indianred"] = "#CD5C5C";
	replace_colors["indigo"] = "#4B0082";
	replace_colors["ivory"] = "#FFFFF0";
	replace_colors["khaki"] = "#F0E68C";
	replace_colors["lavender"] = "#E6E6FA";
	replace_colors["lavenderblush"] = "#FFF0F5";
	replace_colors["lawngreen"] = "#7CFC00";
	replace_colors["lemonchiffon"] = "#FFFACD";
	replace_colors["lightblue"] = "#ADD8E6";
	replace_colors["lightcoral"] = "#F08080";
	replace_colors["lightcyan"] = "#E0FFFF";
	replace_colors["lightgoldenrodyellow"] = "#FAFAD2";
	replace_colors["lightgrey"] = "#D3D3D3";
	replace_colors["lightgreen"] = "#90EE90";
	replace_colors["lightpink"] = "#FFB6C1";
	replace_colors["lightsalmon"] = "#FFA07A";
	replace_colors["lightseagreen"] = "#20B2AA";
	replace_colors["lightskyblue"] = "#87CEFA";
	replace_colors["lightslateblue"] = "#8470FF";
	replace_colors["lightslategray"] = "#778899";
	replace_colors["lightsteelblue"] = "#B0C4DE";
	replace_colors["lightyellow"] = "#FFFFE0";
	replace_colors["limegreen"] = "#32CD32";
	replace_colors["linen"] = "#FAF0E6";
	replace_colors["magenta"] = "#FF00FF";
	replace_colors["mediumaquamarine"] = "#66CDAA";
	replace_colors["mediumblue"] = "#0000CD";
	replace_colors["mediumorchid"] = "#BA55D3";
	replace_colors["mediumpurple"] = "#9370D8";
	replace_colors["mediumseagreen"] = "#3CB371";
	replace_colors["mediumslateblue"] = "#7B68EE";
	replace_colors["mediumspringgreen"] = "#00FA9A";
	replace_colors["mediumturquoise"] = "#48D1CC";
	replace_colors["mediumvioletred"] = "#C71585";
	replace_colors["midnightblue"] = "#191970";
	replace_colors["mintcream"] = "#F5FFFA";
	replace_colors["mistyrose"] = "#FFE4E1";
	replace_colors["moccasin"] = "#FFE4B5";
	replace_colors["navajowhite"] = "#FFDEAD";
	replace_colors["oldlace"] = "#FDF5E6";
	replace_colors["olivedrab"] = "#6B8E23";
	replace_colors["orangered"] = "#FF4500";
	replace_colors["orchid"] = "#DA70D6";
	replace_colors["palegoldenrod"] = "#EEE8AA";
	replace_colors["palegreen"] = "#98FB98";
	replace_colors["paleturquoise"] = "#AFEEEE";
	replace_colors["palevioletred"] = "#D87093";
	replace_colors["papayawhip"] = "#FFEFD5";
	replace_colors["peachpuff"] = "#FFDAB9";
	replace_colors["peru"] = "#CD853F";
	replace_colors["pink"] = "#FFC0CB";
	replace_colors["plum"] = "#DDA0DD";
	replace_colors["powderblue"] = "#B0E0E6";
	replace_colors["rosybrown"] = "#BC8F8F";
	replace_colors["royalblue"] = "#4169E1";
	replace_colors["saddlebrown"] = "#8B4513";
	replace_colors["salmon"] = "#FA8072";
	replace_colors["sandybrown"] = "#F4A460";
	replace_colors["seagreen"] = "#2E8B57";
	replace_colors["seashell"] = "#FFF5EE";
	replace_colors["sienna"] = "#A0522D";
	replace_colors["skyblue"] = "#87CEEB";
	replace_colors["slateblue"] = "#6A5ACD";
	replace_colors["slategray"] = "#708090";
	replace_colors["snow"] = "#FFFAFA";
	replace_colors["springgreen"] = "#00FF7F";
	replace_colors["steelblue"] = "#4682B4";
	replace_colors["tan"] = "#D2B48C";
	replace_colors["thistle"] = "#D8BFD8";
	replace_colors["tomato"] = "#FF6347";
	replace_colors["turquoise"] = "#40E0D0";
	replace_colors["violet"] = "#EE82EE";
	replace_colors["violetred"] = "#D02090";
	replace_colors["wheat"] = "#F5DEB3";
	replace_colors["whitesmoke"] = "#F5F5F5";
	replace_colors["yellowgreen"] = "#9ACD32";

	shorthands["border-color"].push_back("border-top-color");
	shorthands["border-color"].push_back("border-right-color");
	shorthands["border-color"].push_back("border-bottom-color");
	shorthands["border-color"].push_back("border-left-color");
	shorthands["border-style"].push_back("border-top-style");
	shorthands["border-style"].push_back("border-right-style");
	shorthands["border-style"].push_back("border-bottom-style");
	shorthands["border-style"].push_back("border-left-style");
	shorthands["border-width"].push_back("border-top-width");
	shorthands["border-width"].push_back("border-right-width");
	shorthands["border-width"].push_back("border-bottom-width");
	shorthands["border-width"].push_back("border-left-width");
	shorthands["margin"].push_back("margin-top");
	shorthands["margin"].push_back("margin-right");
	shorthands["margin"].push_back("margin-bottom");
	shorthands["margin"].push_back("margin-left");
	shorthands["padding"].push_back("padding-top");
	shorthands["padding"].push_back("padding-right");
	shorthands["padding"].push_back("padding-bottom");
	shorthands["padding"].push_back("padding-left");
	shorthands["-moz-border-radius"].push_back("0");
	all_properties["alignment-adjust"] = "CSS3.0";
	all_properties["alignment-baseline"] = "CSS3.0";
	all_properties["animation"] = "CSS3.0";
	all_properties["animation-delay"] = "CSS3.0";
	all_properties["animation-direction"] = "CSS3.0";
	all_properties["animation-duration"] = "CSS3.0";
	all_properties["animation-iteration-count"] = "CSS3.0";
	all_properties["animation-name"] = "CSS3.0";
	all_properties["animation-play-state"] = "CSS3.0";
	all_properties["animation-timing-function"] = "CSS3.0";
	all_properties["appearance"] = "CSS3.0";
	all_properties["azimuth"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["backface-visibility"] = "CSS3.0";
	all_properties["background"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["background-attachment"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["background-clip"] = "CSS3.0";
	all_properties["background-color"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["background-image"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["background-origin"] = "CSS3.0";
	all_properties["background-position"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["background-repeat"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["background-size"] = "CSS3.0";
	all_properties["baseline-shift"] = "CSS3.0";
	all_properties["binding"] = "CSS3.0";
	all_properties["bleed"] = "CSS3.0";
	all_properties["bookmark-label"] = "CSS3.0";
	all_properties["bookmark-level"] = "CSS3.0";
	all_properties["bookmark-state"] = "CSS3.0";
	all_properties["bookmark-target"] = "CSS3.0";
	all_properties["border"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["border-bottom"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["border-bottom-color"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["border-bottom-left-radius"] = "CSS3.0";
	all_properties["border-bottom-right-radius"] = "CSS3.0";
	all_properties["border-bottom-style"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["border-bottom-width"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["border-collapse"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["border-color"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["border-image"] = "CSS3.0";
	all_properties["border-image-outset"] = "CSS3.0";
	all_properties["border-image-repeat"] = "CSS3.0";
	all_properties["border-image-slice"] = "CSS3.0";
	all_properties["border-image-source"] = "CSS3.0";
	all_properties["border-image-width"] = "CSS3.0";
	all_properties["border-left"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["border-left-color"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["border-left-style"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["border-left-width"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["border-radius"] = "CSS3.0";
	all_properties["border-right"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["border-right-color"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["border-right-style"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["border-right-width"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["border-spacing"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["border-style"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["border-top"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["border-top-color"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["border-top-left-radius"] = "CSS3.0";
	all_properties["border-top-right-radius"] = "CSS3.0";
	all_properties["border-top-style"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["border-top-width"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["border-width"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["bottom"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["box-decoration-break"] = "CSS3.0";
	all_properties["box-shadow"] = "CSS3.0";
	all_properties["box-sizing"] = "CSS3.0";
	all_properties["break-after"] = "CSS3.0";
	all_properties["break-before"] = "CSS3.0";
	all_properties["break-inside"] = "CSS3.0";
	all_properties["caption-side"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["clear"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["clip"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["color"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["color-profile"] = "CSS3.0";
	all_properties["column-count"] = "CSS3.0";
	all_properties["column-fill"] = "CSS3.0";
	all_properties["column-gap"] = "CSS3.0";
	all_properties["column-rule"] = "CSS3.0";
	all_properties["column-rule-color"] = "CSS3.0";
	all_properties["column-rule-style"] = "CSS3.0";
	all_properties["column-rule-width"] = "CSS3.0";
	all_properties["column-span"] = "CSS3.0";
	all_properties["column-width"] = "CSS3.0";
	all_properties["columns"] = "CSS3.0";
	all_properties["content"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["counter-increment"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["counter-reset"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["crop"] = "CSS3.0";
	all_properties["cue"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["cue-after"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["cue-before"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["cursor"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["direction"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["display"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["dominant-baseline"] = "CSS3.0";
	all_properties["drop-initial-after-adjust"] = "CSS3.0";
	all_properties["drop-initial-after-align"] = "CSS3.0";
	all_properties["drop-initial-before-adjust"] = "CSS3.0";
	all_properties["drop-initial-before-align"] = "CSS3.0";
	all_properties["drop-initial-size"] = "CSS3.0";
	all_properties["drop-initial-value"] = "CSS3.0";
	all_properties["elevation"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["empty-cells"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["fit"] = "CSS3.0";
	all_properties["fit-position"] = "CSS3.0";
	all_properties["flex-align"] = "CSS3.0";
	all_properties["flex-flow"] = "CSS3.0";
	all_properties["flex-line-pack"] = "CSS3.0";
	all_properties["flex-order"] = "CSS3.0";
	all_properties["flex-pack"] = "CSS3.0";
	all_properties["float"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["float-offset"] = "CSS3.0";
	all_properties["font"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["font-family"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["font-format"] = "CSS3.0";
	all_properties["font-size"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["font-size-adjust"] = "CSS2.0,CSS3.0";
	all_properties["font-stretch"] = "CSS2.0,CSS3.0";
	all_properties["font-style"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["font-variant"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["font-weight"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["grid-columns"] = "CSS3.0";
	all_properties["grid-rows"] = "CSS3.0";
	all_properties["hanging-punctuation"] = "CSS3.0";
	all_properties["height"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["hyphenate-after"] = "CSS3.0";
	all_properties["hyphenate-before"] = "CSS3.0";
	all_properties["hyphenate-character"] = "CSS3.0";
	all_properties["hyphenate-lines"] = "CSS3.0";
	all_properties["hyphenate-resource"] = "CSS3.0";
	all_properties["hyphens"] = "CSS3.0";
	all_properties["icon"] = "CSS3.0";
	all_properties["image-orientation"] = "CSS3.0";
	all_properties["image-rendering"] = "CSS3.0";
	all_properties["image-resolution"] = "CSS3.0";
	all_properties["inline-box-align"] = "CSS3.0";
	all_properties["left"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["letter-spacing"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["line-break"] = "CSS3.0";
	all_properties["line-height"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["line-stacking"] = "CSS3.0";
	all_properties["line-stacking-ruby"] = "CSS3.0";
	all_properties["line-stacking-shift"] = "CSS3.0";
	all_properties["line-stacking-strategy"] = "CSS3.0";
	all_properties["list-style"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["list-style-image"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["list-style-position"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["list-style-type"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["margin"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["margin-bottom"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["margin-left"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["margin-right"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["margin-top"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["marker-offset"] = "CSS2.0,CSS3.0";
	all_properties["marks"] = "CSS2.0,CSS3.0";
	all_properties["marquee-direction"] = "CSS3.0";
	all_properties["marquee-loop"] = "CSS3.0";
	all_properties["marquee-play-count"] = "CSS3.0";
	all_properties["marquee-speed"] = "CSS3.0";
	all_properties["marquee-style"] = "CSS3.0";
	all_properties["max-height"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["max-width"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["min-height"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["min-width"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["move-to"] = "CSS3.0";
	all_properties["nav-down"] = "CSS3.0";
	all_properties["nav-index"] = "CSS3.0";
	all_properties["nav-left"] = "CSS3.0";
	all_properties["nav-right"] = "CSS3.0";
	all_properties["nav-up"] = "CSS3.0";
	all_properties["opacity"] = "CSS3.0";
	all_properties["orphans"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["outline"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["outline-color"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["outline-offset"] = "CSS3.0";
	all_properties["outline-style"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["outline-width"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["overflow"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["overflow-style"] = "CSS3.0";
	all_properties["overflow-wrap"] = "CSS3.0";
	all_properties["overflow-x"] = "CSS3.0";
	all_properties["overflow-y"] = "CSS3.0";
	all_properties["padding"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["padding-bottom"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["padding-left"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["padding-right"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["padding-top"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["page"] = "CSS2.0,CSS3.0";
	all_properties["page-break-after"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["page-break-before"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["page-break-inside"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["page-policy"] = "CSS3.0";
	all_properties["pause"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["pause-after"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["pause-before"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["perspective"] = "CSS3.0";
	all_properties["perspective-origin"] = "CSS3.0";
	all_properties["phonemes"] = "CSS3.0";
	all_properties["pitch"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["pitch-range"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["play-during"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["position"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["presentation-level"] = "CSS3.0";
	all_properties["punctuation-trim"] = "CSS3.0";
	all_properties["quotes"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["rendering-intent"] = "CSS3.0";
	all_properties["resize"] = "CSS3.0";
	all_properties["rest"] = "CSS3.0";
	all_properties["rest-after"] = "CSS3.0";
	all_properties["rest-before"] = "CSS3.0";
	all_properties["richness"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["right"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["rotation"] = "CSS3.0";
	all_properties["rotation-point"] = "CSS3.0";
	all_properties["ruby-align"] = "CSS3.0";
	all_properties["ruby-overhang"] = "CSS3.0";
	all_properties["ruby-position"] = "CSS3.0";
	all_properties["ruby-span"] = "CSS3.0";
	all_properties["size"] = "CSS2.0,CSS3.0";
	all_properties["speak"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["speak-header"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["speak-numeral"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["speak-punctuation"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["speech-rate"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["src"] = "CSS3.0";
	all_properties["stress"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["string-set"] = "CSS3.0";
	all_properties["tab-size"] = "CSS3.0";
	all_properties["table-layout"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["target"] = "CSS3.0";
	all_properties["target-name"] = "CSS3.0";
	all_properties["target-new"] = "CSS3.0";
	all_properties["target-position"] = "CSS3.0";
	all_properties["text-align"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["text-align-last"] = "CSS3.0";
	all_properties["text-decoration"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["text-decoration-color"] = "CSS3.0";
	all_properties["text-decoration-line"] = "CSS3.0";
	all_properties["text-decoration-skip"] = "CSS3.0";
	all_properties["text-decoration-style"] = "CSS3.0";
	all_properties["text-emphasis"] = "CSS3.0";
	all_properties["text-emphasis-color"] = "CSS3.0";
	all_properties["text-emphasis-position"] = "CSS3.0";
	all_properties["text-emphasis-style"] = "CSS3.0";
	all_properties["text-height"] = "CSS3.0";
	all_properties["text-indent"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["text-justify"] = "CSS3.0";
	all_properties["text-outline"] = "CSS3.0";
	all_properties["text-shadow"] = "CSS2.0,CSS3.0";
	all_properties["text-space-collapse"] = "CSS3.0";
	all_properties["text-transform"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["text-underline-position"] = "CSS3.0";
	all_properties["text-wrap"] = "CSS3.0";
	all_properties["top"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["transform"] = "CSS3.0";
	all_properties["transform-origin"] = "CSS3.0";
	all_properties["transform-style"] = "CSS3.0";
	all_properties["transition"] = "CSS3.0";
	all_properties["transition-delay"] = "CSS3.0";
	all_properties["transition-duration"] = "CSS3.0";
	all_properties["transition-property"] = "CSS3.0";
	all_properties["transition-timing-function"] = "CSS3.0";
	all_properties["unicode-bidi"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["vertical-align"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["visibility"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["voice-balance"] = "CSS3.0";
	all_properties["voice-duration"] = "CSS3.0";
	all_properties["voice-family"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["voice-pitch"] = "CSS3.0";
	all_properties["voice-pitch-range"] = "CSS3.0";
	all_properties["voice-rate"] = "CSS3.0";
	all_properties["voice-stress"] = "CSS3.0";
	all_properties["voice-volume"] = "CSS3.0";
	all_properties["volume"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["white-space"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["widows"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["width"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["word-break"] = "CSS3.0";
	all_properties["word-spacing"] = "CSS1.0,CSS2.0,CSS2.1,CSS3.0";
	all_properties["word-wrap"] = "CSS3.0";
	all_properties["z-index"] = "CSS2.0,CSS2.1,CSS3.0";
	all_properties["zoom"] = "CSS3.0";


	background_prop_default["background-image"] = "none";
	background_prop_default["background-size"] = "auto";
	background_prop_default["background-repeat"] = "repeat";
	background_prop_default["background-position"] = "0 0";
	background_prop_default["background-attachment"] = "scroll";
	background_prop_default["background-clip"] = "border";
	background_prop_default["background-origin"] = "padding";
	background_prop_default["background-color"] = "transparent";

	at_rules["page"] = is;
	at_rules["font-face"] = is;
	at_rules["charset"] = iv;
	at_rules["import"] = iv;
	at_rules["namespace"] = iv;
	at_rules["media"] = at;
	at_rules["keyframes"] = at;
	at_rules["-moz-keyframes"] = at;
	at_rules["-ms-keyframes"] = at;
	// MS actually went prefixless in the final version of IE10,
	// but supports the prefix for backwards compatibility.
	at_rules["-o-keyframes"] = at;
	at_rules["-webkit-keyframes"] = at;
}
