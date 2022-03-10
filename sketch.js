var man, manSprite;
var chest, chestSprite, openChest, openChestSprite;
var torch, torchSprite;
var boss, bossSprite;
var sword, swordSprite;
var armor, armorSprite;
var darkRoom, darkRoomBg;
var startingRoom, startingRoomBg;
var bossFight, bossFightBg;
var bossHealth;
var playerHealth;


function preload(){
    man = loadImage('man.png');
    chest = loadImage('chest.png');
    torch = loadImage('torch.png');  
    boss = loadImage('ogre.png');
    sword = loadImage('sword.png');
    armor = loadImage('armor.png');
    darkRoom = loadImage('darkroom.jpg');
    startingRoom = loadImage('light background.jpg');
    bossFight = loadImage('boss fight.jpg');
    openChest = loadImage("Openchest.png");
    //backgroundImg = loadImage('light background.jpg');
}

function setup() {
 createCanvas(windowWidth,windowHeight);

 
 manSprite = createSprite(windowWidth -1600,windowHeight-200);
 manSprite.addImage(man);
 manSprite.scale = 0.8;

 chestSprite = createSprite(windowWidth-650, windowHeight-165);
 chestSprite.addImage(chest);
 chestSprite.scale = 0.5;

 //torchSprite = createImg('torch.png');
 //torchSprite.position(225,75);
 //torchSprite.size(100,100);
 //torchSprite.mouseClicked(changeBk);
 
 startingRoomBg = createSprite(windowWidth/2, windowHeight/2);
 startingRoomBg.addImage(startingRoom);
 startingRoomBg.scale = 3.2;
 startingRoomBg.depth = manSprite.depth;
 manSprite.depth += 1;

 bossFightBg = createSprite(windowWidth/2,windowHeight/3);
 bossFightBg.addImage(bossFight);
 bossFightBg.scale = 8;
 bossFightBg.visible=0;
 bossFightBg.depth = manSprite.depth;
 manSprite.depth += 1;

 bossSprite = createSprite(windowWidth-600, windowHeight-255);
 bossSprite.addImage(boss);
 bossSprite.scale=3;
 bossSprite.visible=0;
 bossSprite.depth = manSprite.depth;
 manSprite.depth += 1;

 openChestSprite = createSprite(windowWidth-650, windowHeight-165)
 openChestSprite.addImage(openChest)
 openChest.scale = 10
 openChestSprite.visible=0

 armorSprite = createSprite(windowWidth-800, windowHeight-105)
 armorSprite.addImage(armor)
 armorSprite.scale=0.1
 armorSprite.visible=false;

 swordSprite = createSprite(windowWidth-740, windowHeight-320)
 swordSprite.addImage(sword)
 swordSprite.scale=0.35
 swordSprite.visible=0



 

 


 





}

function draw() {
    background(darkRoom)
    if(keyDown('UP_ARROW')) {
        manSprite.x = manSprite.x + 7
    }

    if(keyDown('DOWN_ARROW')) {
        manSprite.x = manSprite.x -  7
    }

    if (manSprite.x > windowWidth) {
        bossFightBg.visible=1
        manSprite.x = 100
        bossSprite.visible=1
        man.y = windowHeight - 150
        openChestSprite.destroy()

        swordSprite.x = manSprite.x + 80
        swordSprite.y = manSprite.y - 50

        armorSprite.x = manSprite.x
        armorSprite.y = manSprite.y +20
    } 
    //torchSprite.mouseClicked(changeBk);
    

    if(manSprite.isTouching(chestSprite)){
    openChestSprite.visible=1
    chestSprite.visible=0
    armorSprite.visible=1
    swordSprite.visible=1

    armorSprite.depth = swordSprite.depth
    
    swordSprite.depth + 1
    }

    
    if(manSprite.isTouching(armorSprite)) {
        armorSprite.x = manSprite.x
        armorSprite.y = manSprite.y +20;
        console.log(armorSprite.x);  
    }
    if(manSprite.isTouching(swordSprite)){
        swordSprite.x = manSprite.x + 80
        swordSprite.y = manSprite.y - 50
    }
    drawSprites()

}
/*function changeBk() {
    if(backgroundImg) 
    background(backgroundImg);
} */
