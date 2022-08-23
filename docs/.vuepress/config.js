module.exports = {
    title: 'fxf111的博客',
    description: 'fxf111的博客',
    themeConfig: {
        sidebar:[
            {
                title: '算法',   // 必要的
                path: '/algorithm/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 2,    // 可选的, 默认值是 1
                children: [
                  '/algorithm/贪心算法/'
                ]
              },
        ]
    }
}