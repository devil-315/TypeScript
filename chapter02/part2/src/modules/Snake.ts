class Snake{
  //蛇头
  head: HTMLElement
  //蛇的身体（包括蛇头）
  bodies: HTMLCollection
  //蛇的容器
  element: HTMLElement
  constructor(){
    this.element = document.getElementById('snake')!
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = document.getElementById('snake')!.getElementsByTagName('div');
  }

  //蛇的坐标（蛇头的坐标）
  get X(){
    return this.head.offsetLeft
  }
  get Y(){
    return this.head.offsetTop
  }

  //设置蛇的坐标
  set X(value: number){
    //如果新值和旧值一样，就没必要改了
    if(this.X == value){
      return
    }
    //X的合法范围 0~290
    if(value < 0 || value > 290){
      //进入判断，说明蛇撞墙了，抛出异常
      throw new Error('蛇撞墙了')
    }
    //修改X是，是在修改水平坐标，蛇在左右移动时，不能掉头，也就向左移动时，不能立即向右移动
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
      //发生掉头，让蛇方向不变继续移动
      if(value > this.X){
        //向右发生调用，让蛇继续向左走
        value = this.X - 10
      }else{
        value = this.X + 10
      }
    }
    //移动身体
    this.moveBody()

    this.head.style.left = value + 'px';

    //检查有没有撞到自己
    this.checkHeadBody()
  }
  set Y(value: number){
    //如果新值和旧值一样，就没必要改了
    if(this.Y == value){
      return
    }
    //Y的合法范围 0~290
    if(value < 0 || value > 290){
      //进入判断，说明蛇撞墙了，抛出异常
      throw new Error('蛇撞墙了')
    }
    
    //修改X是，是在修改水平坐标，蛇在左右移动时，不能掉头，也就向左移动时，不能立即向右移动
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
      //发生掉头，让蛇方向不变继续移动
      if(value > this.Y){
        //向右发生调用，让蛇继续向左走
        value = this.Y - 10
      }else{
        value = this.Y + 10
      }
    }

    //移动身体
    this.moveBody()

    this.head.style.top = value + 'px';

    //检查有没有撞到自己
    this.checkHeadBody()
  }
  //蛇增加身体的方法
  addBody(){
    //向element添加一个div
    this.element.insertAdjacentHTML("beforeend","<div></div>")
  }

  //蛇身体的移动
  moveBody(){
    //将后面的身体设置为前边身体的位置
    //遍历所有的身体
    for(let i = this.bodies.length - 1; i > 0;i--){
      //获取前面身体的位置
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      //将值设置到当前身体上
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }

  //检查蛇头是否撞到自己
  checkHeadBody(){
    //获取所有身体，检查其是否和蛇头的坐标发生重叠
    for(let i = 0;i < this.bodies.length;i++){
      let bd = this.bodies[i] as HTMLElement
      if(this.X === bd.offsetLeft&&this.Y == bd.offsetTop){
        //说明蛇头撞到身体
        throw new Error('撞到自己了')
      }
    }
  }
}

export default Snake