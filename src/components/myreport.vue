<template>
  <div data-v-7d55fa38 class="myreport-box">
    
    <!-- 背景来的 -->
    <div class="facesr-bei"></div>

    <div data-v-7d55fa38 class="myluck-title">流年运势</div>
    <div data-v-7d55fa38 class="nav">
      <div @click="qiehan" data-v-7d55fa38 class="nav-item active">事业</div>
      <div data-v-7d55fa38 @click="qiehan" class="nav-item">财运</div>
      <div data-v-7d55fa38 class="nav-item" @click="qiehan">家庭</div>
      <div data-v-7d55fa38 class="nav-item" @click="qiehan">爱情</div>
    </div>
    <div data-v-7d55fa38 class="desc">注: 波动点表示交运前后您的命运将有重大改变</div>
    <div id="myre-yuan">    
      <div
        data-v-7d55fa38
        id="myChart"
        class="canvas-image"
        _echarts_instance_="ec_1546850784699"
        style="width: 288.462px; height: 187.5px; -webkit-tap-highlight-color: transparent; user-select: none;"
      >
        
          <div id="container"></div>
      
      </div>

      <span class="yun">运势</span>
      <span class="nian">年龄</span>          

    </div>

    <div data-v-7d55fa38 class="text">三庭格局，上庭与中庭持平，相克相化。早年走好运一直到中晚年，晚年稍减。</div>
    <div data-v-7d55fa38 class="lock">
      <div data-v-7d55fa38 class="heads-title" style="color: rgb(153, 153, 153);">早年运势</div>
      <div data-v-7d55fa38 class="shadow"></div>
      <div
        data-v-7d55fa38
        class="fate"
        style="text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; height: 0.4rem;"
      >早年家境一般，求学过程不顺利，青少年时期人生际遇一般，在波折中前进。</div>
      <div data-v-7d55fa38 class="dots">
        <div data-v-7d55fa38 class="line on"></div>
        <div data-v-7d55fa38 class="line"></div>
        <div data-v-7d55fa38 class="line"></div>
      </div>
    </div>
    <button data-v-7d55fa38 class="share-more" @click="dji">9.9元解锁流年运势</button>
   <!-- 弹出的 -->
    <div class="palmistr-tan">
        <div class="weui-mask" style ref="bei"></div>
        <div class="weui-dialog" style ref="nei">
          <div class="weui-dialog__hd">
            <strong class="weui-dialog__title"></strong>
          </div>
          <div class="weui-dialog__bd">
            <div class="zhifu">请选择支付方式</div>
            <a href="javascript:;" @click="qvding" class=" weui-dialog__btn_primary iconfont iconguanbi"></a>
          </div>
          <router-link to="/pay">
            <div class="weui-dialog__bd weui-dialog__ft">
              <span class="iconfont icon-weixin"></span>
              <div>微信支付</div>
            </div>
          </router-link>
           <router-link to="/">
            <div class="weui-dialog__bd weui-dialog__ft">
              <span class="iconfont icon-zhifubao"></span>
              <div>支付宝</div>
            </div>
           </router-link>
        </div>
      </div>
    </div>
</template>

<script>


import { setInterval } from 'timers';
export default {
  data(){
    console.log(this,'解锁九块九')
    return{
      yutu:[100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
                              100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
                              100, 100, 100, 100, 100, 100, 100, 100, 100,
                              100, 100, 100, 100, 100, 100, 100, 100, 100,
                              100, 100, 100, 100, 100, 100, 100, 100, 100,
                              100, 100, 100, 100, 100, 100, 100, 100, 100,100, 100]
    }    
  },
   mounted(){
    // Liuytu();     
    this.liunians(this.yutu)     
  },
    methods:{
       dji(e){
            var beijin=this.$refs.bei,nei=this.$refs.nei; 
            nei.classList.remove("pral-do1");    
            nei.style.display="table";
            nei.classList.add("pral-do");
            setTimeout(()=>{
                beijin.style.display="block";
            },300);     
        },
        qvding(){
            var beijin=this.$refs.bei,nei=this.$refs.nei; 
            nei.classList.remove("pral-do");
            nei.classList.add("pral-do1");
            setTimeout(()=>{
                beijin.style.display="none";                
                nei.style.display="none";                
            },200);             
        },
      jiuclik(text){
        this.$emit("dji",text)
      },
        qiehan(s){
            var too=s.target;
            var ziji=too.parentNode.children;
            for(var i=0; i<ziji.length; i++){
                ziji[i].classList.remove("active");
                console.log(ziji,'喀喀喀盛世')
            }    
            too.classList.add("active");  
            switch(too.innerText){
              case "财运":
                var zhis=[101, 102, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
                                100, 104, 102, 110, 101, 104, 102, 100, 100, 100,
                                100, 100, 100, 100, 100, 100, 100, 100, 100,
                                100, 100, 100, 100, 100, 100, 100, 100, 100,
                                100, 100, 100, 100, 100, 100, 100, 100, 100,
                                100, 100, 100, 100, 100, 100, 100, 100, 100,
                                100, 100, 100, 100, 100, 100, 100, 100, 100]
                this.liunians(zhis); 
              break;
              case "事业":
                var zhis=[101, 112, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
                                100, 104, 102, 110, 101, 104, 102, 100, 100, 100,
                                100, 100, 100, 100, 100, 100, 100, 100, 100,
                                100, 100, 100, 100, 100, 100, 100, 100, 100,
                                100, 100, 120, 100, 100, 100, 100, 100, 100,
                                100, 100, 100, 100, 100, 100, 100, 100, 100,
                                100, 100, 100, 110, 100, 100, 100, 100, 100]
                this.liunians(zhis); 
              break;
              case "家庭":
                var zhis=[10, 112, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
                                100, 104, 102, 110, 101, 104, 102, 100, 100, 100,
                                100, 100, 100, 100, 100, 100, 100, 100, 100,
                                100, 100, 100, 100, 100, 100, 100, 100, 100,
                                100, 100, 120, 100, 100, 100, 100, 100, 100,
                                100, 100, 100, 100, 100, 100, 100, 100, 100,
                                100, 100, 100, 110, 100, 100, 100, 100, 100]
                this.liunians(zhis); 
                 case "爱情":
                var zhis=[10, 112, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
                                100, 104, 102, 110, 101, 104, 102, 100, 100, 100,
                                100, 100, 100, 100, 100, 100, 100, 100, 100,
                                100, 100, 100, 100, 100, 100, 100, 100, 100,
                                100, 100, 120, 100, 100, 100, 100, 100, 100,
                                100, 100, 100, 100, 100, 100, 100, 100, 100,
                                100, 100, 100, 110, 100, 100, 100, 100, 100]
                this.liunians(zhis); 
              break;
            }                  
        },
        
        //流年运势的
        liunians(s){
          $(document).ready(function() {  
                  var chart = {
                    type: 'area'
                  };


                  var yAxis = {
                    title: {
                        text: ''
                    },
                    labels: {
                        formatter: function () {
                          return '';
                        }
                    }
                  };
                  var tooltip = {
                    pointFormat: ''
                  };
                  var plotOptions = {
                    area: {
                        pointStart: 20,
                        marker: {
                          enabled: false,
                          symbol: 'circle',
                          radius:2,
                          states: {
                              hover: {
                                enabled: true
                              }
                          }
                        }
                    }
                  };
                  var series= [{},{
                        name: 'USA',
                          data: s
                      }
                  ];     
                    
                  var json = {};   
                  json.chart = chart; 
                  json.yAxis = yAxis;  
                  json.tooltip = tooltip;
                  json.series = series;
                  json.plotOptions = plotOptions;
                  $('#container').highcharts(json);
                
              });
        }
    }

}
</script>
