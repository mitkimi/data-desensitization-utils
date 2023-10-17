export function testFoo (name, source, foo) {
  console.log(`${name || '未命名项目'}脱敏：`, source, '>>>>', foo(source))
}