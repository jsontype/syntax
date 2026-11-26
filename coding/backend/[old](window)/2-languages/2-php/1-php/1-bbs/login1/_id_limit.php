<script src="http://code.jquery.com/jquery-latest.min.js"></script>

<script>
// 인풋 기본입력 ID 영문, 숫자만 허용 : https://ungdoli0916.tistory.com/230

    function InputEvent(conditions) {
        var $input = conditions.input;
        var dataType = conditions.dataType;
        var eventType = conditions.eventType;

        if ((!eventType)) {
            eventType = "keyup";
        }

        var handlerFunc = conditions.handler;
        if ((!handlerFunc)) {
            handlerFunc = function (event) {

                if (dataType == "AN") {
                    regEx = /[^a-z0-9]/gi;
                } else {
                    throw {error: "IlregalDataType", errorMsg: "dataType(" + dataType + ") is incorrect"}
                }
                remainOnlyTargetValue(regEx, $input, event);
            };
        }
        $input.on(eventType, handlerFunc);
    }

    function remainOnlyTargetValue(regEx, $input, event) {
        if ((!(event.keyCode >= 34 && event.keyCode <= 40)) && event.keyCode != 16) {
            var inputVal = $input.val();
            if (regEx.test(inputVal)) {
                $input.val(inputVal.replace(regEx, ''));
            }
        }
    }

    $(document).ready(function () {
        try {
            InputEvent({input: $("#alphaNumeric"), dataType: "AN"});
        } catch (e) {
            console.log(e);
        }
    });
</script>
