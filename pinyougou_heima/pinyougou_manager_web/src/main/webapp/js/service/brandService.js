//品牌服务层
app.service('brandService',function ($http) {
    //读取列表数据绑定到表单中
    this.findAll=function () {
        return $http.get('../brand/findAll.do');
    }
    //分页
    this.findPage=function (page,rows) {
        return  $http.get('../brand/findPage.do?page='+page+'&rows='+rows);
    }
    //增加
    this.add=function (entity) {
        return $http.post('../brand/add.do',entity);
    }
    //修改
    this.update=function (entity) {
        return $http.post('../brand/update.do',entity);
    }
    //查询实体
    this.findOne=function (id) {
        return $http.get("../brand/findOne.do?id="+id);
    }
    //删除操作
    this.delete=function (selectIds) {
        return  $http.get('../brand/delete.do?ids='+selectIds);
    }
    //查询品牌信息
    this.search=function (page,rows,searchEntity) {
        return $http.post('../brand/search.do?page='+page+"&rows="+rows,searchEntity);
    }
});