const myTimeout = setTimeout(timeout,5000);
function timeout()
{
    alert("Session Expired!")
    location.replace("/login.php")
}