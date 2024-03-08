const storageDOM = [];

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
        key.classList.add("key");
        key.id = id;
        storageDOM.push(key);
        parent.append(key);

        this.handleKeyPress(name, key);
        this.handleKeyRelease(name, key);
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

    handleKeyPress(char, key) {
        document.addEventListener("keydown", (event) => {
            if (event.key.toLowerCase() === char.toLowerCase()) {
                key.classList.add("pressed");
            }
        });
    }

    handleKeyRelease(char, key) {
        document.addEventListener("keyup", (event) => {
            if (event.key.toLowerCase() === char.toLowerCase()) {
                key.classList.remove("pressed");
            }
        });
    }
}

const keyNames = ["d", "r", "f", "t", "g"];
const myPiano = new Piano(keyNames);
myPiano.createBoard();

console.log(storageDOM);
