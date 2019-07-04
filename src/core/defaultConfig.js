const DefaultConfig = {
  el: '',
  width: 1100,
  height: 450,
  default_text: '<p>欢迎使用<b>meetqyEditor</b>,这是一款简易的web富文本编辑器...</p>', // 默认显示文字
  toolbar: {                            // 菜单栏配置   配置key是iconfont的名字   icon-key
    bold: '加粗',                       
    strike_through: '删除线',            
    underline: '下划线',                
    italic: '斜体',                     
    remove_format: '去除所有格式',       
    ordered_list: '有序列表',            
    unordered_list: '无序列表',          
    justify_left: '左对齐',
    justify_center: '居中对齐',
    justify_right: '右对齐',
    font_size_up: '字体+',
    font_size_down: '字体-'
  }
}

export default DefaultConfig;