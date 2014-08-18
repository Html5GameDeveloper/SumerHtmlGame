 
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
			
			
			
			
			
			
			
			
			
			
			
			
			
			