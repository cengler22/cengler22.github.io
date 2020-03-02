let popupShowing = false;

function Highlight(pictureName)
{
    if(!popupShowing)
    {
        $("body").append("<div class='popup' onclick='RemovePopup(this)'><img width='100%' src='pictures/" + pictureName + "'/><br/><br/>Click to remove</div>");

        popupShowing = true;
    }
}

function RemovePopup(picture)
{
    picture.remove();

    popupShowing = false;
}