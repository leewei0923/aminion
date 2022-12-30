import dayjs from 'dayjs';

export function getDate() {
    return dayjs().format('YYYY-MM-DD')
}

export function getFullDate() {
    return dayjs().format('YYYY-MM-DD HH:mm')
}

export function getYear() {
    return dayjs().format('YYYY')
}

export function getMonth() {
    return dayjs().format('MM')
}

export function getDay() {
    return dayjs().format('DD')
}

