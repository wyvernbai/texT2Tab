function open_tab(){
    var jtext = document.getElementById('mytextarea').value;
    var regex = document.getElementById('regx').value;
    var mySplitResult = jtext.split(/[\s]+/);
    var re = new RegExp(regex,"i");

    var j = 0;
    for(j = 0; j < mySplitResult.length; j++){
        if (mySplitResult[j].match(/^http:\/\//i) != null){
            if (regex != "")
            {
                if (mySplitResult[j].match(re) != null)
                {
                    chrome.tabs.create({url: mySplitResult[j]});
                }
            }
            else
            {
                chrome.tabs.create({url: mySplitResult[j]});
            }
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
