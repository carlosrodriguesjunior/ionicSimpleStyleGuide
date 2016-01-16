ionic.Platform.ready(function(){
  try{
    angular.bootstrap(document.getElementsByTagName('body')[0], [myAppName])

    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  }
  catch(e){
    alert(e)
  }
})
