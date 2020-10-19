import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Helpdesk, HelpdeskResolution } from './helpdesk.model';

@Injectable({
  providedIn: 'root'
})
export class HelpdeskService {

  constructor(private httpclient: HttpClient) { }

  getincidents(elem : string): Observable<any> {
    //return this.httpclient.get("https://10.20.10.22/unitycore/api/v1/HelpdeskIncidents/selecttbHelpdeskIncidentPerUsername/gjansen");
    return this.httpclient.get("https://unitycore.acts-curacao.com/unitycore/api/v1/HelpdeskIncidents/selecttbHelpdeskIncidentPerUsername/"+elem);
}

getincidentsbytechnician(elem : string): Observable<any> {
    //return this.httpclient.get("https://10.20.10.22/unitycore/api/v1/HelpdeskIncidents/selecttbHelpdeskIncidentPerUsername/gjansen");
    return this.httpclient.get("https://unitycore.acts-curacao.com/unitycore/api/v1/HelpdeskIncidents/selecttbHelpdeskIncidentByTechnician/"+elem);
}

getassignedincidents(elem : string): Observable<any> {
    return this.httpclient.get("https://unitycore.acts-curacao.com/unitycore/api/v1/HelpdeskIncidents/SELECTLISTMYINCIDENTREQUESTSPERUSERNAME/"+elem+"/Y");
}

getincidentsDone(elem : string): Observable<any> {
    //return this.httpclient.get("https://10.20.10.22/unitycore/api/v1/HelpdeskIncidents/selecttbHelpdeskIncidentPerUsername/gjansen");
    return this.httpclient.get("https://unitycore.acts-curacao.com/unitycore/api/v1/HelpdeskIncidents/SELECTHELPDESKINCIDENTPERUSERNAME/"+elem+"/3");
}

getincidentssolved(elem : string): Observable<any> {
    //return this.httpclient.get("https://10.20.10.22/unitycore/api/v1/HelpdeskIncidents/selecttbHelpdeskIncidentPerUsername/gjansen");
    return this.httpclient.get("https://unitycore.acts-curacao.com/unitycore/api/v1/HelpdeskIncidents/SELECTHELPDESKINCIDENTPERUSERID/"+elem+"/3");
}

getincidentshistory(elem : string): Observable<any> {
    //return this.httpclient.get("https://10.20.10.22/unitycore/api/v1/HelpdeskIncidents/selecttbHelpdeskIncidentPerUsername/gjansen");
    return this.httpclient.get("https://unitycore.acts-curacao.com/unitycore/api/v1/HelpdeskIncidents/SELECTHELPDESKINCIDENTPERUSERID/"+elem+"/4");
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

submitLogin(email: string, pass: string): Observable<any> {
    return this.httpclient.get("https://unitycore.acts-curacao.com/unitycore/api/v1/Users/SELECTUSERIDPEREMAILPASS" + "/"+ email + "/" + pass);
}



}
