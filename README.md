```bash
###get请求###
axios.get(URL, {
    headers: {
        'TOKEN': 'token'
    },
    params: { 
    	'key': 'value' 
    }
})
.then(function (response) {
   console.log(response);
})
.catch(function (error) {
    console.log(error);
});

###post请求###
axios.post(URL, {
	param1: string,
    param2: string
},
{
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