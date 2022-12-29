export interface IResponseWrapper<T>{
    result : {
        succeeded: boolean,
        data: T,
        error: null|{
            Message:string,
            code: number,
        },
        status?: number,
    }
}