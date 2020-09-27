<template>
  <!-- Main Content -->
  <main class="bg-purple-200 w-full">
    <div>
      <Video title="My favorite image" image="pics.jpg" url="youtu.be/2137s7qwe" />
    </div>
  </main>
  <!-- End of Main Content -->
</template>

<script>
import Video from "@/components/Video";

export default {
  components: { Video },
  data() {
    return {
      user: {},
      username: "nbpalomino",
    };
  },
  methods: {
    loadUser() {
      this.$http
        .get("https://api.github.com/users/" + this.username)
        .then(res => {
          console.dir(res);

          if (res.status === 200) {
            this.user = res.data;
          }
        });
    }
  },
  mounted() {
    console.log("Weee");
    this.loadUser();
  }
};
</script>

<style lang="scss">
</style>