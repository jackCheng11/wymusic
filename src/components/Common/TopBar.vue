<template>
  <div id="header">
    <div id="header-item">
      <ul>
        <li><a href="#" class="active">我的</a></li>
        <li><a href="#">发现</a></li>
        <li><a href="#">视屏</a></li>
      </ul>
    </div>
    <div id="search-wrap">
      <img src="@/assets/img/搜索.svg" alt="">
      <input type="text">
    </div>
  </div>
</template>

<script>
export default {
  name: 'topbar'
}
</script>

<style>
#header{
  width: 100%;
  height: 170px;
  background-image: linear-gradient(red, white)
}
#header-item>ul{
  margin: 0;
  padding: 20px 0 0 34px;
  list-style-type: none;
  display: flex;
}
#header-item>ul>li{
  display: inline-block;
  margin-right: 10px;
  align-self: baseline;
}
#header-item>ul>li>a{
  text-decoration: none;
  color: black;
  font-size: 20px;
}
#header-item>ul>li>.active{
  font-size: 28px;
    position: relative;
}
#header-item>ul>li>.active::after{
  content: "";
  width: 38px;
  height: 6px;
  position: absolute;
  background-color: white;
  top: 45px;
  left: 8px;
  border-radius: 6px;
}
#search-wrap{
  width: 335px;
  height: 40px;
  margin: 30px auto 0;
  background-color: rgba(255, 255, 255, .6);
  display: flex;
  border-radius: 21.5px;
}
#search-wrap>img{
  display: block;
  align-self: center;
  margin-left: 17px;
}
#search-wrap>input{
  width: 270px;
  height: 30px;
  align-self: center;
  border: none;
  outline: none;
  background-color: rgba(255, 255, 255, 0);
  margin-left: 8px;
  font-size: 16px;
}
</style>
