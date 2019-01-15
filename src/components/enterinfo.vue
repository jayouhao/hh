<template>
  <div class="proxyinfoentry-box enterinfo-box">
    <div class="container">
      <div class="form-wrapper">
        <form>
          <div class="form-item">
            <div class="label">联系人</div>
            <div class="form-input-wrapper">
              <input type="text" @keyup="quanju" v-model="tjiao.xing">
            </div>
          </div>
          <div class="form-item" style="margin-top: 0.36rem;">
            <div class="label">联系电话</div>
            <div class="form-input-wrapper">
              <input type="tel" @keyup="quanju" v-model="tjiao.dian" maxlength="11">
            </div>
          </div>
          <div class="form-item2" style="align-items: flex-start; margin-top: 0.82rem;">
            <div class="label">擅长类型</div>
            <div class="form-input-wrapper">
              <div class="select-group">
                <div
                  v-for="(zi,i) in shuzi"
                  :key="i"
                  v-if="zi=='面相'"
                  @click="xugo"
                  ref="one"
                  class="select-item proxyinfolei"
                >
                  <div class="name">{{zi}}</div>
                  <img src="../assets/gouzi.png" class="select-icon">
                </div>
                <div v-else @click="xugo" class="select-item select-item1">
                  <div class="name">{{zi}}</div>
                  <img src="../assets/gouzi.png" class="select-icon">
                </div>
              </div>
            </div>
          </div>
          <div class="enter-miao">
            <span>优势描述</span>
            <textarea
              class="enter-content"
              placeholder="简单描述您的从业知识、经验；例如：为知名人士看相算命，累积测算超1000人，某某协会成员..."
              @keyup="quanju"
              v-model="tjiao.daili"
            ></textarea>
          </div>
          <div class="confirm-btn-wrapper">
            <button
              disabled="disabled"
              ref="tiji"
              type="button"
              @click="qdtjiao"
              class="confirm-btn"
            >确认提交</button>
          </div>
        </form>
      </div>
    </div>

    <!-- 提交中 -->
    <div class="weui-toast" ref="xuniti">
      <i class="weui-loading weui-icon_toast"></i>
      <p class="weui-toast__content">提交中</p>
      <div class="all-badao"></div>
    </div>

    <!-- 提交成功提示 -->
    <div class="modal-wrapper-boxa" ref="tishi" style="
">
      <div class="mask"></div>
      <div class="modal">
        <div class="title">提示</div>
        <div class="content">您的资料已经提交审核，若审核通过，1-3个工作日内我们将与您联系!</div>
        <button type="button" class="confirm-btn" @click="qding">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
import { setTimeout } from "timers";
export default {
  created() {},
  data() {
    return {
      shuzi: ["面相", "手相", "八字", "风水", "星座塔罗"],
      zhi: null,
      tjiao: {
        xing: null,
        dian: null,
        daili: null,
        tui: "面相"
      },
      zandom: null
    };
  },
  methods: {
    quanju() {
      if (
        this.tjiao.xing &&
        this.tjiao.dian &&
        this.tjiao.daili &&
        this.tjiao.tui.length != 0 &&
        /^1[3|4|5|8][0-9]\d{4,8}$/.test(this.tjiao.dian) &&
        this.tjiao.dian.length == 11
      ) {
        this.$refs.tiji.classList.add("confirm-btnlei");
        this.$refs.tiji.removeAttribute("disabled");
      } else {
        this.$refs.tiji.classList.remove("confirm-btnlei");
        this.$refs.tiji.setAttribute("disabled", "disabled");
      }
      console.log(this.tjiao);
    },
    geren() {
      this.tjiao.daili = "个人";
      this.$refs.geren1.style.display = "block";
      this.$refs.geren.style.display = "none";
      this.$refs.goshi1.style.display = "none";
      this.$refs.goshi.style.display = "block";
      this.quanju();
    },
    goshi() {
      this.tjiao.daili = "公司";
      this.$refs.geren1.style.display = "none";
      this.$refs.geren.style.display = "block";
      this.$refs.goshi1.style.display = "block";
      this.$refs.goshi.style.display = "none";
      this.quanju();
    },
    xugo(s) {
      var dom = s.target;
      if (s.target.className.indexOf("select-item") == -1) {
        var dom = s.target.parentNode;
      }

      //删除类
      this.zandom
        ? this.zandom.classList.remove("proxyinfolei")
        : this.$refs.one[0].classList.remove("proxyinfolei");

      this.zandom = dom;

      var ziq = dom.children[0].innerText;
      if (dom.className.indexOf("proxyinfolei") == -1) {
        dom.classList.add("proxyinfolei");
        this.tjiao.tui = ziq;
      }
      this.quanju();
    },
    qvding() {
      if (this.zhi) {
        this.tjiao.tui.push(this.zhi);
        this.shuzi.splice(-1, 0, this.zhi);
        this.$refs.tanchu.style.display = "none";
        this.zhi = "";
        this.quanju();
      }
    },
    //确定提交
    qdtjiao() {
      var jub = this.$refs.xuniti;
      jub.style.display = "block";
      setTimeout(() => {
        jub.style.display = "none";
        this.$refs.tishi.style.display="block";
      }, 1000);
    },
    //确定
    qding(){
        this.$router.push("/setting");
    }
  }
};
</script>
