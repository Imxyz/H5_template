```bash
get请求
axios.get(URL)
.then(function (response){
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});

带header的get请求
axios.get(URL, {
    headers: {
        'TOKEN': 'token'
    }
})
.then(function (response) {
   console.log(response);
})
.catch(function (error) {
    console.log(error);
});
```