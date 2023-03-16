export function dayToString(day: string) {
    let str = null
    switch (day) {
        case '0':
            str = 'Dom'
            break;
        case '1':
            str = 'Seg'
            break;
        case '2':
            str = 'Ter'
            break;
        case '3':
            str = 'Qua'
            break;
        case '4':
            str = 'Qui'
            break;
        case '5':
            str = 'Sex'
            break;
        case '6':
            str = 'Sex'
            break;
    }
    return str
}