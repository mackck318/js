<template>
<div class="container" id="container">

    <div class="container-fluid">
        <table class="table table-hover">

          <tbody>
            <tr><th>序号</th><th>股票代码</th><th>股票简称</th><th>涨跌幅</th><th>换手率</th><th>最新价(元)</th><th>前期高点</th><th>前期高点日期</th><th>添加自选</th></tr> 
            <tr v-for="i in list1"><td>{{i.id}}</td><td>{{i.code}}</td><td>{{i.sname}}</td><td>{{i.rate01}}</td><td>{{i.rate02}}</td><td>{{i.new_prize}}</td><td>{{i.high}}</td><td>{{i.date}}</td><td><input type="button" value="添加" name="toAdd"></td></tr>  
          </tbody>

        </table>
    </div>
</div>
</template>

<script>
export default {
  name: 'indexList',
  data () {
    return {
      list1:[]
    };
  },
  mounted:function() {
    this.axios({
      url:"/apis/index_data",
     method:"get"
    }).then(dat=>{
      // console.log(dat.data)
     
        this.list1=dat.data;
      
    })
    
    .catch(function(){
      alert('出错了');
    });
  }
};

</script>

