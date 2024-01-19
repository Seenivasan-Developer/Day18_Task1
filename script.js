function SubmitIPAddress() {
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9])){3}$/;
    var ipAddress = document.getElementById("IPSearch").value;
    if(ipRegex.test(ipAddress)){
        get_data(ipAddress)
    }
    else{
        alert("Enter Valid IP Address");
        document.getElementById("IPSearch").value="";
        document.getElementById("IPSearch").focus();
    }
  }
  
async function get_data(ipAddress) {
    try {
        var res = await fetch(`https://api.techniknews.net/ipgeo/${ipAddress}`);
    var res1 = await res.json();   
    console.log(res1)  
    var output=document.getElementById("result");
    output.innerHTML=`CONTINENT: <span class="main1">${res1.continent}</span><br>
    COUNTRY: <span class="main1">${res1.country}</span><br>
    STATE: <span class="main1">${res1.regionName}</span><br>
    CITY: <span class="main1">${res1.city}</span><br>
    PIN CODE: <span class="main1">${res1.zip}</span><br>
    ISP: <span class="main1">${res1.isp}</span><br>
    LATITUDE: <span class="main1">${res1.lat}</span><br>
    LONGITUDE: <span class="main1">${res1.lon}</span>`    
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}