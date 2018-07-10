'use strict';
require.config({
    paths: {
        'phaser-ce': 'node_modules/phaser-ce/build/phaser.min',
        'three': 'node_modules/three/three.min',
    },
    shim: {
        'phaser-ce': {
            exports: 'Phaser'
        },
        'three': {
            exports: 'THREE'
        },
    }
});
