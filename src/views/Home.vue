<template>
  <main class="main">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="main-heading">Contacts</h1>
        </div>
      </div>
    </div>
    <AppContacts/>
    <AppMap/>
    <AppForm/>
  </main>
</template>

<script>
// @ is an alias to /src
import AppContacts from "@/components/AppContacts.vue";
import AppMap from "@/components/AppMap.vue";
import AppForm from "@/components/AppForm.vue";

export default {
  name: "home",
  components: {
    AppContacts,
    AppMap,
    AppForm
  }
};
</script>
