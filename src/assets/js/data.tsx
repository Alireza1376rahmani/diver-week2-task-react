// this interface is for payload types
interface payloadType {
    service: string,
    area: number,
    disinfection: string,
    locationType: string,
    haspet: string,
    date: string,
    workTime: string,
    amount: string,
    orderCode: number,
    address: string
}

// this interface is for works types
interface worksType {
    id: number,
    payload: payloadType
}

let todoWorks: worksType[] = [
    {
        id: 1,
        payload: {
            service: "نظافت منزل",
            area: 159,
            disinfection: "",
            locationType: "ویلایی",
            haspet: "دارد",
            date: "2021.8.11",
            workTime: "8-13",
            amount: "12,300,000",
            orderCode: 12567,
            address: "whole address in one String",
        }
    },
    {
        id: 2,
        payload: {
            service: "ضد عفونی منزل",
            area: 100,
            disinfection: "نوع ضدعفونی",
            locationType: "",
            haspet: "دارد",
            date: "2021.8.11",
            workTime: "8-13",
            amount: "12,300,000",
            orderCode: 12567,
            address: "whole address in one String",
        }
    }
];

export {todoWorks}



let doneWorks: worksType[] = [
    {
        id: 1,
        payload: {
            service: "نظافت منزل",
            area: 159,
            disinfection: "",
            locationType: "ویلایی",
            haspet: "دارد",
            date: "2021.8.11",
            workTime: "8-13",
            amount: "12,300,000",
            orderCode: 12567,
            address: "whole address in one String",
        }
    },
    {
        id: 2,
        payload: {
            service: "ضد عفونی منزل",
            area: 100,
            disinfection: "نوع ضدعفونی",
            locationType: "",
            haspet: "دارد",
            date: "2021.8.11",
            workTime: "8-13",
            amount: "12,300,000",
            orderCode: 12567,
            address: "whole address in one String",
        }
    }
];

export {doneWorks}



export const financeExample = {
    income: 234000,
    credit: 130000,

    transactions: [
        {
            type: "درآمد",
            value: 70000,
            date: "1400/2/23",
            paycode: "76328472346",
        },
        {
            type: "درآمد",
            value: 340000,
            date: "1400/5/5",
            paycode: "13548534384",
        },
        {
            type: "برداشت",
            value: 90000,
            date: "1400/6/21",
            paycode: "28354683549",
        },
    ],
    bankAccounts: [
        {
            id:1,
            accountNumber: "9595 3123 5846 2111",
            bank: "تجارت",
            owner: "علیرضا رحمانی",
            shaba: "20546421684518",
        },
        {
            id:2,
            accountNumber: "4671 3023 5546 2841",
            bank: "سامان",
            owner: "علیرضا رحمانی",
            shaba: "34567890987645",
        },
    ],
};
