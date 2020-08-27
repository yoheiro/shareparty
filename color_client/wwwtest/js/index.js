
function changeColor(col) {

    document.getElementById('color').style.backgroundColor = col;
 };

    
function ble(){
  

function foundBeacon(beacon)
{
 
   console.log('Found beacon: ' + uint8ArrayToString(beacon.bid))
  iro= "#"+uint8ArrayToString(beacon.bid)
   changeColor(iro)
}

function scanError(error)
{
   console.log('Eddystone scan error: ' + error)
}

evothings.eddystone.startScan(foundBeacon, scanError)
};
function stop(){
    evothings.eddystone.stopScan()
}
function uint8ArrayToString(uint8Array)
		{
			function format(x)
			{
				var hex = x.toString(16);
				return hex.length < 2 ? '0' + hex : hex;
			}

			var result = '';
			for (var i = 0; i < 3; ++i)
			{
				result += format(uint8Array[i]);
			}
			return result;
		}