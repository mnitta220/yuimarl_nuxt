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
      <div class="menu">
        <div class="h_right">
          <ul>
            <li><nuxt-link to="/menu">メインメニュー</nuxt-link></li>
            <li><nuxt-link to="/">人を登録</nuxt-link></li>
            <li><nuxt-link to="/">組織を登録</nuxt-link></li>
            <li><nuxt-link to="/">法人を登録</nuxt-link></li>
            <li><nuxt-link to="/">物を登録</nuxt-link></li>
          </ul>
        </div>
      </div>

      <div class="messages"></div>
      <div class="area1">
        <div class="searchBox">
          <div class="formLine">
            <div class="formLabel2">
              <label>Party No.</label>
            </div>
            <div class="formValue">
              <input
                type="number"
                id="searchPartyNo"
                maxlength="10"
                style="width: 60px"
              />
            </div>
          </div>
          <div class="formLine">
            <div class="formLabel2">
              <label>名前</label>
            </div>
            <div class="formValue">
              <input
                type="text"
                id="searchPartyName"
                maxlength="40"
                class="input300"
              />
            </div>
          </div>
          <div class="formLine">
            <div class="formLabel2">
              <label>種別</label>
            </div>
            <div class="formValue">
              <input type="checkbox" name="partyType" value="PC" />パソコン
              <input type="checkbox" name="partyType" value="SP" />スポーツ
              <input type="checkbox" name="partyType" value="RD" />読書
            </div>
          </div>
          <div class="formLine">
            <div class="formLabel2">
              <label></label>
            </div>
            <div class="formValue">
              <input type="submit" value=" 検索 " />
            </div>
          </div>
        </div>
        <div>
          <ul class="commandButtons">
            <li><nuxt-link to="/">&lt;&lt;</nuxt-link></li>
            <li><nuxt-link to="/">&lt;</nuxt-link></li>
            <li><nuxt-link to="/">9</nuxt-link></li>
            <li><nuxt-link to="/">10</nuxt-link></li>
            <li><span style="font-weight: bold">11</span></li>
            <li><nuxt-link to="/">12</nuxt-link></li>
            <li><nuxt-link to="/">13</nuxt-link></li>
            <li><nuxt-link to="/">&gt;</nuxt-link></li>
            <li><nuxt-link to="/">&gt;&gt;</nuxt-link></li>
          </ul>
          <div class="table-container">
            <table
              class="listTb"
              style="width: 600px"
              border="0"
              cellpadding="2"
              cellspacing="0"
            >
              <tr>
                <th>No.</th>
                <th>名前</th>
                <th>都道府県</th>
                <th>市区町村</th>
                <th>種別</th>
                <th></th>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <nuxt-link to="/">照会</nuxt-link>
                  <nuxt-link to="/">編集</nuxt-link>
                  <nuxt-link to="/">削除</nuxt-link>
                  <nuxt-link to="/">関連</nuxt-link>
                </td>
              </tr>
            </table>
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
