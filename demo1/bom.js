window.$=function(){};
$.bom={
    openPage:function(url,width,height){
        window.open(url,'_blank',
        'width='+width+'+px,height='+height+'+px,top='+(screen.height/2-height/2)+'px,left='+(screen.width/2-width/2)+'px')
    },
    search:function(name,value){
        var search=window.location.search;
        if(search[0]==='?'){
            search=search.slice(1);
        }
        var searchArr=search.split('&');
        var result={};
        for(var i=0;i<searchArr.length;i++){
            var item=searchArr[i].split('=');
            result[decodeURIComponent(item[0])]=decodeURIComponent(item[1]||'');
        }
        if(value === undefined){//获取
            return result[name];
        }else{
            if(search===''){
                location.search =''+encodeURIComponent(name)+'='+encodeURIComponent(value)+'';
            }else if(result[name]===undefined){
                location.search +='&'+encodeURIComponent(name)+'='+encodeURIComponent(value)+'';
            }else {
                result[name] = value;
                console.log(result)
                var newSearch = '?';
                for(var val in result){
                  newSearch += ''+encodeURIComponent(val)+'='+encodeURIComponent(result[val])+'';
                }
                location.search = newSearch;
            }
        }
    }
}
