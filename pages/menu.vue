<template>
  <section class="page">
    <div class="header">
      <div class="logoImg">
        <h1><img id="mapImage" src="~/assets/img/logo.gif" alt="Yuimarl" /></h1>
      </div>
      <div class="h_right">
        <ul>
          <li>ログインユーザー: 新田 雅浩</li>
          <li>ログアウト</li>
        </ul>
      </div>
    </div>
    <div id="under" class="under_content">
      <div class="mainMenu">
        <h2 class="menu_h2">メインメニュー</h2>
        <div class="container">
          <div class="idxCols">
            <div class="idxCol">
              <div class="subMenu">
                <h1>人/組織/物</h1>
                <ul>
                  <li><nuxt-link to="/party/list">一覧</nuxt-link></li>
                  <li>人/組織/物を登録</li>
                  <li>組織を登録</li>
                  <li>組織を登録</li>
                  <li>物を登録</li>
                </ul>
              </div>
              <div class="subMenu">
                <h1>システム管理</h1>
                <ul>
                  <li>ユーザー</li>
                  <li>物品カテゴリー</li>
                </ul>
              </div>
              <div class="chgpass">[パスワード変更]</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      base: process.env.BASE_URL,
    };
  },
  async fetch({ store, params }) {
    console.log("***process.env.BASE_URL=" + process.env.BASE_URL);
  },
};
</script>

<style scoped>
.page {
  padding: 0;
}
</style>
