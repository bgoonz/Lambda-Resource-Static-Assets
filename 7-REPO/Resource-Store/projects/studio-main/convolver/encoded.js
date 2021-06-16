// originally I used base64 but changed because some of the files were very big
// keeping this here for prosperity

// using a base64 encoded file as a convolver inspired by this pen https://codepen.io/DonKarlssonSan/pen/doVKRE?editors=0010
// function to return a buffer from the base64
function base64ToArrayBuffer(base64) {
  var binaryString = window.atob(base64);
  var len = binaryString.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++)        {
      bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

import bigHall1 from './base64/bigHall1.js';
import bigHall2 from './base64/bigHall2.js';
import bigHall3 from './base64/bigHall3.js';
import miniCaves from './base64/miniCaves.js';
import dubwise from './base64/dubwise.js';
import filterverb from './base64/filterverb.js';
import gatedPlace from './base64/gatedPlace.js';
import smallChurch from './base64/smallChurch.js';
import flangerSpace from './base64/flangerSpace.js';
import megaDiffuser from './base64/megaDiffuser.js';
import flutterEcho from './base64/flutterEcho.js';
import metalRoom from './base64/metalRoom.js';
import pipeCarpet from './base64/pipeCarpet.js';
import dampCave1 from './base64/dampCave1.js';
import dampCave2 from './base64/dampCave2.js';
import dampCave3 from './base64/dampCave3.js';
import dampCave4 from './base64/dampCave4.js';
import dampCave5 from './base64/dampCave5.js';
import highDampCave from './base64/highDampCave.js';
import largeDampCave from './base64/largeDampCave.js';
import medDampCave1 from './base64/medDampCave1.js';
import medDampCave2 from './base64/medDampCave2.js';
import medDampRoom from './base64/medDampRoom.js';
import hotHall from './base64/hotHall.js';
import revGate from './base64/revGate.js';
import whistlePlate from './base64/whistlePlate.js';
import robotVerb from './base64/robotVerb.js';
import strangeBox1 from './base64/strangeBox1.js';
import strangeBox2 from './base64/strangeBox2.js';
import wideHall from './base64/wideHall.js';

const irFiles = {
  bigHall1: bigHall1,
  bigHall2: bigHall2,
  bigHall3: bigHall3,
  miniCaves: miniCaves,
  dubwise: dubwise,
  filterverb: filterverb,
  gatedPlace: gatedPlace,
  smallChurch: smallChurch,
  flangerSpace: flangerSpace,
  megaDiffuser: megaDiffuser,
  flutterEcho: flutterEcho,
  metalRoom: metalRoom,
  pipeCarpet: pipeCarpet,
  dampCave1: dampCave1,
  dampCave2: dampCave2,
  dampCave3: dampCave3,
  dampCave4: dampCave4,
  dampCave5: dampCave5,
  highDampCave: highDampCave,
  largeDampCave: largeDampCave,
  medDampCave1: medDampCave1,
  medDampCave2: medDampCave2,
  medDampRoom: medDampRoom,
  hotHall: hotHall,
  revGate: revGate,
  whistlePlate: whistlePlate,
  robotVerb: robotVerb,
  strangeBox1: strangeBox1,
  strangeBox2: strangeBox2,
  wideHall: wideHall
}

export default irFiles

