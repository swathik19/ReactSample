export interface IDetails {
    details: any;
}

export type DetailsState = {
    details: IDetails;
}

export type DetailsAction = {
    type: string,
    details: IDetails
}
