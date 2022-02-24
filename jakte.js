var projecttitle = prompt('작품 제목 입력');
var repeatcount = prompt('반복 횟수 입력');
for(var i=0; i<999999; i++) {
var projectid = (await (await fetch("https://playentry.org/graphql", {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify({
query: `
mutation CREATE_PROJECT(
$name: String
$speed: Int
$objects: JSON
$variables: JSON
$messages: JSON
$functions: JSON
$tables: JSON
$scenes: JSON
$blockLog: JSON
$lecture:ID
$study:ID
$discovery: ID
$isForLecture:Boolean
$isForStudy:Boolean
$isForSubmit: Boolean
$isPracticalCourse: Boolean
$interface: JSON
$aiUtilizeBlocks: JSON
$expansionBlocks: JSON
$description: String
$description2: String
$description3: String
$thumb: String
$isopen: Boolean
$categoryCode: String
$parent: ID
$learning: String
) {
createProject(
name: $name
speed: $speed
objects: $objects
variables: $variables
messages: $messages
functions: $functions
tables: $tables
scenes: $scenes
blockLog: $blockLog
lecture: $lecture
study: $study
discovery: $discovery
isForLecture: $isForLecture
isForStudy: $isForStudy
isForSubmit: $isForSubmit
isPracticalCourse: $isPracticalCourse
interface: $interface
aiUtilizeBlocks: $aiUtilizeBlocks
expansionBlocks: $expansionBlocks
description: $description
description2: $description2
description3: $description3
thumb: $thumb
isopen: $isopen
categoryCode: $categoryCode
parent: $parent
learning: $learning
) {
status
result
}
}`,
variables: {category: '기타', scenes: [{id: '7dwq', name: '장면 1'}], variables: [{name: '초시계', id: 'brih', visible: true, value: '0.0', variableType: 'timer', isCloud: false, isRealTime: false, cloudDate: false, object: null, x: -50, y: -70},{ name: '대답', id: '1vu8', visible: false, value: '0', variableType: 'answer', isCloud: false, isRealTime: false, cloudDate: false, object: null, x: 150, y: -100}], objects: [{id: '7y0y', name: '엔트리봇', script: [[{id: 'nr77', x: 50, y: 30, type: 'when_run_button_click', params: [null], statements: [], movable: null, deletable: 1, emphasized: false, readOnly: null, copyable: true, extensions: []},{id: '6e5e', x: 0, y: 0, type: 'repeat_basic', params: [{id: '7q0v', x: 0, y: 0, type: 'number', params: [10], statements: [], movable: null, deletable: 1, emphasized: false, readOnly: null, copyable: true, extensions: []},null], statements: [[{id: '16o4', x: 0, y: 0, type: 'move_direction', params: [{id: 'zh5j', x: 0, y: 0, type: 'number', params: [10], statements: [], movable: null, deletable: 1, emphasized: false, readOnly: null, copyable: true, extensions: []},null], statements: [], movable: null, deletable: 1, emphasized: false, readOnly: null, copyable: true, extensions: []}]], movable: null, deletable: 1, emphasized: false, readOnly: null, copyable: true, extensions: []}]] , objectType: 'sprite', rotateMethod: 'free', scene: '7dwq', sprite: {pictures: [{ id: 'vx80', dimension: {width: 284, height: 350}, fileurl: '/lib/entry-js/images/media/entrybot1.png', name: '엔트리봇_걷기1', scale: 100, imageType: 'png'},{id: '4t48', dimension: {width: 284, height: 350}, fileurl: '/lib/entry-js/images/media/entrybot2.png', name: '엔트리봇_걷기2', scale: 100, imageType: 'png'}], sounds: [{duration: 1.3, ext: '.mp3', id: '8el5', fileurl: '/lib/entry-js/images/media/bark.mp3', name: '강아지 짖는 소리'}]}, selectedPictureId: 'vx80', lock: false, entity: {x: 0, y: 0, regX: 142, regY: 175, scaleX: 0.3154574132492113, scaleY: 0.3154574132492113, rotation: 0, direction: 90, width: 284, height: 350, font: 'undefinedpx', visible: true}}], expansionBlocks: [], aiUtilizeBlocks: [], speed: 60, name: projecttitle, likeCnt: 0, visit: 0, isopen: 'true', user: null, messages: [], functions: [], tables: [], interface: {canvasWidth: 475, menuWidth: 288, object: '7y0y'}, externalModules: [], isPracticalCourse: false, blockLog: {categories: ['event', 'repeat', 'walk'], when_run_button_click: 1, repeat_basic: 1, number: 2, move_direction: 1}}
  })
})).json()).data.createProject.result.id
await fetch('https://playentry.org/graphql', {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify({
query: `
mutation TOGGLE_ISOPEN_PROJECT ($id: ID!) {
toggleIsopenProject(id: $id) {
status
}
}`,
variables: {id: projectid}
})
});
}
