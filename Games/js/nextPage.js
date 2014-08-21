function nextPage(){
	backGroundLayer.die();
	backGroundLayer.removeAllChild();
    var backLayer = new LSprite();
	backLayer = new LBitmap(new LBitmapData(imglist["loginMan"]));
	//backLayer.graphics.drawRect(1, "#000", [0, 0, 900, 640], true, "#000");
	backGroundLayer.addChild(backLayer);
		
	
	var next = new LTextField();
	next.text = "恭喜您通过第一关";
	next.x = 30;
	next.y = 40;
	next.color = "#f00";
	backGroundLayer.addChild(next);
	
	/*var neimaerMove = new LSprite();
	var list = LGlobal.divideCoordinate(167, 415, 5, 4);
	var data = new LBitmapData(imglist["neimaerMove"], 0, 0, 42, 83);

	
	player = neimaerMove = new LAnimationTimeline(data, list);
	player.setAction(4);
	player.speed = 5;
	neimaerMove.x = 440;
	neimaerMove.y = 250;
   backGroundLayer.addChild(neimaerMove);*/

}

var anime,layer;
 function loadBitmapdata(event){
      var bitmapdata = new LBitmap(new LBitmapData(imglist["neimaerMove"],0,0,42,83));
      var list = LGlobal.divideCoordinate(167, 415, 5, 4);
   layer = new LSprite();
      addChild(layer);
   anime = new LAnimation(layer,bitmapdata,list);
      layer.addEventListener(LEvent.ENTER_FRAME,onframe);
  }
    function onframe(){
        var action = anime.getAction();
        switch(action[0]){
            case 0:
                layer.y+=5;
                if(layer.y >= 200){
                    anime.setAction(2);
                }
                break;
            case 1:
                layer.x -= 5;
                if(layer.x <= 0){
                    anime.setAction(0);
                }
                break;
            case 2:
                layer.x += 5;
                if(layer.x >= 200){
                    anime.setAction(3);
                }
                break;
            case 3:
                layer.y -= 5;
                if(layer.y <= 0){
                    anime.setAction(1);
                }
                break;
        }
        anime.onframe();
    }