window.addEventListener("deviceorientation", on_rotate_uab);
function on_rotate_uab(e)
{
    document.getElementById("id_alfa").innerHTML = e.alfa;
    document.getElementById("id_beta").innerHTML = e.beta;
    document.getElementById("id_gamma").innerHTML = e.gamma;

}
