
//------------选择球队页面函数-----------------
function ChoosePerson() {

	backGroundLayer.die();
	backGroundLayer.removeAllChild();

	var ChoosePic = new LSprite();
	ChoosePic.graphics.drawRect(1,"#000",[0,0,900,640],true,"#fff");
	//ChoosePic = new LBitmap(new LBitmapData(imglist["welcome1"]));
	backGroundLayer.addChild(ChoosePic);

	/*var ChooseFrag = new LTextField();
	ChooseFrag.text = '请选择你喜欢的球队:';
	ChooseFrag.stroke = '#000';
	ChooseFrag.color = '#fff';
	ChooseFrag.size = '28';
	ChooseFrag.x = 30;
	ChooseFrag.y = 50;
	backGroundLayer.addChild(ChooseFrag);
*/
   
    var ChooseFrag = new LSprite();
   ChooseFrag = new LBitmap(new LBitmapData(imglist["chooseTeam"]));
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
	ArgentinaFrag.y = 110;
	frag1.addChild(ArgentinaFrag);

	var Argentina = new LTextField();
	Argentina.text = flagName[0].name;
	Argentina.color = '#fff';
	Argentina.size = '18';
	Argentina.x = 135;
	Argentina.y = 215;
	frag1.addChild(Argentina);
	ArgentinaFrag.addEventListener(LMouseEvent.MOUSE_UP, onclick);

	var frag2 = new LSprite();
	frag2.graphics.drawRect(0, '#000', [288, 110, 128, 140], false);
	backGroundLayer.addChild(frag2);
	//--------------显示国旗Brazil---------------
	var BrazilFrag = getButton('BrazilFrag');
	BrazilFrag.x = 288;
	BrazilFrag.y = 110;
	frag2.addChild(BrazilFrag);

	var Brazil = new LTextField();
	Brazil.text = flagName[1].name;
	Brazil.color = '#fff';
	Brazil.size = '18';
	Brazil.x = 325;
	Brazil.y = 215;
	frag2.addChild(Brazil);
	BrazilFrag.addEventListener(LMouseEvent.MOUSE_UP, onclick);

	var frag3 = new LSprite();
	frag3.graphics.drawRect(0, '#000', [466, 110, 128, 140], false);
	backGroundLayer.addChild(frag3);

	//-------------显示国旗Gramany--------------
	var GramanyFrag = getButton('GramanyFrag');
	GramanyFrag.x = 466;
	GramanyFrag.y = 110;
	frag3.addChild(GramanyFrag);

	var Gramany = new LTextField();
	Gramany.text = flagName[2].name;
	Gramany.color = '#fff';
	Gramany.size = '18';
	Gramany.x = 500;
	Gramany.y = 215;
	frag3.addChild(Gramany);
	GramanyFrag.addEventListener(LMouseEvent.MOUSE_UP, onclick);

	var frag4 = new LSprite();
	frag4.graphics.drawRect(0, '#000', [644, 110, 128, 140], false);
	backGroundLayer.addChild(frag4);

	//-------------显示国旗Helan----------------
	var HelanFrag = getButton('HelanFrag');
	HelanFrag.x = 644;
	HelanFrag.y = 110;
	frag4.addChild(HelanFrag);

	var Helan = new LTextField();
	Helan.text = flagName[3].name;
	Helan.color = '#fff';
	Helan.size = '18';
	Helan.x = 680;
	Helan.y = 215;
	frag4.addChild(Helan);
	HelanFrag.addEventListener(LMouseEvent.MOUSE_UP, onclick);

	//---------------显示结果层---------------
	var resultEnd = new LSprite();
	//	resultEnd.graphics.drawRect(1,'#000',[0,260,900,380],true,'#000');
	backGroundLayer.addChild(resultEnd);

	//-----------显示国旗(self)---------------
	selfBitmap = new LBitmap(showList[0]);
	selfBitmap.x = 230;
	selfBitmap.y = 325;
	resultEnd.addChild(selfBitmap);
	//-------------显示运动员----------------
	selfName = new LBitmap(showSport[0]);
	selfName.x = 240;
	selfName.y = 455;
	resultEnd.addChild(selfName);

	selfField = new LTextField();
	selfField.text = '您的选择';
	selfField.color = '#fff';
	selfField.stroke = '#000';
	selfField.size = '20';
	selfField.x = 100;
	selfField.y = 355;
	resultEnd.addChild(selfField);

	enemyField = new LTextField();
	enemyField.text = '电脑选择';
	enemyField.color = '#fff';
	enemyField.stroke = '#000';
	enemyField.size = '20';
	enemyField.x = 670;
	enemyField.y = 355;
	resultEnd.addChild(enemyField);

	//--------------显示国旗(enemy)-------------
	enemyBitmap = new LBitmap(showList[1]);
	enemyBitmap.x = 518;
	enemyBitmap.y = 325;
	resultEnd.addChild(enemyBitmap);

	//------------显示运动员-----------------
	enemyName = new LBitmap(showSport[1]);
	enemyName.x = 528;
	enemyName.y = 455;
	resultEnd.addChild(enemyName);

	var bitmapVS = new LBitmap(new LBitmapData(imglist["vs"]));
	bitmapVS.x = 380;
	bitmapVS.y = 350;
	resultEnd.addChild(bitmapVS);
	
	
	//开始游戏按钮
	var bitmapUp = new LBitmap(new LBitmapData(imglist["beginGame"],11,5,187,60));
	var bitmapOver = new LBitmap(new LBitmapData(imglist["beginGame"],11,75,187,60));
	var buttonEnter = new LButton(bitmapUp,bitmapOver);
	backGroundLayer.addChild(buttonEnter);
	buttonEnter.x = 330;
	buttonEnter.y = 480;
	buttonEnter.addEventListener(LMouseEvent.MOUSE_DOWN,gamePageOne);
	
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
