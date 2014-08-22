var clock_distance_iswork;//是否获取两点之间的距离

function gamePageOne() {
pageIndex = 1;
	clock_distance_iswork=true
	backGroundLayer.die();
	backGroundLayer.removeAllChild();
	clock = 1;
	if (clock == 1) {
		timeOne();
		t = setInterval(timeOne, 1000);
	}
	backGroundLayer.die();
	backGroundLayer.removeAllChild();
	backGroundPic = new LSprite();
	backGroundPic = new LBitmap(new LBitmapData(imglist["backGround"]));
	backGroundLayer.addChild(backGroundPic);
	backGroundLayer.addChild(cxtOne);

	//设置游戏边界函数
	Bound();
	onup();
	
	
	
	

	//浮力效果初始化
	buoyancyController = new LGlobal.box2d.b2BuoyancyController();
	buoyancyController.offset = -1 / LGlobal.box2d.drawScale;
	buoyancyController.density = 3;
	buoyancyController.linearDrag = 10;
	buoyancyController.angularDrag = 6;
	LGlobal.box2d.world.AddController(buoyancyController);
	var buoyancyControllerLayer = new LSprite();
	buoyancyControllerLayer.graphics.drawRect(0, "#ffffff", [0, 0, 900, 640], false);
	buoyancyControllerLayer.alpha = 0.2;
	backGroundLayer.addChild(buoyancyControllerLayer);

	//导入音乐播放按钮图片
	musicBtn = new LSprite();
	musicBtn.x = 715;
	musicBtn.y = 5;
	backGroundLayer.addChild(musicBtn);
	var bitmap = new LBitmapData(imglist['whiteBtn2']);
	musicBtn.graphics.beginBitmapFill(bitmap);
	musicBtn.graphics.drawRect(1, "#000", [0, 0, 41, 29], false);
	musicBtn.addEventListener(LMouseEvent.MOUSE_UP, onup);

	//-----------玩家1出现------------

	selfName = new LSprite();
	var w = 0;
	var h = 0;
	selfName.x = (LGlobal.width - w) * 0.5;
	selfName.y = (LGlobal.height - h) * 0.5;

	if (temp == 0) {
		var bitmapMeixi = new LBitmapData(imglist["meixi"]);
		selfName.graphics.beginBitmapFill(bitmapMeixi);
	}
	if (temp == 1) {
		var bitmapMeixi = new LBitmapData(imglist["neimaer"]);
		selfName.graphics.beginBitmapFill(bitmapMeixi);
	}
	if (temp == 2) {
		var bitmapMeixi = new LBitmapData(imglist["luoyisi"]);
		selfName.graphics.beginBitmapFill(bitmapMeixi);
	}
	if (temp == 3) {
		var bitmapMeixi = new LBitmapData(imglist["fanpeixi"]);
		selfName.graphics.beginBitmapFill(bitmapMeixi);
	}

	selfName.graphics.drawArc(1, "#000", [40, 40, 40, 0, 2 * Math.PI], false);
	selfName.addBodyCircle(40, 40, 40, 1, 3, 0.2, 0.9);
	selfName.setBodyMouseJoint(true);
	buoyancyController.AddBody(selfName.box2dBody);
	backGroundLayer.addChild(selfName);

	createMouseJoint(selfName.x, selfName.y);
	backGroundLayer.addEventListener(LMouseEvent.MOUSE_MOVE, onMouseMove);

	//-----玩家2出现-----
	enemyName = new LSprite();
	enemyName.x = 500;
	enemyName.y = 300;
	backGroundLayer.addChild(enemyName);

	if (tempEn == 0) {
		var bitmapNeimaer = new LBitmapData(imglist["meixi"]);
		enemyName.graphics.beginBitmapFill(bitmapNeimaer);
	}
	if (tempEn == 1) {
		var bitmapNeimaer = new LBitmapData(imglist["neimaer"]);
		enemyName.graphics.beginBitmapFill(bitmapNeimaer);
	}
	if (tempEn == 2) {
		var bitmapNeimaer = new LBitmapData(imglist["luoyisi"]);
		enemyName.graphics.beginBitmapFill(bitmapNeimaer);
	}
	if (tempEn == 3) {
		var bitmapNeimaer = new LBitmapData(imglist["fanpeixi"]);
		enemyName.graphics.beginBitmapFill(bitmapNeimaer);
	}

	enemyName.graphics.drawArc(1, "#000", [40, 40, 40, 0, 2 * Math.PI], false);
	enemyName.addBodyCircle(40, 40, 40, 1, 3, 0.2, 0.9);

	buoyancyController.AddBody(enemyName.box2dBody);
	enemyName.addEventListener(LEvent.ENTER_FRAME,force_ball);

	//敌人移动定时器
	ai = setInterval(function () {
	
			if(tag_run){
			//球在人物左上角
				if ((enemyName.box2dBody.GetPosition().x >= ballMoveX) && (enemyName.box2dBody.GetPosition().y >= ballMoveY)) {
				 enX = enemyName.box2dBody.GetPosition().x;
				 enY = enemyName.box2dBody.GetPosition().y;
				enX = enX - step;
				enY = enY - step;
				enemyName.box2dBody.SetPosition(new LGlobal.box2d.b2Vec2(enX, enY));
				
			}
			//球在人物右上角
			if ((enemyName.box2dBody.GetPosition().x < ballMoveX) && (enemyName.box2dBody.GetPosition().y >= ballMoveY)) {
				 enX = enemyName.box2dBody.GetPosition().x;
				 enY = enemyName.box2dBody.GetPosition().y;
				enX = enX + step;
				enY = enY - step;
				enemyName.box2dBody.SetPosition(new LGlobal.box2d.b2Vec2(enX, enY));
				
			}
			//球在人物
			if ((enemyName.box2dBody.GetPosition().x < ballMoveX) && (enemyName.box2dBody.GetPosition().y < ballMoveY)) {
				 enX = enemyName.box2dBody.GetPosition().x;
				 enY = enemyName.box2dBody.GetPosition().y;
				enX = enX + step;
				enY = enY + step;
				enemyName.box2dBody.SetPosition(new LGlobal.box2d.b2Vec2(enX, enY));
				
			}
			if ((enemyName.box2dBody.GetPosition().x >= ballMoveX) && (enemyName.box2dBody.GetPosition().y < ballMoveY)) {
				 enX = enemyName.box2dBody.GetPosition().x;
				 enY = enemyName.box2dBody.GetPosition().y;
				enX = enX - step;
				enY = enY + step;
				enemyName.box2dBody.SetPosition(new LGlobal.box2d.b2Vec2(enX, enY));
				
			}
			}
		}, refresh);
		
		
		clock_distance=setInterval(function(){
			if(clock_distance_iswork==true){
				var m;
				m=distance(enemyName.box2dBody.GetPosition().x,enemyName.box2dBody.GetPosition().y,ballMoveX,ballMoveY);
			}
			
			//console.warn(m);
			if(m>=2.0){
				tag_run=true;//true代表两个物体未发生碰撞
				
			}else{
				tag_run=false
			} 
			
		},refresh);

	//-----足球-----

	ballLayer = new LSprite();
	ballLayer.x = 450;
	ballLayer.y = 300;
	backGroundLayer.addChild(ballLayer);
	var bitmap = new LBitmapData(imglist["football"]);
	ballLayer.graphics.beginBitmapFill(bitmap);
	ballLayer.graphics.drawArc(1, "#000", [20, 20, 20, 0, 2 * Math.PI], false);
	ballLayer.addBodyCircle(20, 20, 20, 1, 3, 0.1, 2.0);
	buoyancyController.AddBody(ballLayer.box2dBody);
	//获取足球实时坐标
	getsecond=setInterval(function () {
		ballMoveX = ballLayer.box2dBody.GetPosition().x;
		ballMoveY = ballLayer.box2dBody.GetPosition().y;

	}, 50);

	//显示国旗self
	selfBitmap.x = 65;
	selfBitmap.y = 40;
	selfBitmap.scaleX = 0.4;
	selfBitmap.scaleY = 0.4;
	backGroundLayer.addChild(selfBitmap);

	//显示国旗enemy
	enemyBitmap.x = 750;
	enemyBitmap.y = 40;
	enemyBitmap.scaleX = 0.4;
	enemyBitmap.scaleY = 0.4;
	backGroundLayer.addChild(enemyBitmap);
	//----------设置右边球门------------
	RightDoor = new LSprite();
	RightDoor.x = 825;
	RightDoor.y = 340;
	backGroundLayer.addChild(RightDoor);
	RightDoor.addBodyPolygon(35, 105, 0, 1, 3, 0, 1);

	//-----设置左边球门-----
	LeftDoor = new LSprite();
	LeftDoor.x = 80;
	LeftDoor.y = 340;
	backGroundLayer.addChild(LeftDoor);
	LeftDoor.addBodyPolygon(35, 105, 0, 1, 3, 0, 1);
	scoreText();
	onup();
	Bound();
	//退出游戏

	var buttonNew = new LSprite();
	buttonNew.graphics.drawRect(0, "#000", [780, 5, 110, 35], false);
	backGroundLayer.addChild(buttonNew);

	var buttonExit = new LTextField();
	backGroundLayer.addChild(buttonExit);
	buttonExit.color = "#fff";
	buttonExit.text = "退出游戏";
	buttonExit.size = 18;
	buttonExit.x = 780;
	buttonExit.y = 5;
	buttonExit.stroke = true;
	buttonExit.lineWidth = 2;
	buttonExit.lineColor = "#57a520";
	buttonNew.addChild(buttonExit);
	//window.clearInterval(getsecond);
//	window.clearInterval(clock_distance);
//	window.clearInterval(ai);
//	window.clearInterval(t);
	buttonNew.addEventListener(LMouseEvent.MOUSE_DOWN, loginIn);
}

function Exit() {

	SysSecondOne = parseInt(startTime);
	loginIn();
	selfScore = 0;
	enemyScore = 0;
}

//------------关节的设定----------------------
function createMouseJoint(x, y) {
	var b = selfName.box2dBody,
	scale = LGlobal.box2d.drawScale;
	var jointDef = new LGlobal.box2d.b2MouseJointDef();
	jointDef.bodyA = LGlobal.box2d.world.GetGroundBody();
	jointDef.bodyB = b;
	jointDef.collideConnected = true;
    jointDef.maxForce = 100.0 * b.GetMass();
	//jointDef.maxForce = 300000.0 * b.GetMass();
	jointDef.target.Set(x / scale + 1.2, y / scale + 1.2);
	mouseJoint = LGlobal.box2d.world.CreateJoint(jointDef);
	b.SetAwake(true);
}

function onMouseMove(event) {
	mX = event.offsetX / LGlobal.box2d.drawScale,
	mY = event.offsetY / LGlobal.box2d.drawScale;
	mouseJoint.SetTarget(new LGlobal.box2d.b2Vec2(mX, mY));
}

function timeOne() {
	if (SysSecondOne > 0) {
		SysSecondOne = SysSecondOne - 1;
		var second = Math.floor(SysSecondOne % 60); // 计算秒
		var minite = Math.floor((SysSecondOne / 60) % 60); //计算分
		var hour = Math.floor((SysSecondOne / 3600) % 24); //计算小时
		var day = Math.floor((SysSecondOne / 3600) / 24); //计算天

		cxtOne.size = '18';
		cxtOne.color = '#fff';
		cxtOne.x = 0;
		cxtOne.y = 0;
		cxtOne.text = "距离游戏结束还有：" + second + "秒";
	}
	if (SysSecondOne ==0.5){
		window.clearInterval(getsecond);
		window.clearInterval(clock_distance);
		window.clearInterval(ai);
	}
	if (SysSecondOne == 0) { //剩余时间小于或等于0的时候，就停止间隔函数
		window.clearInterval(cxtOne.timer);
		
		
		SysSecondOne = -1;
		backGroundLayer.die();
		backGroundLayer.removeAllChild();
		gamePageOver();
		//console.warn("123")
		

		//这里可以添加倒计时时间为0后需要执行的事件
	}
}

//-----侦听两个物体的碰撞------
function postSolve(contact, impulse) {
	var objA = contact.GetFixtureA().GetBody().GetUserData();
	var objB = contact.GetFixtureB().GetBody().GetUserData();
	if (objA.type == "LSprite" && objB.type == "LSprite") {
		if ((objA == ballLayer && objB == RightDoor) ||
			(objA == RightDoor && objB == ballLayer)) {
			selfScore += 1;
			scoreNumberLeft.text = selfScore;
			scoreNumberRight.text = enemyScore;
			window.clearInterval(getsecond);
			showSelfScore();
		}
	}

	if (objA.type == "LSprite" && objB.type == "LSprite") {
		if ((objA == ballLayer && objB == LeftDoor) ||
			(objA == LeftDoor && objB == ballLayer)) {
			enemyScore += 1;
			scoreNumberRight.text = enemyScore;
			scoreNumberLeft.text = selfScore;
			showEnemyScore();
			window.clearInterval(getsecond);
		}
	}
}

