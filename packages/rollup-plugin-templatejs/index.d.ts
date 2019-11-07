import { PrecompileOption } from '@templatejs/precompiler';
export interface Options extends PrecompileOption {
    sandbox?: boolean;
    include?: string[] | string;
    exclude?: string[] | string;
}
export default function (options?: Options): object;
