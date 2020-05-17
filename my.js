function eva(){
    var math = document.getElementsByTagName('input')[1].value;
    if (math >= 90 && math <= 100)
    {
        document.getElementsByTagName('p')[0].textContent = "Excellent";
    }
    else if (math >= 80 && math <= 89)
    {
        document.getElementsByTagName('p')[0].textContent = "Good";
    }
    else if (math >= 70 && math <= 79)
    {
        document.getElementsByTagName('p')[0].textContent = "Average";
    }
    else if (math >= 60 && math <= 69)
    {
        document.getElementsByTagName('p')[0].textContent = "Poor";
    }
    else if (math >= 1 && math <= 59){
        document.getElementsByTagName('p')[0].textContent = "Fair";
    }
    else
    {
        document.getElementsByTagName('p')[0].textContent = "no grade";
    }

    /*science grades*/
    var science = document.getElementsByTagName('input')[2].value;
    if (science >= 90 && science <= 100)
    {
        document.getElementsByTagName('p')[1].textContent = "Excellent";
    }
    else if (science >= 80 && science <= 89){
        document.getElementsByTagName('p')[1].textContent = "Good";
    }
    else if (science >= 70 && science <= 79){
        document.getElementsByTagName('p')[1].textContent = "Average";
    }
    else if (science >= 60 && science <= 69){
        document.getElementsByTagName('p')[1].textContent = "Poor";
    }
    else if (science >= 1 && science <= 59){
        document.getElementsByTagName('p')[1].textContent = "Fair";
    }
    else{
        document.getElementsByTagName('p')[1].textContent = "no grade";
    }

    /*englishgrades*/
    var english = document.getElementsByTagName('input')[3].value;
    if(english >= 90 && english <= 100)
    {
        document.getElementsByTagName('p')[2].textContent = "Excellent";
    }
    else if(english >= 80 && english <= 89)
    {
        document.getElementsByTagName('p')[2].textContent = "Good";
    }
    else if(english >= 70 && english <= 79)
    {
        document.getElementsByTagName('p')[2].textContent = "Average";
    }
    else if(english >= 60 && english <= 69)
    {
        document.getElementsByTagName('p')[2].textContent = "Poor";
    }
    else if(english >= 1 && english <= 59)
    {
        document.getElementsByTagName('p')[2].textContent = "Fair";
    }
    else{
        document.getElementsByTagName('p')[2].textContent = "no grade";
    }

    /*filipino grades*/
    var filipino = document.getElementsByTagName('input')[4].value;
    if(filipino >= 90 && filipino <= 100)
    {
        document.getElementsByTagName('p')[3].textContent = "Excellent";
    }
    else if(filipino >= 80 && filipino <= 89)
    {
        document.getElementsByTagName('p')[3].textContent = "Good";
    }
    else if(filipino >= 70 && filipino <= 79)
    {
        document.getElementsByTagName('p')[3].textContent = "Average";
    }
    else if(filipino >= 60 && filipino <= 69)
    {
        document.getElementsByTagName('p')[3].textContent = "Poor";
    }
    else if(filipino >= 1 && filipino <= 59){
        document.getElementsByTagName('p')[3].textContent = "Fair";
    }
    else
    {
        document.getElementsByTagName('p')[3].textContent = "no grade";
    }

    /*pe grades*/
    var pe = document.getElementsByTagName('input')[5].value;
    if(pe >= 90 && pe <= 100){
        document.getElementsByTagName('p')[4].textContent = "Excellent";
    }
    else if(pe >= 80 && pe <= 89)
    {
        document.getElementsByTagName('p')[4].textContent = "Good";
    }
    else if(pe >= 70 && pe <= 79)
    {
        document.getElementsByTagName('p')[4].textContent = "Average";
    }
    else if(pe >= 60 && pe <= 69)
    {
        document.getElementsByTagName('p')[4].textContent = "Poor";
    }
    else if(pe >= 1 && pe <= 59)
    {
        document.getElementsByTagName('p')[4].textContent = "Fair";
    }
    else
    {
        document.getElementsByTagName('p')[4].textContent = "no grade";
    }

    /*ranking*/
    if (math && science && english && filipino && pe >= 90 && math && science && english && filipino && pe <=100)
    {
        document.querySelector("#rankhere").textContent = "top honor student";
        document.querySelector("#rankhere").style.color = "yellow";
        if (math < 90 || math && science < 90 || math && english < 90 || math && filipino < 90)
        {
            document.querySelector("#rankhere").textContent = "Second Honorable Student";
            document.querySelector("#rankhere").style.color = "indigo";
        }
        else if (science < 90 || science && english < 90 || science && filipino < 90 || science && pe < 90)
        {
            document.querySelector("#rankhere").textContent = "Second Honorable Student";
            document.querySelector("#rankhere").style.color = "indigo";
        }
        else if (english < 90 || english && filipino < 90 || english && pe < 90)
        {
            document.querySelector("#rankhere").textContent = "Second Honorable Student";
            document.querySelector("#rankhere").style.color = "indigo";
        }
        else if (filipino < 90 || filipino && pe < 90)
        {
            document.querySelector("#rankhere").textContent = "Second Honorable Student";
            document.querySelector("#rankhere").style.color = "indigo";
        }
        else if (pe < 90)
        {
            document.querySelector("#rankhere").textContent = "Second Honorable Student";
            document.querySelector("#rankhere").style.color = "indigo";
        }
    }
    else if (math && science && english && filipino && pe <= 69 && math && science && english && filipino && pe >= 0)
    {
        document.querySelector("#rankhere").textContent = "Repeater";
        if (math >= 70 || math && science >= 70 || math && english >= 70 || math && filipino >= 70)
        {
            document.querySelector("#rankhere").textContent = "Repeater";
            document.querySelector("#rankhere").style.color = "red";
        }
        else if (science >= 70 || science && english >= 70 || science && filipino >= 70 || science && pe >= 70)
        {
            document.querySelector("#rankhere").textContent = "Repeater";
            document.querySelector("#rankhere").style.color = "red";
        }
        else if (english >=- 70 || english && filipino >= 70 || english && pe >= 70)
        {
            document.querySelector("#rankhere").textContent = "Repeater";
            document.querySelector("#rankhere").style.color = "red";
        }
        else if (filipino >= 70 || filipino && pe >= 70)
        {
            document.querySelector("#rankhere").textContent = "Repeater";
            document.querySelector("#rankhere").style.color = "red";
        }
        else if (pe >= 70)
        {
            document.querySelector("#rankhere").textContent = "Repeater";
            document.querySelector("#rankhere").style.color = "red";
        }
    }
}
