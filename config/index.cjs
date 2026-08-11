/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】
 * 自行添加属性，以支持更多个性化功能
 */
// ⚠️ 安全提示：请将以下占位符替换为你自己的配置，切勿提交真实密钥到公开仓库
// 建议将真实配置放在 config/local.cjs 中（已被 .gitignore 忽略）
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'YOUR_APP_ID',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'YOUR_APP_SECRET',

  PROVINCE: 'YOUR_PROVINCE',
  CITY: 'YOUR_CITY',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'TA',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'YOUR_USER_OPENID',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'YOUR_TEMPLATE_ID',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: 'MM-DD',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: 'YYYY', date: 'MM-DD',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: 'YYYY', date: 'MM-DD',
        },
        {
          type: '节日', name: '相识纪念日', year: 'YYYY', date: 'MM-DD',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: 'YYYY-MM-DD' },
        // 结婚纪念日
        { keyword: 'marry_day', date: 'YYYY-MM-DD' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'YOUR_CALLBACK_TEMPLATE_ID',

  CALLBACK_USERS: [
    {
      name: 'YOUR_NAME',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'YOUR_OPENID',
    }
  ],

}

module.exports = USER_CONFIG

