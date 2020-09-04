function Clock()
{
    num=document.the_form.kq.value;
    num=eval(num)+1;
    document.the_form.kq.value=num;
    // hengio=setTimeout("baogio();",1000);
}
hengio = setInterval("Clock()",1000);
