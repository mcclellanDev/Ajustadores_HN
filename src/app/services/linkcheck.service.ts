import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkcheckService {

  constructor() { }

  checkLink(checkUrl){
    var links = document.querySelectorAll("a");
    var linkReport = [];
    var linksChecked=0;
    links.forEach(function(link){
        link = checkUrl;
        var reportLine = {url: link, status:0, redirectedTo: "", message : "", element : link};
        //var reportLine = {url: link.getAttribute('href'), status:0, redirectedTo: "", message : "", element : link};
        linkReport.push(reportLine);

        console.log("HEAD " + reportLine.url);

        fetch(checkUrl, {
          method: 'HEAD',
          mode: 'cors',
          //mode: 'no-cors',
          redirect: 'follow'
        })
        .then(function(response) {
            linksChecked++;
            reportLine.status=response.status;
            reportLine.message= response.statusText + " | " + 
                                response.type + " | " + 
                                (response.text || "") + " | " +                            
                                JSON.stringify(response.headers) ;
            if(response.redirected){
                reportLine.redirectedTo = response.url;
            }
            console.table(response);
            }
        )
        .catch(function(error){
            reportLine.message = error;
            console.table(error);
            linksChecked++;
        });

    });

    function imgreport(links){    
        links.forEach(function(link){
                if(link.status==0){
                    // trigger error messages with status 
                    // to the console for status of 0
                    var img = new Image();
                    img.src = link.url;
                }
            }
        );
    }

    var finishReport = setInterval(
                            function(){if(linksChecked>=linkReport.length){
                                console.table(linkReport);
                                imgreport(linkReport);
                                clearInterval(finishReport);
                                }}
                            , 3000);
  }
}
