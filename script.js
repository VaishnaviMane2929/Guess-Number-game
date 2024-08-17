const num = Math.ceil(Math.random() * 100);
console.log(num);
const gnum = prompt("Guess the no");
if(gnum >= num)
{
    console.log("this is greter than the guess number ");
    
}
else
{
    console.log("this is less than the guess number" + gnum);


}