
//------------选择球队页面函数-----------------
function ChoosePerson() {

	backGroundLayer.die();
	backGroundLayer.removeAllChild();

	var ChoosePic = new LSprite();
	ChoosePic = new LBitmap(new LBitmapData(imglist["ChoisePage"]));
	backGroundLayer.addChild(ChoosePic);

	var ChooseFrag = new LSprite();
	ChooseFrag.x = 30;
	ChooseFrag.y = 50;
	backGroundLayer.addChild(ChooseFrag);

	showList.push(new LBitmapData(imglist["ArgentinaFrag"]));
	showList.push(new LBitmapData(imglist["BrazilFrag"]));
	showList.push(new LBitmapData(imglist["GramanyFrag"]));
	showList.push(new LBitmapData(imglist["HelanFrag"]));

	showSport.push(new LBitmapData(imglist["meixi"])); //0
	showSport.push(new LBitmapData(imglist["neimaer"])); //1
	showSport.push(new LBitmapData(imglist["luoyisi"])); //2
	showSport.push(new LBitmapData(imglist["fanpeixi"])); //3

	showSport.push(new LBitmapData(imglist["enemyLoseMeixi"])); //4
	showSport.push(new LBitmapData(imglist["enemyLoseNeimaer"])); //5
	showSport.push(new LBitmapData(imglist["enemyLoseRues"])); //6
	showSport.push(new LBitmapData(imglist["enemyLoseVan"])); //7
	showSport.push(new LBitmapData(imglist["enemyWinMeixi"])); //8
	showSport.push(new LBitmapData(imglist["enemyWinNeimaer"])); //9
	showSport.push(new LBitmapData(imglist["enemyWinVan"])); //10
	showSport.push(new LBitmapData(imglist["enemyWinRues"])); //11

	showSport.push(new LBitmapData(imglist["selfLoseMeixi"])); //12
	showSport.push(new LBitmapData(imglist["selfLoseNeimaer"])); //13
	showSport.push(new LBitmapData(imglist["selfLoseRues"])); //14
	showSport.push(new LBitmapData(imglist["selfLoseVan"])); //15
	showSport.push(new LBitmapData(imglist["selfWinMeixi"])); //16
	showSport.push(new LBitmapData(imglist["selfWinNeimaier"])); //17
	showSport.push(new LBitmapData(imglist["selfWinReus"])); //18
	showSport.push(new LBitmapData(imglist["selfWinVan"])); //19

	var frag1 = new LSprite();
	frag1.graphics.drawRect(0, '#000', [110, 110, 128, 140], false);
	backGroundLayer.addChild(frag1);
	//----------显示国旗Argentina---------------
	var ArgentinaFrag = getButton('ArgentinaFrag');
	ArgentinaFrag.x = 110;
	ArgentinaFrag.y = 130;
	frag1.addChild(ArgentinaFrag);

	var Argentina = new LTextField();
	Argentina.text = flagName[0].name;
	Argentina.color = '#000';
	Argentina.size = '18';
	Argentina.x = 135;
	//Argentina.y = 215;
	Argentina.y = 235;
	frag1.addChild(Argentina);
	ArgentinaFrag.addEventListener(LMouseEvent.MOUSE_UP, onclick);

	var frag2 = new LSprite();
	frag2.graphics.drawRect(0, '#000', [288, 110, 128, 140], false);
	backGroundLayer.addChild(frag2);
	//--------------显示国旗Brazil---------------
	var BrazilFrag = getButton('BrazilFrag');
	BrazilFrag.x = 288;
	//BrazilFrag.y = 110;
	BrazilFrag.y = 130;
	frag2.addChild(BrazilFrag);

	var Brazil = new LTextField();
	Brazil.text = flagName[1].name;
	Brazil.color = '#000';
	Brazil.size = '18';
	Brazil.x = 325;
	Brazil.y = 235;
	frag2.addChild(Brazil);
	BrazilFrag.addEventListener(LMouseEvent.MOUSE_UP, onclick);

	var frag3 = new LSprite();
	frag3.graphics.drawRect(0, '#000', [466, 110, 128, 140], false);
	backGroundLayer.addChild(frag3);

	//-------------显示国旗Gramany--------------
	var GramanyFrag = getButton('GramanyFrag');
	GramanyFrag.x = 466;
	GramanyFrag.y = 130;
	frag3.addChild(GramanyFrag);

	var Gramany = new LTextField();
	Gramany.text = flagName[2].name;
	Gramany.color = '#000';
	Gramany.size = '18';
	Gramany.x = 500;
	Gramany.y = 235;
	frag3.addChild(Gramany);
	GramanyFrag.addEventListener(LMouseEvent.MOUSE_UP, onclick);

	var frag4 = new LSprite();
	frag4.graphics.drawRect(0, '#000', [644, 110, 128, 140], false);
	backGroundLayer.addChild(frag4);

	//-------------显示国旗Helan----------------
	var HelanFrag = getButton('HelanFrag');
	HelanFrag.x = 644;
	HelanFrag.y = 130;
	frag4.addChild(HelanFrag);

	var Helan = new LTextField();
	Helan.text = flagName[3].name;
	Helan.color = '#000';
	Helan.size = '18';
	Helan.x = 680;
	Helan.y = 235;
	frag4.addChild(Helan);
	HelanFrag.addEventListener(LMouseEvent.MOUSE_UP, onclick);

	//---------------显示结果层---------------
	var resultEnd = new LSprite();
	//	resultEnd.graphics.drawRect(1,'#000',[0,260,900,380],true,'#000');
	backGroundLayer.addChild(resultEnd);

	//-----------显示国旗(self)---------------
	selfBitmap = new LBitmap(showList[0]);
	selfBitmap.x = 230;
	selfBitmap.y = 375;
	resultEnd.addChild(selfBitmap);
	//-------------显示运动员----------------
	selfName = new LBitmap(showSport[0]);
	selfName.x = 240;
	//selfName.y = 455;
	selfName.y = 520;
	resultEnd.addChild(selfName);

	var cLayer = new LSprite();
	cLayer.x = 630;
	cLayer.y = 900;
	backGroundLayer.addChild(cLayer);
	cLayer.addBodyPolygon(450, 630, 0, 3, 0.1, 1.01);

	var football = new LSprite();
	football.x = 400;
	football.y = 400;
	backGroundLayer.addChild(football);
	var bitmap = new LBitmapData(imglist["football"]);
	football.graphics.beginBitmapFill(bitmap);
	football.graphics.drawArc(1, "#000", [20, 20, 20, 0, 2 * Math.PI], false);
	football.addBodyCircle(20, 20, 20, 1, 3, 0.1, 1.0);
	//football.addEventListener(LMouseEvent.MOUSE_DOWN, gamePageOne);

	//您的选择
	var selfField = new LSprite();
	selfField = new LBitmap(new LBitmapData(imglist["yourChoose"]));
	selfField.x = 50;
	// selfField.y = 355;
	selfField.y = 405;
	backGroundLayer.addChild(selfField);

	//电脑选择
	var enemyField = new LSprite();
	enemyField = new LBitmap(new LBitmapData(imglist["computerChoose"]));
	enemyField.x = 660;
	enemyField.y = 405;
	backGroundLayer.addChild(enemyField);

	//--------------显示国旗(enemy)-------------
	enemyBitmap = new LBitmap(showList[1]);
	enemyBitmap.x = 518;
	//	enemyBitmap.y = 325;
	enemyBitmap.y = 375;
	resultEnd.addChild(enemyBitmap);

	//------------显示运动员-----------------
	enemyName = new LBitmap(showSport[1]);
	enemyName.x = 528;
	enemyName.y = 520;
	resultEnd.addChild(enemyName);

	var bitmapVS = new LBitmap(new LBitmapData(imglist["vs"]));
	bitmapVS.x = 380;
	bitmapVS.y = 400;
	resultEnd.addChild(bitmapVS);

	//开始游戏按钮
	var bitmapUp = new LBitmap(new LBitmapData(imglist["beginGame"], 0, 0, 124, 41));
	var bitmapOver = new LBitmap(new LBitmapData(imglist["beginGame"], 0, 48, 124, 41));
	var buttonEnter = new LButton(bitmapUp, bitmapOver);
	backGroundLayer.addChild(buttonEnter);
	//buttonEnter.x = 330;
	buttonEnter.x = 380;
	buttonEnter.y = 330;
	buttonEnter.addEventListener(LMouseEvent.MOUSE_DOWN, gamePageOne);

}

//-----------------ChoosePerson End-----------------

//-------------初始化球队按钮--------------------
function getButton(value) {
	var btnUp = new LBitmap(new LBitmapData(imglist[value]));
	btnUp.scaleX = 1;
	btnUp.scaleY = 1;
	var btnOver = new LBitmap(new LBitmapData(imglist[value]));
	btnOver.scaleX = 1;
	btnOver.scaleY = 1;

	var btn = new LButton(btnUp, btnOver);
	btn.name = value;
	return btn;
}

//----------------点击并选择球队-------------------
function onclick(event, display) {
	var selfValue,
	enemyValue;
	if (display.name == 'ArgentinaFrag') {
		selfValue = 0;
		temp = 0;
		enemyValue = Math.floor(Math.random() * 4);
		if (selfValue == enemyValue) {
			enemyValue += 1;
			tempEn = enemyValue;
		} else {
			tempEn = enemyValue;
		}

	}
	if (display.name == 'BrazilFrag') {
		selfValue = 1;
		temp = 1;
		enemyValue = Math.floor(Math.random() * 4);
		if (selfValue == enemyValue) {
			enemyValue += 1;
			tempEn = enemyValue;
		} else {
			tempEn = enemyValue;
		}
	}
	if (display.name == 'GramanyFrag') {
		selfValue = 2;
		temp = 2;
		enemyValue = Math.floor(Math.random() * 4);
		if (selfValue == enemyValue) {
			enemyValue += 1;
			tempEn = enemyValue;
		} else {
			tempEn = enemyValue;
		}
	}
	if (display.name == 'HelanFrag') {
		selfValue = 3;
		temp = 3;
		enemyValue = Math.floor(Math.random() * 4);
		if (selfValue == enemyValue) {
			enemyValue = enemyValue - 3;
			tempEn = enemyValue;
		} else {
			tempEn = enemyValue;
		}
	}
	selfBitmap.bitmapData = showList[selfValue];
	selfName.bitmapData = showSport[selfValue];
	enemyBitmap.bitmapData = showList[enemyValue];
	enemyName.bitmapData = showSport[enemyValue];
}
//----------------------选择球队页面函数End--------------------