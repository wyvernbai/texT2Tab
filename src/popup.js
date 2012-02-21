function open_tab(){
    var jtext = document.getElementById('mytextarea').value;
    var mySplitResult = jtext.split(/[\s]+/);

    var j = 0;
    for(j = 0; j < mySplitResult.length; j++){
        if (mySplitResult[j].match(/^http:\/\//i) != null){
            chrome.tabs.create({url: mySplitResult[j]});
        }
    }
}

function displayDate()
{
    document.getElementById("demo").innerHTML=Date();
}

function displaymessage()
{
    var jtext = document.getElementById('mytextarea').value;
    alert(jtext);
}
