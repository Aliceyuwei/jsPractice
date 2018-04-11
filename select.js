var city = [
    {
        farmer:'查理',
        place:'前鎮區'
    },
    {
        farmer:'卡斯柏',
        place:'苓雅區'
    },
    {
        farmer:'小花',
        place:'苓雅區'
    }
] 
var area = document.querySelector('#areaId');
console.log(area);
var list = document.querySelector('.list');
console.log(list);
var cityLen = city.length;
area.addEventListener('change',update,false);
function update(e){
    var str = '';
    var select = e.target.value;

    for(var i = 0; i<cityLen; i++){
        if(select == city[i].place){
            str+='<li>'+city[i].farmer+'</li>'
            console.log(str);
        }
    }
    list.innerHTML = str;
}

