
import crypto from 'crypto'

const md5Code = (json) => {
 console.log(md5);
    // 将传过来的json字符串转换为Map
    var dataMap = {};
    dataMap = JSON.parse(json);

    // 将Map中的每个键值对存放到数组中，并对数组进行排序
    var list = [];
    for(var key in dataMap)  {
        var map = {};
        map[key] = dataMap[key];
        list.push(map);
    }
    // 对数组进行升续排列
    list.sort(function(a,b){
        var aKey = '';
        var bKey = '';
        for(var key in a)  {
            aKey = key;
        }
        for(var key in b){
            bKey = key;
        }
        return aKey>bKey;
    });
 //var list=Object.keys(dataMap).sort();

    // 遍历数组组装字符串
    var strSb = '';
    for(var i = 0;i < list.length;i++){
         for(var key in list[i])  {
             if(list[i][key]!='' && list[i][key]!=null && list[i][key]!=undefined){
                strSb += key + '=' +list[i][key] + '|';
             }
        }
    }
    strSb += 'xywgj';
    console.log(strSb);
   
   
            var md5 = crypto.createHash("md5");
            md5.update(strSb);
            var result = md5.digest('hex');
            console.log(result);
            
    return result.toUpperCase();

}
export default {
   md5Code 
}
