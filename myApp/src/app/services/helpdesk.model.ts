export class Helpdesk {
    NR: number;
    TICKETNR:string;
    INCIDENTDATE:string;
    USERNR:number;
    STEPNR:number;
    STATUSNR:number;
    DESCRIPTION:string;
    TECHNICIANNR:number;
    PRIORITYNR:number;
    PRIORITYNAME:string;
    ACTIVE:Boolean;
    DEPARTMENTID:number;
    SUBJECTNR:number;
    SUBJECTTEXT:string="";
    SOURCENR:number;
    SOURCE:string;
    SUBJECT:string;
    DEPARTMENTNAME:string;
    FULLNAME:string;
    TECHNICIANNAME:string;
    IMAGEURL:string;
    USERNAME:string;
    ERRORMESSAGE:string;
}


export class HelpdeskResolution {
    NR: number;
    INCIDENTNR:number;
    USERNR:number;
    RESOLUTIONDATE:string;
    RESOLUTION:string;
    ACTIVE:boolean;
    USERNAME:string;
}
