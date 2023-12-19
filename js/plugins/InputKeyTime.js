//=============================================================================
// InputKeyTime.js
//=============================================================================

/*
Title: Input Key Time
Author: AL7 (Alexandr_7), DK (Denis Kuznetsov), mjshi
Site DK: https://dk-plugins.ru
Site mjshi: https://mjshi.weebly.com/mv-chain-commands.html
Version: 2.1
Release: 13.04.2020
First release: 06.04.2020
Supported languages: English
*/

/*:
 * @plugindesc InputKeyTime
 * @author AL7, DK and mjshi
 * @help

 ### Info about plugin ###
 Title: InputKeyTime
 Author: AL7 (Alexandr_7), DK (Denis Kuznetsov), mjshi
 Site DK: https://dk-plugins.ru
 Site mjshi: https://mjshi.weebly.com/mv-chain-commands.html
 Version: 2.1
 Release: 13.04.2020
 First release: 06.04.2020
 Supported languages: English

 #### License and terms of use ###

 You can:
 -Free use the plugin for your commercial and non commercial projects.
 -Translate the plugin to other languages (please, inform, if you do this)

 You can't:
 -Delete or change any information about plugin (Title, authorship, contact information, version and release)
 -Change code of plugin out of border "Plugin settings" and "End of plugin settings" (if you found a bug contact me)

 #### Important: ###

 This authorship of the plugin belongs to 3 persons:
 * Alexander 7
 * Dk
 * mjshi

 Any of them has the right to prohibit the distribution of the plugin.

 * @param PVariables
 * @text --- Variables ---
 * @default ---------------------------------
 * 
 * @param PDefaultSettings
 * @text --- Standard mini-game settings ---
 * @default ---------------------------------
 *
 * @param PSettings
 * @text --- Settings ---
 * @default ---------------------------------
 * 
 * @param Var Id Out Status Game
 * @parent PVariables
 * @desc Variable with the status of the end of the game. 1 - Victory. 2 - Losses.
 * @type variable
 * @default 1
 * 
 * @param Number of keys
 * @parent PDefaultSettings
 * @desc The number of keys displayed on the screen.
 * @type number
 * @min 1
 * @default 5
 * 
 * @param Number of Key Lists
 * @parent PDefaultSettings
 * @desc The number of lists of keys to press.
 * Number of keys to press total = "Number of Key Lists" * "Number of keys"
 * @type number
 * @min 1
 * @default 5
 * 
 * @param Number of attempts
 * @parent PDefaultSettings
 * @desc The number of attempts before losing.
 * 0 - Infinite number of attempts.
 * @type number
 * @min 0
 * @default 3
 * 
 * @param Defeat behavior
 * @parent PDefaultSettings
 * @desc The behavior of the game when the number of attempts is greater than zero or infinite.
 * @type select
 * @option Start with the same keys.
 * @value 0
 * @option Start with a new key generation
 * @value 1
 * @option Start from the beginning
 * @value 2
 * @default 0
 * 
 * @param Game timer
 * @parent PDefaultSettings
 * @desc Game timer
 * 60 - 1 sec.
 * @type number
 * @min 300
 * @default 1500
 * 
 * @param Settings key
 * @parent PSettings
 * @desc Settings key
 * @type struct<Keys>
 * @default {"Keys":"[\"{\\\"Name Key\\\":\\\"down\\\",\\\"Key Picture\\\":\\\"iconIKT_down\\\",\\\"Picture of a pressed key\\\":\\\"iconIKT_down_Pressed\\\"}\",\"{\\\"Name Key\\\":\\\"left\\\",\\\"Key Picture\\\":\\\"iconIKT_left\\\",\\\"Picture of a pressed key\\\":\\\"iconIKT_left_Pressed\\\"}\",\"{\\\"Name Key\\\":\\\"right\\\",\\\"Key Picture\\\":\\\"iconIKT_right\\\",\\\"Picture of a pressed key\\\":\\\"iconIKT_right_Pressed\\\"}\",\"{\\\"Name Key\\\":\\\"up\\\",\\\"Key Picture\\\":\\\"iconIKT_up\\\",\\\"Picture of a pressed key\\\":\\\"iconIKT_up_Pressed\\\"}\"]","Position":"{\"Type X Position\":\"2\",\"Cusstom X Position / X Offset\":\"0\",\"Type Y Position\":\"0\",\"Cusstom Y Position / Y Offset\":\"299\"}"}
 *
 * @param Style Game
 * @parent PSettings
 * @desc Style Game
 * @type struct<StyleGame>
 * @default {"Background":"{\"Enabled Background\":\"true\",\"Background\":\"bg\",\"Background X Position\":\"0\",\"Background Y Position\":\"-608\",\"Background Opacity\":\"0\",\"Enabled Background Move\":\"true\",\"Background Move Timer\":\"60\",\"Background Move X Position\":\"0\",\"Background Move Y Position\":\"0\",\"Background Move Opacity\":\"255\"}","Timer bar":"{\"Enabled\":\"true\",\"Bar BG\":\"{\\\"Background\\\":\\\"bar_empty\\\",\\\"Bar Position\\\":\\\"{\\\\\\\"Type X Position\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"Cusstom X Position / X Offset\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Type Y Position\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Cusstom Y Position / Y Offset\\\\\\\":\\\\\\\"255\\\\\\\"}\\\"}\",\"Bar FG\":\"{\\\"Foreground\\\":\\\"bar_full\\\",\\\"Meter X Shift\\\":\\\"5\\\",\\\"Meter Y Shift\\\":\\\"5\\\",\\\"Meter Width\\\":\\\"236\\\",\\\"Meter Height\\\":\\\"7\\\"}\",\"Enabled Animation Filling / Descending\":\"true\",\"Timer Animation Filling / Descending\":\"60\"}","Game completion bar":"{\"Enabled\":\"true\",\"Bar BG\":\"{\\\"Background\\\":\\\"bar_empty\\\",\\\"Bar Position\\\":\\\"{\\\\\\\"Type X Position\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"Cusstom X Position / X Offset\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Type Y Position\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Cusstom Y Position / Y Offset\\\\\\\":\\\\\\\"346\\\\\\\"}\\\"}\",\"Bar FG\":\"{\\\"Foreground\\\":\\\"bar_full\\\",\\\"Meter X Shift\\\":\\\"5\\\",\\\"Meter Y Shift\\\":\\\"5\\\",\\\"Meter Width\\\":\\\"236\\\",\\\"Meter Height\\\":\\\"7\\\"}\",\"Enabled Animation Filling / Descending\":\"true\",\"Timer Animation Filling / Descending\":\"60\"}","Background for key":"{\"Enabled\":\"true\",\"Key Background\":\"BGIKT_NoSelect\",\"Background pressed key\":\"BGIKT_NoSelect\",\"Background of selected key\":\"BGIKT_Select\"}"}
 *
 * @param Sounds Game
 * @parent PSettings
 * @desc Sounds Game
 * @type struct<SoundsGame>
 * @default {"Success SFX":"{\"File\":\"Cursor1\",\"Volume\":\"100\",\"Pitch\":\"100\",\"Pan\":\"0\"}","Error SFX":"{\"File\":\"Buzzer1\",\"Volume\":\"100\",\"Pitch\":\"100\",\"Pan\":\"0\"}","Success List SFX":"{\"File\":\"Absorb2\",\"Volume\":\"100\",\"Pitch\":\"100\",\"Pan\":\"0\"}"}
 *
 * @param Delay next list / end of game
 * @parent PSettings
 * @desc Delay before displaying the next list of keys or ending the game. 60 frames - 1 second.
 * @type number
 * @default 60
 */

//#region Структура настройки клавишь

/*~struct~Keys:

 * @param Keys
 * @desc Keys
 * @type struct<Key>[]
 *
 * @param Position
 * @desc Position (Custom X position is indicated only for the 1st picture. The rest follows 1st.)
 * @type struct<Position>
 *
 */

/*~struct~Key:

 * @param Name Key
 * @desc The name of the key from the "DKTools_Full_Input" plugin.
 * @type string
 * 
 * @param Key Picture
 * @desc Picture for not pressed key.
 * @type file
 * @dir img/IKTSystem/
 * @require
 * 
 * @param Picture of a pressed key
 * @desc Picture for pressed key
 * @type file
 * @dir img/IKTSystem/
 * @require
 *
 */

//#endregion

/*~struct~StyleGame:

 * @param Background
 * @desc Background Game
 * @type struct<StyleGameBackground>
 * 
 * @param Timer bar
 * @desc Timer bar options
 * @type struct<Bar>
 * 
 * @param Game completion bar
 * @desc Game completion bar
 * @type struct<Bar>
 * 
 * @param Background for key
 * @desc Background Pictures for Key
 * @type struct<BackgroundKey>
 */

//#region Структура Фона

/*~struct~StyleGameBackground:

 * @param Enabled Background
 * @desc Enabled Background
 * @type boolean
 * 
 * @param Background
 * @desc Background
 * @type file
 * @dir img/IKTSystem/
 * 
 * @param Background X Position
 * @desc Background X Position
 * @type number
 * @min -10000
 * @max 10000
 * 
 * @param Background Y Position
 * @desc Background X Position
 * @type number
 * @min -10000
 * @max 10000
 * 
 * @param Background Opacity
 * @desc Background Opacity
 * @type number
 * @min 0
 * @max 255
 * 
 * @param Enabled Background Move
 * @desc Enabled Background Move
 * @type boolean
 * 
 * @param Background Move Timer
 * @desc Background Move Timer (60 = 1 sec) (If "Enabled Background Move" is true)
 * @type number
 * 
 * @param Background Move X Position
 * @desc Background Move X Position (If "Enabled Background Move" is true)
 * @type number
 * @min -10000
 * @max 10000
 *
 * @param Background Move Y Position
 * @desc Background Move Y Position (If "Enabled Background Move" is true)
 * @type number
 * @min -10000
 * @max 10000
 * 
 * @param Background Move Opacity
 * @desc Background Move Opacity (If "Enabled Background Move" is true)
 * @type number
 * @min 0
 * @max 255
 * 
 */

//#endregion

//#region Структура полоски

/*~struct~Bar:

 * @param Enabled
 * @desc Enabled Bar
 * @type boolean
 *
 * @param Bar BG
 * @desc Bar background
 * @type struct<BarBG>
 *
 * @param Bar FG
 * @desc Bar foreground
 * @type struct<BarFG>
 * 
 * @param Enabled Animation Filling / Descending
 * @desc Enabled Background Move
 * @type boolean
 * 
 * @param Timer Animation Filling / Descending
 * @desc Timer (60 = 1 sec) (If "Enabled Animation Filling / Descending" is true)
 * @type number
 */

/*~struct~BarBG:
 
 * @param Background
 * @desc Background Bar
 * @type file
 * @dir img/IKTSystem/
 * 
 * @param Bar Position
 * @desc position of the bar background.
 * @type struct<Position>
 */

/*~struct~BarFG:

 * @param Foreground
 * @desc Foreground
 * @type file
 * @dir img/IKTSystem/
 *
 * @param Meter X Shift
 * @desc X position of the meter relative to Bar BG's X position.
 * @type number
 *
 * @param Meter Y Shift
 * @desc Y position of the meter relative to Bar BG's Y position.
 * @type number
 *
 * @param Meter Width
 * @desc Width of the meter image.
 * @type number
 *
 * @param Meter Height
 * @desc Height of the meter image.
 * @type number
 */

//#endregion

//#region Структура фона клавишь

/*~struct~BackgroundKey:

 * @param Enabled
 * @desc Enabled Background for key
 * @type boolean
 *
 * @param Key Background
 * @desc Background for not selected and not pressed key
 * @type file
 * @dir img/IKTSystem/
 *
 * @param Background pressed key
 * @desc Background for pressed key
 * @type file
 * @dir img/IKTSystem/
 * 
 * @param Background of selected key
 * @desc Background for selected not pressed key
 * @type file
 * @dir img/IKTSystem/
 */

//#endregion

//#region Структура звуков

/*~struct~SoundsGame:

 * @param Success SFX
 * @desc The sound to play when the sequence is complete.
 * @type struct<SoundsGameSFX>
 * 
 * @param Error SFX
 * @desc The sound to play when an incorrect button is pressed.
 * @type struct<SoundsGameSFX>
 * 
 * @param Success List SFX
 * @desc The sound to play when the sequence is complete list.
 * @type struct<SoundsGameSFX>
 */

/*~struct~SoundsGameSFX:

 * @param File
 * @desc The sound to play when the sequence is complete.
 * @type file
 * @dir audio/se
 * 
 * @param Volume
 * @desc Volume SFX.
 * @type number
 * @min 0
 * @max 100
 *
 * @param Pitch
 * @desc Pitch SFX.
 * @type number
 * @min 0
 * @max 150
 * 
 * @param Pan
 * @desc Pan SFX.
 * @type number
 * @min -100
 * @max 100
 */

//#endregion

//#region

/*~struct~Position:

 * @param Type X Position
 * @desc Type X Position
 * @type select
 * @option Custom
 * @value 0
 * @option Left
 * @value 1
 * @option Center
 * @value 2
 * @option Right
 * @value 3
 * 
 * @param Cusstom X Position / X Offset
 * @type number
 * 
 * @param Type Y Position
 * @desc Type Y Position
 * @type select
 * @option Custom
 * @value 0
 * @option Up
 * @value 1
 * @option Center
 * @value 2
 * @option Down
 * @value 3
 *
 * @param Cusstom Y Position / Y Offset
 * @type number
 */

//#endregion

"use strict";

var Imported = Imported || {};
Imported.DKTools_Input_Key_Time = "1.0";

if (Imported.DKTools && Imported.DKTools_Full_Input) {
    DKTools.PluginManager.requirePlugin("DKTools", "8.0.1");
    DKTools.PluginManager.requirePlugin("DKTools_Full_Input", "3.0");
} else {
    throw new Error('No plugin "DKTools" or "DKTools_Full_Input"! Plugin "Input Key Time" will not work!');
}

const InputKeyTimeParam = new DKTools.ParameterManager("InputKeyTime");

var InputKeyTime = InputKeyTime || {};

InputKeyTime.DirMG = "img/IKTSystem/";

///Количество кнопок на 1 список
InputKeyTime.countKeys = InputKeyTimeParam.get("Number of keys");

///Количество Списков
InputKeyTime.countListKeys = InputKeyTimeParam.get("Number of Key Lists");

//Количество попыток
InputKeyTime.countAttempts = InputKeyTimeParam.get("Number of attempts");

//Поведение игры если остались попытки и допущена ошибка
InputKeyTime.defeatBehavior = InputKeyTimeParam.get("Defeat behavior");

//Таймер игры в кадрах
InputKeyTime.frameTimer = InputKeyTimeParam.get("Game timer");

InputKeyTime.keys = {
    position: InputKeyTimeParam.get("Settings key", "Position"),
    /* arrKeys: InputKeyTimeParam.get("Settings key", "Keys").reduce(
        (acc, data) => {
            Object.values(data["Name Key"]).forEach((key) => {
                acc["Name Key"][key] = {
                    "Key Picture": ImageManager.loadBitmap(InputKeyTime.DirMG, data["Key Picture"]),
                    "Picture of a pressed key": ImageManager.loadBitmap(InputKeyTime.DirMG, data["Picture of a pressed key"]),
                };
            });

            return acc;
        },
        { "Name Key": {}, "Key Picture": {}, "Picture of a pressed key": {} }
    ), */
    arrKeys: InputKeyTimeParam.get("Settings key", "Keys").reduce(
        (acc, data) => {
            acc["Name Key"].push(data["Name Key"]);
            acc["Key Picture"].push(ImageManager.loadBitmap(InputKeyTime.DirMG, data["Key Picture"]));
            acc["Picture of a pressed key"].push(ImageManager.loadBitmap(InputKeyTime.DirMG, data["Picture of a pressed key"]));

            return acc;
        },
        { "Name Key": [], "Key Picture": [], "Picture of a pressed key": [] }
    ),
};

InputKeyTime.bgGame = {
    isEnabled: InputKeyTimeParam.get("Style Game", "Background", { key: "Enabled Background" }),
    img: ImageManager.loadBitmap(InputKeyTime.DirMG, InputKeyTimeParam.get("Style Game", "Background", { key: "Background" })),
    x: InputKeyTimeParam.get("Style Game", "Background", { key: "Background X Position" }),
    y: InputKeyTimeParam.get("Style Game", "Background", { key: "Background Y Position" }),
    opacity: InputKeyTimeParam.get("Style Game", "Background", { key: "Background Opacity" }),
    isMoveEnabled: InputKeyTimeParam.get("Style Game", "Background", { key: "Enabled Background Move" }),
    animationTimer: InputKeyTimeParam.get("Style Game", "Background", { key: "Background Move Timer" }),
    moveX: InputKeyTimeParam.get("Style Game", "Background", { key: "Background Move X Position" }),
    moveY: InputKeyTimeParam.get("Style Game", "Background", { key: "Background Move Y Position" }),
    moveOpacity: InputKeyTimeParam.get("Style Game", "Background", { key: "Background Move Opacity" }),
};

InputKeyTime.barTimer = {
    isEnabled: InputKeyTimeParam.get("Style Game", "Timer bar", { key: "Enabled" }),
    background: {
        img: ImageManager.loadBitmap(InputKeyTime.DirMG, InputKeyTimeParam.get("Style Game", "Timer bar", { key: "Bar BG" })["Background"]),
        position: InputKeyTimeParam.get("Style Game", "Timer bar", { key: "Bar BG" })["Bar Position"],
    },
    foreground: {
        img: ImageManager.loadBitmap(InputKeyTime.DirMG, InputKeyTimeParam.get("Style Game", "Timer bar", { key: "Bar FG" })["Foreground"]),
        shiftX: InputKeyTimeParam.get("Style Game", "Timer bar", { key: "Bar FG" })["Meter X Shift"],
        shiftY: InputKeyTimeParam.get("Style Game", "Timer bar", { key: "Bar FG" })["Meter Y Shift"],
        width: InputKeyTimeParam.get("Style Game", "Timer bar", { key: "Bar FG" })["Meter Width"],
        height: InputKeyTimeParam.get("Style Game", "Timer bar", { key: "Bar FG" })["Meter Height"],
    },
    isAnimation: InputKeyTimeParam.get("Style Game", "Timer bar", { key: "Enabled Animation Filling / Descending" }),
    animationTimer: InputKeyTimeParam.get("Style Game", "Timer bar", { key: "Timer Animation Filling / Descending" }),
};

InputKeyTime.barList = {
    isEnabled: InputKeyTimeParam.get("Style Game", "Game completion bar", { key: "Enabled" }),
    background: {
        img: ImageManager.loadBitmap(InputKeyTime.DirMG, InputKeyTimeParam.get("Style Game", "Game completion bar", { key: "Bar BG" })["Background"]),
        position: InputKeyTimeParam.get("Style Game", "Game completion bar", { key: "Bar BG" })["Bar Position"],
    },
    foreground: {
        img: ImageManager.loadBitmap(InputKeyTime.DirMG, InputKeyTimeParam.get("Style Game", "Game completion bar", { key: "Bar FG" })["Foreground"]),
        shiftX: InputKeyTimeParam.get("Style Game", "Game completion bar", { key: "Bar FG" })["Meter X Shift"],
        shiftY: InputKeyTimeParam.get("Style Game", "Game completion bar", { key: "Bar FG" })["Meter Y Shift"],
        width: InputKeyTimeParam.get("Style Game", "Game completion bar", { key: "Bar FG" })["Meter Width"],
        height: InputKeyTimeParam.get("Style Game", "Game completion bar", { key: "Bar FG" })["Meter Height"],
    },
    isAnimation: InputKeyTimeParam.get("Style Game", "Game completion bar", { key: "Enabled Animation Filling / Descending" }),
    animationTimer: InputKeyTimeParam.get("Style Game", "Game completion bar", { key: "Timer Animation Filling / Descending" }),
};

InputKeyTime.bgKeys = {
    isEnabled: InputKeyTimeParam.get("Style Game", "Background for key", { key: "Enabled" }),
    background: ImageManager.loadBitmap(InputKeyTime.DirMG, InputKeyTimeParam.get("Style Game", "Background for key", { key: "Key Background" })),
    backgroundPress: ImageManager.loadBitmap(InputKeyTime.DirMG, InputKeyTimeParam.get("Style Game", "Background for key", { key: "Background pressed key" })),
    backgroundSelect: ImageManager.loadBitmap(InputKeyTime.DirMG, InputKeyTimeParam.get("Style Game", "Background for key", { key: "Background of selected key" })),
};

InputKeyTime.soundFX = {
    keyNext: {
        name: InputKeyTimeParam.get("Sounds Game", "Success SFX", { key: "File" }),
        pan: InputKeyTimeParam.get("Sounds Game", "Success SFX", { key: "Pan" }),
        pitch: InputKeyTimeParam.get("Sounds Game", "Success SFX", { key: "Pitch" }),
        volume: InputKeyTimeParam.get("Sounds Game", "Success SFX", { key: "Volume" }),
    },
    keyError: {
        name: InputKeyTimeParam.get("Sounds Game", "Error SFX", { key: "File" }),
        pan: InputKeyTimeParam.get("Sounds Game", "Error SFX", { key: "Pan" }),
        pitch: InputKeyTimeParam.get("Sounds Game", "Error SFX", { key: "Pitch" }),
        volume: InputKeyTimeParam.get("Sounds Game", "Error SFX", { key: "Volume" }),
    },
    listNext: {
        name: InputKeyTimeParam.get("Sounds Game", "Success List SFX", { key: "File" }),
        pan: InputKeyTimeParam.get("Sounds Game", "Success List SFX", { key: "Pan" }),
        pitch: InputKeyTimeParam.get("Sounds Game", "Success List SFX", { key: "Pitch" }),
        volume: InputKeyTimeParam.get("Sounds Game", "Success List SFX", { key: "Volume" }),
    },
};

function Scene_InputKeyTime() {
    this.initialize.apply(this, arguments);
}

Scene_InputKeyTime.prototype = Object.create(Scene_Base.prototype);
Scene_InputKeyTime.prototype.constructor = Scene_InputKeyTime;

Scene_InputKeyTime.prototype.create = function () {
    Scene_Base.prototype.create.call(this);
    this.createGame();
};

Scene_InputKeyTime.prototype.createGame = function () {
    //this.stringKeys - Массив нажимаемых клавишь
    //this.bg - Фон игры.

    //this.imageKeys - Массив спрайтов клавишь

    this.animation = [];

    //#region Создания фона сцены

    this.addChild(new Sprite(SceneManager.backgroundBitmap()));

    this.bg = new DKTools.Sprite();
    this.bg.x = 0;
    this.bg.y = 0;

    if (InputKeyTime.bgGame.isEnabled === true) {
        this.bg.setBitmap(InputKeyTime.bgGame.img);
        this.bg.x = InputKeyTime.bgGame.x;
        this.bg.y = InputKeyTime.bgGame.y;
        this.bg.setOpacity(InputKeyTime.bgGame.opacity);
        if (InputKeyTime.bgGame.isMoveEnabled) {
            this.createAnimations(
                InputKeyTime.bgGame.animationTimer,
                0,
                InputKeyTime.bgGame.animationTimer,
                this.bg,
                InputKeyTime.bgGame.moveX,
                InputKeyTime.bgGame.moveY,
                InputKeyTime.bgGame.moveOpacity
            );
        }
    }

    this.bg.start();
    this.addChild(this.bg);

    //#endregion

    //#region Вывод основного ProgressBar

    if (InputKeyTime.barTimer.isEnabled) {
        this.timerBar = {};

        let setX = 0;
        let setY = 0;

        this.timerBar.bgBar = new DKTools.Sprite(InputKeyTime.barTimer.background.img);

        switch (InputKeyTime.barTimer.background.position["Type X Position"]) {
            case 0:
            case 1:
                setX = InputKeyTime.barTimer.background.position["Cusstom X Position / X Offset"];
                break;
            case 2:
                setX = Graphics.boxWidth / 2 - this.timerBar.bgBar.width / 2 + InputKeyTime.barTimer.background.position["Cusstom X Position / X Offset"];
                break;
            case 3:
                Graphics.boxWidth - this.timerBar.bgBar.width - InputKeyTime.barTimer.background.position["Cusstom X Position / X Offset"];
                break;
        }

        switch (InputKeyTime.barTimer.background.position["Type Y Position"]) {
            case 0:
            case 1:
                setY = InputKeyTime.barTimer.background.position["Cusstom Y Position / Y Offset"];
                break;
            case 2:
                setY = Graphics.boxHeight / 2 - this.timerBar.bgBar.height / 2 + InputKeyTime.barTimer.background.position["Cusstom Y Position / Y Offset"];
                break;
            case 3:
                setY = Graphics.boxHeight - this.timerBar.bgBar.height - InputKeyTime.barTimer.background.position["Cusstom Y Position / Y Offset"];
                break;
        }

        this.timerBar.bgBar.x = setX;
        this.timerBar.bgBar.y = setY;

        this.timerBar.fgBar = new DKTools.Sprite(InputKeyTime.barTimer.foreground.img);
        this.timerBar.fgBar.x = InputKeyTime.barTimer.foreground.shiftX;
        this.timerBar.fgBar.y = InputKeyTime.barTimer.foreground.shiftY;

        if (InputKeyTime.barTimer.isAnimation) {
            this.timerBar.fgBar.setFrame(0, 0, 0, InputKeyTime.barTimer.foreground.height);
            this.createAnimations(
                InputKeyTime.bgGame.animationTimer + InputKeyTime.barTimer.animationTimer,
                InputKeyTime.bgGame.animationTimer,
                InputKeyTime.bgGame.animationTimer + InputKeyTime.barTimer.animationTimer,
                this.timerBar.fgBar,
                undefined,
                undefined,
                undefined,
                0,
                0,
                InputKeyTime.barTimer.foreground.width,
                InputKeyTime.barTimer.foreground.height
            );
        } else this.timerBar.fgBar.setFrame(0, 0, InputKeyTime.barTimer.foreground.width, InputKeyTime.barTimer.foreground.height);

        this.timerBar.fgBar.start();

        this.timerBar.bgBar.addChild(this.timerBar.fgBar);

        this.timerBar.bgBar.start();

        this.bg.addChild(this.timerBar.bgBar);
    }

    //#endregion

    //#region Вывод 2го ProgressBar

    if (InputKeyTime.barList.isEnabled) {
        this.listBar = {};

        let setX = 0;
        let setY = 0;

        this.listBar.bgBar = new DKTools.Sprite(InputKeyTime.barList.background.img);

        switch (InputKeyTime.barList.background.position["Type X Position"]) {
            case 0:
            case 1:
                setX = InputKeyTime.barList.background.position["Cusstom X Position / X Offset"];
                break;
            case 2:
                setX = Graphics.boxWidth / 2 - this.listBar.bgBar.width / 2 + InputKeyTime.barList.background.position["Cusstom X Position / X Offset"];
                break;
            case 3:
                Graphics.boxWidth - this.listBar.bgBar.width - InputKeyTime.barList.background.position["Cusstom X Position / X Offset"];
                break;
        }

        switch (InputKeyTime.barList.background.position["Type Y Position"]) {
            case 0:
            case 1:
                setY = InputKeyTime.barList.background.position["Cusstom Y Position / Y Offset"];
                break;
            case 2:
                setY = Graphics.boxHeight / 2 - this.listBar.bgBar.height / 2 + InputKeyTime.barList.background.position["Cusstom Y Position / Y Offset"];
                break;
            case 3:
                setY = Graphics.boxHeight - this.listBar.bgBar.height - InputKeyTime.barList.background.position["Cusstom Y Position / Y Offset"];
                break;
        }

        this.listBar.bgBar.x = setX;
        this.listBar.bgBar.y = setY;

        this.listBar.fgBar = new DKTools.Sprite(InputKeyTime.barList.foreground.img);
        this.listBar.fgBar.x = InputKeyTime.barList.foreground.shiftX;
        this.listBar.fgBar.y = InputKeyTime.barList.foreground.shiftY;

        if (InputKeyTime.barList.isAnimation) {
            this.listBar.fgBar.setFrame(0, 0, InputKeyTime.barList.foreground.width, InputKeyTime.barList.foreground.height);
            this.createAnimations(
                InputKeyTime.barTimer.animationTimer + (InputKeyTime.bgGame.animationTimer + InputKeyTime.barList.animationTimer),
                InputKeyTime.barTimer.animationTimer + InputKeyTime.bgGame.animationTimer,
                InputKeyTime.barTimer.animationTimer + (InputKeyTime.bgGame.animationTimer + InputKeyTime.barList.animationTimer),
                this.listBar.fgBar,
                undefined,
                undefined,
                undefined,
                0,
                0,
                0,
                InputKeyTime.barList.foreground.height
            );
        } else this.listBar.fgBar.setFrame(0, 0, 0, InputKeyTime.barList.foreground.height);

        this.listBar.fgBar.start();

        this.listBar.bgBar.addChild(this.listBar.fgBar);

        this.listBar.bgBar.start();

        this.bg.addChild(this.listBar.bgBar);
    }

    //#endregion

    //#region Вывод клавишь и фона клавишь если возможно

    this.generateArrayKeys();
    this.imageKeys = [];
    if (InputKeyTime.bgKeys.isEnabled === true) this.bgKeys = [];

    for (var i = 0; i < InputKeyTime.countKeys; i++) {
        this.imageKeys.push(new DKTools.Sprite(InputKeyTime.keys.arrKeys["Key Picture"][this.stringKeys[i]]));

        let setX = 0;
        let setY = 0;

        switch (InputKeyTime.keys.position["Type X Position"]) {
            case 0:
            case 1:
                setX = InputKeyTime.keys.position["Cusstom X Position / X Offset"] + i * this.imageKeys[i].width;
                break;
            case 2:
                setX =
                    Graphics.boxWidth / 2 -
                    (this.imageKeys[i].width * InputKeyTime.countKeys) / 2 +
                    i * this.imageKeys[i].width +
                    InputKeyTime.keys.position["Cusstom X Position / X Offset"];
                break;
            case 3:
                Graphics.boxWidth - this.imageKeys[i].width * InputKeyTime.countKeys - InputKeyTime.keys.position["Cusstom X Position / X Offset"];
                break;
        }

        switch (InputKeyTime.keys.position["Type Y Position"]) {
            case 0:
            case 1:
                setY = InputKeyTime.keys.position["Cusstom Y Position / Y Offset"];
                break;
            case 2:
                setY = Graphics.boxHeight / 2 - this.imageKeys[i].height / 2 + InputKeyTime.keys.position["Cusstom Y Position / Y Offset"];
                break;
            case 3:
                setY = Graphics.boxHeight - this.imageKeys[i].height - InputKeyTime.keys.position["Cusstom Y Position / Y Offset"];
                break;
        }

        if (InputKeyTime.bgKeys.isEnabled === true) {
            if (i === 0) this.bgKeys.push(new DKTools.Sprite(InputKeyTime.bgKeys.backgroundSelect));
            else this.bgKeys.push(new DKTools.Sprite(InputKeyTime.bgKeys.background));

            this.bgKeys[i].x = setX;
            this.bgKeys[i].y = setY;

            this.bgKeys[i].start();

            this.bg.addChild(this.bgKeys[i]);
        }

        this.imageKeys[i].x = setX;
        this.imageKeys[i].y = setY;

        this.imageKeys[i].start();

        this.bg.addChild(this.imageKeys[i]);
    }

    //#endregion

    //#region Последние настройки

    this.indexKey = 0;

    this.indexListKeys = 0;

    this.countAttempts = InputKeyTime.countAttempts;

    this.maxTimer = InputKeyTime.frameTimer;

    this.timer = InputKeyTime.frameTimer;

    this.isDelay = false;

    this.isInputKey = true;

    //#endregion
};

//#region Метод создания анимаций

Scene_InputKeyTime.prototype.createAnimations = function (
    _repeatTime,
    _startTime,
    _endTime,
    _elemetAnimation,
    _x = undefined,
    _y = undefined,
    _opacity = undefined,
    _rectX = undefined,
    _rectY = undefined,
    _rectWidth = undefined,
    _rectHeight = undefined
) {
    this.animation.push(
        new DKTools.Animation({
            type: "update",
            repeats: 0,
            repeatTime: _repeatTime,
        })
    );
    if (_x != undefined && _y != undefined) {
        this.animation[this.animation.length - 1].addAction(
            DKTools.Animation.Action.Move({
                startTime: _startTime,
                endTime: _endTime,
                target: _elemetAnimation,
                data: new Point(_x, _y),
            })
        );
    }
    if (_opacity != undefined) {
        this.animation[this.animation.length - 1].addAction(
            DKTools.Animation.Action.OpacitySprite({
                startTime: _startTime,
                endTime: _endTime,
                target: _elemetAnimation,
                data: _opacity,
            })
        );
    }
    if (_rectX != undefined && _rectY != undefined && _rectWidth != undefined && _rectHeight != undefined) {
        this.animation[this.animation.length - 1].addAction(
            DKTools.Animation.Action.Frame({
                startTime: _startTime,
                endTime: _endTime,
                target: _elemetAnimation,
                data: new Rectangle(_rectX, _rectY, _rectWidth, _rectHeight),
            })
        );
    }

    _elemetAnimation.addAnimation(this.animation[this.animation.length - 1]);
};

//#endregion

//#region Метод генерации нажимаемых клавишь

Scene_InputKeyTime.prototype.generateArrayKeys = function () {
    var getRandomInRange = function (min, max) {
        return DKTools.Utils.Random.getInt(max - min) + min;
    };
    this.stringKeys = [];
    let cnt = InputKeyTime.countKeys;
    while (cnt) {
        this.stringKeys.push(getRandomInRange(0, InputKeyTime.keys.arrKeys["Name Key"].length - 1));
        cnt--;
    }
};

//#endregion

Scene_InputKeyTime.prototype.update = function () {
    Scene_Base.prototype.update.call(this);
    if (this.animation.length === 0 || this.animation.every((a) => a.isFinished())) {
        //Игровой процесс
        this.updateBar();

        this.isProcessInput();

        if (this.isDelay === true) {
            if (this._wait > 0) this._wait--;
            else {
                if (this.indexListKeys < InputKeyTime.countListKeys - 1) this.updateList();
                else {
                    this.endGame(1);
                }
                this.isInputKey = true;
                this.isDelay = false;
            }
        }
    }
};

Scene_InputKeyTime.prototype.updateBar = function () {
    if (this.timer > 0) {
        this.timer--;
        var prcBar = this.timer / this.maxTimer;
        this.timerBar.fgBar.setFrame(0, 0, InputKeyTime.barTimer.foreground.width * prcBar, InputKeyTime.barTimer.foreground.height);
    } else {
        this.endGame(2);
    }
};

Scene_InputKeyTime.prototype.isProcessInput = function () {
    if (this.isInputKey === true) {
        var pressKey = Input.anyTriggered(InputKeyTime.keys.arrKeys["Name Key"], false);
        if (pressKey != null) {
            if (pressKey === InputKeyTime.keys.arrKeys["Name Key"][this.stringKeys[this.indexKey]]) {
                this.updateButtons();
            } else {
                AudioManager.playSe(InputKeyTime.soundFX.keyError);
                this.countAttempts--;
                if (this.countAttempts > 0 || this.countAttempts < 0) {
                    switch (InputKeyTime.defeatBehavior) {
                        case 0:
                            this.clearButtons();
                            break;
                        case 1:
                            this.stringKeys = [];
                            this.stringKeys = InputKeyTime.rndKeys(InputKeyTime.countKeys);
                            this.clearButtons();
                            break;
                        case 2:
                            this.clearList();
                            break;
                    }
                } else if (this.countAttempts === 0) {
                    this.endGame(3);
                }
            }
        }
    }
};

Scene_InputKeyTime.prototype.updateButtons = function () {
    AudioManager.playSe(InputKeyTime.soundFX.keyNext);
    if (InputKeyTime.bgKeys.isEnabled === true) {
        this.bgKeys[this.indexKey].setBitmap(InputKeyTime.bgKeys.backgroundPress);
        if (this.indexKey < InputKeyTime.countKeys - 1) this.bgKeys[this.indexKey + 1].setBitmap(InputKeyTime.bgKeys.backgroundSelect);
    }

    this.imageKeys[this.indexKey].setBitmap(InputKeyTime.keys.arrKeys["Picture of a pressed key"][this.stringKeys[this.indexKey]]);

    if (this.indexKey < InputKeyTime.countKeys - 1) {
        this.indexKey++;
    } else {
        if (InputKeyTime.barList.isEnabled === true) this.updateListBar(this.indexListKeys + 1);
        AudioManager.playSe(InputKeyTime.soundFX.listNext);
        this.wait(InputKeyTimeParam.get("Delay next list / end of game"));
    }
};

Scene_InputKeyTime.prototype.updateList = function () {
    this.generateArrayKeys();
    this.clearButtons();
    this.indexListKeys++;
};

Scene_InputKeyTime.prototype.clearList = function () {
    this.generateArrayKeys();
    this.clearButtons();
    this.indexListKeys = 0;
    if (InputKeyTime.isEnableListBar === true) this.updateListBar(this.indexListKeys);
};

Scene_InputKeyTime.prototype.clearButtons = function () {
    for (var i = 0; i < InputKeyTime.countKeys; i++) {
        if (InputKeyTime.bgKeys.isEnabled === true) {
            if (i === 0) this.bgKeys[i].setBitmap(InputKeyTime.bgKeys.backgroundSelect);
            else this.bgKeys[i].setBitmap(InputKeyTime.bgKeys.background);
        }

        this.imageKeys[i].setBitmap(InputKeyTime.keys.arrKeys["Key Picture"][this.stringKeys[i]]);
    }
    this.indexKey = 0;
};

Scene_InputKeyTime.prototype.updateListBar = function (realListKey) {
    var prcBar = realListKey / InputKeyTime.countListKeys;
    this.listBar.fgBar.setFrame(0, 0, InputKeyTime.barList.foreground.width * prcBar, InputKeyTime.barList.foreground.height);
};

Scene_InputKeyTime.prototype.wait = function (wait) {
    this._wait = wait;
    this.isInputKey = false;
    this.isDelay = true;
};

Scene_InputKeyTime.prototype.endGame = function (statusGame) {
    $gameVariables.setValue(InputKeyTimeParam.get("Var Id Out Status Game"), statusGame);
    this.popScene();
    return;
};

InputKeyTime.script = class {
    static startStandartGame() {
        SceneManager.push(Scene_InputKeyTime);
    }

    static startGame(_min, _sec, _frame, _countKeys, _countListKeys, _countAttempts, _defeatBehavior) {
        InputKeyTime.countKeys = _countKeys;
        InputKeyTime.countListKeys = _countListKeys;
        InputKeyTime.countAttempts = _countAttempts;
        InputKeyTime.frameTimer = _min * 60 * 60 + _sec * 60 + _frame;
        InputKeyTime.defeatBehavior = _defeatBehavior;
        SceneManager.push(Scene_InputKeyTime);
    }
};

var $InputKeyTime = InputKeyTime.script;

//Тут должен быть код обработки команд плагинов
