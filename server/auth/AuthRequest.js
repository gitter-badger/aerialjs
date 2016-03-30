AuthRequest = class AuthRequest {
    constructor (type) {
        return {
            type: type
        };
    }

    log() {
        console.log('type of request: ' + this.type);
    }
}

export default AuthRequest;
