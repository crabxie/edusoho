define(function(require, exports, module) {

    require('jquery.sortable');
    var Notify = require('common/bootstrap-notify');
    var WebUploader = require('edusoho.webuploader');

    exports.run = function() {

    	$(".buy-userinfo-list").sortable({
			'distance':20
	    });

        if($("[name=buy_fill_userinfo]:checked").val()==1)$("#buy-userinfo-list").hide();
        if($("[name=buy_fill_userinfo]:checked").val()==0){
                    $("#buy-userinfo-list").hide();
                    $("#show-list").hide();
                }
        
        $("[name=buy_fill_userinfo]").on("click",function(){
            if($("[name=buy_fill_userinfo]:checked").val()==1){
                                $("#show-list").show();
                                $("#buy-userinfo-list").hide();
                            }
                      if($("[name=buy_fill_userinfo]:checked").val()==0){
                                $("#buy-userinfo-list").hide();
                                $("#show-list").hide();
                            }
    	});
    	
          $("#hide-list-btn").on("click",function(){
            $("#buy-userinfo-list").hide();
             $("#show-list").show();
        	});

        	$("#show-list-btn").on("click",function(){
            $("#buy-userinfo-list").show();
             $("#show-list").hide();
       	 });

        var $form = $("#course-form");

        if($('#live-course-logo-upload').length>0) {
            var uploader = new WebUploader({
                element: '#live-course-logo-upload'
            });

            uploader.on('uploadSuccess', function(file, response ) {
                var url = $("#live-course-logo-upload").data("gotoUrl");

                $.post(url, response ,function(data){
                    $("#live-course-logo-container").html('<img src="' + data.url + '">');
                    $form.find('[name=live_logo]').val(data.path);
                    $("#live-course-logo-remove").show();
                    Notify.success('上传直播课程的LOGO成功！');
                });
            });

            $("#live-course-logo-remove").on('click', function(){
                if (!confirm('确认要删除吗？')) return false;
                var $btn = $(this);
                $.post($btn.data('url'), function(){
                    $("#live-course-logo-container").html('');
                    $form.find('[name=live_logo]').val('');
                    $btn.hide();
                    Notify.success('删除直播课程LOGO成功！');
                }).error(function(){
                    Notify.danger('删除直播课程LOGO失败！');
                });
            });
        }
    };

});