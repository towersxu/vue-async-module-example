<template>
  <div class="modal reg-panel reg-panel-2 animated" v-show="isReg" transition="fade">
    <div class="head">
      <i class="block sp i183 r-logo"></i>

      <h3>欢迎加入</h3>
      <i class="block close sp i103" v-on:click="closeModal()"></i>
    </div>
    <div class="content">
      <p class="hello">有朋自远方来 不亦乐乎</p>

      <div class="input">
        <span class="i-head">名称</span>
        <input type="text" placeholder="该昵称已被占用，换一个试试？">
        <span class="status error"></span>
      </div>
      <div class="input">
        <span class="i-head">密码</span>
        <input type="{{showPass}}"  placeholder="" ng-model="password"
               v-on:focus="showComplexity=true" v-on:blur="showComplexity=false">
        <i class="block sp i32 eye" v-bind:class="{'i33':showPass==='text'}" v-on:click="showPassToggle()"></i>
        <span class="status sp i75 suc"></span>
      </div>
      <div class="input animated fix" v-show="showComplexity" transition="expand-pass">
        <p class="tips">6~20位数字或字母，区分大小写</p>

        <div class="pass-complexity">
          <span class="tip">密码强度：</span>

          <div class="total-process">
            <i class="inline-block sp i20"></i>

            <div class="process">
              <div class="now"></div>
            </div>
            <i class="inline-block sp i21"></i>
          </div>
        </div>
      </div>
      <div class="input">
        <span class="i-head">邮箱</span>
        <input type="email" placeholder="">
        <span class="status error"></span>
      </div>
      <div class="input">
        <span class="i-head">手机</span>
        <input type="text" placeholder="">
        <span class="sel-reg" v-on:click="choseRegion=true">中国大陆<i class="block sp i58 sel"></i></span>

        <div class="regions animated" v-show="choseRegion" transition="flipInX">
          <div class="region" v-on:click="choseRegion=false">中国大陆</div>
          <div class="region" v-on:click="choseRegion=false">香港特区</div>
          <div class="region" v-on:click="choseRegion=false">澳门特区</div>
          <div class="region" v-on:click="choseRegion=false">台湾地区</div>
          <div class="region" v-on:click="choseRegion=false">美国</div>
          <div class="region" v-on:click="choseRegion=false">日本</div>
          <div class="region" v-on:click="choseRegion=false">韩国</div>
          <div class="region" v-on:click="choseRegion=false">新加坡</div>
          <div class="region" v-on:click="choseRegion=false">德国</div>
          <div class="region" v-on:click="choseRegion=false">英国</div>
          <div class="region" v-on:click="choseRegion=false">法国</div>
          <div class="region" v-on:click="choseRegion=false">加拿大</div>
          <i class="up sp i2 block"></i>
          <i class="down sp i6 block"></i>
        </div>
        <span class="status error"></span>
      </div>
      <div class="input2">
        <input type="text" placeholder="短信验证码">
        <span class="btn btn-orange get">获取</span>
      </div>
      <p class="agreement">注册即表示您已同意本站<a href="">服务协议</a></p>

      <div class="btn btn-red" v-on:click="go({from:'isReg',to:'showSmp'})" ng-click="showSmp=true;closeReg=true">注册</div>
      <p class="oauth_p">第三方账号登陆</p>

      <div class="oauth_panel">
        <i class="inline-block sp i156" v-on:click="" ng-click="closeReg=true;isOauth1=true;"></i>
        <i class="inline-block sp i157" ng-click="closeReg=true;isOauth1=true;"></i>
        <i class="inline-block sp i158" ng-click="closeReg=true;isOauth1=true;"></i>
        <i class="inline-block sp i159" ng-click="closeReg=true;isOauth1=true;"></i>
        <i class="inline-block sp i160" ng-click="closeReg=true;isOauth1=true;"></i>
      </div>
    </div>
  </div>
  <div class="modal statement-panel animated" v-show="showSmp" transition="fade">
    <div class="block close sp i105" v-on:click="closeModal()"></div>
    <div class="head">
      <h2>声明与承诺</h2>
    </div>
    <div class="content">
      <p class="title">我声明并承诺：</p>

      <p class="p">1、后台获取内容。</p>

      <p class="p">2、Gaiamount （盖亚）所有内容之版权归原作者所有，任何商业用途均须取得授权；</p>

      <p class="p">3、若未经授权将内容盗取或用作他处，原作者将保留追究侵权者法律责任之权利。</p>

      <p class="p">4、Copyright © 2016 Gaiamount 版权所有。</p>
    </div>
    <div class="sel-profession">
      <div class="sel-box" v-on:click="showPro=true">请选择您的职业</div>
      <i class="sp i3 block"></i>
      <i class="sp i2 block"></i>

      <div class="profession-panel animated"  v-show="showPro" transition="flipInX">
        <div class="profession" v-on:click="showPro=false">导演</div>
        <div class="profession" v-on:click="showPro=false">编剧</div>
        <div class="profession" v-on:click="showPro=false">摄影师</div>
        <div class="profession" v-on:click="showPro=false">剪辑师</div>
        <div class="profession" v-on:click="showPro=false">调色师</div>
        <div class="profession" v-on:click="showPro=false">灯光师</div>
        <div class="profession" v-on:click="showPro=false">发烧友</div>
        <div class="profession" v-on:click="showPro=false">自定义</div>
      </div>
    </div>
    <div class="btn btn-red btn-red2" v-on:click="closeModal()">同意并注册</div>
  </div>
  <div class="modal reg-panel login reg-panel-2 animated" v-show="isLog" transition="fade">
    <div class="head">
      <i class="block sp i183 r-logo"></i>
      <h3>欢迎回来</h3>
      <i class="block close sp i103" v-on:click="closeModal()"></i>
    </div>
    <div class="content">
      <p class="hello">一日不急 如三秋兮</p>

      <div class="input">
        <span class="i-head switch-type" v-on:click="showSwitchs=true">昵称</span>
        <input type="text" placeholder="">
        <span class="status error"></span>
        <i class="sp i3 block"></i>
        <i class="sp i2 block"></i>

        <div class="switch-items animated" v-show="showSwitchs" transition="flipInX">
          <div class="switch-item" v-on:click="showSwitchs=false">昵称</div>
          <div class="switch-item" v-on:click="showSwitchs=false">手机</div>
          <div class="switch-item" v-on:click="showSwitchs=false">邮箱</div>
        </div>
      </div>
      <div class="input">
        <span class="i-head">密码</span>
        <input type="{{showPass}}"  placeholder="" ng-model="password"
               v-on:focus="showComplexity=true" v-on:blur="showComplexity=false">
        <i class="block sp i32 eye" v-bind:class="{'i33':showPass==='text'}" v-on:click="showPassToggle()"></i>
        <span class="status sp i75 suc"></span>
      </div>
      <div class="input min">
        <p class="forget-pass" v-on:click="go({from:'isLog',to:'isReset1'})">忘记密码?</p>
      </div>
      <div class="btn btn-red" v-on:click="closeModal()">登陆</div>
      <p class="go-reg">没有账号?去<span v-on:click="go({from:'isLog',to:'isReg'})">注册</span></p>
      <p class="oauth_p">第三方账号登陆</p>
      <div class="oauth_panel">
        <i class="inline-block sp i156" ng-click="closeLog=true;isOauth1=true;"></i>
        <i class="inline-block sp i157" ng-click="closeLog=true;isOauth1=true;"></i>
        <i class="inline-block sp i158" ng-click="closeLog=true;isOauth1=true;"></i>
        <i class="inline-block sp i159" ng-click="closeLog=true;isOauth1=true;"></i>
        <i class="inline-block sp i160" ng-click="closeLog=true;isOauth1=true;"></i>
      </div>
    </div>
  </div>
  <div class="modal reg-panel reset-pass reg-panel-2 animated"
       v-show="isReset1" transition="fade">
    <div class="head">
      <i class="block sp i183 r-logo"></i>
      <h3>重置密码</h3>
      <i class="block close sp i103" v-on:click="closeModal()"></i>
    </div>
    <div class="content">
      <p class="hello">请选择验证方式</p>
      <div class="btn-wrap">
        <div class="btn btn-blue inline-block" v-on:click="go({from:'isReset1',to:'isReset2'})">手机验证</div>
        <div class="btn btn-blue inline-block" v-on:click="go({from:'isReset1',to:'isReset3'})">邮箱验证</div>
      </div>
      <p class="middle-p">如何重置密码？</p>
    </div>
  </div>
  <div class="modal reg-panel reset-pass login reg-panel-2 animated"
       v-show="isReset2" transition="fade">
    <div class="head">
      <i class="block sp i183 r-logo"></i>

      <h3>重置密码</h3>
      <i class="block close sp i103" v-on:click="closeModal()"></i>
    </div>
    <div class="content">
      <div class="input">
        <span class="i-head">手机</span>
        <input type="text" placeholder="">
        <span class="sel-reg" ng-click="choseResetRegion=true">中国大陆<i class="block sp i58 sel"></i></span>

        <div class="regions hidden" ng-class="{'show':choseResetRegion}">
          <div class="region" ng-click="choseResetRegion=false">中国大陆</div>
          <div class="region" ng-click="choseResetRegion=false">香港特区</div>
          <div class="region" ng-click="choseResetRegion=false">澳门特区</div>
          <div class="region" ng-click="choseResetRegion=false">台湾地区</div>
          <div class="region" ng-click="choseResetRegion=false">美国</div>
          <div class="region" ng-click="choseResetRegion=false">日本</div>
          <div class="region" ng-click="choseResetRegion=false">韩国</div>
          <div class="region" ng-click="choseResetRegion=false">新加坡</div>
          <div class="region" ng-click="choseResetRegion=false">德国</div>
          <div class="region" ng-click="choseResetRegion=false">英国</div>
          <div class="region" ng-click="choseResetRegion=false">法国</div>
          <div class="region" ng-click="choseResetRegion=false">加拿大</div>
          <i class="up sp i2 block"></i>
          <i class="down sp i6 block"></i>
        </div>
        <span class="status error"></span>
      </div>
      <div class="input2">
        <input type="text" placeholder="短信验证码">
        <span class="btn btn-orange get">获取</span>
      </div>
      <div class="btn btn-red" v-on:click="go({from:'isReset2',to:'isReset5'})">下一步</div>
    </div>
  </div>
  <div class="modal reg-panel reset-pass login reg-panel-2 animated"
       v-show="isReset3" transition="fade">
    <div class="head">
      <i class="block sp i183 r-logo"></i>

      <h3>重置密码</h3>
      <i class="block close sp i103" v-on:click="closeModal()"></i>
    </div>
    <div class="content">
      <div class="input">
        <span class="i-head">邮箱</span>
        <input type="text" placeholder="">
        <span class="status error"></span>
      </div>
      <div class="btn btn-red mt20" v-on:click="go({from:'isReset3',to:'isReset4'})">下一步</div>
    </div>
  </div>
  <div class="modal reg-panel reset-pass login reg-panel-2 animated"
       v-show="isReset4" transition="fade">
    <div class="head">
      <i class="block sp i183 r-logo"></i>

      <h3>重置密码</h3>
      <i class="block close sp i103" v-on:click="closeModal()"></i>
    </div>
    <div class="content">
      <div class="des-info">
        <p class="">邮件发送成功！</p>

        <p class="">请登陆并查看你的验证邮箱，按邮件提示完成密码重置</p>

        <p class="link" v-on:click="closeModal()">去邮箱查看></p>
      </div>
      <!--<div class="btn btn-red" ng-click="closeReset4=true;isReset5=true">下一步</div>-->
    </div>
  </div>
  <div class="modal reg-panel reset-pass login reg-panel-2 animated"
       v-show="isReset5" transition="fade">
    <div class="head">
      <i class="block sp i183 r-logo"></i>

      <h3>重置密码</h3>
      <i class="block close sp i103" v-on:click="closeModal()"></i>
    </div>
    <div class="content">
      <div class="input">
        <span class="i-head">新密码</span>
        <input type="password" ng-class="{'hidden':showPass}" placeholder="" ng-model="password1">
        <input type="text" class="hidden" ng-class="{'show':showPass}" placeholder="" ng-model="password1">
        <i class="block sp i32 eye" ng-class="{'i33':showPass}" ng-click="showPass=!showPass"></i>
        <span class="status sp i74 suc"></span>
      </div>
      <div class="input fix">
        <span class="i-head">确认密码</span>
        <input type="password" ng-class="{'hidden':showPass}" placeholder="" ng-model="password2">
        <input type="text" class="hidden" ng-class="{'show':showPass}" placeholder="" ng-model="password2">
        <i class="block sp i32 eye" ng-class="{'i33':showPass}" ng-click="showPass=!showPass"></i>
        <span class="status sp i74 suc"></span>
      </div>
      <div class="btn btn-red" v-on:click="go({from:'isReset5',to:'isReset6'})">确定</div>
    </div>
  </div>
  <div class="modal reg-panel reset-pass login reg-panel-2 animated"
       v-show="isReset6" transition="fade">
    <div class="head">
      <i class="block sp i183 r-logo"></i>

      <h3>重置密码</h3>
      <i class="block close sp i103" v-on:click="closeModal()"></i>
    </div>
    <div class="content">
      <p class="hello">密码修改成功！请记住您的新密码。</p>

      <div class="btn btn-red" v-on:click="closeModal()">完成</div>
    </div>
  </div>
  <div class="modal reg-panel reg-panel-2 animated hidden"
       ng-class="{'fadeOutDown':closeOauth1,'show fadeInDown':isOauth1}">
    <div class="head">
      <i class="block sp i183 r-logo"></i>

      <h3>欢迎加入</h3>
      <i class="block close sp i103" ng-click="closeMask()"></i>
    </div>
    <div class="content">
      <div class="oauth-top">
        <img class="avatar" src="./img/A2.jpg" width="60" height="60">

        <p class="name">QQUserName</p>
      </div>
      <p class="hello">完成账号信息</p>

      <div class="input">
        <span class="i-head">昵称</span>
        <input type="text" placeholder="">
        <span class="status error"></span>
      </div>
      <div class="input">
        <span class="i-head">密码</span>
        <input type="password" ng-class="{'hidden':showPass}" placeholder="" ng-model="password"
               ng-focus="showComplexity=true" ng-blur="showComplexity=false">
        <input type="text" class="hidden" ng-class="{'show':showPass}" placeholder="" ng-model="password"
               ng-focus="showComplexity=true" ng-blur="showComplexity=false">
        <i class="block sp i32 eye" v-bind:class="{'i33':showPass}" ng-click="showPass=!showPass"></i>
        <span class="status sp i75 suc"></span>
      </div>
      <div class="input hidden animated" ng-class="{'show':showComplexity}">
        <p class="tips">6~20位数字或字母，区分大小写</p>

        <div class="pass-complexity">
          <span class="tip">密码强度：</span>

          <div class="total-process">
            <i class="inline-block sp i20"></i>

            <div class="process">
              <div class="now"></div>
            </div>
            <i class="inline-block sp i21"></i>
          </div>
        </div>
      </div>
      <div class="input">
        <span class="i-head">邮箱</span>
        <input type="email" placeholder="">
        <span class="status error"></span>
      </div>
      <div class="input">
        <span class="i-head">手机</span>
        <input type="text" placeholder="">
        <span class="sel-reg" ng-click="choseRegion=true">中国大陆<i class="block sp i58 sel"></i></span>

        <div class="regions hidden" ng-class="{'show':choseRegion}">
          <div class="region" ng-click="choseRegion=false">中国大陆</div>
          <div class="region" ng-click="choseRegion=false">香港特区</div>
          <div class="region" ng-click="choseRegion=false">澳门特区</div>
          <div class="region" ng-click="choseRegion=false">台湾地区</div>
          <div class="region" ng-click="choseRegion=false">美国</div>
          <div class="region" ng-click="choseRegion=false">日本</div>
          <div class="region" ng-click="choseRegion=false">韩国</div>
          <div class="region" ng-click="choseRegion=false">新加坡</div>
          <div class="region" ng-click="choseRegion=false">德国</div>
          <div class="region" ng-click="choseRegion=false">英国</div>
          <div class="region" ng-click="choseRegion=false">法国</div>
          <div class="region" ng-click="choseRegion=false">加拿大</div>
          <i class="up sp i2 block"></i>
          <i class="down sp i6 block"></i>
        </div>
        <span class="status error"></span>
      </div>
      <div class="input2">
        <input type="text" placeholder="短信验证码">
        <span class="btn btn-orange get">获取</span>
      </div>
      <div class="btn btn-red" ng-click="closeMask()">完成</div>
      <p class="oauth_p lnk" ng-click="isOauth1=false;isOauth2=true;">绑定已有账号</p>
    </div>
  </div>
  <div class="modal reg-panel login reg-panel-2 animated hidden"
       ng-class="{'fadeOutDown':closeOauth2,'show fadeInDown':isOauth2}">
    <div class="head">
      <i class="block sp i183 r-logo"></i>

      <h3>欢迎加入</h3>
      <i class="block close sp i103" ng-click="closeMask()"></i>
    </div>
    <div class="content">
      <div class="oauth-top">
        <img class="avatar" src="./img/A2.jpg" width="60" height="60">

        <p class="name">QQUserName</p>
      </div>
      <p class="hello">绑定已有账号</p>

      <div class="input">
        <span class="i-head">昵称</span>
        <input type="text" placeholder="">
        <span class="status error"></span>
      </div>
      <div class="input">
        <span class="i-head">密码</span>
        <input type="password" ng-class="{'hidden':showPass}" placeholder="" ng-model="password"
               ng-focus="showComplexity=true" ng-blur="showComplexity=false">
        <input type="text" class="hidden" ng-class="{'show':showPass}" placeholder="" ng-model="password"
               ng-focus="showComplexity=true" ng-blur="showComplexity=false">
        <i class="block sp i32 eye" ng-class="{'i33':showPass}" ng-click="showPass=!showPass"></i>
        <span class="status sp i75 suc"></span>
      </div>
      <div class="input min">
        <p class="forget-pass" ng-click="closeLog=true;isReset1=true">忘记密码?</p>
      </div>
      <div class="btn btn-red" ng-click="closeMask()">完成</div>
      <p class="oauth_p lnk" ng-click="isOauth2=false;isOauth1=true;">绑定已有账号</p>
    </div>
  </div>
</template>

<script>
  module.exports = {
    replace: false,
    props:['msg'],
    data: function () {
      return {
        isLog: false,
        isReg: false,
        showComplexity:false,  //密码复杂度
        showPass:'password',        //显示密码
        showSmp: false,       //注册声明
        showPro:false,        //注册声明职业选择
        showSwitchs:false,    //登陆选择登陆方式
        isReset1:false,       //忘记密码-步骤1
        isReset2:false,       //忘记密码-手机找回
        isReset3:false,       //忘记密码-邮箱找回
        isReset4:false,       //忘记密码-邮箱找回-2
        isReset5:false,       //忘记密码-手机找回-2
        isReset6:false,       //忘记密码-手机找回-3

        closeLog: false,      //登陆
        choseRegion:false,      //地区选择
        closeReg: false,      //注册
        isMask: false,        //mask
        closeReset1: false,
        closeReset2: false,
        closeReset3: false,
        closeReset4: false,
        closeReset5: false,
        closeReset6: false,
        closeOauth1: false,
        isOauth1: false,    //第三方登陆绑定新账号
        closeOauth2: false,
        isOauth3: false    //绑定已有账号
      }
    },
    ready: function () {
      this.$dispatch('get_init',{});
    },
    events: {
      'init_data':function(msg){
        if(typeof msg !== 'object'){
          throw new Error('参数格式必须是对象!');
        }
        if(msg.t === 0) {
          this.isReg = true;
        } else if (msg.t === 1) {
          this.isLog = true;
        } else {
          throw new Error('t的值必须是数字0-1');
        }

      }
    },
    methods:{
      'closeModal':function(){
        this.reset();
        this.$dispatch('close_modal',{});
      },
      'reset':function(){
        this.isLog = false;
        this.isReg = false;
        this.showComplexity=false;  //密码复杂度
        this.showPass='password';       //显示密码
        this.showSmp= false;       //注册声明
        this.showPro=false;        //注册声明职业选择
        this.showSwitchs=false;    //登陆选择登陆方式
        this.isReset1=false;       //忘记密码-步骤1
        this.isReset2=false;       //忘记密码-手机找回
        this.isReset3=false;       //忘记密码-邮箱找回
        this.isReset4=false;
        this.isReset5=false;
        this.isReset6=false;
      },
      'go':function(data){
        this[data.from] = false;
        this[data.to] = true;
      },
      /**
       * 切换密码的显示和隐藏
       */
      showPassToggle:function(){
        if(this.showPass === 'text'){
          this.showPass = 'password';
        }else{
          this.showPass = 'text';
        }
      }
    }
  };
</script>

<style scoped>
  .reg-panel .content .input.expand-pass-transition{
    transition: all .3s ease;
    height: 40px;
  }
  .reg-panel .content .input.expand-pass-enter,.reg-panel .content .input.expand-pass-leave{
    height: 0;
    opacity: 0;
  }
</style>
