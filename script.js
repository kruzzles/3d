let scene, camera, renderer, cube;

function init() {

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const texture = new THREE.TextureLoader().load('space.jpeg');
const material = new THREE.MeshBasicMaterial({ map: texture });
cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;  

}

function animate() { 
    requestAnimationFrame(animate);


    document.addEventListener('mousemove', onDocumentMouseMove)

    let mouseX = 0;
    let MouseY = 0;

    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    onDocumentMouseMove = (event) => {
        mouseX = (event.clientX - windowX)
        mouseY = (event.clientX - windowY)

    }

    document.addEventListener('mousemove', onDocumentMouseMove)

    // let mouseX = 0;
    // let MouseY = 0;

    // let targetX = 0;
    // let targetY = 0;

    const windowX = window.innerWidth / 2;
    const windowY = window.innerHeight / 2;

    function onDocumentMouseMove(event) {
        mouseX = (event.clientX - windowX)
        mouseY = (event.clientY - windowY)
    }

    targetX = mouseX * .001
    targetY = mouseY * .001


    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.x += .05 * (targetY - cube.rotation.x)
    cube.rotation.y += .05 * (targetX - cube.rotation.y)
    cube.rotation.z += -.05 * (targetX - cube.rotation.y)

    renderer.render(scene, camera);



}





//resize

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);







init();
animate();