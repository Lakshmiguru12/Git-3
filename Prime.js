let count=0;
let num=83;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            count++;
	    break;	
        }
    }
    if(count == 0){
        console.log("Yes");
}else console.log("No");