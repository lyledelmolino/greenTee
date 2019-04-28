export class User {
    id: number;
    username: string;
    password?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    roleId: number;
    emails?: string[];
    websites?: string[];
    phoneNumbers?: object[];
    clubRoles: object[];
    revisionScoringRecord: object[];
    currentScoringRecord: object[];
    locations: object[];
    sessions: object[];
    twoLowestEligibleTournamentScores: object[];
    views: object[];

}
