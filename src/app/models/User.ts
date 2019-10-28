import {Location} from "./Location";

export class User {
  id: number;
  username: string;
  password?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  obtacgod?: string;
  roleId: number;
  emails?: string[] = [];
  websites?: string[];
  phoneNumbers?: object[];
  clubRoles: object[];
  revisionScoringRecord: object[];
  currentScoringRecord: object[];
  locations:Location[] = [new Location()];
  sessions: object[];
  twoLowestEligibleTournamentScores: object[];
  views: object[];
  userLevel: number = 0;

  constructor(userLevel?: number) {

    if (userLevel != undefined)
      this.userLevel = userLevel;

//    this.locations[0] = new Location();
  }
}
