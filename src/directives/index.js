import Vue from 'vue'

Vue.directive('focus', {
  /**
   * inserted hook: Cuando el elemento es insertado en el DOM
   * @param el {HTMLElement} El elemento al que está dirigida la directiva
   *  */

  inserted: function (el) {
    el.focus()
  }
})

Vue.directive('diablo', {})
