var app = new Vue({
    el: "#container",
    data: {
        
    },
    computed: {
        
    },
    methods: {

    },
    created: function () {
        console.log('实例被创建');
        // 显示加载状态
        swal({background:"transparent",showConfirmButton:false,onOpen: function() {swal.showLoading()}});

        // 请求数据
        axios.get(baseUrl+'/')
        .then(function (response){
            console.log(response);
            var data = response.data;
            if(data.code == 10000){
                swal.close();
            }else{
                sweetAlert(
                    data.msg,
                    '',
                    'error'
                );
            }
        })
        .catch(function (error) {
            console.log(error);
            sweetAlert(
                '网络请求失败',
                '',
                'error'
            );
        });
    },
    mounted: function () {
        console.log('实例被挂载');
    }
});