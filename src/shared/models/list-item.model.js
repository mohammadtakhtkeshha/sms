export default class ListItem {
    constructor(value, label, description = "", disabled = false) {
        this.value = value;
        this.label = label;
        this.description = description;
        this.disabled = disabled;
    }
}
