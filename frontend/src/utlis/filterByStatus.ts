import {Todo} from "./Todo.type.ts";

export const filterByStatus = (list: Todo[], status: string): Todo[] => {
    const newList =  list.filter(e => {
        if (e.status === status) {
            return e;
        }
    })

    return newList;
}