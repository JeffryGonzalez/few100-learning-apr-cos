
export class Album {
    private _artist: string;
    public title: string;

    get artist() {
        return this._artist;
    }
    set artist(name: string) {
        this._artist = name;
    }
    public getInfo() {
        return `${this.title} by ${this.artist}`
    }
}