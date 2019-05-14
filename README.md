|── src/
|  |── view
   |   |—— Home.js         # Home Page 页面
   |   |—— HomeRedux.js    # Home Redux 集合
   |   └── Detail.js       # Detail Page 页面
   |—— redux
   |   └── reducers.js     # 统一了views下的所有reducer
   |—— layouts            # layouts 负责整个app 的布局结构
   |   |—— Frame.js
   |   |—— Nav.js      
   |—— components
   |   |—— Common          # 通用组件
   |   |—— Home            # Home Page下用到的组件
   |   |   |—— Preview.js
   |   |   └── PreviewRedux.js   # Preview组件用到的reducer, 以及action


