//定义记分牌
class ScorePanel{
  //score和level用来记录分数和等级
  score = 0
  level = 1
  //分数和等级所在的元素，在构造函数中初始化
  scoreEle: HTMLElement
  levelEle: HTMLElement

  //设置一个变量限制等级
  maxLevel: number
  //设置一个变量多少分升级
  upScore: number
  constructor(maxLevl: number = 10,upScore: number = 10){
    this.scoreEle = document.querySelector('#score')!;
    this.levelEle = document.querySelector('#level')!;
    this.maxLevel = maxLevl
    this.upScore = upScore
  }

  //设置一个加分的方法
  addScore(){
    //分数自增
    this.score++
    this.scoreEle.innerHTML = this.score + ''
    //判断分数来升级
    if(this.score % this.upScore === 0){
      this.levelUp()
    }
  }

  //等价提升
  levelUp(){
    if(this.level < this.maxLevel){
      this.levelEle.innerHTML = ++this.level + ''
    }
  }
}

export default ScorePanel