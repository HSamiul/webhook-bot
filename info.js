function sendWebhook() {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discordapp.com/api/webhooks/721876186120192070/h6o9prkUNU1AygIsaVbzUi_6QHfroEyMP8sH0wGe_LD1ETjcPcyk-yM49hEHiiny1ZzV")
    request.setRequestHeader('Content-type', 'application/json');

    myItem = document.getElementById("item").value
    myRetail = document.getElementById("retail").value
    myResell = document.getElementById("resell").value
    myDescription    = document.getElementById("description").value
    //myOView = document.getElementById("oView").value
    //myPView = document.getElementById("pView").value

    var myEmbed = {
        color: hexToDecimal("#e986f0"),
        title: myItem,

        thumbnail: {
            url: "https://i.imgur.com/riCKWwy.png"
        },

        fields: [
            {
                name: "Retail",
                value: myRetail
            },

            {
                name: "Resell",
                value: myResell
            },

            {
                name: "Description",
                value: myDescription
            }
        ],        
        
        footer: {
            icon_url: "",
            text: "F&F"
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

