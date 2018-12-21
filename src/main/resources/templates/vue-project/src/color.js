export default {
  bind (el, bindings, vnode) {
    var arg = bindings.arg;
    el.style[arg] = bindings.value
  }
}
