export class ConfigGameClass {

    #widthCanvas;
    #heightCanvas;
    #extraSizeHeight;
    #rows;
    #columns;
    #imageSize;
    #speedPacman;
    #livesPacman;
    #maxLevel;
    #maps;

    constructor() {
        this.#widthCanvas = 448; 
        this.#heightCanvas = 448; 
        this.#extraSizeHeight = 80;
        this.#rows = 14;
        this.#columns = 14;
        this.#imageSize = 32;
        this.#speedPacman = 32;
        this.#livesPacman = 3;
        this.#maxLevel = 3;

        this.#maps = [
            [ // nivell 0
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 11, 2, 0, 1],
                [1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 11, 0, 0, 6, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1, 2, 1, 1, 1, 0, 14, 1],
                [1, 11, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 11, 0, 0, 2, 1, 0, 1, 1, 0, 11, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 15, 2, 0, 2, 0, 0, 0, 0, 11, 0, 2, 4, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ],
        ];
    }

    getWidthCanvas() {
        return this.#widthCanvas;
    }

    getHeightCanvas() {
        return this.#heightCanvas;
    }

    getExtraSizeHeight() {
        return this.#extraSizeHeight;
    }

    getRows() {
        return this.#rows;
    }

    getColumns() {
        return this.#columns;
    }

    getImageSize() {
        return this.#imageSize;
    }

    getSpeedPacman() {
        return this.#speedPacman;
    }

    getLivesPacman() {
        return this.#livesPacman;
    }

    getMaxLevel() {
        return this.#maxLevel;
    }
    // #ROWS = 14;
    // #COLUMNS = 14;
    // #IMAGE_SIZE = 32;
    // #EXTRA_SIZE_HEIGHT = 80;
    // #SPEED_PACMAN = 32;
    // #LIVES_PACMAN = 3;
    // #WIDTH_CANVAS;
    // #HEIGHT_CANVAS;
    // #map = [
    //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    //     [1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 11, 2, 0, 1],
    //     [1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 11, 0, 0, 6, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 1, 2, 1, 1, 1, 0, 14, 1],
    //     [1, 11, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 11, 0, 0, 2, 1, 0, 1, 1, 0, 11, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    //     [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 15, 2, 0, 2, 0, 0, 0, 0, 11, 0, 2, 4, 1],
    //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    // ];
    // #mapTwo = [
    //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    //     [1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 11, 2, 0, 1],
    //     [1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 11, 0, 0, 6, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 1, 2, 1, 1, 1, 0, 14, 1],
    //     [1, 11, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 11, 0, 0, 2, 1, 0, 1, 1, 0, 11, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    //     [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 15, 2, 0, 2, 0, 0, 0, 0, 11, 0, 2, 4, 1],
    //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    // ];
    // #mapThree = [
    //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    //     [1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 11, 2, 0, 1],
    //     [1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 11, 0, 0, 6, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 1, 2, 1, 1, 1, 0, 14, 1],
    //     [1, 11, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 11, 0, 0, 2, 1, 0, 1, 1, 0, 11, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    //     [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 15, 2, 0, 2, 0, 0, 0, 0, 11, 0, 2, 4, 1],
    //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    // ];

    // constructor() {
    //     this.WIDTH_CANVAS = this.#IMAGE_SIZE * this.#COLUMNS;
    //     this.HEIGHT_CANVAS = this.#IMAGE_SIZE * this.#ROWS;
    // }

    // getrows() {
    //     return this.#ROWS;
    // }
    // getcolumns() {
    //     return this.#COLUMNS;
    // }
    // getimageSize() {
    //     return this.#IMAGE_SIZE;
    // }
    // getextraSizeHeight() {
    //     return this.#EXTRA_SIZE_HEIGHT;
    // }
    // getspeedPacman() {
    //     return this.#SPEED_PACMAN;
    // }
    // getlivesPacman() {
    //     return this.#LIVES_PACMAN;
    // }
    // getLevelMap(level) {
    //     if (level === 0) {
    //         return this.#map;
    //     } else if (level === 1) {
    //         return this.#mapTwo;
    //     } else if (level === 2) {
    //         return this.#mapThree;
    //     } else {
    //         console.log("Error, no existeix aquest nivell");
    //     }
    // }

    // getwidthCanvas() {
    //     return this.#IMAGE_SIZE * this.#COLUMNS;
    // }
    // getheightCanvas() {
    //     return this.#IMAGE_SIZE * this.#ROWS;
    // }
}