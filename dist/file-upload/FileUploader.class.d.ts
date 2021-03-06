import { FileLikeObject } from './FileLikeObject.class';
import { FileItem } from './FileItem.class';
export interface Headers {
    name: string;
    value: string;
}
export declare type ParsedResponseHeaders = {
    [headerFieldName: string]: string;
};
export declare type FilterFunction = {
    name: string;
    fn: (item?: FileLikeObject, options?: FileUploaderOptions) => boolean;
};
export interface FileUploaderOptions {
    forceFilename?: string;
    forcePostname?: string;
    accept?: string;
    allowedMimeType?: Array<string>;
    allowedFileType?: Array<string>;
    autoUpload?: boolean;
    isHTML5?: boolean;
    filters?: Array<FilterFunction>;
    headers?: Array<Headers>;
    method?: string;
    authToken?: string;
    maxFileSize?: number;
    queueLimit?: number;
    removeAfterUpload?: boolean;
    url?: string;
    disableMultipart?: boolean;
    itemAlias?: string;
    authTokenHeader?: string;
    additionalParameter?: {
        [key: string]: any;
    };
}
export declare class FileUploader {
    authToken: string;
    isUploading: boolean;
    queue: Array<FileItem>;
    progress: number;
    _nextIndex: number;
    autoUpload: any;
    authTokenHeader: string;
    options: FileUploaderOptions;
    constructor(options?: FileUploaderOptions);
    setOptions(options: FileUploaderOptions): void;
    isFileValid(file: File): boolean;
    isFilesValid(files: File[]): boolean;
    getValidFiles(files: File[]): File[];
    getInvalidFiles(files: File[]): {
        file: File;
        type: string;
    }[];
    addToQueue(files: File[], options?: FileUploaderOptions, filters?: FilterFunction[] | string): void;
    removeFromQueue(value: FileItem): void;
    clearQueue(): void;
    isHtml5Mode(): boolean;
    uploadItem(value: FileItem): void;
    cancelItem(value: FileItem): void;
    uploadAll(): void;
    cancelAll(): void;
    isFile(value: any): boolean;
    isFileLikeObject(value: any): boolean;
    getIndexOfItem(value: any): number;
    getNotUploadedItems(): Array<any>;
    getReadyItems(): Array<any>;
    destroy(): void;
    onAfterAddingAll(fileItems: any): any;
    onBuildItemForm(fileItem: FileItem, form: any): any;
    onAfterAddingFile(fileItem: FileItem): any;
    onWhenAddingFileFailed(item: FileLikeObject, filter: any, options: any): any;
    onBeforeUploadItem(fileItem: FileItem): any;
    onProgressItem(fileItem: FileItem, progress: any): any;
    onProgressAll(progress: any): any;
    onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any;
    onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any;
    onCancelItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any;
    onCompleteItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any;
    onCompleteAll(): any;
    _acceptFilter(item: FileLikeObject): boolean;
    _mimeTypeFilter(item: FileLikeObject): boolean;
    _fileSizeFilter(item: FileLikeObject): boolean;
    _fileTypeFilter(item: FileLikeObject): boolean;
    _onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): void;
    _onCompleteItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): void;
    protected _headersGetter(parsedHeaders: ParsedResponseHeaders): any;
    getQuedFiles(): File[];
    getFormData(files?: File[]): FormData;
    protected _xhrTransport(item: FileItem): any;
    protected _getTotalProgress(value?: number): number;
    protected _getFilters(filters?: FilterFunction[] | string): FilterFunction[];
    protected _render(): any;
    protected _queueLimitFilter(): boolean;
    getFileFilterFailName(file: File | FileLikeObject): string;
    _isValidFile(file: FileLikeObject, filters: FilterFunction[], options: FileUploaderOptions): boolean;
    _isSuccessCode(status: number): boolean;
    protected _transformResponse(response: string, headers: ParsedResponseHeaders): string;
    protected _parseHeaders(headers: string): ParsedResponseHeaders;
    protected _onWhenAddingFileFailed(item: FileLikeObject, filter: any, options: any): void;
    protected _onAfterAddingFile(item: FileItem): void;
    protected _onAfterAddingAll(items: any): void;
    protected _onBeforeUploadItem(item: FileItem): void;
    protected _onBuildItemForm(item: FileItem, form: any): void;
    protected _onProgressItem(item: FileItem, progress: any): void;
    protected _onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): void;
    protected _onCancelItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): void;
    /** converts file-input file into base64 dataUri */
    dataUrl(file: any, disallowObjectUrl?: any): Promise<string>;
    applyExifRotation(file: File): Promise<any>;
}
