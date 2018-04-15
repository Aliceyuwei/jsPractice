var xhr = new XMLHttpRequest();

//readyState
//0 - 你已經產生一個XMLHttpRequest，但是還沒有連結你要撈的資料
//1 - 你用了open()，但你還沒有把資料傳送過去
//2 - 偵測到你有用 send()
//3 - loading-
//4 - 你撈到資料了，數據已經完全接收到了

        //格式，要讀取的資料，同步與非同步
xhr.open('get','https://hexschool.github.io/ajaxHomework/data.json',true);
//open 只是先設定 還未撈資料

//true 非同步，不會等資料傳回來，就讓程式往下跑，等到回傳才會自動回傳
//false  同步，會等資料回傳回來，才讓程式往下跑

//格式: get (讀取資料) 單純用於抓資料
     //post (傳送資料到伺服器) 通常用於帳號驗證 傳送資料到後端，在由後端回傳資料確認

xhr.send(null);//空的資料

xhr.onload = function () {
    console.log(xhr.responseText);
    var str = JSON.parse(xhr.responseText);
    document.querySelector('.message').textContent = str[0].name;
}