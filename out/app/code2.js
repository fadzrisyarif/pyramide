gdjs.level1Code = {};
gdjs.level1Code.GDNewTiledSpriteObjects1= [];
gdjs.level1Code.GDNewTiledSpriteObjects2= [];
gdjs.level1Code.GDNewTiledSprite2Objects1= [];
gdjs.level1Code.GDNewTiledSprite2Objects2= [];
gdjs.level1Code.GDCoinObjects1= [];
gdjs.level1Code.GDCoinObjects2= [];
gdjs.level1Code.GDNewSpriteObjects1= [];
gdjs.level1Code.GDNewSpriteObjects2= [];

gdjs.level1Code.conditionTrue_0 = {val:false};
gdjs.level1Code.condition0IsTrue_0 = {val:false};
gdjs.level1Code.condition1IsTrue_0 = {val:false};


gdjs.level1Code.eventsList0 = function(runtimeScene) {

{


gdjs.level1Code.condition0IsTrue_0.val = false;
{
gdjs.level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.level1Code.condition0IsTrue_0.val) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


};

gdjs.level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.level1Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.level1Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.level1Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.level1Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.level1Code.GDCoinObjects1.length = 0;
gdjs.level1Code.GDCoinObjects2.length = 0;
gdjs.level1Code.GDNewSpriteObjects1.length = 0;
gdjs.level1Code.GDNewSpriteObjects2.length = 0;

gdjs.level1Code.eventsList0(runtimeScene);

return;

}

gdjs['level1Code'] = gdjs.level1Code;
