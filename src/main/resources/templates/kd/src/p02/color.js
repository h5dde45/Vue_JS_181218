export default {
    bind(el, bindings, vnode){
      var arg = bindings.arg;
        el.style[arg] = bindings.value
      var fontModifiers = bindings.modifiers['font'];
        if(fontModifiers){
          el.style.fontSize='33px'
        }
    },
}
