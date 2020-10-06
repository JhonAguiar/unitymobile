import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Helpdesk, HelpdeskResolution } from './helpdesk.model';

@Injectable({
  providedIn: 'root'
})
export class HelpdeskService {

  constructor(private httpclient: HttpClient) { }

  getincidents(): Observable<any> {
    //return this.httpclient.get("https://10.20.10.22/unitycore/api/v1/HelpdeskIncidents/selecttbHelpdeskIncidentPerUsername/gjansen");
    return this.httpclient.get("https://unitycore.acts-curacao.com/unitycore/api/v1/HelpdeskIncidents/selecttbHelpdeskIncidentPerUsername/gjansen");
}

getassignedincidents(): Observable<any> {
    return this.httpclient.get("https://unitycore.acts-curacao.com/unitycore/api/v1/HelpdeskIncidents/SELECTLISTMYINCIDENTREQUESTSPERUSERNAME/dquitora/Y");
}

getincidentsDone(): Observable<any> {
    //return this.httpclient.get("https://10.20.10.22/unitycore/api/v1/HelpdeskIncidents/selecttbHelpdeskIncidentPerUsername/gjansen");
    return this.httpclient.get("https://unitycore.acts-curacao.com/unitycore/api/v1/HelpdeskIncidents/SELECTHELPDESKINCIDENTPERUSERNAME/gjansen/3");
}

getincident(incidentNr: string): Observable<any> {
    return this.httpclient.get("https://unitycore.acts-curacao.com/unitycore/api/v1/HelpdeskIncidents/SelectIncidentDetailperNr/" + incidentNr);
}

getsolution(incidentNr: string): Observable<any> {
    return this.httpclient.get("https://unitycore.acts-curacao.com/unitycore/api/v1/INCIDENTRESOLUTIONs/" + incidentNr);
}

submitincident(helpdesk1: Helpdesk): Observable<Helpdesk> {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json'); 
    let httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json',
        'Cache-Control': 'no-cache'
   }); 
   let options = {
    headers: httpHeaders
 }; 
        return this.httpclient.post<Helpdesk>("https://unitycore.acts-curacao.com/unitycore/api/v1/HelpdeskIncidents/POSTHELPDESKINCIDENT2", helpdesk1,options);       
  
      
}

submitincidentResolution(HelpdeskResolution1: HelpdeskResolution): Observable<HelpdeskResolution> {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json'); 
    let httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json',
        'Cache-Control': 'no-cache'
   }); 
   let options = {
    headers: httpHeaders
    }; 
        return this.httpclient.post<HelpdeskResolution>("https://unitycore.acts-curacao.com/unitycore/api/v1/INCIDENTRESOLUTIONs/INSERTINCIDENTRESOLUTION", HelpdeskResolution1,options);       
  
      
}

sendLogin(user : string, pass: string){
    return this.httpclient.get<any>("https://unitycore.acts-curacao.com/unitycore/api/v1/Users/SELECTUSERIDPEREMAILPASS/"+user+"/pass");
}
}