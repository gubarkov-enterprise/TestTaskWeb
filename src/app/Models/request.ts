export class Ticket {
    id: number;
    title: string;
    userEmail: string;
    content: string;
    dateReg: Date;
    status: TicketStatus;
}

export enum TicketStatus {
    Approved,
    Rejected,
    Unchecked
}
