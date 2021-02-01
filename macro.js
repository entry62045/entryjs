function start() {
  $('.editDescriptionBtn').trigger('click');
  $('.editConfirmBtn').trigger('click');
  console.log('작품이 업데이트되었습니다');
}
var macrotime = 0;
var setmacrotime = 0;
macrotime = prompt("매크로 사용 시간 입력(취소 시 0 입력)");
setmacrotime = macrotime * 1000;
if (setmacrotime != 0) {
  console.log('매크로를 시작합니다.');
  setInterval(start, setmacrotime);
}
