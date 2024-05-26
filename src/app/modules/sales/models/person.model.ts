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
  rowguid?: string | null | undefined;
  modifiedDate?: string | null | undefined;

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
  rowguid?: string | null | undefined;
  modifiedDate?: string | null | undefined;

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
    this.rowguid = data?.rowguid ?? null;
    this.modifiedDate = data?.modifiedDate ?? null;
  }
}
