const keyNames = ["d", "r", "f", "t", "g"];

class Piano {
    constructor(keys) {
        this.keys = keys;
        this.piano = document.getElementById("piano");
        this.whiteKeysDisplay = document.querySelector(".white-keys");
        this.blackKeysDisplay = document.querySelector(".black-keys");
    }

    createKey(name, parent, cls, id) {
        const key = document.createElement("div");
        key.innerText = name;
        key.className = cls;
        key.id = id;
        parent.append(key);
    }

    createBoard(totalKeys = this.keys.length) {
        for (let i = 0; i < totalKeys; i++) {
            switch (this.keys[i]) {
                case "d":
                    this.createKey(this.keys[i], this.whiteKeysDisplay, "white", "c");
                    break;
                case "r":
                    this.createKey(this.keys[i], this.blackKeysDisplay, "black", "cs");
                    break;
                case "f":
                    this.createKey(this.keys[i], this.whiteKeysDisplay, "white", "d");
                    break;
                case "t":
                    this.createKey(this.keys[i], this.blackKeysDisplay, "black", "ef");
                    break;
                case "g":
                    this.createKey(this.keys[i], this.whiteKeysDisplay, "white", "e");
                    break;
            }
        }
    }
}

const myPiano = new Piano(keyNames);
myPiano.createBoard();
