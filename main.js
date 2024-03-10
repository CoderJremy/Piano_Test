const storageDOM = [];

class Piano {
    constructor(keys) {
        this.keys = keys;
        this.piano = document.getElementById("piano");
        this.whiteKeysDisplay = document.querySelector(".white-keys");
        this.blackKeysDisplay = document.querySelector(".black-keys");
    }

    createKey(name, sound, parent, cls, id) {
        const key = document.createElement("div");
        key.innerText = name;
        key.className = cls;
        key.classList.add("key");
        key.id = id;
        storageDOM.push(key);
        parent.append(key);

        this.handleKeyPress(name, key, sound);
        this.handleKeyRelease(name, key);
    }

    createBoard(totalKeys = this.keys.length) {
        for (let i = 0; i < totalKeys; i++) {
            switch (this.keys[i].name) {
                case "d":
                    this.createKey(
                        this.keys[i].name,
                        this.keys[i].soundPath,
                        this.whiteKeysDisplay,
                        "white",
                        "c"
                    );
                    break;
                case "r":
                    this.createKey(
                        this.keys[i].name,
                        this.keys[i].soundPath,
                        this.blackKeysDisplay,
                        "black",
                        "cs"
                    );
                    break;
                case "f":
                    this.createKey(
                        this.keys[i].name,
                        this.keys[i].soundPath,
                        this.whiteKeysDisplay,
                        "white",
                        "d"
                    );
                    break;
                case "t":
                    this.createKey(
                        this.keys[i].name,
                        this.keys[i].soundPath,
                        this.blackKeysDisplay,
                        "black",
                        "ef"
                    );
                    break;
                case "g":
                    this.createKey(
                        this.keys[i].name,
                        this.keys[i].soundPath,
                        this.whiteKeysDisplay,
                        "white",
                        "e"
                    );
                    break;
                case "h":
                    this.createKey(
                        this.keys[i].name,
                        this.keys[i].soundPath,
                        this.whiteKeysDisplay,
                        "white",
                        "f"
                    );
                    break;
                case "u":
                    this.createKey(
                        this.keys[i].name,
                        this.keys[i].soundPath,
                        this.blackKeysDisplay,
                        "black",
                        "fs"
                    );
                    break;
                case "j":
                    this.createKey(
                        this.keys[i].name,
                        this.keys[i].soundPath,
                        this.whiteKeysDisplay,
                        "white",
                        "g"
                    );
                    break;
                case "i":
                    this.createKey(
                        this.keys[i].name,
                        this.keys[i].soundPath,
                        this.blackKeysDisplay,
                        "black",
                        "af"
                    );
                    break;
                case "k":
                    this.createKey(
                        this.keys[i].name,
                        this.keys[i].soundPath,
                        this.whiteKeysDisplay,
                        "white",
                        "a"
                    );
                    break;
                case "o":
                    this.createKey(
                        this.keys[i].name,
                        this.keys[i].soundPath,
                        this.blackKeysDisplay,
                        "black",
                        "bf"
                    );
                    break;
                case "l":
                    this.createKey(
                        this.keys[i].name,
                        this.keys[i].soundPath,
                        this.whiteKeysDisplay,
                        "white",
                        "b"
                    );
                    break;
            }
        }
    }

    handleKeyPress(char, key, key2Play) {
        document.addEventListener("keydown", (event) => {
            if (event.key.toLowerCase() === char.toLowerCase()) {
                key.classList.add("pressed");
                const keySound = new Audio(key2Play);
                keySound.play();
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

const keysInfo = [
    {
        name: "d",
        soundPath: "./sounds/C4.mp3",
    },
    {
        name: "r",
        soundPath: "./sounds/Db4.mp3",
    },
    {
        name: "f",
        soundPath: "./sounds/D4.mp3",
    },
    {
        name: "t",
        soundPath: "./sounds/Eb4.mp3",
    },
    {
        name: "g",
        soundPath: "./sounds/E4.mp3",
    },
    {
        name: "h",
        soundPath: "./sounds/F4.mp3",
    },
    {
        name: "u",
        soundPath: "./sounds/Gb4.mp3",
    },
    {
        name: "j",
        soundPath: "./sounds/G4.mp3",
    },
    {
        name: "i",
        soundPath: "./sounds/Ab4.mp3",
    },
    {
        name: "k",
        soundPath: "./sounds/A4.mp3",
    },
    {
        name: "o",
        soundPath: "./sounds/Bb4.mp3",
    },
    {
        name: "l",
        soundPath: "./sounds/B4.mp3",
    },
];

const myPiano = new Piano(keysInfo);
myPiano.createBoard();

console.log(storageDOM);
