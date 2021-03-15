let body = $response.body;
if($request.url.includes("/system/info/public"))
{
    body = `{"LocalAddress":"https://emby.mcwy.me","ServerName":"899319d6c727","Version":"10.1.0","ProductName":"Jellyfin Server","OperatingSystem":"Linux","Id":"226686ec940840738258b8ff6282a31c","StartupWizardCompleted":true}`
}
$done({
    status : 200,
    body : body
});
