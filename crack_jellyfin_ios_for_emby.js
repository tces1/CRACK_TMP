let body = $response.body;
if($request.url.includes("/system/info/public"))
{
    body = 
    `
    {"ServerName":"crack_jellyfin_ios_for_emby","ProductName":"Jellyfin Server","OperatingSystem":"Linux","StartupWizardCompleted":true}
    `
}
$done({
    status : 200,
    body : body
});
