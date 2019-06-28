class Element {
  // str 可能值   #id .class node html字符串
  constructor(selector) {
    this.el = this._init(selector);
  }

  _init(selector) {
    if(!selector) {
      return;
    }

    if(typeof selector === 'string') {
      if(selector.match(/^\./)) {
        return document.querySelectorAll(selector);
      } else if(selector.match(/^#/)) {
        return document.querySelector(selector)
      } else {
        let dom = this.stringToElement(selector);
        if(dom.length && dom.length === 1) {
          return dom[0]
        }
      }
    } else {
      return selector;
    }
  }

  html() {
    return this.el;
  }

  /**
   * 监听事件
   * @param {string} type 事件类型 同时绑定多个事件空格分开   eg: mouseup mousedown
   * @param {*} listener  事件回调
   */
  on(type, listener) {
    if(!type) return;

    let types = type.split(/\s/);
    types.forEach(val => {
      this.el.addEventListener(val, e => {
        listener && listener(e);
      })
    })
  }

  /**
   * 追加元素
   * @param {string || node || Element} selector  追加的元素
   */
  append(selector) {
    if(selector instanceof Element) {
      selector = selector.html()
    }

    if(typeof selector === 'string') {
      this.el.innerHTML += selector;
    } else {
      this.el.appendChild(selector);
    }

    return this;
  }
  
  /**
   * 是否没有子节点 || 有且只有一个满足条件的节点
   * @param {string} str .class || #id    
   */
  isNotChildren(str) {
    let childs = this.children();
    if(childs.length > 1) return false;
    
    if(!str) { // 是否有子节点
      return !childs.length;
    } else { // 有且只有一个满足条件的节点
      childs
    }
  }

  children() {
    return this.el.children
  }

  childNodes() {
    return this.el.childNodes;
  }

  // html字符串转node
  stringToElement(str) {
    let div = document.createElement('div');
    div.innerHTML = str;
    return div.children;
  }

  // 增加className
  addClass(className) {
    if(!className) return;
    
    if(this.el instanceof NodeList || this.el instanceof HTMLCollection) {
      return false;
    }

    let classNameArr = this.el.className ? this.el.className.split(/\s/) : []
    classNameArr.push(className);
    this.el.className = classNameArr.join(' ');
    return this;
  }

  /**
   * 设置id  
   * @param {string || null} id   没有传入id 返回当前el的id
   */
  id(id) {
    if(this.el instanceof NodeList || this.el instanceof HTMLCollection) {
      return ;
    }

    if(!id) return this.el.id;

    this.el.id = id;
    return this;
  }

  /**
   * 设置css
   * @param {object} styles 样式对象
   */
  css(styles) {
    if(!styles || typeof styles !== 'object' || !Object.keys(styles).length) {
      return;
    }
    let {el} = this;

    for(let key in styles) {
      let val = styles[key];
      el.style[key] = val;
    }

    return this;
  }
}


export default function(str) {
  return new Element(str);
}