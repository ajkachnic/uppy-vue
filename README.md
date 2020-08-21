# uppy-vue

## Setting up `uppy-vue`

### Installation

Because this in development, there is no npm package; However, both `npm` and `yarn` allow you to install from GitHub repos like so

```bash
# Yarn
yarn add ajkachnic/uppy-vue

# NPM
npm install ajkachnic/uppy-vue
```

### Usage

Here is the basic example with `uppy-vue`

```vue
<template>
  <div id="app">
    <Dashboard :uppy="uppy"/>
  </div>
</template>

<script>
import Vue from 'vue'
import Dashboard from './components/uppy/Dashboard.vue'

import Uppy from '@uppy/core'

export default Vue.extend({
  name: 'App',
  components: {
    Dashboard
  },
  data () {
    return {
      uppy: Uppy()
    }
  },
  beforeDestroy () {
    this.uppy.close()
  }
})
</script>
```

## Project setup

```
yarn
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
