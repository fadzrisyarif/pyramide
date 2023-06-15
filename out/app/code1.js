gdjs.Untitled_32scene4Code = {};
gdjs.Untitled_32scene4Code.GDNewTiledSpriteObjects1= [];
gdjs.Untitled_32scene4Code.GDNewTiledSpriteObjects2= [];
gdjs.Untitled_32scene4Code.GDNewTiledSprite2Objects1= [];
gdjs.Untitled_32scene4Code.GDNewTiledSprite2Objects2= [];
gdjs.Untitled_32scene4Code.GDCoinObjects1= [];
gdjs.Untitled_32scene4Code.GDCoinObjects2= [];
gdjs.Untitled_32scene4Code.GDNewSpriteObjects1= [];
gdjs.Untitled_32scene4Code.GDNewSpriteObjects2= [];

gdjs.Untitled_32scene4Code.conditionTrue_0 = {val:false};
gdjs.Untitled_32scene4Code.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32scene4Code.condition1IsTrue_0 = {val:false};


gdjs.Untitled_32scene4Code.eventsList0 = function(runtimeScene) {

{


gdjs.Untitled_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32scene4Code.condition0IsTrue_0.val) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


};

gdjs.Untitled_32scene4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene4Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Untitled_32scene4Code.GDCoinObjects1.length = 0;
gdjs.Untitled_32scene4Code.GDCoinObjects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewSpriteObjects2.length = 0;

gdjs.Untitled_32scene4Code.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32scene4Code'] = gdjs.Untitled_32scene4Code;
