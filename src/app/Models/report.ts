import { Time } from '@angular/common';

export class Report {
    averageExecutionTime: string;
    tickets: TicketResult[];
}

export class TicketResult {
    id: number;
    title: string;
    executionTime: string;
    warning: boolean;
    status: string;
}

export class TicketDetail {
    title: string;
    content: string;
    created: string;
    completed: string;
    responseTime: string;
}
