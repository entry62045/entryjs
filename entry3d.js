async function load() {
	await import('https://threejs.org/build/three.min.js');
}
function main() {
	const canvas = document.querySelector('#entryCanvas');
	const renderer = new THREE.WebGLRenderer({canvas, antialias: true, preserveDrawingBuffer: true});
	const fov = 75;
	const aspect = 2;  // 캔버스 기본값
	const near = 0.1;
	const far = 200;
	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.z = 5;
	const scene = new THREE.Scene();
	const boxWidth = 3;
	const boxHeight = 3;
	const boxDepth = 3;
	const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
	const material = new THREE.MeshPhongMaterial({color: 0x44aa88});  // 녹색 파란색
	const cube = new THREE.Mesh(geometry, material);
	scene.add(cube);
	const color = 0xFFFFFF;
	const intensity = 1;
	const light = new THREE.DirectionalLight(color, intensity);
	light.position.set(-1, 2, 4);
	scene.add(light);
	renderer.render(scene, camera);
	function render(time) {
		time *= 0.001;  // 시간을 초로 변환
		
		cube.rotation.x = time;
		cube.rotation.y = time;
		
		renderer.render(scene, camera);
		
		requestAnimationFrame(render);
	}
	requestAnimationFrame(render);
}
load();
main();
