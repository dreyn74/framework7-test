<template>
  <f7-page>
    <f7-row no-gap>
      <f7-col width="30">
        <!--f7-button fill raised popup-open="#popup">Popup</f7-button-->
        <f7-navbar title="Left Panel" />
        <f7-list v-for="n in 40" :key="n">
            <f7-list-item link="#" title="n" panel-close></f7-list-item>
          </f7-list>
      </f7-col>
      <f7-col width="70">
        <!--f7-button fill raised login-screen-open="#login-screen">Login Screen</f7-button-->
        <f7-navbar title="Left Panel" />
        <!--f7-block strong>
          <p>Left panel content goes here</p>
        </f7-block>
        <f7-block-title>Load page in panel</f7-block-title-->
        <f7-list>
          <f7-list-item link="/about/" title="About"></f7-list-item>
          <f7-list-item link="/profile/" title="Profile"></f7-list-item>
        </f7-list>
        <f7-block-title>Load page in main view</f7-block-title>
        <f7-list>
          <f7-list-item link="/about/" title="About" view="#main-view" panel-close></f7-list-item>
          <f7-list-item link="/profile/" title="Profile" view="#main-view" panel-close></f7-list-item>
        </f7-list>
      </f7-col>
    </f7-row>
  </f7-page>
</template>
<script>
export default {};
</script>
