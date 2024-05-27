export interface DialogData {
  animal: string;
  name: string;
}

export interface IPersonDto {
  businessEntityId: number;
  personType?: string;
  nameStyle?: boolean;
  title?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  suffix?: string;
  emailPromotion?: number;
  additionalContactInfo?: string | null | undefined;
  demographics?: string | null | undefined;
  rowguid?: string | null | undefined;
  modifiedDate?: string | null | undefined;
  businessEntity?: string | null | undefined;
  businessEntityContacts?: [];
  customers?: any[];
  emailAddresses?: any[];
  password?: string | null | undefined;
  personCreditCards?: any[];
  personPhones?: any[];

}

export class PersonDto implements IPersonDto {
  businessEntityId: number;
  personType?: string;
  nameStyle?: boolean;
  title?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  suffix?: string;
  emailPromotion?: number;
  additionalContactInfo?: string | null | undefined;
  demographics?: string | null | undefined;
  rowguid?: string | null | undefined;
  modifiedDate?: string | null | undefined;
  businessEntity?: string | null | undefined;
  businessEntityContacts?: [];
  customers?: any[];
  emailAddresses?: any[];
  password?: string | null | undefined;
  personCreditCards?: any[];
  personPhones?: any[];

  constructor(data?: IPersonDto) {
    this.businessEntityId = data?.businessEntityId ?? 0;
    this.personType = data?.personType;
    this.nameStyle = data?.nameStyle;
    this.title = data?.title;
    this.firstName = data?.firstName;
    this.middleName = data?.middleName;
    this.lastName = data?.lastName;
    this.suffix = data?.suffix;
    this.emailPromotion = data?.emailPromotion ?? 0;
    this.additionalContactInfo = data?.additionalContactInfo ?? '';
    this.demographics = data?.demographics ?? '';
    this.rowguid = data?.rowguid ?? null;
    this.modifiedDate = data?.modifiedDate ?? null;
    this.businessEntity = data?.businessEntity ?? null;
    this.businessEntityContacts = data?.businessEntityContacts ?? [];
    this.customers = data?.customers ?? [];
    this.emailAddresses = data?.emailAddresses ?? [];
    this.password = data?.password ?? null;
    this.personCreditCards = data?.personCreditCards ?? [];
    this.personPhones = data?.personPhones ?? [];
  }
}
