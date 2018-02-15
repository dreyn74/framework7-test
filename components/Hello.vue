<template>
	 <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left" />
      </f7-nav-left>
      <f7-nav-title>My App</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right" />
      </f7-nav-right>
    </f7-navbar>
    <f7-toolbar tabbar>
      <f7-link icon="icon-1" text="Tab 1" tab-link="#tab1" />
      <f7-link icon="icon-2" text="Tab 2" tab-link="#tab2" />
      <f7-link icon="icon-3" text="Tab 3" tab-link="#tab3" />
      <f7-link icon="icon-4" text="Tab 4" tab-link="#tab4" />
    </f7-toolbar>
    <f7-tabs animated>
      <f7-tab id="tab1" tab-active>Tab 1 content...</f7-tab>
      <f7-tab id="tab2">Tab 2 content...</f7-tab>
      <f7-tab id="tab3">Tab 3 content...</f7-tab>
      <f7-tab id="tab4">Tab 4 content...</f7-tab>
    </f7-tabs>
	</f7-page>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
