async function load() {
	await import('https://threejs.org/build/three.min.js');
	var script = document.body.createElement('script');
	script.src = 'https://threejs.org/build/three.min.js';
}
function main() {
	const canvas = document.querySelector('#entryCanvas');
	try {
		const renderer = new THREE.WebGLRenderer({canvas});
	}
	catch {
		alert('WebGL을 지원하지 않습니다.');
	}
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
	function resizeRendererToDisplaySize(renderer) {
		const canvas = renderer.domElement;
		const width = canvas.clientWidth;
		const height = canvas.clientHeight;
		const needResize = canvas.width !== width || canvas.height !== height;
		if (needResize) {
			renderer.setSize(width, height, false);
		}
		return needResize;
	}
	if (resizeRendererToDisplaySize(renderer)) {
		const canvas = renderer.domElement;
		camera.aspect = canvas.clientWidth / canvas.clientHeight;
		camera.updateProjectionMatrix();
	}
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
console.log('Entry3D Beta 2, Made by entry62045');
