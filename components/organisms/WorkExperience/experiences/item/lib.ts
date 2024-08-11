type Information = {
    title: string,
    date: string,
    descriptions: string[]
    resume: string
}

type Image = {
    src: string,
    width: number,
    height: number
}

export interface ExperienceProps {
    information: Information
    image: Image
}

function translateDate(date: string, short: boolean) {
    const DateNames = [
        "Janeiro", 
        "Fereiro", 
        "Março", 
        "Abril",
        "Maio",
        "Junho", 
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ]
    if (date.includes("/")) {
        const [monthStr, year] = date.split("/");
        let month = DateNames[parseInt(monthStr)-1];
        if (short) month = month.slice(0,3);
    
        return `${month} ${year}`;
    } else {
        return date;
    }
}

export function resolveDate(date: string, short: boolean) {
    const [firstDate, space, lastDate] = date.split(" ");
    const first = translateDate(firstDate, short);
    const last = translateDate(lastDate, short);
    return `${first} ${space} ${last}`;
}