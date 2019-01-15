<template>
  <div class="proxyinfoentry-box">
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
          <div class="form-item1" style="margin-top: 0.72rem;">
            <div class="label">代理资质</div>
            <div class="form-input-wrapper1">
              <div class="vux-checker-box radio-group">
                <div @click="geren" class="vux-checker-item radio-item vux-tap-active">
                  <img                    
                    ref="geren1"
                    src="../assets/yuan1.png"
                    class="radio-icon"
                  >
                  <img                    
                    ref="geren"
                    src="../assets/yuan.png"
                    class="radio-icon yins"
                  >
                  <span>个人</span>
                </div>
                <div @click="goshi" class="vux-checker-item radio-item vux-tap-active">
                  <img
                    ref="goshi1"
                    src="../assets/yuan1.png"
                    class="radio-icon yins"
                  >
                  <img
                    ref="goshi"
                    src="../assets/yuan.png"
                    class="radio-icon"
                  >
                  <span>公司</span>
                </div>
              </div>
            </div>
          </div>
          <div class="form-item2" style="align-items: flex-start; margin-top: 0.82rem;">
            <div class="label">推广资源</div>
            <div class="form-input-wrapper">
              <div class="select-group">                
                
                <div v-for="zi in shuzi" @click="qita" class="select-item select-item1" v-if="zi=='其他'">
                  <div class="name">{{zi}}</div>                  
                  <img
                    src="../assets/jia.png"
                    class="select-icon select-icon1"
                  >
                </div>
                
                <div @click="xugo" 
                    v-else-if="zi=='网站媒体'||zi=='社群(微信/QQ群等)'
                    ||zi=='线下资源'" 
                    class="select-item select-item1">
                  <div class="name">{{zi}}</div>
                  <img
                    src="../assets/gouzi.png"
                    class="select-icon"
                  >
                </div>  
                <div v-else-if="zi=='公众账号'" @click="xugo" class="select-item proxyinfolei">
                  <div class="name">{{zi}}</div>
                  <img
                    src="../assets/gouzi.png"
                    class="select-icon"
                  > 
                </div>
                <div v-else @click="xugo" class="select-item select-item1 proxyinfolei">
                  <div class="name">{{zi}}</div>
                  <img
                    src="../assets/gouzi.png"
                    class="select-icon"
                  > 
                </div>

              </div>
            </div>
          </div>
          <div class="confirm-btn-wrapper">
            <button disabled="disabled" ref="tiji" type="button" @click="qdtjiao" class="confirm-btn">确认提交</button>
          </div>
        </form>
      </div>
      <div ref="tanchu" class="other-resource-modal-wrapper1" style="display: none;">
        <div class="mask"></div>
        <div class="modal">
          <div class="title">其他资源</div>
          <div class="content-wrapper">
            <textarea class="content" @keyup="jianting" v-model="zhi"></textarea>
          </div>
          <div class="footer">
            <button @click="qvxiao" type="button" class="cancel-btn">取消</button>
            <button ref="qding" @click="qvding" disabled="disabled" type="button" class="confirm-btn">确认</button>
          </div>
        </div>
      </div>
    </div>

       <!-- 提交中 -->
        <div class="weui-toast" ref="xuniti">
            <i class="weui-loading weui-icon_toast"></i> 
            <p class="weui-toast__content">提交中</p>
            <div class="all-badao"></div>
        </div>
  </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
    created(){

    },
    data(){
        return{
            shuzi:["公众账号","网站媒体","社群(微信/QQ群等)","线下资源","其他"],
            zhi:null,
            tjiao:{
                xing:null,
                dian:null,
                daili:"个人",
                tui:["公众账号"]
            }
        }
    },
    methods:{
        quanju(){
            if(this.tjiao.xing&&this.tjiao.dian&&this.tjiao.daili&&this.tjiao.tui.length!=0
                &&/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.tjiao.dian)&&this.tjiao.dian.length==11){                
                this.$refs.tiji.classList.add("confirm-btnlei");
                this.$refs.tiji.removeAttribute("disabled");                
            }else{
                this.$refs.tiji.classList.remove("confirm-btnlei");
                this.$refs.tiji.setAttribute("disabled","disabled");
            }
            console.log(this.tjiao);
        },
        geren(){                        
            this.tjiao.daili="个人";
            this.$refs.geren1.style.display="block";
            this.$refs.geren.style.display="none";
            this.$refs.goshi1.style.display="none";
            this.$refs.goshi.style.display="block";
            this.quanju();
        },
        goshi(){       
            this.tjiao.daili="公司";     
            this.$refs.geren1.style.display="none";
            this.$refs.geren.style.display="block";
            this.$refs.goshi1.style.display="block";
            this.$refs.goshi.style.display="none";
            this.quanju();
        },
        xugo(s){
            var dom=s.target;
            if(s.target.className.indexOf("select-item")==-1){
                var dom=s.target.parentNode;                
            }   
            var ziq=dom.children[0].innerText;
            if(dom.className.indexOf("proxyinfolei")==-1){
                dom.classList.add("proxyinfolei");                
                this.tjiao.tui.push(ziq);
            }else{
                dom.classList.remove("proxyinfolei");
                var ds=this.tjiao.tui;
                ds.splice(ds.indexOf("ziq"),1);                
            }
            this.quanju();
        },
        qita(){
            this.$refs.tanchu.style.display="block";
        },
        qvxiao(){
            this.$refs.tanchu.style.display="none";
        },
        jianting(){
            if(this.zhi){
                this.$refs.qding.classList.add("confirm-btnlei");
                this.$refs.qding.removeAttribute("disabled");
            }else{
                this.$refs.qding.classList.remove("confirm-btnlei");
                this.$refs.qding.setAttribute("disabled","disabled");
            }
        },
        qvding(){
            if(this.zhi){    
                this.tjiao.tui.push(this.zhi);            
                this.shuzi.splice(-1,0,this.zhi);
                this.$refs.tanchu.style.display="none";
                this.zhi="";
                this.quanju();
            }
        },
        //确定提交
        qdtjiao(){
            var jub=this.$refs.xuniti;
            jub.style.display="block";
            setTimeout(()=>{
              this.$router.push("/proxyauthentication");
            },1000)
        }
    }
}
</script>
