import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  // 测试目录
  testDir: './tests',
  /* 最长等待时间 */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  /* 是否并行测试 */
  fullyParallel: true,
  /* 如果测试出错则令CI构建失败 */
  forbidOnly: !!process.env.CI,
  /* 重试次数 */
  retries: process.env.CI ? 2 : 0,
  /* 进程数 */
  workers: process.env.CI ? 1 : undefined,
  /* 导出的Report类型. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /*以下所有项目的共享设置. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* 每个操作（如"click()"）所需的最长时间。默认值为0（无限制）。 */
    actionTimeout: 0,

    /* 在使用 `await page.goto('/')` 时所跳转的基础URL */
    // baseURL: 'http://localhost:3000',

    /* 测试出错时，设置什么时候追踪收集报错信息. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* 为项目设置使用的浏览器 */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },
    //
    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },

    /* 针对移动视口进行测试。*/
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    /* 针对品牌浏览器进行测试。 */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],

  // 用于放置测试数据/结果的目录，比如说截图、音频、收集的报错信息等
  // outputDir: 'test-results/',

  /* 在开始测试之前运行本地开发服务器 */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};

export default config;
