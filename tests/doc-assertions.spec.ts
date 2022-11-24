import { test, expect } from '@playwright/test'

test('test base', () => {
  expect(true).toBeTruthy()
})

test('test not',()=>{
  expect(false).not.toBeTruthy()
})

test('test soft', () => {
  expect.soft(1).toBe(2)

  expect(1).toBe(3)

  expect(2).toBe(2)
})

test('test custom expect info',()=>{
  expect(1,'这是自定义描述信息').toBe(2)
})

test('test poll',async ({page})=>{
  await expect.poll(async () => {
    const response = await page.request.get('https://www.baidu.com/');
    return response.status();
  }, {
    message: '接口请求成功', 
    timeout: 10000,// 轮询时间，默认5秒，如果设置为0，则表示不设置超时
  }).toBe(200);
})