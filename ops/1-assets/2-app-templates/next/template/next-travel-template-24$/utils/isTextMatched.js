export default function isTextMatched(tag, match) {
    if (tag !== undefined && match !== "") {
        if (tag.toLocaleLowerCase() === match.toLocaleLowerCase()) {
            return true;
        }
        return false;
    }
    return false;
}
