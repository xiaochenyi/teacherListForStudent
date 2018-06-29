

<template>
  <div id="app">
    <header class="header">
      <h1>{{data.title}}</h1>
    </header>
    <router-view/>
  </div>
</template>

<script>
  import { mapModules, mapRules } from 'vuet'
  export default{
      mixins: [
          mapModules({
              data: 'top' // { 别名： '模块路径' }
          }),
          mapRules({
              need: [{ path: 'top' }]
          })
      ],
      mounted() {
          (function (doc, win) {
              var docEl = doc.documentElement,
                  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                  recalc = function () {
                      var clientWidth = docEl.clientWidth;
                      if (!clientWidth) return;
                      docEl.style.fontSize = clientWidth/16 + 'px';
                  };

              if (!doc.addEventListener) return;
              win.addEventListener(resizeEvt, recalc, false);
              doc.addEventListener('DOMContentLoaded', recalc, false);
          })(document, window);
      }
  }

</script>

