define(function(require, exports, module) {

    var Validator = require('bootstrap.validator');
    require('common/validator-rules').inject(Validator);
    var CreateBase = require('./util/create-base');
    var Uploader = require('upload');
    var EditorFactory = require('common/kindeditor-factory');

    exports.run = function() {

        var validator = new Validator({
            element: '#testpaper-form',
            autoSubmit: false,
        });

        CreateBase.initValidator(validator);

        validator.on('formValidated', function(error, msg, $form) {

            if (error) {
                return ;
            }

            if(!CreateBase.checkBuildCountAndScoreInputs()){
                return ;
            }

            if(validator.get('autoSubmit') == false){

                if(!CreateBase.canBuild()) {
                    return ;
                }else{
                    validator.set('autoSubmit',true);
                    $('button[type=submit]').trigger('click');
                }
            }
           
        });

        var editor = EditorFactory.create('#test-description-field', 'simple_noimage');
        validator.on('formValidate', function(elemetn, event) {
            editor.sync();
        });


    };

});