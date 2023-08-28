import { MyFandomType } from "./homeType";

// api 타입
export interface ApiResponse<T> {
    data: T[];
    totalPage: number;
    page: number;
}

// 각 요청별 타입
export type MyFandomRes = ApiResponse<MyFandomType>;
