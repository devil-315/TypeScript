//定义类
class Food{
  //定义一个属性表示食物所对应的元素
  element: HTMLElement;

  constructor(){
    //获取页面的food元素并将其赋值给element
    this.element = document.querySelector('#food')!; //！表示这里不会为空
  }

  //定义一个获取食物X轴坐标的方法
  get X(){
    return this.element.offsetLeft
  }

  //定义一个获取食物Y轴坐标的方法
  get Y(){
    return this.element.offsetTop
  }

  //修改食物的位置
  change(){
    //生成随机的位置
    //0~290之间
    //蛇移动一次是10，所有食物的位置是10的倍数
    let left = (Math.round(Math.random() * 29)*10)
    let top = (Math.round(Math.random() * 29)*10)
    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px';
  }
}

export default Food