
import { FeedbackPDTO } from './feedbackPDTO';
import { MiscItemInfoPDTO } from './miscItemInfoPDTO';


export interface PageOfMiscItemInfoPDTO {
    totalPages?: number;
    totalElements?: number;
    pageNumber?: number;
    pageSize?: number;
    numberOfElements?: number;
    sortAscending?: boolean;
    sortProperty?: string;
    additionalInfos?: Array<FeedbackPDTO>;
    content?: Array<MiscItemInfoPDTO>;
}

