export const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const fullDaysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const hours = {
    1: "1AM",
    2: "2AM",
    3: "3AM",
    4: "4AM",
    5: "5AM",
    6: "6AM",
    7: "7AM",
    8: "8AM",
    9: "9AM",
    10: "10AM",
    11: "11AM",
    12: "12AM",
    13: '1PM',
    14: '2PM',
    15: '3PM',
    16: '4PM',
    17: '5PM',
    18: '6PM',
    19: '7PM',
    20: '8PM',
    21: '9PM',
    22: '10PM',
    23: '11PM',
    24: '12PM',
};

export const airQuality = (no2: number) => {
    if(no2>= 0 || no2<50) return "Good"
    if(no2>=50 || no2<100) return "Fair"
    if(no2>=100 || no2<200) return "Moderate"
    if(no2>=200 || no2<400) return "Poor"
    if(no2 >= 400) return "Very Poor"
}


export const fToC = (f: number) => {
    return (f - 32) * 0.5556
}

export const cutTemp = (t: number) => {
    let res = String(t).slice(0, 2);
    let resSpl = res.split('');
    if(resSpl.some(el=>el===".")){
        return resSpl.filter(e => e!==".").join('')
    } else {
        return res
    }
}

cutTemp(20.005)