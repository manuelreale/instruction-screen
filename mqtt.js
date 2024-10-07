function startConnect(){

    clientID = "clientID - "+parseInt(Math.random() * 100);

    // host = document.getElementById("host").value;   
    // port = document.getElementById("port").value;  
    // userId  = document.getElementById("username").value;  
    // passwordId = document.getElementById("password").value;  

    host = "192.178.200.178";
    port = "9001";
    userId  = "";  
    passwordId = "";   

    // document.getElementById("messages").innerHTML += "<span> Connecting to " + host + "on port " +port+"</span><br>";
    // document.getElementById("messages").innerHTML += "<span> Using the client Id " + clientID +" </span><br>";

    console.log("Connecting to " + host + "on port " +port);
    console.log("Using the client Id " + clientID);

    client = new Paho.MQTT.Client(host,Number(port),clientID);

    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

    client.connect({
        onSuccess: onConnect
//        userName: userId,
 //       passwordId: passwordId
    });
}

startConnect();


function onConnect(){
    // topic =  document.getElementById("topic_s").value;
    topic = "#"

    // document.getElementById("messages").innerHTML += "<span> Subscribing to topic "+topic + "</span><br>";

    console.log("Subscribing to topic " + topic);

    client.subscribe(topic);
}



function onConnectionLost(responseObject){
    // document.getElementById("messages").innerHTML += "<span> ERROR: Connection is lost.</span><br>";
    console.log("ERROR: Connection is lost.");
    if(responseObject !=0){
        console.log("ERROR: "+ responseObject.errorMessage);
        // document.getElementById("messages").innerHTML += "<span> ERROR:"+ responseObject.errorMessage +"</span><br>";
    }
}

function onMessageArrived(message){
    receiveJSON(1, 0);
    console.log("OnMessageArrived: "+message.payloadString);
    console.log("Topic: "+message.destinationName+"| Message : "+message.payloadString);
    // document.getElementById("messages").innerHTML += "<span> Topic:"+message.destinationName+"| Message : "+message.payloadString + "</span><br>";
}

function startDisconnect(){
    client.disconnect();
    // document.getElementById("messages").innerHTML += "<span> Disconnected. </span><br>";
    console.log("Disconnected.");
}

function publishMessage(){
// msg = document.getElementById("Message").value;
// topic = document.getElementById("topic_p").value;

msg = "test";
topic = "topic";

Message = new Paho.MQTT.Message(msg);
Message.destinationName = topic;

client.send(Message);
// document.getElementById("messages").innerHTML += "<span> Message to topic "+topic+" is sent </span><br>";
console.log("Message to topic "+topic+" is sent ");

}