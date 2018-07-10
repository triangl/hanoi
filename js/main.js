require([
    'three'
], function (
    THREE
) {
    var renderer, scene, camera, mesh;

    init();
    animate();

    function init() {
        // on initialise le moteur de rendu
        renderer = new THREE.WebGLRenderer();

        // si WebGL ne fonctionne pas sur votre navigateur vous pouvez utiliser le moteur de rendu Canvas à la place
        // renderer = new THREE.CanvasRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('container').appendChild(renderer.domElement);

        // on initialise la scène
        scene = new THREE.Scene();

        // on initialise la camera que l’on place ensuite sur la scène
        camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.set(0, 0, 1000);
        scene.add(camera);

        // createCube();

        createSphere();

    }

    function animate() {
        requestAnimationFrame(animate);
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;
        // on effectue le rendu de la scène
        renderer.render(scene, camera);
    }

    /**
     * on créé la sphère et on lui applique une texture sous forme d’image
     */
    function createSphere() {
        var geometry = new THREE.SphereGeometry(200, 32, 32);
        var material = new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('images/metal.jpg', new THREE.SphericalReflectionMapping()),
            overdraw: true
        });
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // on ajoute une lumière blanche
        var lumiere = new THREE.DirectionalLight(0xffffff, 1.0);
        lumiere.position.set(0, 0, 400);
        scene.add(lumiere);
    }

    /**
     * on créé un  cube au quel on définie un matériau puis on l’ajoute à la scène
     */
    function createCube() {
        var geometry = new THREE.CubeGeometry(200, 200, 200);
        var material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
    }

});
