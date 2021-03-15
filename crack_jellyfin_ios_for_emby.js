let body = $response.body;
if($request.url.includes("/system/info/public"))
{
    body = `{"ServerName":"crack_jellyfin_ios_for_emby","Version":"10.7.0","ProductName":"Jellyfin Server","OperatingSystem":"Linux","StartupWizardCompleted":true}`
}
$done({
    status : 200,
    body : body
});
