import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { IconType } from "react-icons";

export type TError = {
    data: {
        message: string;
        stack: string;
        success: boolean;
    };
    status: number;
};

export type TMeta = {
    limit: number;
    page: number;
    total: number;
    totalPage: number;
};

export type TResponse<T> = {
    data?: T;
    error?: TError;
    meta?: TMeta;
    success: boolean;
    message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParam = {
    name: string;
    value: boolean | React.Key;
};

export interface ErrorSource {
    path: string;
    message: string;
}

export interface ErrorResponseData {
    status: boolean;
    message: string;
    errorSources: ErrorSource[];
    stack?: string;
}

export interface ErrorResponse {
    data: ErrorResponseData;
    status: boolean;
}


// NavItem interface
export interface NavItem {
    href: string;
    title: string;
    Icon: IconType;
    children?: NavItem[];
}