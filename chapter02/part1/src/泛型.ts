function f1<T>(arg: T):T{
  return arg
}
f1(10)

interface Inter{
  length: number
}

function fn2<T extends Inter>(a: T): number{
  return a.length
}

fn2('123')
fn2({length:10})