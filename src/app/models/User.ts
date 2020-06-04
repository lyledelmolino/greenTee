import {Location} from "./Location";
import {PhoneNumber} from "./PhoneNumber";

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
  phoneNumbers:PhoneNumber[] = [new PhoneNumber()];
  clubRoles: object[];
  revisionScoringRecord: object[];
  currentScoringRecord: object[];
  locations:Location[] = [new Location()];
  sessions: object[];
  twoLowestEligibleTournamentScores: object[];
  views: object[];
  userLevel: number = 0;

  constructor(userLevel?: number) {
    this.emails[0] = "";
  }
}
