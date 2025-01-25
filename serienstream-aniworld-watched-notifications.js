// ==UserScript==
// @name            SerienStream / AniWorld - Watched Notitifications
// @description  Marks the read notifications in color
// @namespace    https://github.com/M4RC-XX
// @version         1.0
// @author			M-XRC-XX
// @icon            data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABhlBMVEU9mtgpaJI3jcY+nd0oZpA7l9Q4jcY+nd1Ao+VApOZDq/BErvRErfRErfNErPJDrPFDq/FErPFDqu9Dqu5Cqe1CqOxApuo/pelBpulCp+pCqOtCp+lltuxvuuxHpuU+ouVApOdot+vp9Pz3+/6/3/VqteY/oOE+oeNDqe49o+eEw+3+///////v9/yn0u9Yq+I9nuA/ouRBpedBp+o9oeWEwuvh8PmPxupLpOA8n+FBpehCp+tDq+88oOOEwer8/f7P5vZ4uuZDoeA9oONBpOc8oOKEwen2+v252/JkseU/oeI/pOc8n+KDwOns9fuh0PBVredApejS6flWr+pBp+v1+v5rue0/puvx+P2k0/JJqelBqOv5/P7C4PRtt+hCpOb9/v/X6veBwOlGo+I9ouQ9oeTn8/qZy+1Qp+E9n+JAo+Y9ouaEw+zz+f2x1/FeruM+n+A+pOiAwu76/f7I4/ZyuOdBoeFBpupAp+rB4ffT6vmJxe5JpuQ9oeNIqepKqelErPNAo+TKoRPCAAAACHRSTlMAJJ/uJL6f7T8zcWUAAAABYktHRCy63XGrAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH4gcKACUid1a9XgAAAZtJREFUOMuF0+VbwzAQBvCyIV06KmkCXXFdgaDDN3y4juHu7u7yn5NutGsHlPt6v6dy9x7DpLjcrOfXYt2uFIZJTQMc5/21OA6kpTLpINOhQDqTwTkBLoNhDcDHKwmwjMdr9AUAgCjYiddjAF4CUEZIhsBGTED7Ms7KVnwqkq0kAUQZ5+Tm5RcUKiqCQDKICSSAsouKS0rLyv2UaFD8FgbgBahWVFYRUl1TW1ffEMD6e+xA9jU2UUBIc0trG9seRKGYMIGoKR2dMUC6unt6+8K+uDABQEr/QBwQMjg0PDIa1EASGBs3ACETk1MRDCX+T0DIdHQGCk5gdm5epoD7CywsLi07PGFldW1dQcD6DSIyf5NsbG5t7yiYTtM6BzmwGx8U2ds/ODxS6Cx53jbJ4PGJDk7Pzi/q2310YbxtkhLEl1cb5Prm9s4fvsfmyhPrBtpD9PHp+eXV873v5DwIEAXe3kcjsXYiMSb4oELDyypG9sxZMkkzG4IwZI+kDozY08RLtJJyT2NvOZwfVxE7nH9Oz/X/8Tqc/6d+/l/0fV9tB8ubWAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNy0xMFQwMDozNzozNCswMjowMKVVr8QAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDctMTBUMDA6Mzc6MzQrMDI6MDDUCBd4AAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC
// @match           https://*.to/account/notifications

// @run-at       	document-start
// @require			https://code.jquery.com/jquery-3.3.1.slim.min.js
// @grant			none
// ==/UserScript==

(function ()
{

//// Config

// View your old config from Visited
// about:config?filter=extensions.visited

// Copy from extensions.visited.color.visited
var p_color_visited = "LightCoral";

// Copy from extensions.visited.except
var p_except = "mail.live.com,";

//// End Config

//// Variable

const style_id = "visited-lite-7e-style";
const css_a_visited = " a:visited, a:visited * { color: %COLOR% !important; } ";

var colorArr = ["Aqua","Blue","BlueViolet","Brown","CadetBlue","Chocolate","Coral"
    ,"CornflowerBlue","Crimson","DarkGoldenRod","DarkGreen","DarkKhaki","DarkMagenta"
    ,"Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkTurquoise"
    ,"DarkViolet","DeepPink","DeepSkyBlue","DodgerBlue","FireBrick","ForestGreen"
    ,"Fuchsia","Gold","GoldenRod","Green","GreenYellow","HotPink","IndianRed"
    ,"Indigo","Khaki","Lavender","LawnGreen","LightCoral","LightSalmon","LightSeaGreen"
    ,"LightSteelBlue","Lime","LimeGreen","Magenta","Maroon"
	,"MediumAquaMarine","MediumOrchid","MediumSlateBlue","MediumTurquoise","NavajoWhite","Navy"
	,"Orange","OrangeRed","Orchid","PaleVioletRed","Peru","Purple","Red","RosyBrown"
	,"RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","Sienna","SlateBlue"
	,"SpringGreen","SteelBlue","Tomato","Turquoise","Violet","YellowGreen"];

//// End Variable

//// Function

function attachOnLoad(callback)
{
	window.addEventListener("load", function (e)
	{
		callback();
	});
}

function attachOnReady(callback)
{
	document.addEventListener("DOMContentLoaded", function (e)
	{
		callback();
	});
}

function isExceptSite(except, site)
{
    var exceptList = except.split(",");
    for (var i = 0; i < exceptList.length; i++)
    {
        var str = exceptList[i].replace(/\s/ig,"");

        var str1 = str;
        if (str1.indexOf(".") != 0 && str1.indexOf("/") != 0)
            str1 = "." + str1;

        var str2 = str;
        if (str2.indexOf("://") != 0)
            str2 = "://" + str2;

        if(str != ""
            && (site.indexOf(str1) > -1 || site.indexOf(str2) > -1))
        {
            return true;
        }
    }
    return false;
}

function addStyle(css)
{
    var style = document.getElementById(style_id);
    if(style == null)
    {
        var heads = document.getElementsByTagName("head");

        if(heads != null && heads.length > 0)
        {
            var head = heads[0];
            var style = document.createElement("style");
            if(style != null)
            {
                style.setAttribute("id",style_id);
                style.setAttribute("type","text/css");
                head.appendChild(style);
            }
        }
    }

    if(style != null)
    {
        style.textContent = String(css);
    }
}

function assignColor(css, color)
{
    return css.replace(/%COLOR%/ig, color);
}

function main()
{
	var url = document.documentURI;
	var css = "";

	css += assignColor(css_a_visited, p_color_visited);

	if(!isExceptSite(p_except, url))
	{
		addStyle(css);
	}
}

//// End Function

attachOnReady(main);

})();

document.body.style.background = "#292929";

// End
