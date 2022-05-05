<template>
   <v-app>
    <v-app-bar app color="blue darken-4" class="white--text" clipped-left>
      <v-app-bar-nav-icon app color="white" v-on:click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="header-bar">CaloCalo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-on:click="logout" color="red" class="white--text" >ログアウト</v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" color="black" clipped>
      <div class="top-title">Menu</div>
      <v-list>
        <v-row class="vertical-spacer" justify="center">
          <v-btn large class="menu-btn"><v-icon>mdi-human-handsdown</v-icon>MyPage</v-btn>
        </v-row>
         <v-row class="vertical-spacer" justify="center">
          <v-btn large class="menu-btn"><v-icon>mdi-file </v-icon>Log</v-btn>
        </v-row>
        <v-row class="vertical-spacer" justify="center">
          <v-btn large class="menu-btn"><v-icon>mdi-cog</v-icon>Setting</v-btn>
        </v-row>
      </v-list>
    </v-navigation-drawer>

    <!-- v-mainはデフォルトで余白やその他スタイルが自動指定されてる -->
    <v-main class="pt-0 blue-grey lighten-4">
      <v-container>
        <v-row lg="12">
          <v-col cols="5" class="left-col">
            <div class="form-container">
              <v-form ref="form">
                <v-label><h2 class="left-title">本日の摂取カロリー</h2></v-label>
                <v-textarea solo name="input-7-4" label="摂取カロリーを入力" v-model="user.intakeCalorie">
                </v-textarea>
                <div class="btn-container">
                  <v-btn class="mr-4" v-on:click="submit">SUBMIT</v-btn>
                  <v-btn v-on:click="clear">CLEAR</v-btn>
                </div>
              </v-form>
              <div class="result"><h2>{{ getintakeCalorie }}kcal</h2></div>
            </div>
          </v-col>

          <v-col cols="7" class="">
            <div class="output-container">
              <v-label><h2 class="right-title">現在の目標カロリー</h2></v-label>
              <div class="goal-cal">
                <v-sheet elevation="50" class="mx-auto" height="150" width="500" rounded shaped>
                  <h1 class="goal-cal-disp">{{ getgoalCalorie }}kcal</h1>
                </v-sheet>
              </div>
              <div class="poss-cal">
                <v-label><h2 class="right-title-sub">摂取可能なカロリー</h2></v-label>
                <v-sheet elevation="50" class="mx-auto" height="150" width="500" rounded shaped>
                </v-sheet>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer class="blue darken-4" dark app>
      <p class="reset-css footer-layout">Copyright © 2022 SBチームA. All Rights</p>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'MyPage',
  components: {
  },
  data: () => ({
    drawer: null,
    user: {},
  }),
  computed: {
    getintakeCalorie: function() {
      return this.$store.state.intakeCalorie;
    },
    getgoalCalorie: function() {
      return this.$store.state.goalCalorie;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("auth", {
        empId: '0',
        password: 'qazplm',
      });
      this.$router.push('/login')
    },
    submit() {
      this.$store.dispatch("setcalo", {
        intakeCalorie: this.user.intakeCalorie,
      });
    },
    clear() {
      this.$refs.form.reset();
    }
  },
};
</script>

<style scoped>
.reset-css {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.top-title {
  color: white;
  text-align: center;
  font-size: 30px;
  padding: 10px 0 60px 0;
}
.logout-btn {
  color: white;
  font-size: 20px;
}
.vertical-spacer {
  padding-bottom: 60px;
}
.menu-btn {
  margin: 0 auto;
}
.left-col {
  //border-right: 1px solid black;
}
.left-title {
  color: black;
  text-align: center;
  padding: 100px 0 50px;
}
.form-container {
  height: 90vh;
  width: 100%;
}
.btn-container {
  margin: 0 auto;
}
.output-container {
  height: 90vh;
  width: 100%;
}
.right-title {
  color: black;
  text-align: center;
  padding: 100px 0 50px;
}
.right-title-sub {
  color: black;
  text-align: center;
  padding: 50px 0;
}
.goal-cal-disp {
  text-align: center;
  line-height: 150px;
}
.footer-layout {
  width: 100%;
  text-align: center;
}
</style>