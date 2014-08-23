//得分特效，进球效果


//---------------------显示得分函数(self)------------------
function showSelfScore() {
	window.clearInterval(getsecond);
	window.clearInterval(ai);
	window.clearInterval(ai2);
	window.clearInterval(t);
	backGroundLayer.removeChild(ballLayer);
	var resultChart = new LSprite();
	resultChart.graphics.drawRect(1, '#000', [0, 0, 900, 640], true, '#000');
	backGroundLayer.addChild(resultChart);

	showList.push(new LBitmapData(imglist["ArgentinaFrag"]));
	showList.push(new LBitmapData(imglist["BrazilFrag"]));
	showList.push(new LBitmapData(imglist["GramanyFrag"]));
	showList.push(new LBitmapData(imglist["HelanFrag"]));

	//------------------self进球----------------------
	var selfWin = new LSprite();
	selfWin.x = 30;
	selfWin.y = 200;
	resultChart.addChild(selfWin);
	if (temp == 0) {
		var bitmap = new LBitmapData(imglist['selfWinMeixi']);
	}

	if (temp == 1) {
		var bitmap = new LBitmapData(imglist['selfWinNeimaer']);
	}

	if (temp == 2) {
		var bitmap = new LBitmapData(imglist['selfWinReus']);
	}

	if (temp == 3) {
		var bitmap = new LBitmapData(imglist['selfWinVan']);
	}

	selfWin.graphics.beginBitmapFill(bitmap);
	selfWin.graphics.drawRect(1, '#000', [0, 0, 400, 345], false);

	//enemy失败
	var enemyLose = new LSprite();
	enemyLose.x = 620;
	enemyLose.y = 200;
	resultChart.addChild(enemyLose);

	if (tempEn == 0) {
		var bitmap = new LBitmapData(imglist['enemyLoseMeixi']);

	}
	if (tempEn == 1) {
		var bitmap = new LBitmapData(imglist['enemyLoseNeimaer']);

	}
	if (tempEn == 2) {
		var bitmap = new LBitmapData(imglist['enemyLoseRues']);

	}
	if (tempEn == 3) {
		var bitmap = new LBitmapData(imglist['enemyLoseVan']);

	}

	enemyLose.graphics.beginBitmapFill(bitmap);
	enemyLose.graphics.drawRect(1, '#000', [0, 0, 253, 345], false);

	var showResult = new LTextField();
	showResult.text = 'Congratulations!';
	showResult.color = '#fff';
	showResult.weight = 'bold';
	showResult.size = '50';
	showResult.x = 180;
	showResult.y = 100;
	resultChart.addChild(showResult);

	scoreNumberLeft = new LTextField();
	scoreNumberLeft.text = selfScore;
	scoreNumberLeft.color = "#FFF";
	scoreNumberLeft.size = "40";
	scoreNumberLeft.x = 300;
	scoreNumberLeft.y = 350;
	resultChart.addChild(scoreNumberLeft);

	scoreNumberMiddle = new LTextField();
	scoreNumberMiddle.text = ':';
	scoreNumberMiddle.color = "#FFF";
	scoreNumberMiddle.size = "40";
	scoreNumberMiddle.x = 420;
	scoreNumberMiddle.y = 350;
	resultChart.addChild(scoreNumberMiddle);

	scoreNumberRight = new LTextField();
	scoreNumberRight.text = enemyScore;
	scoreNumberRight.x = 520;
	scoreNumberRight.y = 350;
	scoreNumberRight.color = "#FFF";
	scoreNumberRight.size = "40";
	resultChart.addChild(scoreNumberRight);
	clock = 0;
	if (clock == 0) {
		window.clearInterval(t);
	}
	if (SysSecondOne > 0) {
        if(pageIndex == 1){
		resultChart.addEventListener(LMouseEvent.MOUSE_UP, gamePageOne);
		}
		if(pageIndex == 2){
		resultChart.addEventListener(LMouseEvent.MOUSE_UP, gamePageTwo);
		}
	} else if (SysSecondOne == 0) {
		resultChart.addEventListener(LMouseEvent.MOUSE_UP, gamePageOver);
	}

}

//显示得分函数(enemy)
function showEnemyScore() {
	window.clearInterval(ai);

	backGroundLayer.removeChild(ballLayer);
	var resultChart = new LSprite();
	resultChart.graphics.drawRect(1, '#000', [0, 0, 900, 640], true, '#000');
	backGroundLayer.addChild(resultChart);

	//enemy进球 
	var selfLose = new LSprite();
	selfLose.x = 30;
	selfLose.y = 200;
	resultChart.addChild(selfLose);
	if (temp == 0) {
		var bitmap = new LBitmapData(imglist['selfLoseMeixi']);
	}

	if (temp == 1) {
		var bitmap = new LBitmapData(imglist['selfLoseNeimaer']);
	}

	if (temp == 2) {
		var bitmap = new LBitmapData(imglist['selfLoseRues']);
	}

	if (temp == 3) {
		var bitmap = new LBitmapData(imglist['selfLoseVan']);
	}
	selfLose.graphics.beginBitmapFill(bitmap);
	selfLose.graphics.drawRect(1, '#000', [0, 0, 400, 345], false);

	//enemy得分
	var enemyWin = new LSprite();
	enemyWin.x = 620;
	enemyWin.y = 200;
	resultChart.addChild(enemyWin);
	if (tempEn == 0) {
		var bitmap = new LBitmapData(imglist['enemyWinMeixi']);

	}
	if (tempEn == 1) {
		var bitmap = new LBitmapData(imglist['enemyWinNeimaer']);

	}
	if (tempEn == 2) {
		var bitmap = new LBitmapData(imglist['enemyWinRues']);

	}
	if (tempEn == 3) {
		var bitmap = new LBitmapData(imglist['enemyWinVan']);

	}
	enemyWin.graphics.beginBitmapFill(bitmap);
	enemyWin.graphics.drawRect(1, '#000', [0, 0, 400, 345], false);

	var showResult = new LTextField();
	showResult.text = 'Cheer Up!';
	showResult.color = '#fff';
	showResult.weight = 'bold';
	showResult.size = '50';
	showResult.x = 180;
	showResult.y = 100;
	resultChart.addChild(showResult);

	scoreNumberLeft = new LTextField();
	scoreNumberLeft.text = selfScore;
	scoreNumberLeft.color = "#FFF";
	scoreNumberLeft.size = "40";
	scoreNumberLeft.x = 300;
	scoreNumberLeft.y = 350;
	resultChart.addChild(scoreNumberLeft);

	scoreNumberMiddle = new LTextField();
	scoreNumberMiddle.text = ':';
	scoreNumberMiddle.color = "#FFF";
	scoreNumberMiddle.size = "40";
	scoreNumberMiddle.x = 450;
	scoreNumberMiddle.y = 350;
	resultChart.addChild(scoreNumberMiddle);

	scoreNumberRight = new LTextField();
	scoreNumberRight.text = enemyScore;
	scoreNumberRight.x = 600;
	scoreNumberRight.y = 350;
	scoreNumberRight.color = "#FFF";
	scoreNumberRight.size = "40";
	resultChart.addChild(scoreNumberRight);
	clock = 0;
	if (clock == 0) {
		window.clearInterval(t);
	}
	if (startTime > 0) {
	   if(pageIndex == 1){
		resultChart.addEventListener(LMouseEvent.MOUSE_UP, gamePageOne);
		}
		if(pageIndex == 2){
		resultChart.addEventListener(LMouseEvent.MOUSE_UP, gamePageTwo);
		}
	} else if (startTime == 0) {
		resultChart.addEventListener(LMouseEvent.MOUSE_UP, gamePageOver);
	}
}