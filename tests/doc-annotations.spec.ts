import { test, expect } from '@playwright/test'

test.describe('test describe', () => {
  test('one', async ({ page }) => {
    expect(null).toBeNull()
  })

  test('two', async ({ page }) => {
    expect(2).toBeTruthy()
  })
})

test.describe('test skip', () => {
  test.skip('skip', async () => expect(null).toBeNull())
  test('not skip', async () => expect(null).toBeNull())
})

// test.describe('test only', () => {
//   test('one', async ({ page }) => {
//     expect(1).toBe(2)
//   });

//   //只有这个test.only的测试用例会被执行
//   test.only('two', async ({ page }) => {
//     expect(1).toBe(1)
//   });

//   test('three', async ({ page }) => {
//     expect(1).toBe(2)
//   });
// });

test.describe('test tag', () => {
  test('test tag @abc', () => {
    expect(1).toBe(1)
  })

  test('test tag @xyz', () => {
    expect(2).toBe(2)
  })
})

test.describe('test skip group', () => {
  // test.skip(({ browserName }) => browserName === 'chromium', 'Chromium only!');
  test.skip(() => true, 'test skip group!') //为true则跳过这组测试

  test('test 1', async ({ page }) => {
    expect(1).toBe(1)
  })

  test('test 2', async ({ page }) => {
    expect(2).toBe(2)
  })
})

test.describe('test fixme', () => {
  let a = 0
  test.beforeEach(async ({ page, isMobile }) => {
    //true跳过测试，false进行测试
    test.fixme(true, 'Settings page does not work in mobile yet')
    a = 1
  })

  test('user profile', async ({ page }) => {
    expect(a).toBe(1)
  })
})

test('test info', async ({ page }) => {
  test.info().annotations.push({ type: 'issue', description: '这是一个描述信息……' })
})
