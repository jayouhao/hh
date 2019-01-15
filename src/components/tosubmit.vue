<template>
    <div class="tobox">
        <img src="../assets/7ab6a3e3-b5a8-4f6f-9add-b494673b2db9.jpg" class="facepicture">
        <div class="uploadanalysis">
            <div class="head">
                <div class="status">头部姿势</div>
                <div class="statustext">无倾斜</div>
                <img src="../assets/下载 (1).png" mode="aspectFit" class="icon">
            </div>
            <div class="lefteye">
                <div class="status">左眼状态 </div>
                <div class="statustext">没有人脸</div>
                <img src="../assets/下载 (2).png" mode="aspectFit" class="icon">
            </div>
            <div class="righteye">
                <div class="status">右眼状态</div>
                <div class="statustext">没有人脸</div>
                <img src="../assets/下载 (2).png" mode="aspectFit" class="icon">
            </div>
            <button disabled="disabled" type="button" class="confirm disabled">确认提交</button>
            <button type="button" class="reupload cxing">
                        重新上传
                <input type="file" accept="image/*" class="upload-input">
            </button>
        </div>
        <div class="tosu-bei" @click="beiy">
            <div class="errorDialog">
                <div class="title">您的照片未符合以下标准</div>
                <div class="contents">
                    <div class="content">
                        <div class="left"></div>
                        <div class="right">没有人脸（要求人脸照）</div>
                    </div>
                </div>
                <button type="button" class="reupload">重新上传
                    <input type="file" accept="image/*" class="upload-input">
                </button>
            </div>
        </div>        

        <!-- 上传中 -->
        <div class="weui-toast">
            <i class="weui-loading weui-icon_toast"></i> 
            <p class="weui-toast__content">上传中</p>
            <div class="all-badao"></div>
        </div>

       <!-- 警告的 -->
       <div class="tosu-jingao" @click="beikli">
           <div class="confirmDialog" style="transition: bottom 300ms linear 0s; bottom: 0px;">
               <img src="../assets/jingao.png" class="icon imsdu">
               <div class="title">请确认照片是您本人</div>
               <div class="content">
                   <span style="color:#FF7700">每人仅有一份免费报告，</span>
                   首次检测到的面部数据会与您的账号绑定。如果上传非本人照片，
                   <span style="color:#FF7700">流年运势、事业运程报告、情感运程报告等服务将无法正常使用！</span>
                </div>
                <div class="buttons">
                    <button type="button" class="reupload">重新上传
                        <input type="file" accept="image/*" class="upload-input">
                    </button>
                    <button type="button" class="confirm">是本人照片</button>
                </div>
            </div>
       </div>

    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        beiy(s){
            s.target.className=="tosu-bei"?
            s.target.style.display="none":"";            
        },
        beikli(s){
            s.target.className=="tosu-jingao"?
            s.target.style.display="none":"";
        }
    }
}
</script>
