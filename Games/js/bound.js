


//物体碰撞边界
var BoundTop;

function Bound(){
	LGlobal.box2d =  new LBox2d();
    BoundTop = new LSprite();
backGroundLayer.addChild(BoundTop);

    var shapeArray = [
        [[0,0],[10,0],[10,600],[0,600]],
        [[0,0],[900,0],[900,10],[0,10]],
        [[890,0],[900,0],[900,600],[890,600]],
        [[0,590],[900,590],[900,600],[0,600]]
    ];
    BoundTop.addBodyVertices(shapeArray,0,0,0,.5,.4,.5);
}
