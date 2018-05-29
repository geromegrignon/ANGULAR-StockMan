import { Provider } from './provider.model';
import { PersonalInfo } from './personalInfo.model';
import { Audit } from './audit.model';

export interface Contact extends Audit {
    id?: number;
    personalInfo: PersonalInfo;
    employer?: Provider;
}
