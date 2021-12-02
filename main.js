const bill_amount=document.querySelector("#bill-amt");
const cash=document.querySelector("#cash")
const check=document.querySelector("#check");
const message=document.querySelector("#error-message");
const notes=document.getElementsByClassName("no-of-notes");
var typesOfNotes=[2000,500,100,20,10,5,1];

// to display the message
function message1(messages)
{
    message.style.display="block";
    message.innerText= messages;
}

// to calculate the no of notes
function calculate()
{
    var balance=cash.value-bill_amount.value;
    for(var i=0;i<typesOfNotes.length;i++)
    {
        var noOfNotes=Math.trunc(balance/typesOfNotes[i]);
        balance%=typesOfNotes[i];
        notes[i].innerText=noOfNotes;
    }

    console.log(balance);

}

check.addEventListener("click",function clicked(){
    message.style.display="none";
    if(bill_amount.value>0)
    {
        if(cash.value>=bill_amount.value)
        {
            calculate();
        }
        else
        {
            message1("Enter valid amount of cash");
        }
    }
    else
    {
        message.style.display="block";
        message.innerText="Please Enter Correct Amount";
    }
})

