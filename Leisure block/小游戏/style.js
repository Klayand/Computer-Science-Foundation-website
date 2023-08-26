//创建地图
 
//人物的坐标
let x, y;
 
//判断是否结束
function falg(){
	for(let i=0; i<arr.length; i++){
		for(let j=0; j<arr[i].length; j++){
			if(arr[i][j]==2){
				return false;
			}
		}
	}
	return true;
}
//求人物坐标
function getPersonXY(){
	for(let i=0; i<arr.length; i++){
		for(let j=0; j<arr[i].length; j++){
			if(arr[i][j]==5){
				x = i;
				y = j;
				return;
			}
		}
	}
}
 
//创建元素
function createEl(e){
	//创建一个div元素
	var div = document.createElement("div");
	//给元素设置宽高
	div.style.width = "50px";
	div.style.height = "50px";
	switch(e){
		case 0:
		//空白
		div.style.backgroundColor = "rgba(255,255,255,0)";
		break;
		case 1:
		//墙
		div.style.backgroundImage = "url(./img/wall.jpg)";
		break;
		case 2:
		//箱子
		div.style.backgroundImage = "url(./img/box.png)";
		break;
		case 3:
		//空位
		div.style.backgroundColor = "pink";
		div.style.borderRadius ="50%";
		break;
		case 4:
		//占位
		div.style.backgroundImage = "url(./img/over_box.png)";
		break;
		case 5:
		//人物
		div.style.backgroundImage = "url(./img/player.png)";
		break;
	}
	return div;
}
//画图
function draw(){
	//获得地图容器
	var box = document.getElementById("box");
	//清空容器
	box.innerHTML = "";
	box.style.width = 50*arr[0].length+"px"
	//遍历地图
	for(let i=0; i<arr.length; i++){
		for(let j=0; j<arr[i].length; j++){
			box.appendChild(createEl(arr[i][j]));
		}
	}
}
let tmp = 0;
window.onload = function(){
	//查询人物坐标
	getPersonXY();
	//画图
	draw();
	//键盘按下事件
	document.onkeydown = function(e){
		switch(e.keyCode){
			case 65:
			case 37:
			//左
			if(arr[x][y-1]==1|| //左边第一个墙
				(arr[x][y-1] == 2 && arr[x][y-2] ==1) || 
				(arr[x][y-1] == 2 && arr[x][y-2] ==2) ||
				(arr[x][y-1] == 2 && arr[x][y-2] ==4) ||
				(arr[x][y-1] == 4 && arr[x][y-2] ==1) ||
				(arr[x][y-1] == 4 && arr[x][y-2] ==2) ||
				(arr[x][y-1] == 4 && arr[x][y-2] ==4)
			){
				return;
			}
			if(arr[x][y-1]==0){
				arr[x][y-1] = 5;
				arr[x][y] = tmp;
				tmp = 0;
			}else if(arr[x][y-1]==2){
				if(arr[x][y-2]==3){
					arr[x][y-2] = 4
				}else{
					arr[x][y-2] = 2;	
				}
				arr[x][y-1] = 5;
				arr[x][y] = tmp;
				tmp = 0;
			}else if(arr[x][y-1]==3){
				arr[x][y-1] = 5;
				arr[x][y] = tmp;
				tmp = 3;
			}else if(arr[x][y-1]==4){
				if(arr[x][y-2]==0){
					arr[x][y-2] = 2;
				}else{
					arr[x][y-2] = 4; 
				}
				arr[x][y-1]=5;
				arr[x][y] = tmp;
				tmp = 3;
			}
			y--;
			break;
			case 68:
			case 39:
			//右
			if(  arr[x][y+1]==1||
				(arr[x][y+1] == 2 && arr[x][y+2] ==1) ||
				(arr[x][y+1] == 2 && arr[x][y+2] ==2) ||
				(arr[x][y+1] == 2 && arr[x][y+2] ==4) ||
				(arr[x][y+1] == 4 && arr[x][y+2] ==1) ||
				(arr[x][y+1] == 4 && arr[x][y+2] ==2) ||
				(arr[x][y+1] == 4 && arr[x][y+2] ==4)
			){
				return;
			}
			if(arr[x][y+1]==0){
				arr[x][y+1] = 5;
				arr[x][y] = tmp;
				tmp = 0;
			}else if(arr[x][y+1]==2){
				if(arr[x][y+2]==3){
					arr[x][y+2] = 4
				}else{
					arr[x][y+2] = 2;	
				}
				arr[x][y+1] = 5;
				arr[x][y] = tmp;
				tmp = 0;
			}else if(arr[x][y+1]==3){
				arr[x][y+1] = 5;
				arr[x][y] = tmp;
				tmp = 3;
			}else if(arr[x][y+1]==4){
				if(arr[x][y+2]==0){
					arr[x][y+2] = 2;
				}else{
					arr[x][y+2] = 4; 
				}
				arr[x][y+1]=5;
				arr[x][y] = tmp;
				tmp = 3;
			}
			y++;
			break;
			case 87:
			case 38:
			//上
			if(  arr[x-1][y]==1||
				(arr[x-1][y] == 2 && arr[x-2][y] ==1) ||
				(arr[x-1][y] == 2 && arr[x-2][y] ==2) ||
				(arr[x-1][y] == 2 && arr[x-2][y] ==4) ||
				(arr[x-1][y] == 4 && arr[x-2][y] ==1) ||
				(arr[x-1][y] == 4 && arr[x-2][y] ==2) ||
				(arr[x-1][y] == 4 && arr[x-2][y] ==4)
			){
				return;
			}
			if(arr[x-1][y]==0){
				arr[x-1][y] = 5;
				arr[x][y] = tmp;
				tmp = 0;
			}else if(arr[x-1][y]==2){
				if(arr[x-2][y]==3){
					arr[x-2][y] = 4
				}else{
					arr[x-2][y] = 2;	
				}
				arr[x-1][y] = 5;
				arr[x][y] = tmp;
				tmp = 0;
			}else if(arr[x-1][y]==3){
				arr[x-1][y] = 5;
				arr[x][y] = tmp;
				tmp = 3;
			}else if(arr[x-1][y]==4){
				if(arr[x-2][y]==0){
					arr[x-2][y] = 2;
				}else{
					arr[x-2][y] = 4; 
				}
				arr[x-1][y]=5;
				arr[x][y] = tmp;
				tmp = 3;
			}
			x--;
			break;
			case 83:
			case 40:
			//下
			if(  arr[x+1][y]==1||
				(arr[x+1][y] == 2 && arr[x+2][y] ==1) ||
				(arr[x+1][y] == 2 && arr[x+2][y] ==2) ||
				(arr[x+1][y] == 2 && arr[x+2][y] ==4) ||
				(arr[x+1][y] == 4 && arr[x+2][y] ==1) ||
				(arr[x+1][y] == 4 && arr[x+2][y] ==2) ||
				(arr[x+1][y] == 4 && arr[x+2][y] ==4)
			){
				return;
			}
			if(arr[x+1][y]==0){
				arr[x+1][y] = 5;
				arr[x][y] = tmp;
				tmp = 0;
			}else if(arr[x+1][y]==2){
				if(arr[x+2][y]==3){
					arr[x+2][y] = 4
				}else{
					arr[x+2][y] = 2;	
				}
				arr[x+1][y] = 5;
				arr[x][y] = tmp;
				tmp = 0;
			}else if(arr[x+1][y]==3){
				arr[x+1][y] = 5;
				arr[x][y] = tmp;
				tmp = 3;
			}else if(arr[x+1][y]==4){
				if(arr[x+2][y]==0){
					arr[x+2][y] = 2;
				}else{
					arr[x+2][y] = 4; 
				}
				arr[x+1][y]=5;
				arr[x][y] = tmp;
				tmp = 3;
			}
			x++;
			break;
		}
		//画图
		draw();
		setTimeout(function(){
			if(falg()){
				alert("恭喜闯关成功");
			}
		},200);
	}
}