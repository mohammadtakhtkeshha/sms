import jalali from "jalali-moment";

export function toJalali(value, format) {
    const offset = jalali().utcOffset();
    const momentDate = jalali.utc(value).utcOffset(offset);

    if (value && momentDate.isValid()) {
        return momentDate.locale("fa").format(format ? format : "MMMM-jD-jYYYY");
    }
}

export default { toJalali };
