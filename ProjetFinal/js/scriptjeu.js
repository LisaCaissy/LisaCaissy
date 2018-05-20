/**Lisa Caissy-Animation Web**/

//Aliases
let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Graphics = PIXI.Graphics,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Text = PIXI.Text,
    TextStyle = PIXI.TextStyle;

//Create a Pixi Application
let app = new Application({
        width: 250,
        height: 250,
        antialiasing: true,
        transparent: false,
        resolution: 1
    }
);

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

loader
    .add("medias/bean.png")
    .add("medias/background.png")
    .load(setup);

function setup() {

    gameScene = new Container();
    app.stage.addChild(gameScene);

    background = new Sprite(resources["medias/background.png"].texture);

    bean = new Sprite(resources["medias/bean.png"].texture);
    bean.x = 10;
    bean.y = 10;
    bean.vx = 0;
    bean.vy = 0;

    gameScene.addChild(background);
    gameScene.addChild(bean);

    }

    let left = keyboard(37),
        up = keyboard(38),
        right = keyboard(39),
        down = keyboard(40);

    left.press = function () {

        bean.vx = -5;
        bean.vy = 0;
    };

    left.release = function () {

        if (!right.isDown && bean.vy === 0) {
            bean.vx = 0;
        }
    };

    up.press = function () {
        bean.vy = -5;
        bean.vx = 0;
    };
    up.release = function () {
        if (!down.isDown && bean.vx === 0) {
            bean.vy = 0;
        }
    };

    right.press = function () {
        bean.vx = 5;
        bean.vy = 0;
    };
    right.release = function () {
        if (!left.isDown && bean.vy === 0) {
            bean.vx = 0;
        }
    };

    down.press = function () {
        bean.vy = 5;
        bean.vx = 0;
    };
    down.release = function () {
        if (!up.isDown && bean.vx === 0) {
            bean.vy = 0;
        }
    };

    state = play;
    app.ticker.add(delta = > gameLoop(delta));


}


function gameLoop(delta) {

    state(delta);
}

function play(delta) {

    bean.x += bean.vx;
    bean.y += bean.vy;

}

//The `keyboard` helper function
function keyboard(keyCode) {
    var key = {};
    key.code = keyCode;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;
    //The `downHandler`
    key.downHandler = event => {
        if (event.keyCode === key.code) {
            if (key.isUp && key.press) key.press();
            key.isDown = true;
            key.isUp = false;
        }
        event.preventDefault();
    };

    //The `upHandler`
    key.upHandler = event => {
        if (event.keyCode === key.code) {
            if (key.isDown && key.release) key.release();
            key.isDown = false;
            key.isUp = true;
        }
        event.preventDefault();
    };

    //Attach event listeners
    window.addEventListener(
        "keydown", key.downHandler.bind(key), false
    );
    window.addEventListener(
        "keyup", key.upHandler.bind(key), false
    );
    return key;
}



