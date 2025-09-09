<template>
<div class="row">
    <div class="col-12">
       <Navbar />
       <RouterView />
    </div>
</div>

</template>

<script>
import Navbar from "../src/components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>


