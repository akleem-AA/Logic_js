let date = new Date();
console.log(date)

const formatTimestamp = (timestamp) => {
    const options = { hour: 'numeric', minute: '2-digit', hour12: true };
    return new Intl.DateTimeFormat('en-US', options).format(timestamp);
  };
let a =formatTimestamp(date)
console.log(a) //ouptu is 8:11 AM similar to whatspp message time
