export class Loading {
    static idLoading = "spinner-body";
    static show() {
        let tmpElement = undefined;
        tmpElement = document.getElementById(this.idLoading);
        if (tmpElement != null){
            tmpElement.style.visibility = "visible";
        }
    }
    static hidden() {
        let tmpElement = undefined;
        tmpElement = document.getElementById(this.idLoading);
        if (tmpElement != null){
            tmpElement.style.visibility = "hidden";
        }
    }
}