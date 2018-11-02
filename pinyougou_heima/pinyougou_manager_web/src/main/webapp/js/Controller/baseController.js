app.controller('baseController', function ($scope) {

    //分页配件的控制
    $scope.paginationConf={
        currentPage: 1, //当前页码
        totalItems: 10,//总条数
        itemsPerPage: 10,//每页记录数
        perPageOptions: [10, 20, 30, 40, 50],//页码选项
        //更改页面触发事件
        onChange: function(){
            $scope.reloadList();//重新加载
        }
    };
    //刷新数据
    $scope.reloadList=function () {
        //切换页码
        $scope.search($scope.paginationConf.currentPage,$scope.paginationConf.itemsPerPage);
    };

    $scope.selectIds=[];//选中的id集合
    //更新复选框
    $scope.updateSelection=function ($event, id) {
        if($event.target.checked){//如果选中就添加到数组中去
            $scope.selectIds.push(id);
        }else{
            //把选中的id的从数组中移除
            var index = $scope.selectIds.indexOf(id);
            $scope.selectIds.splice(index,1);
        }
    };

})