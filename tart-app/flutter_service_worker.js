'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"version.json": "58284ed349ad5173bc13713c24ad6bb1",
"index.html": "069f77be76cb0c6ed05020ec5b41753c",
"/": "069f77be76cb0c6ed05020ec5b41753c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/AssetManifest.json": "fa242f413f56472e11478b7cef9382cc",
"assets/NOTICES": "81989e423baf06515b80c01de005995f",
"assets/FontManifest.json": "77b4a656b84a31b4861f4beadf49c44d",
"assets/assets/sounds/stop.wav": "6b950eb4833193e4e489e52deeb0f8f9",
"assets/assets/sounds/drop.wav": "994e060c0d40a14baa0423242f8a8d2b",
"assets/assets/sounds/connected.wav": "84c35a77b1eaccf4580a3308b9b83878",
"assets/assets/sounds/close.wav": "03b3fb585973d697bfe8335bd70036ad",
"assets/assets/sounds/save.wav": "562ecf1deaf9f5d8c0280a901b42e881",
"assets/assets/sounds/trash.wav": "dd3bc8f07985e4d8016fa3d99d7b3166",
"assets/assets/sounds/delete.wav": "e764b80c9d8eb1473a58ca9318f1a8a5",
"assets/assets/sounds/run.wav": "101dc6d86f43839e1ed2b8d7dec671a9",
"assets/assets/sounds/menu.wav": "db86a958803d68ed521ef805a31fab8b",
"assets/assets/sounds/create.wav": "12df50f9762938420d2228c4903e0816",
"assets/assets/sounds/warning.wav": "2db80aa9ae3fb7282bab1f87119ae837",
"assets/assets/sounds/hint.mp3": "a94a78f39b96832ef5aa64e877420b84",
"assets/assets/sounds/swipe.wav": "1e016fef3e5814a7231218cb898a7071",
"assets/assets/sounds/tap.wav": "65d87153fda6dd105ba547fa04e63a23",
"assets/assets/sounds/kick.wav": "c56edefbb64eebd1faff3baaff0c8fa1",
"assets/assets/sounds/route.wav": "5d02ee984d4024d05b78231ab4c04972",
"assets/assets/fonts/BalooChettan2/BalooChettan2-Medium.ttf": "00d0b3727db68d4e1a00427ab6013bc7",
"assets/assets/fonts/BalooChettan2/BalooChettan2-SemiBold.ttf": "c9e237e3f8ebd0308355a35aed628ba0",
"assets/assets/fonts/BalooChettan2/BalooChettan2-ExtraBold.ttf": "efd0642604a6a930bfe30f0f81b16d5a",
"assets/assets/fonts/BalooChettan2/BalooChettan2-Bold.ttf": "ad014a48dd8a02c04ca934fbdc99dc1f",
"assets/assets/fonts/BalooChettan2/BalooChettan2-Regular.ttf": "af0142b518dd86b50e95e2221e717394",
"assets/assets/fonts/Arial-Rounded-MT-Bold.ttf": "200135e8e5aec51916af96b03c1ee8fc",
"assets/assets/images/orange.webp": "a6d8fd72dd0c5b143fca7e7eea46f366",
"assets/assets/images/icon_save.png": "f91c131f6874105813e0ec5c763fd5ea",
"assets/assets/images/orange-menu-background.png": "caddf57c2c970c8cf917ac4a37641ece",
"assets/assets/images/icon_negative.png": "1bc65f499347ba6eff776562648d8f66",
"assets/assets/images/icon_positive.png": "c90d151f04c063b8369e4ed51572c75b",
"assets/assets/images/icon_close.png": "d75ac7d481d0dbff7539446a4ac06b5b",
"assets/assets/images/mulberry.png": "5bc22fb25e98d113a6225717f7be1bdd",
"assets/lib/Orange/Programming/assets/images/icon_bin_cap.png": "3df8e869bb68925ddc9848f1dcb54409",
"assets/lib/Orange/Programming/assets/images/icon_save.png": "a21d1cf6e27c3fe067049ba692d382a8",
"assets/lib/Orange/Programming/assets/images/lights/light_purple.png": "8421c7cc1d903dc47ade418f672467bb",
"assets/lib/Orange/Programming/assets/images/lights/light_yellow.png": "4df10c7f44608f54fb304aa6676617af",
"assets/lib/Orange/Programming/assets/images/lights/light.png": "a43cb176a2e1f583b85961e467d99504",
"assets/lib/Orange/Programming/assets/images/lights/light_red.png": "55e001a8263a2a78055660aeef524631",
"assets/lib/Orange/Programming/assets/images/lights/light_pink.png": "50777926899bd59020f6801b373bd394",
"assets/lib/Orange/Programming/assets/images/lights/light_white.png": "ff566182cb59fa5fdb4b57993cea5ba5",
"assets/lib/Orange/Programming/assets/images/lights/light_blue.png": "3ea260e57662afd35b5e3c12239d47bb",
"assets/lib/Orange/Programming/assets/images/lights/light_green.png": "e710bbb6a099e6a9d988226c0712fe40",
"assets/lib/Orange/Programming/assets/images/lights/light_orange.png": "b8c9408f8153b2df4a01e397833ac0ef",
"assets/lib/Orange/Programming/assets/images/movements/motors.png": "a2c96ed12081c20fae9506c4cb69b27e",
"assets/lib/Orange/Programming/assets/images/movements/backward.png": "4e10243aadfcb54429a642d9f8164d5c",
"assets/lib/Orange/Programming/assets/images/movements/arc-backward.png": "045e893f47cc77d074d62e3c61102bd1",
"assets/lib/Orange/Programming/assets/images/movements/stop.png": "768622843844e86e80826bb1af42a9e6",
"assets/lib/Orange/Programming/assets/images/movements/forward.png": "e525e1a415fc55e6a8c2d8d4de282d63",
"assets/lib/Orange/Programming/assets/images/movements/arc-forward.png": "d1ff15814608fd86366da9a6663c903d",
"assets/lib/Orange/Programming/assets/images/movements/kicker.png": "067d16e3a9d7e8d6674b2021616f4bf2",
"assets/lib/Orange/Programming/assets/images/movements/turn.png": "2fa2661289929cb592b1717a7e715f5f",
"assets/lib/Orange/Programming/assets/images/icon.jpg": "a2d8e750adffeb1ad303cc219b71556c",
"assets/lib/Orange/Programming/assets/images/loops/norm.png": "73806c6cb88496cbdb93cd3ba34455b8",
"assets/lib/Orange/Programming/assets/images/loops/norm_end.png": "e6680a927d85ed9644cc13fa2cd772bf",
"assets/lib/Orange/Programming/assets/images/loops/inf.png": "d8578a2d22c4f0805b002d5ee07a804c",
"assets/lib/Orange/Programming/assets/images/loops/inf_end.png": "d5a877eb7e33bb782917132f228b7597",
"assets/lib/Orange/Programming/assets/images/icon_disconnected.png": "808fb63af0277f927857603d0eceeb1f",
"assets/lib/Orange/Programming/assets/images/icon_ok.png": "8640dba5ffd6f57040c821955f4c960b",
"assets/lib/Orange/Programming/assets/images/sounds/note_do.png": "be9fcd90a9e9beb05fc4550675b7aff6",
"assets/lib/Orange/Programming/assets/images/sounds/note_re.png": "a658dc68317fb678e913c2ea91b613d7",
"assets/lib/Orange/Programming/assets/images/sounds/note_sol.png": "c7a818cbf59ecfb7700b528dbdb4e0e5",
"assets/lib/Orange/Programming/assets/images/sounds/note_fa.png": "0e955d7a1f24a93982213086c2be43f3",
"assets/lib/Orange/Programming/assets/images/sounds/note_si.png": "0486fe75c84d528add34674e7dc6352f",
"assets/lib/Orange/Programming/assets/images/sounds/note_mi.png": "9aac4b9e4a877fc565209343c2af4f57",
"assets/lib/Orange/Programming/assets/images/sounds/note_la.png": "c96db72a198580c09d0b0a0bf7cfdde0",
"assets/lib/Orange/Programming/assets/images/sounds/note.png": "2e200502c7b5eac3ded50ce7b3a930e9",
"assets/lib/Orange/Programming/assets/images/icon_connected.png": "b11ea9bd9bba799c353701719c0ca55d",
"assets/lib/Orange/Programming/assets/images/dialog_light/board.png": "09bd7a893ec8488e9598157f097c2d81",
"assets/lib/Orange/Programming/assets/images/categories/light.png": "d1af442a3b72aeec3003d797b413103c",
"assets/lib/Orange/Programming/assets/images/categories/movement.png": "295b120674d25796ea957c68c21f43cd",
"assets/lib/Orange/Programming/assets/images/categories/loop.png": "2b3a9ce919db045d263b7ebeb0c4ecee",
"assets/lib/Orange/Programming/assets/images/categories/sound.png": "83eab756488eb856af9bbeb7f719acf5",
"assets/lib/Orange/Programming/assets/images/icon_bin_body.png": "646368fcc8d3c192a1487a75754d35c9",
"assets/lib/Orange/Programming/assets/images/card.png": "97156277f5ff8e0acd2f7e106a95e79b",
"assets/lib/Orange/Programming/assets/images/dialog_mov/ic_light_setting.png": "3f60e256fbfd30a65c3002fb1a929324",
"assets/lib/Orange/Programming/assets/images/dialog_mov/ic_sound_setting.png": "0bf68711bce29470744fbd7d5905d7ab",
"assets/lib/Orange/Programming/assets/images/dialog_mov/angle-thumb.png": "a6ccc7fa9282d38caac34be5fb71144b",
"assets/lib/Orange/Programming/assets/images/dialog_mov/distance-thumb.png": "f64dad53a904a3ba13704b09c8ef118d",
"assets/lib/Orange/Programming/assets/images/dialog_mov/ic_motor_cw_setting.png": "da84b6c2a1efbe317cc8cc5a2e2ebc22",
"assets/lib/Orange/Programming/assets/images/dialog_mov/ic_kicker_setting.png": "897e2fefa6d67ad8c68db03707fe1077",
"assets/lib/Orange/Programming/assets/images/dialog_mov/Asset%252020.png": "14d2b08999a23c8013648f7c091e1e70",
"assets/lib/Orange/Programming/assets/images/dialog_mov/ic_motor_ccw_setting.png": "ad4399f82a4fc70a589656aa07013520",
"assets/lib/Orange/Programming/assets/images/dialog_mov/arrow.png": "24a03ac953945618f49ce0826ffd5f87",
"assets/lib/Orange/Programming/assets/images/dialog_mov/Asset%252088.png": "cbee75ea25ae2523ff3e5cc476a7d0cd",
"assets/lib/Orange/Programming/assets/images/main_back.jpg": "bab6f5fb5688f78dc66bbef0b9283ffe",
"assets/lib/Orange/Programming/assets/images/icon_close.png": "257cd096a2f6414692987a1525a7529a",
"assets/lib/Orange/Programming/assets/images/dialog_loop/dialop_loop_overview.png": "94a1a00c2a3bcbe253eb11788f4835d0",
"assets/lib/Orange/StrikerMode/assets/images/ic_flag_mexico.png": "e968d67f950b6ba3beebfe74729abd5f",
"assets/lib/Orange/StrikerMode/assets/images/ic_flag_netherland.png": "0812171343e138bbc22da05a65335550",
"assets/lib/Orange/StrikerMode/assets/images/icon.jpg": "c8dd0a896fe6e43bdd89ad419125a0b0",
"assets/lib/Orange/StrikerMode/assets/images/ic_flag_italy.png": "0b72059fad96064672b2e8788f3832d1",
"assets/lib/Orange/StrikerMode/assets/images/board.png": "09bd7a893ec8488e9598157f097c2d81",
"assets/lib/Orange/StrikerMode/assets/images/ic_light_setting.png": "3f60e256fbfd30a65c3002fb1a929324",
"assets/lib/Orange/StrikerMode/assets/images/ic_connected.png": "b27521d8fcb8acd31171ae3f25e24f2c",
"assets/lib/Orange/StrikerMode/assets/images/ic_flag_england.png": "a4a44d3464cdc4c87f1ba2676aa0aaa2",
"assets/lib/Orange/StrikerMode/assets/images/ic_menu.png": "97b0c0b886595379710bb9142355af6a",
"assets/lib/Orange/StrikerMode/assets/images/ic_flag_japan.png": "87abe4e8b5a3d6868676c9b90e6fef49",
"assets/lib/Orange/StrikerMode/assets/images/ic_flag_austria.png": "45b84aa1e0e33968b247563c514ceba2",
"assets/lib/Orange/StrikerMode/assets/images/ic_flag_canada.png": "63b2ac056965652d3525921fa4ea63de",
"assets/lib/Orange/StrikerMode/assets/images/ic_close.png": "4352fb6d3e062f0c5e8249f9c147e02f",
"assets/lib/Orange/StrikerMode/assets/images/ic_flag_usa.png": "1a5ac927e2e3bbef2fe3ffc7b12a7756",
"assets/lib/Orange/StrikerMode/assets/images/ic_flag_china.png": "558ef70b5626ee83e741d19c2dd9d018",
"assets/lib/Orange/StrikerMode/assets/images/ic_disconnected.png": "2c55a97b574fa0c37c25b4ab989c6a39",
"assets/lib/Orange/StrikerMode/assets/images/card.png": "5f6a2c74a5f3021e66f422370633b4d9",
"assets/lib/Orange/StrikerMode/assets/images/ic_kick.png": "0a8ff2db0f35b518f4f7f253a242d936",
"assets/lib/Orange/StrikerMode/assets/images/ic_flag_argentina.png": "532b46d705f945088dc7436e8a15ec93",
"assets/lib/Orange/StrikerMode/assets/images/ic_flag_france.png": "848713d5dc708aafe5b72c1d38254270",
"assets/lib/Orange/StrikerMode/assets/images/ic_flag_brazil.png": "88ac1c218474f83529743b6021707b4e",
"assets/lib/Orange/StrikerMode/assets/images/ic_flag_portugal.png": "4319ca99141ae0d67e61f3275371c9ff",
"assets/lib/Orange/StrikerMode/assets/images/ic_flag_germany.png": "387b96124bc2b07b74f5b8e3f1957e49",
"assets/lib/Orange/StrikerMode/assets/images/ic_flag_swiss.png": "ca1ca9081504de359af2c3ba76b4d27e",
"assets/lib/Orange/GoalkeeperMode/assets/images/ic_flag_mexico.png": "e968d67f950b6ba3beebfe74729abd5f",
"assets/lib/Orange/GoalkeeperMode/assets/images/ic_flag_netherland.png": "0812171343e138bbc22da05a65335550",
"assets/lib/Orange/GoalkeeperMode/assets/images/icon.jpg": "b4878281e09f4b3f2d6f1e6be4f9338d",
"assets/lib/Orange/GoalkeeperMode/assets/images/ic_flag_italy.png": "0b72059fad96064672b2e8788f3832d1",
"assets/lib/Orange/GoalkeeperMode/assets/images/board.png": "09bd7a893ec8488e9598157f097c2d81",
"assets/lib/Orange/GoalkeeperMode/assets/images/ic_light_setting.png": "3f60e256fbfd30a65c3002fb1a929324",
"assets/lib/Orange/GoalkeeperMode/assets/images/ic_connected.png": "b27521d8fcb8acd31171ae3f25e24f2c",
"assets/lib/Orange/GoalkeeperMode/assets/images/ic_flag_england.png": "a4a44d3464cdc4c87f1ba2676aa0aaa2",
"assets/lib/Orange/GoalkeeperMode/assets/images/ic_menu.png": "97b0c0b886595379710bb9142355af6a",
"assets/lib/Orange/GoalkeeperMode/assets/images/ic_flag_japan.png": "87abe4e8b5a3d6868676c9b90e6fef49",
"assets/lib/Orange/GoalkeeperMode/assets/images/ic_flag_austria.png": "45b84aa1e0e33968b247563c514ceba2",
"assets/lib/Orange/GoalkeeperMode/assets/images/ic_flag_canada.png": "63b2ac056965652d3525921fa4ea63de",
"assets/lib/Orange/GoalkeeperMode/assets/images/ic_rotate_left.png": "476da2f42318b36ed74f13622184cd6c",
"assets/lib/Orange/GoalkeeperMode/assets/images/ic_close.png": "4352fb6d3e062f0c5e8249f9c147e02f",
"assets/lib/Orange/GoalkeeperMode/assets/images/ic_flag_usa.png": "1a5ac927e2e3bbef2fe3ffc7b12a7756",
"assets/lib/Orange/GoalkeeperMode/assets/images/ic_flag_china.png": "558ef70b5626ee83e741d19c2dd9d018",
"assets/lib/Orange/GoalkeeperMode/assets/images/ic_disconnected.png": "2c55a97b574fa0c37c25b4ab989c6a39",
"assets/lib/Orange/GoalkeeperMode/assets/images/card.png": "6f544f2978635c6141de65d430733797",
"assets/lib/Orange/GoalkeeperMode/assets/images/ic_rotate_right.png": "72825844d2a43817da601b881e713206",
"assets/lib/Orange/GoalkeeperMode/assets/images/ic_flag_argentina.png": "532b46d705f945088dc7436e8a15ec93",
"assets/lib/Orange/GoalkeeperMode/assets/images/ic_flag_france.png": "848713d5dc708aafe5b72c1d38254270",
"assets/lib/Orange/GoalkeeperMode/assets/images/ic_flag_brazil.png": "88ac1c218474f83529743b6021707b4e",
"assets/lib/Orange/GoalkeeperMode/assets/images/ic_flag_portugal.png": "4319ca99141ae0d67e61f3275371c9ff",
"assets/lib/Orange/GoalkeeperMode/assets/images/ic_flag_germany.png": "387b96124bc2b07b74f5b8e3f1957e49",
"assets/lib/Orange/GoalkeeperMode/assets/images/ic_flag_swiss.png": "ca1ca9081504de359af2c3ba76b4d27e",
"assets/lib/Orange/AssemblyMode/assets/images/card.png": "1bf74981c94f39552740d72b23ab80ae",
"assets/lib/Orange/ProjectMode/assets/images/icon.jpg": "b4878281e09f4b3f2d6f1e6be4f9338d",
"assets/lib/Orange/ProjectMode/assets/images/board.png": "09bd7a893ec8488e9598157f097c2d81",
"assets/lib/Orange/ProjectMode/assets/images/ic_light_setting.png": "3f60e256fbfd30a65c3002fb1a929324",
"assets/lib/Orange/ProjectMode/assets/images/ic_connected.png": "b27521d8fcb8acd31171ae3f25e24f2c",
"assets/lib/Orange/ProjectMode/assets/images/ic_close.png": "4352fb6d3e062f0c5e8249f9c147e02f",
"assets/lib/Orange/ProjectMode/assets/images/ic_disconnected.png": "2c55a97b574fa0c37c25b4ab989c6a39",
"assets/lib/Orange/ProjectMode/assets/images/card.png": "99ed5d02cfb2db9b44f63d029cea3910",
"assets/lib/Orange/ProjectMode/assets/images/note.png": "2e200502c7b5eac3ded50ce7b3a930e9",
"assets/lib/Mulberry/ProgrammingMode/assets/images/icon_bin_cap.png": "0ae01d526741b815e5073fc16e8b114e",
"assets/lib/Mulberry/ProgrammingMode/assets/images/dialog_wait/gyro_yaw.png": "42c6e0d1ae70fca367ed4e047e7a73c8",
"assets/lib/Mulberry/ProgrammingMode/assets/images/dialog_wait/gyro_roll.png": "7fe7ac4cac55e71711e05c28b174c692",
"assets/lib/Mulberry/ProgrammingMode/assets/images/dialog_wait/distance.png": "79ecfaac191ec98c3392a0db76ce3196",
"assets/lib/Mulberry/ProgrammingMode/assets/images/dialog_wait/climate_temp.png": "f44997cc118f2067b88fe2a7b6e2a234",
"assets/lib/Mulberry/ProgrammingMode/assets/images/dialog_wait/light_off.png": "0a1801c8d4a7095103426ccdcca1ad72",
"assets/lib/Mulberry/ProgrammingMode/assets/images/dialog_wait/climate_humidity.png": "96d05d68c562d397b9526c7d053c1509",
"assets/lib/Mulberry/ProgrammingMode/assets/images/dialog_wait/light_on.png": "a6f253046618a38821a2c80406ab6f50",
"assets/lib/Mulberry/ProgrammingMode/assets/images/dialog_wait/climate_pressure.png": "7d9a0c40b386ce38df56fb4c7c2ba8d5",
"assets/lib/Mulberry/ProgrammingMode/assets/images/dialog_wait/gyro_pitch.png": "73cf8424541189b9c362dcdd07109ebf",
"assets/lib/Mulberry/ProgrammingMode/assets/images/icon_save.png": "fd500fe059ee9a01a2c9cdbe506bf6d0",
"assets/lib/Mulberry/ProgrammingMode/assets/images/lights/light_purple.png": "1f5345ddbe6119379f62d322921f26a5",
"assets/lib/Mulberry/ProgrammingMode/assets/images/lights/light_yellow.png": "5e327bd1bb149448063148973d3e9891",
"assets/lib/Mulberry/ProgrammingMode/assets/images/lights/light.png": "eefe75014b4db5bcb5a4a6e236374ed3",
"assets/lib/Mulberry/ProgrammingMode/assets/images/lights/digit_display.png": "316cbe9306e2a27b7840296a7825f858",
"assets/lib/Mulberry/ProgrammingMode/assets/images/lights/light_red.png": "87e1d339cddc39a26f44608a8202f3a4",
"assets/lib/Mulberry/ProgrammingMode/assets/images/lights/dot_matrix.png": "3fc3145e83af6d0bcef3884685127c63",
"assets/lib/Mulberry/ProgrammingMode/assets/images/lights/light_module.png": "76588acc110e66be1bcf3d72b38d8f29",
"assets/lib/Mulberry/ProgrammingMode/assets/images/lights/light_pink.png": "076392050c20bd1f44d53a90570e1e06",
"assets/lib/Mulberry/ProgrammingMode/assets/images/lights/light_white.png": "237f396d9be7f13c1d6129ecfadef2f0",
"assets/lib/Mulberry/ProgrammingMode/assets/images/lights/light_blue.png": "6561e4ee3c7186c09e7dda050ed47db4",
"assets/lib/Mulberry/ProgrammingMode/assets/images/lights/light_green.png": "896043a6203e9839b0413eced64757bf",
"assets/lib/Mulberry/ProgrammingMode/assets/images/lights/light_orange.png": "0dd35779880daac72938bd34fe2b49ea",
"assets/lib/Mulberry/ProgrammingMode/assets/images/movements/motors.png": "dd88a91125e55d135bdbcc4be36ad533",
"assets/lib/Mulberry/ProgrammingMode/assets/images/movements/backward.png": "c90d31d365c93c6d1fe2161026249ccc",
"assets/lib/Mulberry/ProgrammingMode/assets/images/movements/fine_turn.png": "bc120e8d4c5039db27f885f6a39bb45a",
"assets/lib/Mulberry/ProgrammingMode/assets/images/movements/fine_forward.png": "98e5b6ea0df503a6b0436e2729151ec3",
"assets/lib/Mulberry/ProgrammingMode/assets/images/movements/stop.png": "7e6dca9898e949d5459bc28c47917ea8",
"assets/lib/Mulberry/ProgrammingMode/assets/images/movements/forward.png": "0e1a071d7aadc2d3fbb8e82214fcb848",
"assets/lib/Mulberry/ProgrammingMode/assets/images/movements/line_follow.png": "928557270f6b7894d24ee41af98a695c",
"assets/lib/Mulberry/ProgrammingMode/assets/images/movements/fine_backward.png": "11782d09aa21ffdec9f1c9dbc17d9fa4",
"assets/lib/Mulberry/ProgrammingMode/assets/images/movements/turn.png": "96391e8596f445cd8d78c267f630de88",
"assets/lib/Mulberry/ProgrammingMode/assets/images/loops/norm.png": "dd6c30270027844b494cebd462bb130c",
"assets/lib/Mulberry/ProgrammingMode/assets/images/loops/ir_end.png": "267c9dc86e86a353b29cc5200f9f1975",
"assets/lib/Mulberry/ProgrammingMode/assets/images/loops/potentiometer_end.png": "888a24e3eb50fdade9ba9c0b067e9793",
"assets/lib/Mulberry/ProgrammingMode/assets/images/loops/ultrasonic.png": "8e5fdfbd94e926adb34e9e973d86aae0",
"assets/lib/Mulberry/ProgrammingMode/assets/images/loops/norm_end.png": "e01d7bdfdb5ebe36346c01a92f2c2598",
"assets/lib/Mulberry/ProgrammingMode/assets/images/loops/push_button_end.png": "01716d60b457af048e4d60a932207e13",
"assets/lib/Mulberry/ProgrammingMode/assets/images/loops/gyro_end.png": "e2c1724dd290c40e131feccfb2a502d7",
"assets/lib/Mulberry/ProgrammingMode/assets/images/loops/inf.png": "dd6c30270027844b494cebd462bb130c",
"assets/lib/Mulberry/ProgrammingMode/assets/images/loops/color.png": "a99b3254cc363ffa998778fe8c3d7d06",
"assets/lib/Mulberry/ProgrammingMode/assets/images/loops/climate_end.png": "d5406398c0179bf4a984374dda886652",
"assets/lib/Mulberry/ProgrammingMode/assets/images/loops/color_end.png": "e7ea4e5d3fec94f056a6d80573b1a148",
"assets/lib/Mulberry/ProgrammingMode/assets/images/loops/ir.png": "1ff23354b23e415b33950104059ba0d3",
"assets/lib/Mulberry/ProgrammingMode/assets/images/loops/push_button.png": "4388b0c49e711e1ee2daca7a14a1f204",
"assets/lib/Mulberry/ProgrammingMode/assets/images/loops/joystick.png": "d3b4f599812cb2afd8e0761bc9b2834b",
"assets/lib/Mulberry/ProgrammingMode/assets/images/loops/joystick_end.png": "0baf91b95ecd6782e5468bbc484eb97e",
"assets/lib/Mulberry/ProgrammingMode/assets/images/loops/inf_end.png": "e01d7bdfdb5ebe36346c01a92f2c2598",
"assets/lib/Mulberry/ProgrammingMode/assets/images/loops/climate.png": "daf5db6404cde4ffc4da39613de23a41",
"assets/lib/Mulberry/ProgrammingMode/assets/images/loops/gyro.png": "2828383b099b6466816cc270ff1057ff",
"assets/lib/Mulberry/ProgrammingMode/assets/images/loops/potentiometer.png": "f34908fedc2857c56e309519b8e7e1aa",
"assets/lib/Mulberry/ProgrammingMode/assets/images/loops/ultrasonic_end.png": "d1306b6118aa9c340fc536715c5e7d1f",
"assets/lib/Mulberry/ProgrammingMode/assets/images/icon_disconnected.png": "ddecdf94ed40ee9af2771dc20668279c",
"assets/lib/Mulberry/ProgrammingMode/assets/images/waits/light.png": "a6f253046618a38821a2c80406ab6f50",
"assets/lib/Mulberry/ProgrammingMode/assets/images/waits/ultrasonic.png": "65741f0c7a93f14dd12d5cb07b42c885",
"assets/lib/Mulberry/ProgrammingMode/assets/images/waits/time.png": "d6666c7a9c599b63304f1ce4c4cca921",
"assets/lib/Mulberry/ProgrammingMode/assets/images/waits/color.png": "3ec6c37d5e6fa32b585875e5ef2ac524",
"assets/lib/Mulberry/ProgrammingMode/assets/images/waits/ir.png": "7816776b44f4f8d9dc8d2332efa6db60",
"assets/lib/Mulberry/ProgrammingMode/assets/images/waits/push_button.png": "2ea15c3fd55c2486a2545ecb66925678",
"assets/lib/Mulberry/ProgrammingMode/assets/images/waits/joystick.png": "a40641712140f63785ae2f3bdd13b0ba",
"assets/lib/Mulberry/ProgrammingMode/assets/images/waits/climate.png": "1fc93a03cae940680647b4e09796170d",
"assets/lib/Mulberry/ProgrammingMode/assets/images/waits/gyro.png": "7e069287616858eeccbd96940cc6edbf",
"assets/lib/Mulberry/ProgrammingMode/assets/images/waits/potentiometer.png": "86f516d262bbf5457ed98f01b2790039",
"assets/lib/Mulberry/ProgrammingMode/assets/images/sounds/note.png": "eadd14b70c672dc66facf0a6858498ad",
"assets/lib/Mulberry/ProgrammingMode/assets/images/icon_connected.png": "303317e35e17af99eb0865f42ec54432",
"assets/lib/Mulberry/ProgrammingMode/assets/images/categories/light.png": "c2f4a4197b26f51fd60b8c42fc50e5ec",
"assets/lib/Mulberry/ProgrammingMode/assets/images/categories/movement.png": "8e9bcc346099472f9a75d678c0c435f9",
"assets/lib/Mulberry/ProgrammingMode/assets/images/categories/loop.png": "5eef5a2b9460035ddc080c6f9c8b6595",
"assets/lib/Mulberry/ProgrammingMode/assets/images/categories/music.png": "64c6ae08da2c0987acd637ab1daa0eaa",
"assets/lib/Mulberry/ProgrammingMode/assets/images/categories/wait.png": "efd2caa2e9a75e43fa3532fa48554e7b",
"assets/lib/Mulberry/ProgrammingMode/assets/images/icon_bin_body.png": "2b8d96007c3f32f505e7733e34832486",
"assets/lib/Mulberry/ProgrammingMode/assets/images/dialog_mov/distance_thumb.png": "a91396ae0782d91ec2fc5f9db7765eae",
"assets/lib/Mulberry/ProgrammingMode/assets/images/dialog_mov/fine_turn.png": "102605e56f4588b59334d4b15d768841",
"assets/lib/Mulberry/ProgrammingMode/assets/images/dialog_mov/sound_settings.png": "2c78065fe2bafb2e89ef4bcf110a7029",
"assets/lib/Mulberry/ProgrammingMode/assets/images/dialog_mov/angle_thumb.png": "aacf3d5ab027afffcc1f7a2792c26d4b",
"assets/lib/Mulberry/ProgrammingMode/assets/images/dialog_mov/fine_backward_distance_bg.png": "6205bc510f558b5a413950ec6b9d35bd",
"assets/lib/Mulberry/ProgrammingMode/assets/images/dialog_mov/fine_forward_distance_bg.png": "da7e77a55f0373341f03be20d4ea3443",
"assets/lib/Mulberry/ProgrammingMode/assets/images/dialog_mov/light_settings.png": "153ceb6720f473f00a8f8d549329d97e",
"assets/lib/Mulberry/ProgrammingMode/assets/images/dialog_mov/motor_ccw.png": "14c6ff949ab8ecc1dc21fbe738b157e8",
"assets/lib/Mulberry/ProgrammingMode/assets/images/dialog_mov/motor_cw.png": "04e9227ba12937a3178800a089f15b47",
"assets/lib/Mulberry/ProgrammingMode/assets/images/dialog_mov/arrow.png": "24a03ac953945618f49ce0826ffd5f87",
"assets/lib/Mulberry/ProgrammingMode/assets/images/main_back.jpg": "bab6f5fb5688f78dc66bbef0b9283ffe",
"assets/lib/Mulberry/ProgrammingMode/assets/images/icon.png": "2c027f48df22c082e4e4afc889820ad4",
"assets/lib/Mulberry/ProgrammingMode/assets/images/icon_close.png": "ce27fe648b0a389a113d62e050aa825e",
"assets/lib/Mulberry/ProgrammingMode/assets/images/dialog/potentiometer.png": "8dd0754fba1ef51da9b896d847f9b9a7",
"assets/lib/Mulberry/DriveMode/assets/images/light.png": "8d0deb458394bb0416ee63f3d248a820",
"assets/lib/Mulberry/DriveMode/assets/images/joystick_bg.png": "3b226e2cf0116b5f3852682f8fe47bb3",
"assets/lib/Mulberry/DriveMode/assets/images/sprint.png": "73e2b10eeca13b840256e9210e868306",
"assets/lib/Mulberry/DriveMode/assets/images/sound.png": "03efcb82512e766dab70fe199816ff48",
"assets/lib/Mulberry/DriveMode/assets/images/line_follow.png": "600bb3dd2e8c18ab58bfbd515647f3dd",
"assets/lib/Mulberry/DriveMode/assets/images/wall_follow.png": "27c4a333f33aaf43c804b07c9aa946ee",
"assets/lib/Mulberry/DriveMode/assets/images/icon.png": "5bc22fb25e98d113a6225717f7be1bdd",
"assets/lib/Mulberry/MusicianMode/assets/images/icon.png": "5bc22fb25e98d113a6225717f7be1bdd",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"main.dart.js": "9048da3c985019c50e37794091f5ba6b",
"manifest.json": "80fcf2832812d70c3c448c19119da08d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
