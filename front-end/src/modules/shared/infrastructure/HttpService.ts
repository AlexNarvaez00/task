import { env } from '../../../shared/envConfig'

export abstract class HttpService {
    readonly resource: string
    abstract getPath(): string

    constructor() {
        this.resource = `${env.baseUlr}${this.getPath()}`
    }
}
