#!/bin/bash

declare -a HEADER=(
	'<!DOCTYPE html>'
	'<html lang="en">'
	'<head>'
	'<title>GridSound</title>'
	'<meta charset="UTF-8"/>'
	'<meta name="viewport" content="width=device-width, user-scalable=no"/>'
	'<link rel="shortcut icon" href="../assets/favicon.png"/>'
)

declare -a HEADEREND=(
	'</head>'
	'<body>'
)

declare -a CSSfiles=(
	"../assets/fonts/fonts.css"

	"gs-ui-components/gsuiIcon/gsuiIcon.css"

	"css/btn.css"
	"css/form.css"
	"css/rippleEffect.css"
	"css/root.css"
	"css/reset.css"
	"css/cmp.css"
	"css/main.css"
	"css/head.css"
	"css/footer.css"
	"css/pageSection.css"
	"css/homePage.css"
	"css/authPages.css"
	"css/userPage.css"
	"css/userAvatar.css"
)

declare -a HTMLfiles=(
	"html/_main.html"
	"html/cmp.html"
	"html/authPage.html"
	"html/homePage.html"
	"html/userPage.html"
	"html/cmpPage.html"
	"html/resetpassPage.html"
	"html/forgotpassPage.html"
)

declare -a JSfiles=(
	"gs-utils/src/_in.js"
	"gs-utils/src/addIfNotEmpty.js"
	"gs-utils/src/castToNumber.js"
	"gs-utils/src/composeUndo.js"
	"gs-utils/src/createUpdateDelete.js"
	"gs-utils/src/deepAssign.js"
	"gs-utils/src/deepCopy.js"
	"gs-utils/src/deepFreeze.js"
	"gs-utils/src/diffAssign.js"
	"gs-utils/src/isEmpty.js"
	"gs-utils/src/isntEmpty.js"
	"gs-utils/src/isObject.js"
	"gs-utils/src/jsonCopy.js"
	"gs-utils/src/mapCallbacks.js"
	"gs-utils/src/noop.js"
	"gs-utils/src/panningMerge.js"
	"gs-utils/src/panningMergeLR.js"
	"gs-utils/src/panningSplitLR.js"
	"gs-utils/src/plural.js"
	"gs-utils/src/trim2.js"
	"gs-utils/src/uniqueName.js"
	"gs-utils/src/uuid.js"
	"gs-utils/src/_out.js"

	"gs-api-client/gsapiClient.js"

	"daw-core/src/DAWCore.js"
	"daw-core/src/Buffers.js"
	"daw-core/src/LocalStorage.js"
	"daw-core/src/Destination.js"
	"daw-core/src/History.js"
	"daw-core/src/History.prototype.nameAction.js"
	"daw-core/src/Drums.js"
	"daw-core/src/Pianoroll.js"
	"daw-core/src/Composition.js"
	"daw-core/src/Composition.epure.js"
	"daw-core/src/Composition.format.js"
	"daw-core/src/Composition.prototype.change.js"

	"daw-core/src/json/composition.js"
	"daw-core/src/json/block.js"
	"daw-core/src/json/channel.js"
	"daw-core/src/json/channels.js"
	"daw-core/src/json/drum.js"
	"daw-core/src/json/drumcut.js"
	"daw-core/src/json/drumrow.js"
	"daw-core/src/json/effects.filter.js"
	"daw-core/src/json/env.js"
	"daw-core/src/json/key.js"
	"daw-core/src/json/lfo.js"
	"daw-core/src/json/oscillator.js"
	"daw-core/src/json/synth.js"
	"daw-core/src/json/track.js"

	"daw-core/src/controllers/blocks.js"
	"daw-core/src/controllers/drumrows.js"
	"daw-core/src/controllers/drums.js"
	"daw-core/src/controllers/effects.js"
	"daw-core/src/controllers/keys.js"
	"daw-core/src/controllers/mixer.js"
	"daw-core/src/controllers/synth.js"
	"daw-core/src/controllers/tracks.js"
	"daw-core/src/controllersFx/filter.js"

	"daw-core/src/actions/common/calcNewDuration.js"
	"daw-core/src/actions/common/calcNewKeysDuration.js"
	"daw-core/src/actions/common/createUniqueName.js"
	"daw-core/src/actions/common/getDrumrowName.js"
	"daw-core/src/actions/common/getNextIdOf.js"
	"daw-core/src/actions/common/getNextOrderOf.js"
	"daw-core/src/actions/common/toggleSolo.js"
	"daw-core/src/actions/common/updatePatternDuration.js"

	"daw-core/src/actions/addBlock.js"
	"daw-core/src/actions/addBuffers.js"
	"daw-core/src/actions/addChannel.js"
	"daw-core/src/actions/addDrumcuts.js"
	"daw-core/src/actions/addDrumrow.js"
	"daw-core/src/actions/addDrums.js"
	"daw-core/src/actions/addEffect.js"
	"daw-core/src/actions/addKey.js"
	"daw-core/src/actions/addOscillator.js"
	"daw-core/src/actions/addPatternDrums.js"
	"daw-core/src/actions/addPatternKeys.js"
	"daw-core/src/actions/addSynth.js"
	"daw-core/src/actions/changeChannel.js"
	"daw-core/src/actions/changeDrumrow.js"
	"daw-core/src/actions/changeDrumrowPattern.js"
	"daw-core/src/actions/changeDrumsProps.js"
	"daw-core/src/actions/changeEffect.js"
	"daw-core/src/actions/changeEnv.js"
	"daw-core/src/actions/changeKeysEnv.js"
	"daw-core/src/actions/changeKeysProps.js"
	"daw-core/src/actions/changeLFO.js"
	"daw-core/src/actions/changeLoop.js"
	"daw-core/src/actions/changeOscillator.js"
	"daw-core/src/actions/changeTempo.js"
	"daw-core/src/actions/clonePattern.js"
	"daw-core/src/actions/cloneSelectedKeys.js"
	"daw-core/src/actions/closePattern.js"
	"daw-core/src/actions/cropEndBlocks.js"
	"daw-core/src/actions/cropEndKeys.js"
	"daw-core/src/actions/cropStartBlocks.js"
	"daw-core/src/actions/duplicateSelectedBlocks.js"
	"daw-core/src/actions/moveBlocks.js"
	"daw-core/src/actions/moveKeys.js"
	"daw-core/src/actions/openPattern.js"
	"daw-core/src/actions/openSynth.js"
	"daw-core/src/actions/redirectChannel.js"
	"daw-core/src/actions/redirectKey.js"
	"daw-core/src/actions/redirectPatternBuffer.js"
	"daw-core/src/actions/redirectPatternKeys.js"
	"daw-core/src/actions/redirectSynth.js"
	"daw-core/src/actions/removeBlocks.js"
	"daw-core/src/actions/removeChannel.js"
	"daw-core/src/actions/removeDrumcuts.js"
	"daw-core/src/actions/removeDrumrow.js"
	"daw-core/src/actions/removeDrums.js"
	"daw-core/src/actions/removeEffect.js"
	"daw-core/src/actions/removeKeys.js"
	"daw-core/src/actions/removeOscillator.js"
	"daw-core/src/actions/removePattern.js"
	"daw-core/src/actions/removeSynth.js"
	"daw-core/src/actions/renameChannel.js"
	"daw-core/src/actions/renameComposition.js"
	"daw-core/src/actions/renamePattern.js"
	"daw-core/src/actions/renameSynth.js"
	"daw-core/src/actions/renameTrack.js"
	"daw-core/src/actions/reorderChannel.js"
	"daw-core/src/actions/reorderDrumrow.js"
	"daw-core/src/actions/reorderOscillator.js"
	"daw-core/src/actions/reorderPattern.js"
	"daw-core/src/actions/selectBlocks.js"
	"daw-core/src/actions/selectKeys.js"
	"daw-core/src/actions/toggleChannel.js"
	"daw-core/src/actions/toggleDrumrow.js"
	"daw-core/src/actions/toggleEffect.js"
	"daw-core/src/actions/toggleEnv.js"
	"daw-core/src/actions/toggleLFO.js"
	"daw-core/src/actions/toggleSoloDrumrow.js"
	"daw-core/src/actions/toggleSoloTrack.js"
	"daw-core/src/actions/toggleTrack.js"
	"daw-core/src/actions/unselectAllBlocks.js"
	"daw-core/src/actions/unselectAllKeys.js"
	"daw-core/src/actions/unselectBlock.js"
	"daw-core/src/actions/unselectKey.js"

	"daw-core/src/prototype/abortWAVExport.js"
	"daw-core/src/prototype/addComposition.js"
	"daw-core/src/prototype/addCompositionByBlob.js"
	"daw-core/src/prototype/addCompositionByJSON.js"
	"daw-core/src/prototype/addCompositionByURL.js"
	"daw-core/src/prototype/addCompositionsFromLocalStorage.js"
	"daw-core/src/prototype/addNewComposition.js"
	"daw-core/src/prototype/closeComposition.js"
	"daw-core/src/prototype/deleteComposition.js"
	"daw-core/src/prototype/dropAudioFiles.js"
	"daw-core/src/prototype/exportCompositionToJSON.js"
	"daw-core/src/prototype/exportCompositionToWAV.js"
	"daw-core/src/prototype/liveChangeChannel.js"
	"daw-core/src/prototype/liveChangeEffect.js"
	"daw-core/src/prototype/liveChangeSynth.js"
	"daw-core/src/prototype/newComposition.js"
	"daw-core/src/prototype/openComposition.js"
	"daw-core/src/prototype/saveComposition.js"

	"gs-wa-components/gswaLFO/gswaLFO.js"
	"gs-wa-components/gswaMixer/gswaMixer.js"
	"gs-wa-components/gswaSynth/gswaSynth.js"
	"gs-wa-components/gswaSynth/gswaSynth.midiKeyToHz.js"
	"gs-wa-components/gswaKeysScheduler/gswaKeysScheduler.js"
	"gs-wa-components/gswaDrumsScheduler/gswaDrumsScheduler.js"
	"gs-wa-components/gswaBPMTap/gswaBPMTap.js"
	"gs-wa-components/gswaEffects/gswaEffects.js"
	"gs-wa-components/gswaFxFilter/gswaFxFilter.js"
	"gs-wa-components/gswaDrumrows/gswaDrumrows.js"
	"gs-wa-components/gswaScheduler/gswaScheduler.js"
	"gs-wa-components/gswaEncodeWAV/gswaEncodeWAV.js"
	"gs-wa-components/gswaStereoPanner/gswaStereoPanner.js"
	"gs-wa-components/gswaPeriodicWaves/gswaPeriodicWaves.js"
	"gs-wa-components/gswaPeriodicWaves/gswaPeriodicWaves.list.js"

	"js/common/rippleEffect.js"
	"js/cmp.js"
	"js/main.js"
	"js/authPage.js"
	"js/userPage.js"
	"js/userAvatar.js"
	"js/cmpPage.js"
	"js/resetpassPage.js"
	"js/forgotpassPage.js"
	"js/run.js"
)

buildDev() {
	filename='index.html'
	echo "Build $filename"
	printf '%s\n' "${HEADER[@]}" > $filename;
	printf '<link rel="stylesheet" href="%s"/>\n' "${CSSfiles[@]}" >> $filename;
	printf '%s\n' "${HEADEREND[@]}" >> $filename;
	cat "${HTMLfiles[@]}" >> $filename
	echo '<script>function lg( a ) { return console.log.apply( console, arguments ), a; }</script>' >> $filename
	printf '<script src="%s"></script>\n' "${JSfiles[@]}" >> $filename;
	echo '</body>' >> $filename
	echo '</html>' >> $filename
}

buildProd() {
	filename='index-prod.html'
	echo "Build $filename"
	printf '%s\n' "${HEADER[@]}" > $filename;
	echo '<style>' >> $filename
	cat "${CSSfiles[@]}" >> $filename
	echo '</style>' >> $filename
	printf '%s\n' "${HEADEREND[@]}" >> $filename;
	cat "${HTMLfiles[@]}" >> $filename
	echo '<script>' >> $filename
	echo '"use strict";' >> $filename
	echo 'function lg( a ) { return console.log.apply( console, arguments ), a; }' >> $filename
	cat "${JSfiles[@]}" | grep -v '"use strict";' >> $filename
	echo '</script>' >> $filename
	echo '</body>' >> $filename
	echo '</html>' >> $filename
}

updateDep() {
	git submodule init
	git submodule update --remote
}

if [ $# = 0 ]; then
	echo '          -------------------------------'
	echo '        .:: GridSound build shellscript ::.'
	echo '        -----------------------------------'
	echo ''
	echo './build.sh dev ---> create "index.html" for development'
	echo './build.sh prod --> create "index-prod.html" for production'
	echo './build.sh dep ---> update all the submodules'
elif [ $1 = "dep" ]; then
	updateDep
elif [ $1 = "dev" ]; then
	buildDev
elif [ $1 = "prod" ]; then
	buildProd
fi
