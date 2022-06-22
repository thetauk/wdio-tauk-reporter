
class TaukApi {
    private taukApiURL = "https://www.tauk.com/api/v1";
    private customApiURL?: string;
    private apiToken: string;
    private projectId: string;

    constructor(apiToken: string, projectId: string) {
        this.apiToken = apiToken;
        this.projectId = projectId;
    }

}
