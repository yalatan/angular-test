export interface IUserCreateModel {
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
}

export interface IUserLoginModel {
    Email: string;
    Password: string;
}