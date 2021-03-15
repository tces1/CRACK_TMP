if ($request.url.indexOf('/system/info/public') != -1) {
    if($response.status==200){
        var $tmp_body = $response.body
        if($response.body.ProductName != "Jellyfin Server"){
            $notification.post("伪装Jellyfin服务器成功", "", "");
            $tmp_body["ProductName"] = "Jellyfin Server"
            $done({status: 200, headers: $response.headers, body: $tmp_body })
        }else{
            $done({})
        }
    }else{
        $done({})
    }
}else{
    $done({})
}
