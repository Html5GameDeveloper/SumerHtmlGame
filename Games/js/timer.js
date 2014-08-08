 /* function RequestWebService() {
            //这是我们在第一步中创建的Web服务的地址
            var URL = "http://192.168.1.104/SumerHtmlGameService/Service1.asmx";

            //在这处我们拼接
            var data;
            data = '<?xml version="1.0" encoding="utf-8"?>';
            data = data + '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">';
            data = data + '<soap12:Body>';
            data = data + '<HelloWorld xmlns="http://tempuri.org/" />';
            data = data + '</soap12:Body>';
            data = data + '</soap12:Envelope>';

            //创建异步对象
            var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            xmlhttp.Open("POST", URL, false);
            xmlhttp.SetRequestHeader("Content-Type", "application/soap+xml");
            xmlhttp.Send(data);
            document.getElementById("data").innerHTML = xmlhttp.responseText;
			
		}


*/

 function GetString()
        {
            JsWebService.GetString(GetStringCallBack);  //在WebService中调用方法，并设置回调函数
        }
        function GetStringCallBack(result)  
        {
            alert(result);
        }
        
        function GetStringParam(name)
        {
            JsWebService.GetString(name,GetStringParamCallBack);  //在WebService中调用方法，并设置回调函数，如果此方法中带有参数则在回调函数前加入此参数。
        }
        function GetStringParamCallBack(result)
        {
            alert(result);
        }
        
        function GetList()
        {
            JsWebService.GetList(GetListCallBack);
        }
        function GetListCallBack(result)
        {
            if(result.length!=0)
            {
                for(var i=0;i<result.length;i++)
                {
                    document.getElementById("contentDivGetList").innerHTML += result[i] + "<br/>";
                }
            }
        }
        
        function GetObjectList()
        {
            JsWebService.GetObjectList(GetObjectListCallBack);
        }
        function GetObjectListCallBack(result)
        {
            if(result.length!=0)
            {
                for(var i=0;i<result.length;i++)
                {
                    document.getElementById("contentDivGetObjectList").innerHTML += "姓名:" + result[i].Name + "  年龄:" + result[i].Age + "<br/>";
                }
            }
        }		
			
			
			
			
			
			
			
			
			
			
			
			
			
			