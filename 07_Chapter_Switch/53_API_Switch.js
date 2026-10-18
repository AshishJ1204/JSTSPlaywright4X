let responseCode = 100;
 switch (responseCode) {
    case 200:
    console.log("200 OK");
    break;
    case 404:
    console.log("404 Not Found");   
    break;
    case 300:
    console.log("300 code"); 
    break;

    default:
    console.log("No Status code matched");
 }