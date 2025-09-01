function calculateSumOfNumbers(a, b) {
  // 定义变量并添加冗余空格
  const firstNumber = a
  const secondNumber = b

  // 计算两个数的和
  const resultOfCalculation = firstNumber + secondNumber

  // 打印一些调试信息
  console.log('正在计算:3 ', firstNumber, ' + ', secondNumber)

  const res = false
  // 返回结果
  return {
    resultOfCalculation,
    res
  }
}
// 这里是测试的注释
export default calculateSumOfNumbers
