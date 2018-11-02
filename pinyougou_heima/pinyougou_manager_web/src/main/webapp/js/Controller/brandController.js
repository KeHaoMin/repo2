//品牌控制层
app.controller('brandController' ,function($scope, $controller,brandService) {

    $controller('baseController',{$scope:$scope});

    //读取列表数据绑定到表单中
    $scope.findAll=function () {
        brandService.findAll().success(
            function (response) {
                $scope.list=response;
            }
        );
    }



    // 分页
    $scope.findPage=function (page,rows) {
        brandService.findPage(page,rows).success(
            function (response) {
                $scope.list=response.rows;
                $scope.paginationConf.totalItems=response.total;//更新总记录数
            }
        )};


    //保存
    $scope.save=function () {
        var  serviceObject;
        if ($scope.entity.id!=null){//有id
            serviceObject=brandService.update($scope.entity);//修改
        }else{
            serviceObject=brandService.add($scope.entity);//增加
        }
        serviceObject.success(
            function (response) {
                if(response.success){
                    //重新加载
                    $scope.reloadList();
                }else{
                    alert(response.message);
                }
            }
        );
    }
    //查询实体
    $scope.findOne=function (id) {
        brandService.findOne(id).success(
            function (response) {
                $scope.entity=response;
            }
        )
    };

    //删除操作
    $scope.dele=function () {
        if(confirm('确定要删除吗?')){
            //获取复选框
            brandService.delete($scope.selectIds).success(
                function (response) {
                    if(response.success) {
                        $scope.reloadList();//刷新数据
                    }
                }
            );
        }
    }
    //查询品牌信息
    $scope.searchEntity={};//定义搜索对象为空对象防止传递给null的情况
    $scope.search=function (page, rows) {
        brandService.search(page,rows,$scope.searchEntity).success(
            function (response) {
                $scope.paginationConf.totalItems=response.total;//总记录数
                $scope.list=response.rows;//给列表变量赋值
            }
        );
    }
});