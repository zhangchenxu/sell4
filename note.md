### vue-resource 发送ajax请求
```
Vue.use(vueResource)
this.$http.get('/api/seller').then((res) => {
  res = res.body;
  if (res.errno === NO_ERROR) {
  this.seller = res.data;
  console.log(this.seller);
 }
});
 ```