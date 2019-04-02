<template>
  <div class="mui-scroll-wrapper">
    <div class="mui-scroll">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    mounted(){
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
            });
    },
};
</script>
