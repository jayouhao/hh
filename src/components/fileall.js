
{/* <script> */}
  //  var Tiaoall= (function (){    
    var Tiaoall= ()=>{    
     
        // window.addEventListener("load", function(){
               
          var data = [0.5,0.5,0.8,0.6,0.1,0.2,0.3],              
          data1=[1,1,1,1,1,1,1]
          var xinforma = ['上庭','中庭','下庭','眉毛','眼睛','鼻子','嘴巴'];    
     
          // 获取上下文    
          var a_canvas = document.getElementById('a_canvas'),
          a_canvas1 = document.getElementById('a_canvas1');    
          var context = a_canvas.getContext("2d"),
          context1 = a_canvas1.getContext("2d");    
     
     
          // 绘制背景    
          var gradient = context.createLinearGradient(0,12,0,300);    
     
     
         gradient.addColorStop(0,"#e0e0e0");    
          //gradient.addColorStop(1,"#ffffff");    
     
     
          // context.fillStyle = gradient;    
     
        //   context.fillRect(0,0,a_canvas.width,a_canvas.height);    
           
          var realheight = a_canvas.height-20;    
          var realwidth = a_canvas.width+12;    
          // 描绘边框    
          var grid_cols = data.length + 1;    
          var grid_rows = 4;    
          var cell_height = realheight / grid_rows;    
          var cell_width = realwidth / grid_cols;    
          context.lineWidth = 1;
          context1.lineWidth = 1;
        //   context.strokeStyle = "#a0a0a0"; 
        // context.canvas.clientHeight='10x'
    //  console.log(context,'什么意思')
          // 结束边框描绘    
        //   context.beginPath();    
          // 准备画横线    
          /*for(var row = 1; row <= grid_rows; row++){    
            var y = row * cell_height;    
            context.moveTo(0,y);    
            context.lineTo(a_canvas.width, y);    
          }*/    
              
            //划横线    
            // context.moveTo(0,realheight);    
            // context.lineTo(realwidth,realheight);    
                    
                 
            //画竖线    
          // context.moveTo(0,20);    
          //  context.lineTo(0,realheight);    
          // context.lineWidth = 1;    
          // context.strokeStyle = "black";    
          // context.stroke();    
                  
     
          var max_v =0,
          max_v1=0;    
              
          for(var i = 0; i<data.length; i++){    
            if (data[i] > max_v) { max_v =data[i]};    
          }  
          for(var i = 0; i<data1.length; i++){    
            if (data1[i] > max_v1) { max_v1 =data1[i]};    
          }  
 
        //   max_vmax_v = max_v * 1.1;    
          // 将数据换算为坐标    
          var points = [],points1=[];    
          for( var i=0; i < data.length; i++){    
            var v= data[i];    
            var px = cell_width *　(i +1);    
            var py = realheight - realheight*(v / max_v);                
            points.push({"x":px,"y":py});    
          }    
          for( var i=0; i < data1.length; i++){    
            var v= data1[i];    
            var px = cell_width *　(i +1);    
            var py = realheight - realheight*(v / max_v);                
            points1.push({"x":px,"y":py});    
          }    
     
          //绘制坐标图形    
          for(var i in points){    
            var p = points[i];    
            context.beginPath();   

            // 条形颜色 
            context.fillStyle="#00da92";
            // context.fillStyle="#ccc";
            context.strokeStyle = "#ccc";
            context.font="0.36rem Arial";             
            context.fillRect(p.x,p.y,9,realheight-p.y);                     
            context.fill();    
          }   
               
            for(var i in points1){    
              var p = points1[i];    
              context1.beginPath();   

              // 条形颜色 
              context1.fillStyle="#e2e2e2";              
              context1.strokeStyle = "#e2e2e2";
              context1.font="0.36rem Arial";             
              context1.fillRect(p.x,p.y,9,realheight-p.y);                     
              context1.fill();    
            }   
  
          
          //添加文字    
          for(var i in points)    
          {  var p = points[i];    
            context.beginPath(); 
            // 字体颜色   
            context.fillStyle="#333";
            // context.fillText(data[i], p.x + 1, p.y - 15); 
            // 调整字体位置距离 
             context.fillText(xinforma[i],p.x -6,realheight+15);    
             // context.fillText('月份',realwidth,realheight+12);    
             // context.fillText('资金量',0,10); 
              }    
        // },false);    
      // })(); 
   };  
    
      // var Inte=window.onload = function(){
    var Inte= ()=>{

        (function(){
          var circleBar    = document.getElementsByClassName('circle-bar')[0];
          var percent      = parseInt(circleBar.getElementsByClassName('percent')[0].firstChild.nodeValue);
          var color        = "#477DE8";
          var left_circle  = circleBar.getElementsByClassName('circle-bar-left')[0];
          var right_circle = circleBar.getElementsByClassName('circle-bar-right')[0];
  
          if( percent <= 50 ) {
              var rotate = 'rotate('+(percent*3.6)+'deg)';
              right_circle.css3('transform',rotate);
          }else {
              var rotate = 'rotate('+((percent-50)*3.6)+'deg)';
              right_circle.css ('background-color',color);//背景色设置为进度条的颜色
              right_circle.css3('transform','rotate(0deg)');//右侧不旋转
              left_circle.css3 ('transform',rotate);//左侧旋转
          }
        })()


        $(function(){
          var circleBar    = document.getElementsByClassName('circle-bar')[1];                 
          var percent      = parseInt(circleBar.getElementsByClassName('percent')[0].firstChild.nodeValue);          
          var color        = "#B71A42";
          var left_circle  = circleBar.getElementsByClassName('circle-bar-left')[0];
          var right_circle = circleBar.getElementsByClassName('circle-bar-right')[0];         
          if( percent <= 50 ) {
              var rotate = 'rotate('+(percent*3.6)+'deg)';
              right_circle.css3('transform',rotate);
          }else {
              var rotate = 'rotate('+((percent-50)*3.6)+'deg)';
              right_circle.css ('background-color',color);//背景色设置为进度条的颜色
              right_circle.css3('transform','rotate(0deg)');//右侧不旋转
              left_circle.css3 ('transform',rotate);//左侧旋转
          }
        })


    }

    //封装了css3函数，主要是懒得重复书写代码，既然写了css3函数，顺便写个css吧，统一样式，好看一些
    Element.prototype.css = function(property,value){
        
        if ( value ) {
            //CSS中像background-color这样的属性，‘-’在JavaScript中不兼容，需要设置成驼峰格式
            var index = property.indexOf('-');
            if( index != -1 ) {
                var char = property.charAt(index+1).toUpperCase();
                property.replace(/(-*){1}/,char);
            }
            this.style[property] = value;
        }else{
            //getPropertyValue()方法参数类似background-color写法，所以不要转驼峰格式
            return window.getComputedStyle(this).getPropertyValue(property);
        }
    }

    //封装一个css3函数，用来快速设置css3属性
    Element.prototype.css3 = function(property,value){
        if( value ){
            property = capitalize(property.toLowerCase());
            this.style['webkit'+property] = value;
            this.style['Moz'+property] = value;
            this.style['ms'+property] = value;
            this.style['O'+property] = value;
            this.style[property.toLowerCase()] = value;
        }else{
            return window.getComputedStyle(this).getPropertyValue(
                    ('webkit'+property)||('Moz'+property)||('ms'+property)||('O'+property)||property);
                    //老实说，我不知道为什么要把不带浏览器标记的放在最后，既然都这么用，我也这么做吧。不过这样对现代浏览器来说可能并不好，判断次数变多了
        }
        
        //首字母大写
        function capitalize(word){
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    }
    export{
         Tiaoall,
         Inte
        }
// </script>
