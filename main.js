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
            switch (this.keys[i].name) {
                case "d":
                    this.createKey(this.keys[i].name, this.whiteKeysDisplay, "white", "c");
                    break;
                case "r":
                    this.createKey(this.keys[i].name, this.blackKeysDisplay, "black", "cs");
                    break;
                case "f":
                    this.createKey(this.keys[i].name, this.whiteKeysDisplay, "white", "d");
                    break;
                case "t":
                    this.createKey(this.keys[i].name, this.blackKeysDisplay, "black", "ef");
                    break;
                case "g":
                    this.createKey(this.keys[i].name, this.whiteKeysDisplay, "white", "e");
                    break;
                case "h":
                    this.createKey(this.keys[i].name, this.whiteKeysDisplay, "white", "f");
                    break;
                case "u":
                    this.createKey(this.keys[i].name, this.blackKeysDisplay, "black", "fs");
                    break;
                case "j":
                    this.createKey(this.keys[i].name, this.whiteKeysDisplay, "white", "g");
                    break;
                case "i":
                    this.createKey(this.keys[i].name, this.blackKeysDisplay, "black", "af");
                    break;
                case "k":
                    this.createKey(this.keys[i].name, this.whiteKeysDisplay, "white", "a");
                    break;
                case "o":
                    this.createKey(this.keys[i].name, this.blackKeysDisplay, "black", "bf");
                    break;
                case "l":
                    this.createKey(this.keys[i].name, this.whiteKeysDisplay, "white", "b");
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

const keysInfo = [
    {
        name: "d",
        sound: "",
    },
    {
        name: "r",
        sound: "",
    },
    {
        name: "f",
        sound: "",
    },
    {
        name: "t",
        sound: "",
    },
    {
        name: "g",
        sound: "",
    },
    {
        name: "h",
        sound: "",
    },
    {
        name: "u",
        sound: "",
    },
    {
        name: "j",
        sound: "",
    },
    {
        name: "i",
        sound: "",
    },
    {
        name: "k",
        sound: "",
    },
    {
        name: "o",
        sound: "",
    },
    {
        name: "l",
        sound: "",
    },
];

const myPiano = new Piano(keysInfo);
myPiano.createBoard();

console.log(storageDOM);
