function sendWebhook() {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discordapp.com/api/webhooks/717110992319807609/Ti2dttH61I52Lt2Qxjhg_LJmmJo8Fs_HnOhJNOKVTCELxqVQhocltIY1K93DU5fF0gUU")
    request.setRequestHeader('Content-type', 'application/json');

    myTitle = document.getElementById("title").value
    myNetChange = document.getElementById("netChange").value
    myTime = document.getElementById("time").value
    //myOView = document.getElementById("oView").value
    //myPView = document.getElementById("pView").value

    var myEmbed = {
        color: hexToDecimal("#e986f0"),
        title: myTitle,
        timestamp: myTime,

        thumbnail: {
            url: "https://i.imgur.com/riCKWwy.png"
        },

        fields: [
            {
                name: "Net Gain/Loss",
                value: myNetChange
            }
        ],        
        
        footer: {
            icon_url: "https://i.imgur.com/riCKWwy.png",
            text: "Finance tracking"
        }
    }

    var params = {
        embeds: [myEmbed]
    }
    
    request.send(JSON.stringify(params));
}

function hexToDecimal(hex) {
    return parseInt(hex.replace("#",""), 16) //replace # in hex with "" ... return hex but in a different radix.
  }

