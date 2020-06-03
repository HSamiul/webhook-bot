function sendWebhook() {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/705242893035765842/FHN2ti61kYLq2_w-JVJbmuNFDxMlCFYJ7eEVh1W3BK5lsLqiwsVB-0Tg0MDbVbSgA00r")
    request.setRequestHeader('Content-type', 'application/json');

    myTitle = document.getElementById("title").value
    myNetChange = document.getElementById("netChange").value
    myTime = document.getElementById("time").value
    myOView = document.getElementById("oView").value
    myPView = document.getElementById("pView").value

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
            },

            {
                name: "Objective view",
                value: myOView,
            },

            {
                name: "Personal view",
                value: myPView
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

