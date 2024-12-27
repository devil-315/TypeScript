//引入其他类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
//游戏控制器，控制其他所有类
class GameControl{
  //定义三个属性
  //蛇
  snake: Snake
  //食物
  food: Food
  //记分牌
  scorelPanel: ScorePanel
  //创建一个属性来存储蛇的移动方向，也就是按键的方向
  direction: string = 'Right'
  //创建一个属性用来记录游戏是否结束
  isLive: boolean = true

  constructor(){
    this.snake = new Snake()
    this.food = new Food()
    this.scorelPanel = new ScorePanel()
  }

  //游戏的初始化方法，调用后游戏开始
  init(){
    //绑定键盘的按下事件
    document.addEventListener('keydown',this.keydownHandle.bind(this))
    //调用run方法
    this.run()
  }

  //键盘按下的响应函数
  keydownHandle(event: KeyboardEvent){
    //获取用户按下的按键
    // console.log(event.key);
    //修改direction属性
    this.direction = event.key
  }

  //创建一个控制蛇移动的方法
  run(){
    //获取蛇现在的坐标
    let X = this.snake.X
    let Y = this.snake.Y

    //根据按键方向，修改X,Y值
    switch(this.direction){
        case "ArrowUp":
        case "Up":
            //向上移动 top减少
            Y -= 10
            break;
        case "ArrowDown":
        case "Down":
          //向下移动 top增加
          Y += 10
            break;
        case "ArrowLeft":
        case "Left":
          //向左移动 left减少
          X -=10
            break;
        case "ArrowRight":
        case "Right": 
          //向右移动 left增加
          X += 10
            break;
    }

    //检测蛇是否吃到食物
    this.checkEat(X,Y)

    //修改设定X,Y值
    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch (e) {
      //进入Catch，说明蛇撞墙了
      alert(e + 'GAME OVER!')
      this.isLive = false
    }

    //开启定时调用
    this.isLive && setTimeout(this.run.bind(this),300-(this.scorelPanel.level - 1)*30)
  }

  //定义一个方法，用来检测蛇是否吃到食物
  checkEat(x:number,y:number){
  if(x === this.food.X && y === this.food.Y){
       //食物位置重置
       this.food.change()
       //分数增加
       this.scorelPanel.addScore()
       //蛇要增加一节
       this.snake.addBody()
    }
  }
}
export default GameControl