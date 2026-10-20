let retry = 0;

do {
    console.log("Executing the code......");
    console.log("Retrying......", retry);
    retry++;
} while (retry < 3); // execution will stop when retry is 3 and while condition is false